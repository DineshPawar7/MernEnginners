import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { BsFillPlayCircleFill } from "react-icons/bs";
import Aboutimg from "../assets/aboutimg.jpg";
import Heading from "../components/ui/Heading";

const About = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <section className=" text-white py-16 px-4 md:px-32 flex flex-col md:flex-row items-center justify-between gap-9">
      <div className="relative w-full md:w-1/2 mb-10 md:mb-0">
        <div className="overflow-hidden  relative pb-[50%] h-0">
          {!isVideoPlaying ? (
            <>
              <img
                src={Aboutimg}
                alt="Team"
                className="absolute top-0 left-0 w-[100%] rounded-xl object-cover grayscale"
              />
              <button
                onClick={() => setIsVideoPlaying(true)}
                className="absolute inset-0 flex items-center justify-center text-white text-6xl hover:scale-105 transition-transform duration-300"
              >
                <BsFillPlayCircleFill className="text-white drop-shadow-lg" />
              </button>
            </>
          ) : (
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-xl"
              src="https://www.youtube.com/embed/48CNsB0aKuA?autoplay=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </div>
      </div>

      <div className="w-full md:w-1/2">
        <Heading
          level={1}
          variant="hero"
          tag="About Us"
          firstText="We are a Team of"
          secondText="Professional Freelancers"
          secondTextClassName="text-brand"
          className="text-white"
          tagClassname="text-textWhite"
        />

        <p className="text-textWhite mb-6 mt-6 font-work">
          We specialize in delivering modern, scalable web solutions tailored to
          your business goals — with a focus on clean design and efficient code.
        </p>

        <ul className="space-y-3 mb-6">
          {[
            "Specialized in MERN Stack Development",
            "Multi-Talented Team Members",
            "High Quality Services",
          ].map((item, index) => (
            <li key={index} className="flex items-center text-white font-work">
              <FaCheckCircle className="text-brand mr-2" />
              {item}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button className="bg-brand text-black px-6 py-2 rounded-full font-semibold font-work flex items-center hover:bg-lime-300 transition">
            Book a Meeting <span className="ml-2 text-xl">→</span>
          </button>
          <span className="italic text-xl font-script">Vaibhav Pawar</span>
        </div>
      </div>
    </section>
  );
};

export default About;
