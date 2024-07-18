import React, { useEffect, useState } from "react";

const Component5 = () => {
  const [data, setData] = useState(null);

  const testapi = async () => {
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
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    testapi();
  }, []);

  return (
    <>
      <div className="flex justify-center items-center">
        {/* {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>} */}
        {data ? (
          <div className="bg-white flex flex-col justify-center items-start w-80  p-4 rounded-lg shadow-2xl border  border-opacity-20 gap-3 mt-4">
            <p className="text-gray-400 text-base font-semibold">
              Community Feedback
            </p>
            <p className="text-black text-lg font-bold">Mostly Negative</p>
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
                <p className="font-semibold">{data.negative}</p>
              </div>
              <div className="flex flex-col">
                <p className="text-gray-400 text-base font-semibold">
                  Neutral
                </p>
                <p className="font-semibold">{data.neutral}</p>
              </div>
              <div className="flex flex-col">
                <p className="text-gray-400 text-base font-semibold">
                  Positive
                </p>
                <p className="font-semibold">{data.positive}</p>
              </div>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export default Component5;
