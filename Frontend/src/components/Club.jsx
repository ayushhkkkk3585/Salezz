import React, { useState, useEffect } from "react";
import Datas from "./Datas";
import Component3 from "./Component3";
import Component5 from "./Component5";
import Component1 from "./Component1";
import Component2 from "./Component2";
import Component6 from "./Component6";
Component6;

const Club = () => {
  return (
    <>
      <div className="mt-4 flex flex-col md:flex-row gap-4">
        <div className="flex flex-col w-full md:w-1/2 gap-4">
          <Component1 />
          <Component2 />
          <Component6 />
        </div>
        <div className="flex flex-col w-full md:w-1/2 gap-4">
          <Component3 />
          <Datas />
          <Component5 />
        </div>
      </div>
    </>
  );
};

export default Club;
