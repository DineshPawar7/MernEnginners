import { motion } from "framer-motion";
import HeroMove from "./ui/HeroMove";
import projects from "../data/projects.json";
import Heading from "../components/ui/Heading";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60 } },
};

export default function OurProjects() {
  return (
    <>
      <motion.section
        className="text-white px-4 py-12 md:px-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div>
            <Heading
              level={1}
              variant="hero"
              tag="Our Projects"
              firstText="Our Recent"
              secondText="Work Portfolio"
              secondTextClassName="text-brand"
              className="text-white"
              tagClassname="text-textWhite"
            />
          </div>
        </motion.div>

        <motion.div
          className="flex justify-between items-center mb-8"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div></div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-lime-400 hover:bg-lime-500 text-black font-medium px-6 py-2 rounded-full flex items-center gap-2"
          >
            View All Projects <span className="text-2xl leading-none">+</span>
          </motion.button>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="bg-[#111] p-4 rounded-2xl shadow-md hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.02 }}
            >
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-auto rounded-xl mb-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
              />
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags.map((tag, i) => (
                  <motion.span
                    key={i}
                    className="bg-gray-800 text-white text-xs px-3 py-1 rounded-full"
                    whileHover={{ scale: 1.1 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
              <motion.div className="flex items-center justify-between mb-3">
                <motion.h3 className="text-xl font-semibold">
                  {project.title}
                </motion.h3>
                <motion.button
                  whileHover={{ rotate: 90, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-lime-500 hover:bg-lime-600 text-black p-2 rounded-full"
                >
                  ✕
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <HeroMove />
    </>
  );
}
