import React, { useState } from 'react';
import mockupData from './data/mockupData';
import CategoryCard from './components/CategoryCard';
import {
  FaCheckCircle, FaWrench, FaExclamationTriangle,
  FaTrash, FaTools, FaBatteryEmpty, FaBolt
} from 'react-icons/fa';

const statusIcons = {
  "Normal": FaCheckCircle,
  "Spare": FaWrench,
  "Barely usable": FaExclamationTriangle,
  "Partially usable": FaExclamationTriangle,
  "Broken": FaTrash,
  "Claim Required": FaTools,
  "BMS Cut-Off": FaBatteryEmpty,
  "High MIV (>25)": FaBolt,
  "Detect 1 cell": FaBatteryEmpty,
};

const statusColors = {
  "Normal": "text-green-500",
  "Spare": "text-yellow-500",
  "Barely usable": "text-yellow-400",
  "Partially usable": "text-yellow-400",
  "Broken": "text-red-500",
  "Claim Required": "text-orange-500",
  "BMS Cut-Off": "text-purple-500",
  "High MIV (>25)": "text-purple-400",
  "Detect 1 cell": "text-purple-400",
};

const groupByCategoryAndStatus = (data) => {
  const res = {};
  data.forEach(item => {
    const cat = item.Category?.Name || 'Unknown';
    const st = item.Status;
    res[cat] = res[cat] || {};
    res[cat][st] = (res[cat][st] || 0) + item.Quantity;
  });
  return res;
};

function App() {
  
  const grouped = groupByCategoryAndStatus(mockupData);

  return (
    <div>
      <div className="min-h-screen bg-gray-100 dark:bg-black p-8  ">
        <div className='flex justify-start  p-2 '>
          <div>
          <h1 className='text-white text-xl font-medium'>Dashboard</h1>
          <h2 className='text-gray-600 gap-2 text-sm font-normal text-muted-foregroun'>Drone Summary and Equipments</h2>
          </div>
        </div>
      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4  ">
          {Object.entries(grouped).map(([name, statuses]) => (
            <CategoryCard
              key={name}
              name={name}
              statuses={statuses}
              statusIcons={statusIcons}
              statusColors={statusColors}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
