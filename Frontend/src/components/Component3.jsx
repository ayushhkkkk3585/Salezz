import React, { useEffect, useState } from "react";

const Component3 = () => {
  const [data, setData] = useState(null);

  const testapi = async () => {
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
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    testapi();
  }, []);

  return (
    <>
      <div className="flex justify-center items-center  ">
        {/* {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>} */}
        {data ? (
          <div className=" bg-white flex flex-col justify-center items-start w-80  p-4 rounded-lg shadow-2xl border  border-opacity-20 gap-3 mt-4">
            <p className="font-extrabold text-xl text-left">{data.score}%</p>
            <p className="font-bold text-lg">{data.title}</p>
            <p className="text-sm font-semibold">{data.message}</p>
            <button className="bg-amber-400 p-2 rounded-md text-base font-bold">Improve more</button>
          </div>
        ) : (
          <p className="text-base font-bold mt-5">Loading...</p>
        )}
      </div>
      <div></div>
      <div></div>
    </>
  );
};

export default Component3;
