import React from 'react';

const CategoryCard = ({ name, statuses, statusIcons, statusColors }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 transition hover:shadow-lg">
    <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">{name}</h2>
    <ul className="space-y-2">
      {Object.entries(statuses).map(([status, qty]) => {
        const Icon = statusIcons[status] || (() => <span>•</span>);
        const color = statusColors[status] || 'text-gray-500';
        return (
          <li key={status} className="flex items-center">
            <Icon className={`mr-2 ${color}`} />
            <span className="text-gray-700 dark:text-gray-300">{status}</span>
            <span className="ml-auto font-bold text-gray-900 dark:text-white">{qty}</span>
          </li>
        );
      })}
    </ul>
  </div>
);

export default CategoryCard;
