import React from 'react';
import TeamPhoto from '../assets/hero-team.jpg';

export default function Hero() {
  return (
    <section className="bg-black text-white px-4 md:px-20 py-10">
      <div className="max-w-7xl mx-auto">
      <div className="flex items-center gap-2 text-sm text-white font-medium mb-4">
  <div className="h-[3px] w-5 bg-[#b9fd50]"></div>
  <span className='text-2xl'>Award Winning Digital Agency</span>
</div>

        <h1 className="text-8xl md:text-7xl font-bold mb-2 leading-tight">
          Where Innovation Meets <br />
          <span className="text-lime-400">Digital Excellence</span>
        </h1>

        <div className="mt-10 flex justify-between gap-6 items-start">
  {/* Left Side: Service Tags */}
  <div className="space-y-2 w-2/3">
    <div className="flex flex-wrap gap-1">
      {[
        'Mobile Application Development',
        'Website Development',
      ].map((item, index) => (
        <span
          key={index}
          className="bg-zinc-900 text-[25px] px-4 py-2 rounded-full border-l border-r border-white"
        >
          {item}
        </span>
      ))}
    </div>
    <div className="flex flex-wrap gap-1">
      {[
        'UX/UI Design',
        'Graphic Design',
        'Digital Marketing',
      ].map((item, index) => (
        <span
          key={index}
          className="bg-zinc-900 text-[25px] px-4 py-2 rounded-full border-l border-r border-white"
        >
          {item}
        </span>
      ))}
    </div>
  </div>

  {/* Right Side: Text Content */}
  <div className="w-[500px]">
    <p className="text-gray-300 text-2xl">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </div>
</div>





<div className="grid md:grid-cols-2 gap-8 items-center mt-10">
  <div className="space-y-4">
  <div className="relative rounded-xl overflow-hidden">
  <img
    src={TeamPhoto}
    alt="Team"
    className="w-[110%] grayscale object-cover" 
  />
  <div className="absolute bottom-4 left-4 bg-lime-400 text-black px-4 py-2 rounded-full flex items-center gap-2 shadow-md">
    <div className="flex -space-x-2">
      <img
        src={TeamPhoto}
        alt="Team Icon"
        className="w-6 h-6 rounded-full object-cover"
      />
    </div>
    <span className="text-sm font-semibold">4.9 Star Reviews</span>
  </div>
</div>

  </div>

  <div className="flex flex-col gap-4 items-start">
    {[
      { count: '850+', label: 'Projects Completed' },
      { count: '18+', label: 'Years of Experience' },
      { count: '500+', label: 'Happy Customers' },
    ].map((stat, idx) => (
      <div
        key={idx}
        className="bg-lime-400 text-black text-center rounded-xl p-6 w-60"
      >
        <p className="text-2xl font-bold">{stat.count}</p>
        <p className="text-sm mt-1">{stat.label}</p>
      </div>
    ))}
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
