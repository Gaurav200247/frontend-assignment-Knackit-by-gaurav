import React from "react";
import styles from "../styles/Home.module.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { BsDot } from "react-icons/bs";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  indexAxis: "y",
  responsive: true,
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
      grace: "5%",
      grid: {
        display: false,
        drawBorder: false,
      },
      ticks: {
        stepSize: 0.1,
        font: { size: 10, weight: "bolder", color: "black" },
        format: {
          style: "percent",
        },
      },
      y: {
        grace: "5%",
        ticks: {
          font: { size: 15, weight: "bolder", color: "black" },
        },
        grid: {
          display: false,
          drawBorder: false,
        },
      },
    },
  },
};

const labels = ["France", "Italy", "Italy", "Italy"];

export const data = {
  labels,
  datasets: [
    {
      data: [0.8, 0.3, 0.7, 0.55],
      backgroundColor: (color) => {
        if (color.parsed.x <= 0.3) {
          return "#41B8D5";
        }
        if (color.parsed.x <= 0.55 && color.parsed.x >= 0.3) {
          return "#2D8BBA";
        }
        if (color.parsed.x <= 0.7 && color.parsed.x >= 0.55) {
          return "#2F5F98";
        }
        if (color.parsed.x >= 0.7) {
          return "#31356E";
        }
      },
    },
  ],
};

const Block_3 = () => {
  return (
    <div className={styles.block_3}>
      <div>
        {" "}
        <h1 className="font-bold text-lg">Location Stats</h1>
        <div>
          <span className={styles.legend1}>
            <BsDot /> +10
          </span>

          <span className={styles.legend1}>
            <BsDot /> +100
          </span>

          <span className={styles.legend1}>
            <BsDot /> +1000
          </span>
        </div>
      </div>

      <div>
        <div>
          <Bar options={options} data={data} />
        </div>
        <div>
          <img src="/map.png" alt="map" />
        </div>
      </div>
    </div>
  );
};

export default Block_3;
