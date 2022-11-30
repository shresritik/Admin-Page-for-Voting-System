import React from "react";

const Dashboard = () => {
  return (
    <div className="flex p-5 flex-col mx-auto justify-center items-center">
      <h1 className="text-4xl text-green-500 font-bold py-6 ">Dashboard</h1>
      <div className="text-2xl text-center">
        <h1 className="">Total Votes: 27,130</h1>
        <h1 className="">Remaining Votes: 15,479</h1>
        <h1 className="">Time Started: 2025/01/03, 05:24</h1>
        <h1 className="">Time Remaining: 13 hours, 10 minutes</h1>
      </div>
    </div>
  );
};

export default Dashboard;
