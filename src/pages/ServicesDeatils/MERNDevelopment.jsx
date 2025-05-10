import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import Breadcrumb from "../../components/ui/Breadcrumb";
import Footer from "../../components/Footer";

const MERNDevelopment = () => {
  const breadcrumbPath = [
    { label: "services", href: "/services" },
    { label: "MERN Development", href: "/merndevelopment" },
  ];

  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <>
      <div>
        <Breadcrumb path={breadcrumbPath} heading="Services" />
      </div>

      <div className="bg-white text-gray-800 font-sans px-4 md:px-32 py-10 mt-20">
        <div className="w-full flex justify-center mb-10">
          <div className="relative w-full max-w-7xl mx-auto">
            {isVideoPlaying ? (
              <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/48CNsB0aKuA?autoplay=1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              <div
                onClick={() => setIsVideoPlaying(true)}
                className="cursor-pointer relative w-full"
              >
                <img
                  src="/src/assets/team.jpg"
                  alt="Mobile App Development"
                  className="rounded-3xl w-full"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 border-4 border-white rounded-full flex items-center justify-center bg-white">
                    <div className="w-4 h-4 bg-brand rounded-full"></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <h2 className="text-sectionTitle md:text-sectionTitle font-bold mb-4 font-roboto">
          MERN Stack Web Development
        </h2>
        <div className="mb-4 flex items-start space-x-2 text-textGray font-work text-baseText">
          <div className="w-12 h-12 flex-shrink-0 rounded-full bg-brand flex items-center justify-center text-black font-bold text-lg">
            A
          </div>

          <p className="leading-relaxed">
            At our agency, we build scalable and modern web applications using
            the MERN stack—MongoDB, Express.js, React, and Node.js. Our
            solutions are designed to be secure, high-performing, and tailored
            to meet your specific business needs.
          </p>
        </div>

        <p className="mb-8 text-textGray font-work text-baseText">
          Our team of MERN experts combines deep technical expertise with agile
          methodologies to ensure each project aligns seamlessly with your
          business goals and user expectations. Whether you're launching a new
          product or modernizing legacy systems, we create digital platforms
          that deliver real value and exceptional user experiences.
        </p>

        <h3 className="font-bold mb-4 font-roboto text-subTitle">
          Services Include:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 text-textGray font-work text-baseText">
          {[
            "API Development & Integration",
            "Backend Architecture with Node.js",
            "Responsive Frontend Interfaces using React",
            "Real-time Data with WebSocket Integration",
            "Secure Authentication and Authorization",
            "MongoDB Schema Design and Optimization",
          ].map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-brand rounded-full flex items-center justify-center text-black">
                <FaCheck />
              </div>
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <img
            src="http://localhost:5173/src/assets/team.jpg"
            alt="Service 1"
            className="rounded-lg w-full h-72 object-cover"
          />
          <img
            src="http://localhost:5173/src/assets/team.jpg"
            alt="Service 2"
            className="rounded-lg w-full h-72 object-cover"
          />
          <img
            src="http://localhost:5173/src/assets/team.jpg"
            alt="Service 3"
            className="rounded-lg w-full h-72 object-cover"
          />
        </div>

        <h3 className="font-roboto text-subTitle font-bold mb-4">
          Our Expertise In MERN Stack Development
        </h3>
        <p className="mb-8 text-gray-600 text-baseText font-work">
          Our team brings deep technical expertise across the MERN stack to
          build high-performing, scalable web applications. We streamline
          development through modular architecture and industry best practices,
          ensuring efficient delivery and long-term maintainability.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
          {[
            {
              title: "Rapid App Delivery",
              description:
                "We leverage component-driven architecture for quick, efficient rollouts.",
            },
            {
              title: "Modular Code Practices",
              description:
                "Structured and reusable codebases for long-term scalability.",
            },
            {
              title: "Full-Cycle Development",
              description:
                "From planning to deployment, we handle the entire product lifecycle.",
            },
            {
              title: "Cross-Platform Compatibility",
              description:
                "Web apps optimized for all major browsers and devices.",
            },
          ].map((item, index) => (
            <div key={index} className="bg-cardbg p-4 rounded-lg">
              <div className="text-lg font-semibold mb-2 inline-block px-2 py-1 bg-brand text-black rounded-full">
                0{index + 1}
              </div>
              <h4 className="font-bold mb-1 text-baseText">{item.title}</h4>
              <p className="text-gray-700 text-secondaryText">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <h3 className="font-roboto text-subTitle font-bold mb-4">
          Services Benefits:
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-600 font-work text-baseText">
          <li>End-to-end development with a single, unified tech stack</li>
          <li>Scalable solutions tailored to your business growth</li>
          <li>Quick deployment cycles with continuous integration</li>
          <li>Seamless user experiences with dynamic frontend interfaces</li>
        </ul>
      </div>

      <Footer />
    </>
  );
};

export default MERNDevelopment;
