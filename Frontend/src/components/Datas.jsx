import React, { useState, useEffect } from "react";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
// defaults.maintainAspectRatio =false;
defaults.responsive =true;


const Datas = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8081/database_csv");
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
      {/* <Bar
        data={{
          labels: ["a", "b", "c"],
          datasets: [
            {
              label: "Revenue",
              data: [4000, 8000],
            },
          ],
        }}
      /> */}
      <div className="flex justify-center ">
      <div className="bg-white flex flex-col justify-center items-center w-80  p-4 rounded-lg shadow-2xl border  border-opacity-20 gap-3 mt-4">

      <Line
        data={{
          labels: data.map((data) => data.date),
          datasets: [
            {
              label: "Web Sales",
              data: data.map((data) => data.web_sales),
              tension:1,
            },
            {
              label: "Offline Sales",
              data: data.map((data) => data.offline_sales),
              tension:0.4,
            },
          ],
        }}
        options={{
          responsive:true,
            scales: {
              x: {
                display: false, // Hide x-axis labels
              },
            },
          
        }}
      />
      </div>
      </div>
      {/* <Doughnut 
      data={{
        labels: ["a", "b", "c"],
        datasets: [
          {
            label: "Revenue",
            data: [4000, 8000],
          },
        ],
      }}
      
      /> */}
      {/* <RangeSlider
        className="single-thumb"
        defaultValue={[0, 50]}
        thumbsDisabled={[true, false]}
        rangeSlideDisabled={true}
      /> */}
      {/* <div>
        {data.map((d, index) => (
          <div key={index}>
            <p>{d.date}</p>
            <p>{d.web_sales}</p>
            <p>{d.offline_sales}</p>
          </div>
        ))}
      </div> */}

 
    </>
  );
};

export default Datas;
