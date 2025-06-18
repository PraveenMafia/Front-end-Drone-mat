import React from "react";

const DashboardCard = ({
  title,
  value,
  icon: Icon,
  color = "text-blue-500",
}) => {
  return (
    <div className="flex items-center gap-4 p-6  bg-gray-800/70 backdrop-blur-md border  border-gray-700 rounded-2xl shadow-lg transition hover:scale-[1.03] hover:shadow-xl duration-300 ease-in-out bg-cover rtl:bg-[left_top_-1.7rem] bg-[right_top_-1.7rem] bg-no-repeat  ">
      <div className={`text-4xl ${color} mr-4`}>
        <Icon />
      </div>
      <div>
        <h3 className="text-sm text-gray-500 dark:text-gray-400">{title}</h3>
        <p className="text-xl font-bold  text-white">
          {value}
        </p>
      </div>
    </div>
  );
};

export default DashboardCard;
