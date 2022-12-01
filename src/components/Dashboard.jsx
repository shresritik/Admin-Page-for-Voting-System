import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import Progress from "./Progress";

const Dashboard = () => {
  ChartJS.register(ArcElement, Tooltip, Legend);
  let votes = 15479;
  const totalVotes = 27130;
  let givenVotes = (votes * 100) / totalVotes;
  const data = {
    labels: ["Given Votes", "Total Votes"],
    datasets: [
      {
        label: "No. of Votes",
        data: [givenVotes, 100 - givenVotes],
        backgroundColor: ["rgba(39, 197, 34, 1)", "rgba(187, 247, 208, 1)"],

        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="flex px-12 py-5 flex-col m-5 shadow-lg bg-white w-[95%] h-5/6  ">
      <h1 className="text-4xl text-green-500 font-bold py-4 border-b-2 border-gray-200">
        Dashboard
      </h1>
      <div className="text-xl py-5 font-semibold">
        <h1 className="">Total Votes: {totalVotes}</h1>
        <h1 className="">Remaining Votes: {votes}</h1>
        <h1 className="">Time Started: 2025/01/03, 05:24</h1>
        <h1 className="">Time Remaining: 13 hours, 10 minutes</h1>
      </div>
      <div className="flex items-center justify-center py-7 space-x-4">
        <div className="w-1/4">
          <Doughnut data={data} />
        </div>
        <div className="w-1/3 text-lg flex flex-col justify-center items-center space-y-2 ">
          <Progress />
          <h1>Hours Left: {24 - 13} hours</h1>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
