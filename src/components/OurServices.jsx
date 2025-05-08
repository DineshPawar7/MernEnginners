import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import teamImage from "../assets/team.jpg";
import services from "../data/servicesData.json";
import Heading from "../components/ui/Heading";

export default function OurServices() {
  const [active, setActive] = useState(null);
  const [hasReached, setHasReached] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const element = document.getElementById("services");
      if (element && !hasReached) {
        const top = element.getBoundingClientRect().top;
        if (top < window.innerHeight * 0.8) {
          setHasReached(true);
        }
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [hasReached]);

  return (
    <section
      id="services"
      className="px-4 sm:px-6 md:px-16 lg:px-32 py-12 md:py-16 lg:py-20 space-y-10 md:space-y-12 bg-white"
    >
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 lg:gap-12 mb-10 md:mb-16">
        <div className="flex-shrink-0">
        

        <Heading
            level={1}
            variant="hero"
            tag="Our Services"
            firstText="Discover Our"
            secondText="Digital Solutions"
          />

        </div>

        <div className="flex items-start space-x-4 lg:w-2/5 lg:pt-11">
          <div className="vertical-separator hidden lg:block h-16 w-[2px] bg-brand flex-shrink-0"></div>
          <p className="text-base font-textWhite md:text-subTitle font-work text-textGray leading-relaxed">
            We deliver web solutions that empower businesses, specializing in
            powerful apps, seamless integrations, and scalable platforms.
          </p>
        </div>
      </div>

      <div className="space-y-6 md:space-y-8">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: hasReached ? 1 : 0, y: hasReached ? 0 : 50 }}
            transition={{ delay: hasReached ? index * 0.15 : 0, duration: 0.5 }}
            className="bg-cardbg rounded-2xl lg:rounded-3xl p-6 md:p-8 lg:p-10 border border-border card-hover"
          >
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 md:gap-6">
              <div className="flex-1">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-medium mb-3 md:mb-4 text-grayHeading font-work flex items-baseline">
                  <span className="text-primary font-bold text-lg sm:text-xl md:text-2xl mr-2">
                    {service.id < 10 ? `0${service.id}` : service.id}.
                  </span>
                  <span>{service.title}</span>
                </h2>
                <div className="flex flex-wrap gap-2 mb-4 lg:mb-0">
                  {service.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-white text-textGray py-1 px-3 rounded-full text-xs sm:text-sm border font-work border-gray-300 whitespace-nowrap"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() =>
                  setActive((prev) => (prev === service.id ? null : service.id))
                }
                className="text-black sm:px-6 sm:py-2.5 flex items-center gap-2 transition-all duration-300 group flex-shrink-0 self-start lg:self-center"
              >
                <span className="text-sm sm:text-base font-medium rounded-full bg-brand font-work px-5 py-2 bg-primary">
                  Learn More
                </span>
                <motion.span
                  animate={{ rotate: active === service.id ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-5 h-5 sm:w-6 sm:h-6 bg-black text-white flex items-center justify-center rounded-full text-sm group-hover:scale-110 transition-transform duration-300"
                >
                  <FaArrowRight />
                </motion.span>
              </button>
            </div>

            <AnimatePresence>
              {active === service.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0, marginTop: 0 }}
                  animate={{ height: "auto", opacity: 1, marginTop: "1.5rem" }}
                  exit={{ height: 0, opacity: 0, marginTop: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="flex flex-col lg:flex-row gap-6 items-start pt-2">
                    <p className="text-textGray text-sm sm:text-baseText font-work leading-relaxed lg:w-3/5 xl:w-2/3 lg:pr-6">
                      {service.content}
                    </p>
                    <img
                      src={teamImage}
                      alt={`${service.title} visual representation`}
                      className="rounded-xl w-full max-w-md lg:w-2/5 xl:w-1/3 object-cover self-center lg:self-start shadow-md mt-4 lg:mt-0"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
