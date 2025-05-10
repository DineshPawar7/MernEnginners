import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";
import Heading from "./Heading";

const teamMembers = [
  {
    name: "Dinesh Pawar",
    role: "MERN Stack Developer",
    img: "src/assets/my-photo.png",
    social: [
      { icon: FaLinkedin, link: "https://www.linkedin.com/in/dineshpawar07/" },
      { icon: FaTwitter, link: "https://x.com/pawar_dine52549" },
      { icon: FaGithub, link: "https://github.com/DineshPawar7" },
      { icon: FaInstagram, link: "https://www.instagram.com/dineshpawar_.07/" },
    ],
  },
  {
    name: "Shyam Payghan",
    role: "Frontend Developer",
    img: "https://avatars.githubusercontent.com/u/187371602?v=4",
    social: [
      {
        icon: FaLinkedin,
        link: "https://www.linkedin.com/in/shyam-payghan-b26a7b33b",
      },
      { icon: FaTwitter, link: "/" },
      { icon: FaGithub, link: "https://github.com/shyampgn123" },
      { icon: FaInstagram, link: "/" },
    ],
  },
  {
    name: "Vaibhav Pawar",
    role: "Frontend Developer",
    img: "https://avatars.githubusercontent.com/u/187371602?v=4",
    social: [
      { icon: FaLinkedin, link: "https://www.linkedin.com/in/vaibhav-pawar08" },
      { icon: FaTwitter, link: "/" },
      { icon: FaGithub, link: "/" },
      { icon: FaInstagram, link: "/" },
    ],
  },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function TeamSection() {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={containerVariants}
      className="bg-black py-16 px-6 md:px-16 text-white"
    >
      <Heading
        level={1}
        variant="hero"
        tag="Team Member"
        firstText="Meet Our"
        secondText="Professionals Team"
        secondTextClassName="text-brand"
        className="text-white"
        tagClassname="text-textWhite"
      />

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        {teamMembers.map((member, idx) => {
          const MotionDiv = motion.div;

          return (
            <MotionDiv
              key={idx}
              variants={cardVariants}
              className="w-full max-w-[350px] group"
            >
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <img
                  src={member.img || "/images/default.jpg"}
                  alt={member.name}
                  className="w-full h-[420px] sm:h-[440px] object-cover transition duration-500 group-hover:scale-105"
                />

                {member.social.length > 0 && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300">
                    <motion.div
                      initial={{ y: 30, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="flex gap-4"
                    >
                      {member.social.map(({ icon: Icon, link }, i) => (
                        <a
                          key={i}
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-lime-400 text-black p-2 rounded-full cursor-pointer hover:scale-110 transition"
                        >
                          <Icon size={16} />
                        </a>
                      ))}
                    </motion.div>
                  </div>
                )}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-4 text-center"
              >
                <p className="font-semibold text-lg">{member.name}</p>
                <p className="text-sm text-gray-400">[ {member.role} ]</p>
              </motion.div>
            </MotionDiv>
          );
        })}
      </div>
    </motion.section>
  );
}
