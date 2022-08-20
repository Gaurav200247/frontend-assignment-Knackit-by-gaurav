import React from "react";
import styles from "../styles/Home.module.css";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data1 = {
  labels: ["Others", "Mobile", "Desktop", "Tablet"],
  datasets: [
    {
      data: [5, 20, 20, 55],
      backgroundColor: ["#41B8D5", "#2D8BBA", "#2F5F98", "#31356E"],
      borderColor: ["#41B8D5", "#2D8BBA", "#2F5F98", "#31356E"],

      borderWidth: 1,
    },
  ],
};
export const data2 = {
  labels: ["Others", "TikTok", "Instagram", "Tablet"],
  datasets: [
    {
      data: [5, 20, 20, 55],
      backgroundColor: ["#41B8D5", "#2D8BBA", "#2F5F98", "#31356E"],
      borderColor: ["#41B8D5", "#2D8BBA", "#2F5F98", "#31356E"],

      borderWidth: 1,
    },
  ],
};

const Block_4 = () => {
  const options = {
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          padding: 20,
        },
      },
      title: {
        display: false,
      },
    },
  };

  return (
    <div className={styles.block_4}>
      <div>
        <h1 className="font-bold text-lg">Device Analytics</h1>
        <Doughnut data={data1} options={options} />
      </div>
      <div>
        <h1 className="font-bold text-lg">Sources</h1>
        <Doughnut data={data2} options={options} />
      </div>
    </div>
  );
};

export default Block_4;
