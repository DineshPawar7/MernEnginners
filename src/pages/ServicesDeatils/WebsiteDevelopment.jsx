import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import Breadcrumb from "../../components/ui/Breadcrumb";
import Footer from "../../components/Footer";

const WebsiteDevelopment = () => {
  const breadcrumbPath = [
    { label: "services", href: "/services" },
    { label: "Website Development", href: "/websitedevelopment" },
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
                  src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1"
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
                  alt="Website Development"
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
          Website Design & Development
        </h2>
        <div className="mb-4 flex items-start space-x-2 text-textGray font-work text-baseText">
          <div className="w-12 h-12 flex-shrink-0 rounded-full bg-brand flex items-center justify-center text-black font-bold text-lg">
            W
          </div>
          <p className="leading-relaxed">
            We build cutting-edge websites that drive engagement, elevate brand
            presence, and convert visitors into loyal customers. From static
            pages to dynamic CMS and eCommerce platforms, our development stack
            is robust, scalable, and future-ready.
          </p>
        </div>

        <p className="mb-8 text-textGray font-work text-baseText">
          Whether you need a lightning-fast landing page or a comprehensive
          digital experience, we deliver end-to-end website solutions tailored
          to your goals. Our focus on UI/UX, responsive design, and SEO ensures
          high-performance delivery across all devices.
        </p>

        <h3 className="font-bold mb-4 font-roboto text-subTitle">
          Services Include:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 text-textGray font-work text-baseText">
          {[
            "Custom Website Design & Development",
            "Responsive & Mobile-First Design",
            "SEO-Optimized Coding Structure",
            "WordPress & CMS Development",
            "E-commerce Store Setup & Integration",
            "Third-party API Integration",
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
            src="/src/assets/team.jpg"
            alt="Web Dev 1"
            className="rounded-lg w-full h-72 object-cover"
          />
          <img
            src="/src/assets/team.jpg"
            alt="Web Dev 2"
            className="rounded-lg w-full h-72 object-cover"
          />
          <img
            src="/src/assets/team.jpg"
            alt="Web Dev 3"
            className="rounded-lg w-full h-72 object-cover"
          />
        </div>

        <h3 className="font-roboto text-subTitle font-bold mb-4">
          Our Website Development Expertise
        </h3>
        <p className="mb-8 text-gray-600 text-baseText font-work">
          Our team brings comprehensive front-end and back-end expertise,
          delivering digital solutions that are user-friendly, responsive, and
          optimized for speed and performance.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
          {[
            {
              title: "UI/UX Design",
              description:
                "Stunning, intuitive interfaces designed to maximize user engagement.",
            },
            {
              title: "Full Stack Development",
              description:
                "Robust backend with seamless frontend integration for dynamic experiences.",
            },
            {
              title: "CMS Solutions",
              description:
                "Manage content with ease using WordPress, Strapi, or custom CMS options.",
            },
            {
              title: "Performance Optimization",
              description:
                "Blazing-fast load times and best practices for core web vitals.",
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
          <li>Tailored website design aligned with your brand</li>
          <li>Optimized for SEO and performance</li>
          <li>Cross-browser and cross-device compatibility</li>
          <li>Scalable structure for future enhancements</li>
        </ul>
      </div>

      <Footer />
    </>
  );
};

export default WebsiteDevelopment;
