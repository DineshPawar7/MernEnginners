import React from "react";
import "../styles/Hero.css";
import Hireus from "../components/ui/Hireus";
import Team from "../assets/team.jpg";
import SparkleIcon from "../components/ui/SparkleIcon";
import HeroMove from "../components/ui/HeroMove";

const Hero = () => {
  return (
    <div className="hero-container">
      <section className="hero pt-[65px]">
        <div className="hero-container">
          <div className="hero-first-title">
            <div className="hero-line"></div>
            <h1>Your Own MERN Stack Development Agency</h1>
          </div>

          <div className="hero-subhead">
            <div className="text-lines">
              <h1 className="hero-heading">Where Your Ideas Meet</h1>
              <span className="hero-heading2">MERN Experts</span>
            </div>
            <Hireus />
          </div>
        </div>

        <div className="services-info-container">
          <div className="service-tags">
            <div className="flex flex-wrap">
              {[
                "MERN Website Development",
                "Responsive Website Development",
              ].map((item, index) => (
                <span key={index} className="tag tag-dev">
                  {item}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap mt-1">
              {[
                "API Integration & Backend Development",
                "SEO & Digital Strategy",
              ].map((item, index) => (
                <span key={index} className="tag tag-strategy">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="vertical-separator"></div>

          <div className="service-description">
            <p>
              We build modern, scalable web applications using the MERN Stack —
              delivering custom solutions that drive growth and user engagement.
            </p>
          </div>
        </div>



        <div className="w-full flex flex-col md:flex-row gap-3 items-center mt-10">
  <div className="relative w-full md:w-3/9 rounded-xl overflow-hidden">
    <img
      src={Team}
      alt="Team"
      className="w-full h-[400px] object-cover grayscale"
    />




  </div>
  <div className="absolute inset-0 z-999 pointer-events-none ">
    {/* Icon 1 */}
    <div className="absolute top-[41rem] left-[65px] transform scale-125 ">
      <SparkleIcon width={30} height={30}/>
    </div>

    {/* Icon 2 */}
    <div className="absolute top-[46rem] left-[90px] transform scale-60">
      <SparkleIcon width={25} height={25}/>
    </div>

    <div className="absolute top-[44rem] left-[140px] transform -translate-x-1/2 -translate-y-1/2 scale-[1.8]">
      <SparkleIcon width={35} height={35}/>
    </div>
  </div>

  <div className="w-full md:w-2/5 flex md:justify-end justify-center mt-6 md:mt-0">
  <div className="bg-lime-400 text-black w-full md:w-auto rounded-xl md:rounded-xl overflow-hidden">
    {[
      { count: "850+", label: "Projects Completed" },
      { count: "18+", label: "Years of Experience" },
      { count: "500+", label: "Happy Customers" }
    ].map((stat, idx) => (
      <div key={idx} className="p-6 w-full md:w-80 h-[133px] text-left">
        <p className="text-3xl font-bold">{stat.count}</p>
        <p className="text-xl mt-1">{stat.label}</p>
      </div>
    ))}
  </div>
</div>


</div>





         



      </section>

      <div className="heromove">
        <HeroMove />
      </div>
    </div>
  );
};

export default Hero;
