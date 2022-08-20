import React from "react";
import styles from "../styles/Home.module.css";
import { BsDot } from "react-icons/bs";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  BarElement,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  BarElement
);

const Block_2 = () => {
  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    layout: {
      padding: {
        top: 45,
      },
    },
    scales: {
      x: {
        ticks: {
          stepSize: 250,
          font: { size: 13, weight: "bolder", color: "black" },
        },
        beginAtZero: true,
        grid: {
          display: false,
          drawBorder: false,
        },
      },
      y: {
        ticks: {
          stepSize: 250,
          font: { size: 13, weight: "bolder", color: "black" },
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
      className={`${styles.block_2} flex justify-start items-center relative`}
    >
      <div className="absolute flex justify-between items-center">
        <h1 className=" font-bold">Visitors Stats</h1>

        <div>
          <span className={styles.legend1}>
            <BsDot /> Linkedin
          </span>
          <span className={styles.legend1}>
            <BsDot /> Linkedin
          </span>
          <span className={styles.legend1}>
            <BsDot /> Linkedin
          </span>
          <span className={styles.legend2}>
            <BsDot /> Search
          </span>
          <span className={styles.legend3}>
            <span className="text-gray-500 font-bold mr-2 truncate">
              Sort By:
            </span>
            <select className="font-bold">
              <option value="Monthly">Monthly</option>
              <option value="Yearly">Yearly</option>
              <option value="Weekly">Weekly</option>
            </select>
          </span>
        </div>
      </div>

      <div className={`${styles.BarChart}  bg-white rounded-xl`}>
        <Bar
          options={options}
          data={{
            labels: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ],
            datasets: [
              {
                data: [
                  750, 300, 600, 250, 750, 300, 600, 750, 600, 700, 500, 750,
                ],
                backgroundColor: (color) => {
                  // console.log(color);
                  if (color.parsed.y <= 270) {
                    return "#41B8D5";
                  }
                  if (color.parsed.y <= 500 && color.parsed.y >= 270) {
                    return "#2D8BBA";
                  }
                  if (color.parsed.y <= 700 && color.parsed.y >= 500) {
                    return "#2F5F98";
                  }
                  if (color.parsed.y >= 700) {
                    return "#31356E";
                  }
                },
              },
            ],
          }}
        />
      </div>
    </div>
  );
};

export default Block_2;
