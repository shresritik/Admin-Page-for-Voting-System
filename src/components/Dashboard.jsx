import React, { useEffect, useRef, useState } from "react";
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
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  var timeStarted =
    current.getHours() +
    ":" +
    current.getMinutes() +
    ":" +
    current.getSeconds();
  var timeRemaining =
    24 -
    Number(current.getHours()) +
    ":" +
    (60 - Number(current.getMinutes())) +
    ":" +
    (60 - Number(current.getSeconds()));
  //

  let [timer, setTimer] = useState(60);

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    return {
      total,
      hours,
      minutes,
      seconds,
    };
  };
  const startTimer = (e) => {
    let { total, hours, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      // update the timer
      // check if less than 10 then we need to
      // add '0' at the beginning of the variable
      setTimer(
        (hours > 9 ? hours : "0" + hours) +
          ":" +
          (minutes > 9 ? minutes : "0" + minutes) +
          ":" +
          (seconds > 9 ? seconds : "0" + seconds)
      );
    }
  };
  let interval;
  const today = new Date();
  const tomorrow = new Date(today);
  useEffect(() => {
    tomorrow.setDate(tomorrow.getDate() + 1);
    console.log(tomorrow);
    setInterval(() => {
      interval = startTimer(tomorrow);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex px-12 py-5 flex-col m-5 shadow-lg bg-white w-[95%] h-5/6  ">
      <h1 className="text-4xl text-green-500 font-bold py-4 border-b-2 border-gray-200">
        Dashboard
      </h1>
      <div className="text-xl py-5 font-semibold">
        <h1 className="">Total Votes: {totalVotes}</h1>
        <h1 className="">Remaining Votes: {votes}</h1>
        <h1 className="">
          Time Started: {date}, {timeStarted}
        </h1>
        <h1 className="">Time Remaining: {timer}</h1>
      </div>
      <div className="flex items-center justify-center py-7 space-x-4">
        <div className="w-1/4">
          <Doughnut data={data} />
        </div>
        <div className="w-1/3 text-lg flex flex-col justify-center items-center space-y-2 ">
          <Progress />
          <h1>Time Left: {timer}</h1>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
