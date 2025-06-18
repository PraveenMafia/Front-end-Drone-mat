import React from "react";

const CategoryCard = ({ name, statuses, statusIcons, statusColors }) => (
  <div className=" dark:bg-black bg-[url('/src/assets/bg-background.png')] rounded-lg shadow p-6 transition hover:shadow-lg  cursor-pointer hover:border-2 hover:border-indigo-500 border border-gray-600 bg-cover rtl:bg-[left_top_-1.7rem] bg-[right_top_-1.7rem] bg-no-repeat">
    <h2 className="text-xl font-bold mb-4 text-white">
      {name}
    </h2>
    <ul className="space-y-2">
      {Object.entries(statuses).map(([status, qty]) => {
        const Icon = statusIcons[status] || (() => <span>•</span>);
        const color = statusColors[status] || "text-gray-500";
        return (
          <li key={status} className="flex items-center">
            <Icon className={`mr-2 ${color}`} />
            <span className="text-gray-300">{status}</span>
            <span className="ml-auto font-bold text-gray-900 dark:text-white">
              {qty}
            </span>
          </li>
        );
      })}
    </ul>
  </div>
);

export default CategoryCard;
