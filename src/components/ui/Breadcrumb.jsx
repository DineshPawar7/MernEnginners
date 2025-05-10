import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import HeroMove from "./HeroMove";

const Breadcrumb = ({ path = [], heading = "" }) => {
  return (
    <>
      <div className="bg-black h-[200px] w-full flex flex-col justify-center items-center text-white text-sm px-4">
        {heading && (
          <h2 className="text-sectionTitle font-bold mb-6 capitalize text-center">
            {heading}
          </h2>
        )}

        <div className="flex items-center space-x-1 text-base">
          {path.map((item, index) => (
            <div key={index} className="flex items-center">
              <Link
                to={item.href}
                className="capitalize hover:underline hover:text-brand transition"
              >
                {item.label}
              </Link>
              {index < path.length - 1 && (
                <IoIosArrowForward className="text-gray-400 mx-2 text-base" />
              )}
            </div>
          ))}
        </div>
      </div>

      <HeroMove />
    </>
  );
};

export default Breadcrumb;
