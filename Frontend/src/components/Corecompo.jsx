import React, { useState, useEffect } from "react";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
// defaults.maintainAspectRatio =false;
defaults.responsive = true;

const Corecompo = () => {
  //Component1
  const [data, setData] = useState(null);
  const testapi = async () => {
    const authHeader = "Basic " + btoa("trial" + ":" + "assignment123");
    const response = await fetch(
      "http://ec2-3-83-254-115.compute-1.amazonaws.com:8020/api/v1/sample_assignment_api_1/",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: authHeader,
        },
      }
    );
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    testapi();
  }, []);

  //Component2
  const [data2, setData2] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8081/dbTwo");
        const result = await response.json();
        setData2(result);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  //Component6
  const [data6, setData6] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8081/dbSix");
        const result = await response.json();
        setData6(result);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  //Component3
  const [data3, setData3] = useState(null);

  const testapi3 = async () => {
    const authHeader = "Basic " + btoa("trial" + ":" + "assignment123");
    const response = await fetch(
      "http://ec2-3-83-254-115.compute-1.amazonaws.com:8020/api/v1/sample_assignment_api_3/",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: authHeader,
        },
      }
    );
    const data3 = await response.json();
    setData3(data3);
  };

  useEffect(() => {
    testapi3();
  }, []);

  //Component4
  const [data4, setData4] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8081/database_csv");
        const result = await response.json();
        setData4(result);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  //Component5
  const [data5, setData5] = useState(null);

  const testapi5 = async () => {
    const authHeader = "Basic " + btoa("trial" + ":" + "assignment123");
    const response = await fetch(
      "http://ec2-3-83-254-115.compute-1.amazonaws.com:8020/api/v1/sample_assignment_api_5/",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: authHeader,
        },
      }
    );
    const data5 = await response.json();
    setData5(data5);
  };

  useEffect(() => {
    testapi5();
  }, []);

  return (
    <>
      <div className="flex flex-col p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex flex-col w-full lg:w-2/3 gap-8">
            {/* left column */}
            <div className="flex flex-col w-full lg:w-2/3 gap-8">
              {/* Component 1*/}
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h2 className="font-extrabold text-2xl sm:text-3xl text-gray-800 mb-6 text-center">
                  Dashboard
                </h2>
                {data ? (
                  <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
                    {/* ... (rest of Component1 code) ... */}
                    <div className="w-full sm:w-1/3 flex flex-col items-center border-2 border-gray-200 p-4 sm:p-6 rounded-lg hover:shadow-md transition duration-300 mb-6 sm:mb-0">
                      <p className="font-bold text-gray-600 mb-2 sm:mb-3">
                        Purchases
                      </p>
                      <p className="text-xl sm:text-2xl text-blue-600">
                        {data.purchases}
                      </p>
                    </div>
                    <div className="w-full sm:w-1/3 flex flex-col items-center border-2 border-gray-200 p-4 sm:p-6 rounded-lg hover:shadow-md transition duration-300 mb-6 sm:mb-0">
                      <p className="font-bold text-gray-600 mb-2 sm:mb-3">
                        Revenue
                      </p>
                      <p className="text-xl sm:text-2xl text-green-600">
                        {data.revenue}
                      </p>
                    </div>
                    <div className="w-full sm:w-1/3 flex flex-col items-center border-2 border-gray-200 p-4 sm:p-6 rounded-lg hover:shadow-md transition duration-300">
                      <p className="font-bold text-gray-600 mb-2 sm:mb-3">
                        Refunds
                      </p>
                      <p className="text-xl sm:text-2xl text-red-600">
                        {data.refunds}
                      </p>
                    </div>
                  </div>
                ) : (
                  <p className="text-gray-500 text-center text-lg">
                    Loading...
                  </p>
                )}
              </div>
              {/* Component 2*/}
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-2xl border border-opacity-20">
                <div className="w-full h-[300px] sm:h-[400px]">
                  <Bar
                    data={{
                      labels: data2.map((data2) => data2.Month),
                      datasets: [
                        {
                          label: "Last Year",
                          data: data2.map((data2) => data2.Last_year),
                          backgroundColor: "rgba(53, 162, 235, 0.5)",
                        },
                        {
                          label: "This Year",
                          data: data2.map((data2) => data2.This_year),
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
              {/* Component 6*/}
              <div className="overflow-x-auto bg-white rounded-lg shadow-md">
                <table className="min-w-full divide-y divide-gray-200">
                  {/* ... (table content) ... */}
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-1 sm:px-4 py-1 sm:py-3 text-left text-2xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                        Product
                      </th>
                      <th className="px-1 sm:px-4 py-1 sm:py-3 text-left text-2xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                        Sold
                      </th>
                      <th className="px-1 sm:px-4 py-1 sm:py-3 text-left text-2xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                        Price
                      </th>
                      <th className="px-1 sm:px-4 py-1 sm:py-3 text-left text-2xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                        Revenue
                      </th>
                      <th className="px-1 sm:px-4 py-1 sm:py-3 text-left text-2xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                        Rating
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {data6.map((d, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-1 sm:px-4 py-1 sm:py-3 whitespace-nowrap text-2xs sm:text-sm font-medium text-gray-900">
                          {d.Product}
                        </td>
                        <td className="px-1 sm:px-4 py-1 sm:py-3 whitespace-nowrap text-2xs sm:text-sm text-gray-500">
                          {d.sold_amount}
                        </td>
                        <td className="px-1 sm:px-4 py-1 sm:py-3 whitespace-nowrap text-2xs sm:text-sm text-gray-500">
                          ${d.unit_price}
                        </td>
                        <td className="px-1 sm:px-4 py-1 sm:py-3 whitespace-nowrap text-2xs sm:text-sm text-gray-500">
                          ${d.revenue}
                        </td>
                        <td className="px-1 sm:px-4 py-1 sm:py-3 whitespace-nowrap text-2xs sm:text-sm text-gray-500">
                          ⭐ {d.rating}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/*right column below */}
          <div className="flex flex-col w-full lg:w-1/3 gap-8">
            {/* Component 3 below*/}
            <div className="bg-white  p-6 rounded-xl  shadow-2xl border  border-opacity-20">
              {data3 ? (
                <div className="flex flex-col gap-2">
                  {/* ... (Component3 content) ... */}
                  <p className="font-extrabold text-2xl sm:text-3xl text-gray-800 mb-6  text-left">
                    {data3.score}%
                  </p>
                  <p className="font-bold text-xl">{data3.title}</p>
                  <p className="text-base font-semibold">{data3.message}</p>
                  <button className="bg-amber-400 p-2 rounded-md text-base font-bold">
                    Improve more
                  </button>
                </div>
              ) : (
                <p className="text-base font-bold">Loading...</p>
              )}
            </div>
            {/* Component 4 below*/}
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-2xl border border-opacity-20">
              <div className="w-full h-[300px] sm:h-[400px]">
                <Line
                  data={{
                    labels: data4.map((data4) => data4.date),
                    datasets: [
                      {
                        label: "Web Sales",
                        data: data4.map((data4) => data4.web_sales),
                        tension: 1,
                        borderColor: "rgba(75, 192, 192, 1)",
                        backgroundColor: "rgba(75, 192, 192, 0.2)",
                      },
                      {
                        label: "Offline Sales",
                        data: data4.map((data4) => data4.offline_sales),
                        tension: 0.4,
                        borderColor: "rgba(255, 99, 132, 1)",
                        backgroundColor: "rgba(255, 99, 132, 0.2)",
                      },
                    ],
                  }}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: {
                        position: "top",
                      },
                    },
                    scales: {
                      x: {
                        display: false, // Hide x-axis labels
                        grid: {
                          display: false, // Hide x-axis grid lines
                        },
                      },
                      y: {
                        beginAtZero: true,
                        grid: {
                          color: "rgba(0, 0, 0, 0.1)", // Lighten the y-axis grid lines
                        },
                      },
                    },
                  }}
                />
              </div>
            </div>
            {/* Component 5 below*/}
            <div className="bg-white p-4 rounded-lg shadow-2xl border border-opacity-20">
              {data5 ? (
                <div className="flex flex-col gap-3">
                  {/* ... (Component5 content below) ... */}
                  <p className="text-gray-400 text-base font-semibold">
                    Community Feedback
                  </p>
                  <p className="text-black text-lg font-bold">
                    Mostly Negative
                  </p>
                  <div className="flex gap-1">
                    <div className="bg-red-300 h-1 rounded-lg w-28"></div>
                    <div className="bg-yellow-300 h-1 rounded-lg w-20 "></div>
                    <div className="bg-blue-300 h-1 rounded-lg w-20"></div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex flex-col">
                      <p className="text-gray-400 text-base font-semibold">
                        Negative
                      </p>
                      <p className="font-semibold">{data5.negative}</p>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-gray-400 text-base font-semibold">
                        Neutral
                      </p>
                      <p className="font-semibold">{data5.neutral}</p>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-gray-400 text-base font-semibold">
                        Positive
                      </p>
                      <p className="font-semibold">{data5.positive}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <p>Loading...</p>
              )}
            </div>
            {/* endd fr*/}
          </div>
        </div>
      </div>
    </>
  );
};

export default Corecompo;
