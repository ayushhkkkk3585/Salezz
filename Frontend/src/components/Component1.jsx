import React, { useEffect, useState } from "react";

const Component1 = () => {
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

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
      <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">
        <h2 className="font-extrabold text-2xl sm:text-3xl text-gray-800 mb-6 sm:mb-8 text-center">
          Dashboard
        </h2>
        {data ? (
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-8">
            <div className="w-full sm:w-1/3 flex flex-col items-center border-2 border-gray-200 p-4 sm:p-6 rounded-lg hover:shadow-md transition duration-300 mb-6 sm:mb-0">
              <p className="font-bold text-gray-600 mb-2 sm:mb-3">Purchases</p>
              <p className="text-xl sm:text-2xl text-blue-600">
                {data.purchases}
              </p>
            </div>
            <div className="w-full sm:w-1/3 flex flex-col items-center border-2 border-gray-200 p-4 sm:p-6 rounded-lg hover:shadow-md transition duration-300 mb-6 sm:mb-0">
              <p className="font-bold text-gray-600 mb-2 sm:mb-3">Revenue</p>
              <p className="text-xl sm:text-2xl text-green-600">
                {data.revenue}
              </p>
            </div>
            <div className="w-full sm:w-1/3 flex flex-col items-center border-2 border-gray-200 p-4 sm:p-6 rounded-lg hover:shadow-md transition duration-300">
              <p className="font-bold text-gray-600 mb-2 sm:mb-3">Refunds</p>
              <p className="text-xl sm:text-2xl text-red-600">{data.refunds}</p>
            </div>
          </div>
        ) : (
          <p className="text-gray-500 text-center text-lg sm:text-xl">
            Loading...
          </p>
        )}
      </div>
    </div>
  );
};

export default Component1;
