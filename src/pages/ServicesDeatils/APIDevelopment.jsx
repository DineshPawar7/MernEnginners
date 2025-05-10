import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import Breadcrumb from "../../components/ui/Breadcrumb";
import Footer from "../../components/Footer";
import { FaPlay } from "react-icons/fa";

import apiImg from "../../assets/api-dev.webp";


const APIDevelopment = () => {
  const breadcrumbPath = [
    { label: "services", href: "/services" },
    { label: "API Development", href: "/apidevelopment" },
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
                  src={apiImg}
                  alt="API Development"
                  className="rounded-3xl w-full border-2 border-black"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 border-2 border-brand rounded-full flex items-center justify-center bg-black">
                    <div className=" text-brand "> <FaPlay /></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <h2 className="text-sectionTitle md:text-sectionTitle font-bold mb-4 font-roboto">
          API Development Services
        </h2>
        <div className="mb-4 flex items-start space-x-2 text-textGray font-work text-baseText">
          <div className="w-12 h-12 flex-shrink-0 rounded-full bg-brand flex items-center justify-center text-black font-bold text-lg">
            W
          </div>
          <p className="leading-relaxed">
            We specialize in building robust, scalable APIs that power modern
            web and mobile applications. Our API solutions are secure, reliable,
            and designed for high performance across a wide range of use cases.
          </p>
        </div>

        <p className="mb-8 text-textGray font-work text-baseText">
          Our development process emphasizes RESTful architecture, clean
          documentation, and seamless integration. Whether you're looking to
          connect microservices, integrate third-party systems, or enable
          complex frontend interactions, we deliver APIs that drive value.
        </p>

        <h3 className="font-bold mb-4 font-roboto text-subTitle">
          Services Include:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 text-textGray font-work text-baseText">
          {[
            "RESTful API Design",
            "GraphQL API Development",
            "Authentication & Authorization",
            "Third-party API Integration",
            "API Documentation (Swagger/Postman)",
            "Versioning and Rate Limiting",
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
            src="https://appinventiv.com/wp-content/uploads/2018/05/api_development_process.webp"
            alt="Maintenance Example 1"
            className="rounded-lg w-full h-72 object-cover border-2 border-black"
          />
          <img
            src="https://colorwhistle.com/wp-content/uploads/2023/10/API-Types-Tools-Functions-and-Features-A-Developers-Guide-Benefits-ColorWhistle.jpg"
            alt="Maintenance Example 2"
            className="rounded-lg w-full h-72 object-cover border-2 border-black"
          />
          <img
            src="https://satsaiinfo.com/wp-content/uploads/2024/03/Must-Have-Features-of-an-Efficient-API-Development.jpg"
            alt="Maintenance Example 3"
            className="rounded-lg w-full h-72 object-cover border-2 border-black"
          />
        </div>

        <h3 className="font-roboto text-subTitle font-bold mb-4">
          Our Expertise In API Development
        </h3>
        <p className="mb-8 text-gray-600 text-baseText font-work">
          We bring extensive knowledge in designing, developing, and maintaining
          APIs that serve as the backbone of digital platforms. From single-page
          apps to enterprise systems, our APIs are structured, modular, and
          highly efficient.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
          {[
            {
              title: "Secure Authentication",
              description:
                "OAuth, JWT, and role-based access to protect your data.",
            },
            {
              title: "Comprehensive Testing",
              description:
                "We ensure reliability through unit, integration, and load testing.",
            },
            {
              title: "Real-time Data",
              description:
                "WebSocket and event-driven APIs for real-time applications.",
            },
            {
              title: "Optimized Performance",
              description:
                "Lightweight, fast APIs built for scalability and low latency.",
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
          Service Benefits:
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-600 font-work text-baseText">
          <li>Centralized communication between systems and services</li>
          <li>Rapid scalability and seamless third-party integrations</li>
          <li>Improved frontend-backend separation</li>
          <li>Consistent, reliable, and well-documented endpoints</li>
        </ul>
      </div>

      <Footer />
    </>
  );
};

export default APIDevelopment;
