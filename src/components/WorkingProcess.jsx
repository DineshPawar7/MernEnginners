import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Ruler, ClipboardList } from "lucide-react";
import HeroMove from "../components/ui/HeroMove";
import steps from "../data/workingprocess.json";
import Heading from "../components/ui/Heading";

const iconMap = {
  Lightbulb: <Lightbulb className="w-10 h-10 text-black" />,
  Ruler: <Ruler className="w-10 h-10 text-black" />,
  ClipboardList: <ClipboardList className="w-10 h-10 text-black" />,
};

const WorkingProcess = () => {
  return (
    <>
      <section className="py-20 px-4 md:px-10 bg-white">
        <div className="text-center mb-12">
          <Heading
            level={1}
            variant="hero"
            tag="Our Work Process"
            firstText="Our Working Process"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-lime-400 p-6 rounded-full relative">
                  {iconMap[step.icon]}
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-0.5 rounded-full whitespace-nowrap">
                    {step.step}
                  </span>
                </div>
              </div>
              <h3 className="text-subTitle font-semibold text-gray-800 mb-2">
                {step.title}
              </h3>
              <p className="text-secondaryText text-gray-600 max-w-xs mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
      <HeroMove />
    </>
  );
};

export default WorkingProcess;
