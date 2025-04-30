import React from "react";
import { FaHandsHelping } from "react-icons/fa";

const Hireus = () => {
  return (
    <div className="flex items-center justify-end relative">
      {/* Left side circle: transparent and dark green */}
      <div className="absolute bg-lime-400 rounded-full w-[150px] h-[150px] translate-x-[30px] z-0"></div>

      {/* Right side: Circle with rotating "HIRE US" text */}
      <div className="relative flex items-center justify-center ml-[200px]"> {/* Increased margin on the right side */}
        {/* Outer circle with white border */}
        <div className="relative w-[150px] h-[150px] border-2 border-white bg-black rounded-full flex items-center justify-center overflow-hidden z-10">
          
          {/* Green Smoke Effect on the Left Side */}
          <div className="absolute left-0 top-0 w-2/4 h-full bg-gradient-to-r from-lime-400 to-transparent blur-3xl opacity-70 z-1000"></div>

          {/* Inner black circle with icon */}
          <div className="w-28 h-28 bg-black rounded-full flex items-center justify-center z-10">
            <span className="text-black text-3xl bg-lime-400 rounded-full p-4">
              <FaHandsHelping />
            </span>
          </div>

          {/* SVG rotating text */}
          <div className="absolute w-full h-full flex items-center justify-center z-10">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <defs>
                <path
                  id="circlePath"
                  d="M50,50 m-35,0 a35,35 0 1,1 70,0 a35,35 0 1,1 -70,0"
                />
              </defs>
              <text fill="white" fontSize="14" letterSpacing="2">
                <textPath href="#circlePath" startOffset="0">
                  <tspan fill="white">HIRE US </tspan>
                  <tspan className="fill-lime-400">•</tspan>
                  <tspan fill="white"> HIRE US </tspan>
                  <tspan className="fill-lime-400">•</tspan>
                  <tspan fill="white"> HIRE US </tspan>
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
