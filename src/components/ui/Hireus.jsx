import React from "react";
import { FaHandsHelping } from "react-icons/fa";

const Hireus = () => {
  return (
    <div className="relative justify-center w-full hidden lgPlus:flex">
      <div className="absolute left-1/2 md:left-auto md:translate-x-[30px] -translate-x-1/2  bg-lime-400 rounded-full w-[120px] h-[120px] md:w-[150px] md:h-[150px] z-0"></div>

      <div className="relative flex items-center justify-center md:ml-[100px] w-[120px] h-[120px] md:w-[150px] md:h-[150px]">
        <div className="relative w-full h-full border-2 border-white bg-black rounded-full flex items-center justify-center overflow-hidden z-10">
          <div className="absolute left-0 top-0 w-2/4 h-full bg-gradient-to-r from-lime-400 to-transparent blur-2xl opacity-70 z-0"></div>

          <div className="w-20 h-20 md:w-28 md:h-28 bg-black rounded-full flex items-center justify-center z-10">
            <span className="text-black text-2xl md:text-3xl bg-lime-400 rounded-full p-3 md:p-4">
              <FaHandsHelping />
            </span>
          </div>

          <div className="absolute w-full h-full flex items-center justify-center z-10">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <defs>
                <path
                  id="circlePath"
                  d="M50,50 m-35,0 a35,35 0 1,1 70,0 a35,35 0 1,1 -70,0"
                />
              </defs>
              <text fill="white" fontSize="11" letterSpacing="2">
                <textPath href="#circlePath" startOffset="0">
                  <tspan>HIRE US </tspan>
                  <tspan className="fill-lime-400">•</tspan>
                  <tspan> HIRE US </tspan>
                  <tspan className="fill-lime-400">•</tspan>
                  <tspan> HIRE US </tspan>
                  <tspan className="fill-lime-400">•</tspan>
                </textPath>
              </text>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hireus;
