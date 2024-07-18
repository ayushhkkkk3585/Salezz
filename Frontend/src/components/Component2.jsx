import React, { useState, useEffect } from "react";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
// defaults.maintainAspectRatio =false;
defaults.responsive = true;

const Component2 = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8081/dbTwo");
        const result = await response.json();
        setData(result);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="flex justify-center w-full p-4 sm:p-6 lg:p-8">
        <div className="bg-white flex flex-col justify-center items-center w-full max-w-4xl p-4 sm:p-6 rounded-lg shadow-2xl border border-opacity-20 gap-3 my-4 mx-2 sm:mx-4">
          <div className="w-full h-[300px] sm:h-[400px] lg:h-[500px]">
            <Bar
              data={{
                labels: data.map((data) => data.Month),
                datasets: [
                  {
                    label: "Last Year",
                    data: data.map((data) => data.Last_year),
                    backgroundColor: "rgba(53, 162, 235, 0.5)",
                  },
                  {
                    label: "This Year",
                    data: data.map((data) => data.This_year),
                    backgroundColor: "rgba(255, 99, 132, 0.5)",
                  },
                ],
              }}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                  y: {
                    beginAtZero: true,
                    max: 30000,
                    ticks: {
                      stepSize: 5000,
                      callback: function (value) {
                        return value / 1000 + "K";
                      },
                    },
                  },
                },
                plugins: {
                  legend: {
                    position: "top",
                  },
                  title: {
                    display: true,
                    text: "Monthly Comparison",
                    font: {
                      size: 16,
                      weight: "bold",
                    },
                  },
                },
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Component2;
