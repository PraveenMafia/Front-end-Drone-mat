import React from 'react';

const DashboardCard = ({ title, value, icon: Icon, color = 'text-blue-500' }) => {
  return (
    <div className="flex items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md transition hover:scale-[1.02] duration-200">
      <div className={`text-4xl ${color} mr-4`}>
        <Icon />
      </div>
      <div>
        <h3 className="text-sm text-gray-500 dark:text-gray-400">{title}</h3>
        <p className="text-xl font-bold text-gray-900 dark:text-white">{value}</p>
      </div>
    </div>
  );
};

export default DashboardCard;
