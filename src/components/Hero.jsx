import React from "react";
import Team from "../assets/team.jpg";
import HireUs from "../components/ui/Hireus";

export default function Hero() {
  return (
    <section className="bg-black text-white px-4 md:px-20 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Tagline */}
        <div className="flex flex-col md:flex-row items-center md:items-start">
          {/* Heading and HireUs */}
          <div className="flex flex-col md:flex-row items-center md:items-start">
            {/* Innovation heading */}
            <div className="flex flex-col items-center md:items-start mb-4 gap-4 md:mb-0">
              <div className="flex items-center">
                <div className="h-[3px] w-5 bg-[#b9fd50] mr-2"></div>
                <span className="text-2xl">Award Winning Digital Agency</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold leading-none text-center md:text-left mb-5">
                Where Innovation Meets <br />
                <span className="text-lime-400">Digital Excellence</span>
              </h1>
            </div>

            {/* Hire Us on the right */}
            <div className="md:ml-8 mt-4 md:mt-0 flex justify-center items-center">
              <HireUs />
            </div>
          </div>
        </div>

        {/* Services and Info Section */}
        <div className="mt-10 flex flex-col md:flex-row justify-between gap-6 items-center md:items-start h-full">
          {/* Service Tags */}
          <div className="space-y-4 ">
            <div className="flex flex-wrap gap-2">
              {["Mobile Application Development", "Website Development"].map(
                (item, index) => (
                  <span
                    key={index}
                    className="bg-zinc-900 text-[18px] px-4 py-2 rounded-full border-l border-r border-white"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {["UX/UI Design", "Graphic Design", "Digital Marketing"].map(
                (item, index) => (
                  <span
                    key={index}
                    className="bg-zinc-900 text-[18px] px-4 py-2 rounded-full border-l border-r border-white"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Vertical Line */}
          <div className="hidden md:block w-[2px] h-[100px] bg-gradient-to-t from-lime-400 via-lime-400/70 to-transparent mx-4"></div>

          {/* Text Content */}
          <div className="w-full md:w-[500px]">
            <p className="text-gray-300 text-xl">
              We specialize in crafting innovative digital solutions that drive
              business growth and enhance user experiences. Our team is
              dedicated to delivering excellence in every project.
            </p>
          </div>
        </div>

        {/* Team Image and Stats */}
        <div className="w-full  md:grid-cols-1 gap-8 flex items-center mt-10">
          <div className=" relative rounded-xl overflow-hidden">
            <img
              src={Team}
              alt="Team"
              className=" h-[350px] object-cover grayscale"
            />
           <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-lime-400 text-black px-4 py-6 rounded-xl flex items-center gap-2 shadow-md">
      <div className="flex -space-x-2">
        <img
          src={Team}
          alt="Team Icon"
          className="w-6 h-6 rounded-full object-cover"
        />
      </div>
      <span className="text-sm font-semibold">4.9 Star Reviews</span>
    </div>
          </div>

          {/* Stats */}
          <div className="flex flex-col items-end gap-4">
  <div className="rounded-xl overflow-hidden bg-lime-400 text-black">
    {[ 
      { count: "850+", label: "Projects Completed" },
      { count: "18+", label: "Years of Experience" },
      { count: "500+", label: "Happy Customers" }
    ].map((stat, idx) => (
      <div key={idx} className="p-6 w-60">
        <p className="text-3xl font-bold">{stat.count}</p>
        <p className="text-xl mt-1">{stat.label}</p>
      </div>
    ))}
  </div>
</div>


            
          </div>

        {/* Bottom Banner */}
        <div className="mt-12 bg-lime-400 text-black p-4 rounded-xl flex flex-wrap justify-around gap-4 text-sm font-semibold">
          <span>Website Design</span>
          <span>UX/UI Design</span>
          <span>Graphics Design</span>
          <span>Digital Marketing</span>
        </div>
      </div>
    </section>
  );
}
