import React from "react";
import { GiChart } from "react-icons/gi";
import styles from "../styles/Home.module.css";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Block_1 = () => {
  const options = {
    maintainAspectRatio: false,

    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },

    scales: {
      x: {
        ticks: { display: false },
        beginAtZero: true,
        grid: {
          display: false,
          drawBorder: false,
        },
      },
      y: {
        suggestedMin: 250,
        suggestedMax: 750,
        ticks: {
          stepSize: 250,
          font: { size: 10, weight: "bolder", color: "black" },
        },
        beginAtZero: true,
        grid: {
          display: false,
          drawBorder: false,
        },
      },
    },

    tension: 0,
  };

  return (
    <div
      className={`flex flex-col justify-between items-start ${styles.block_1}`}
    >
      <h1 className="font-bold text-lg">Analytics</h1>

      <div className="flex justify-around items-center w-full">
        <div
          className="flex flex-col justify-between items-start p-6 rounded-xl"
          style={{ backgroundColor: "#5F49F4" }}
        >
          <h1 className="text-sm text-white font-bold mb-2">Realtime Users</h1>

          <div className="flex justify-between items-center w-full">
            <span className="flex flex-col justify-between items-center w-1/2">
              <h1 className="w-full text-sm text-white font-bold ml-7 mb-3">
                635
              </h1>

              <p className="w-full flex justify-start items-center text-xs text-green-300 ml-2">
                +25.5k <GiChart className="ml-3" />
              </p>
            </span>

            <span className="w-1/2">
              <img src="/lines.png" alt="lines" className="h-full w-5/6" />
            </span>
          </div>
        </div>

        <div className=" bg-white p-5 pr-0 rounded-lg">
          <Line
            data={{
              labels: [100, 200, 300, 400, 450, 500, 600, 700, 800, 900, 1000],
              datasets: [
                {
                  data: [250, 50, 500, 100, 300, 500, 500, 500, 500, 250],
                  borderColor: "#41B8D5",
                  backgroundColor: "rgba(255, 99, 132, 0.5)",
                  pointRadius: 0,
                },
              ],
            }}
            options={options}
          />
        </div>
      </div>
    </div>
  );
};

export default Block_1;
