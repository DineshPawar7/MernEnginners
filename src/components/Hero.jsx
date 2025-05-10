import React from "react";
import "../styles/Hero.css";
import Hireus from "../components/ui/Hireus";
import Team from "../assets/team.jpg";
import SparkleIcon from "../components/ui/SparkleIcon";
import HeroMove from "../components/ui/HeroMove";
import heroData from "../data/data.json";

const Hero = () => {
  return (
    <div className="hero-container">
      <section className="hero pt-[65px]">
        <div className="hero-container">
          <div className="hero-first-title">
            <div className="hero-line"></div>
            <h1>{heroData.mainTitle}</h1>
          </div>

          <div className="hero-subhead">
            <div className="text-lines">
              <h1 className="hero-heading">{heroData.heading}</h1>
              <span className="hero-heading2">{heroData.subheading}</span>
            </div>
            <Hireus />
          </div>
        </div>

        <div className="services-info-container">
          <div className="service-tags">
            <div className="flex flex-wrap">
              {heroData.serviceTagsDevelopment.map((item, index) => (
                <span key={index} className="tag tag-dev font-work">
                  {item}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap mt-1">
              {heroData.serviceTagsStrategy.map((item, index) => (
                <span key={index} className="tag tag-strategy font-work">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="vertical-separator"></div>

          <div className="service-description">
            <p>{heroData.description}</p>
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row gap-3 items-center mt-10">
          <div className="relative w-full md:w-3/9 rounded-xl overflow-visible">
            <img
              src={Team}
              alt="Team"
              className="w-full h-[400px] object-cover grayscale rounded-xl"
            />

            <div className="absolute inset-0 z-999 pointer-events-none overflow-visible">
              <div className="absolute top-[5px] -left-[50px]">
                <SparkleIcon width={40} height={40} />
              </div>

              <div className="absolute top-[35px] -left-[10px]">
                <SparkleIcon width={60} height={60} />
              </div>

              <div className="absolute top-[90px] -left-[30px]">
                <SparkleIcon width={30} height={30} />
              </div>
            </div>
          </div>

          <div className="w-full md:w-2/5 flex md:justify-end justify-center mt-6 md:mt-0">
            <div className="bg-brand text-black w-full md:w-auto rounded-xl md:rounded-xl overflow-hidden">
              {heroData.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-6 w-full md:w-80 h-[133px] text-left"
                >
                  <p className="text-sectionTitle font-work font-bold">
                    {stat.count}
                  </p>
                  <p className="text-subTitle font-work mt-1">{stat.label}</p>
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
