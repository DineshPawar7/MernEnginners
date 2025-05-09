import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaProjectDiagram,
  FaCertificate,
} from "react-icons/fa";
import Heading from "./ui/Heading";

const teamHighlights = [
  {
    year: "2024",
    title: "GitHub Activity",
    desc: "Our developers maintain strong GitHub profiles with active open-source contributions and collaborative repos.",
    icon: <FaGithub className="text-5xl text-lime-500" />,
  },
  {
    year: "2024",
    title: "LinkedIn Recognition",
    desc: "Each team member holds an established professional presence on LinkedIn, reflecting verified skills and endorsements.",
    icon: <FaLinkedin className="text-5xl text-lime-500" />,
  },
  {
    year: "2023",
    title: "Certified Engineers",
    desc: "Our engineers hold BTech degrees in Computer Science and are certified in modern web technologies and frameworks.",
    icon: <FaCertificate className="text-5xl text-lime-500" />,
  },
  {
    year: "2022",
    title: "Project Proven Experience",
    desc: "We’ve successfully delivered numerous frontend and full-stack projects for clients globally, with measurable results.",
    icon: <FaProjectDiagram className="text-5xl text-lime-500" />,
  },
];

export default function TeamJourneySection() {
  return (
    <section className="py-16 bg-white text-center">
      <Heading
        level={1}
        variant="hero"
        tag="Our Team"
        firstText="Our Journey to"
        secondText="Team Excellence"
      />

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mt-9 mx-auto px-6">
        {teamHighlights.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-50 border border-gray-200 rounded-xl p-6 flex items-start gap-5 shadow-md"
          >
            <div>{item.icon}</div>
            <div className="text-left">
              <h4 className="text-grayHeading font-bold text-baseText font-work">
                {item.year}
              </h4>
              <h3 className="text-subTitle font-semibold mb-1 font-roboto">
                {item.title}
              </h3>
              <p className="text-textGray text-baseText font-work">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
