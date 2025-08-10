import React from "react";
import {
  FiUsers,
  FiBox,
  FiShoppingCart,
  FiDollarSign,
  FiArrowUp,
  FiArrowDown,
} from "react-icons/fi";
import { Sparklines, SparklinesLine } from "react-sparklines";

const DashboardHome = () => {
  const stats = [
    {
      id: 1,
      title: "Total Users",
      value: "1,234",
      icon: <FiUsers className="w-8 h-8 text-blue-600" />,
      monthlyChange: "+5.2%",
      isIncrease: true,
      chartData: [10, 12, 14, 13, 15, 18, 20, 22, 21, 24],
    },
    {
      id: 2,
      title: "Total Products",
      value: "567",
      icon: <FiBox className="w-8 h-8 text-green-600" />,
      monthlyChange: "-1.4%",
      isIncrease: false,
      chartData: [20, 19, 18, 18, 17, 16, 16, 15, 14, 13],
    },
    {
      id: 3,
      title: "Total Orders",
      value: "2,134",
      icon: <FiShoppingCart className="w-8 h-8 text-yellow-600" />,
      monthlyChange: "+10.1%",
      isIncrease: true,
      chartData: [5, 7, 9, 10, 12, 14, 15, 18, 20, 22],
    },
    {
      id: 4,
      title: "Total Revenue",
      value: "$123,456",
      icon: <FiDollarSign className="w-8 h-8 text-red-600" />,
      monthlyChange: "+3.3%",
      isIncrease: true,
      chartData: [100, 120, 115, 130, 140, 150, 155, 160, 170, 180],
    },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">Dashboard Home</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map(
          ({
            id,
            title,
            value,
            icon,
            monthlyChange,
            isIncrease,
            chartData,
          }) => (
            <div
              key={id}
              className="flex flex-col p-6 rounded-lg shadow-md bg-white"
            >
              <div className="flex items-center gap-4 mb-4">
                <div>{icon}</div>
                <h2 className="text-xl font-semibold">{title}</h2>
              </div>
              <p className="text-3xl font-bold mb-2">{value}</p>
              <div className="flex items-center gap-1 mb-6">
                {isIncrease ? (
                  <FiArrowUp className="text-green-600" />
                ) : (
                  <FiArrowDown className="text-red-600" />
                )}
                <span
                  className={`text-sm font-semibold ${
                    isIncrease ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {monthlyChange} this month
                </span>
              </div>

              {/* Graph below */}
              <div className="mt-auto">
                <Sparklines data={chartData} limit={10} width={150} height={40}>
                  <SparklinesLine
                    style={{ strokeWidth: 3, stroke: "#3b82f6", fill: "none" }}
                  />
                </Sparklines>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default DashboardHome;
