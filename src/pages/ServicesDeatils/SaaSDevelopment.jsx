import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import Breadcrumb from "../../components/ui/Breadcrumb";
import Footer from "../../components/Footer";

const SaaSDevelopment = () => {
  const breadcrumbPath = [
    { label: "services", href: "/services" },
    { label: "SaaS Development", href: "/saasdevelopment" },
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
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
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
                  alt="SaaS Development"
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
          SaaS Product Development
        </h2>
        <div className="mb-4 flex items-start space-x-2 text-textGray font-work text-baseText">
          <div className="w-12 h-12 flex-shrink-0 rounded-full bg-brand flex items-center justify-center text-black font-bold text-lg">
            S
          </div>
          <p className="leading-relaxed">
            We specialize in building robust, scalable Software-as-a-Service
            (SaaS) applications tailored for global reach. From MVPs to
            full-scale enterprise-grade platforms, our SaaS solutions focus on
            performance, security, and end-user engagement.
          </p>
        </div>

        <p className="mb-8 text-textGray font-work text-baseText">
          Our expert development team leverages cloud-native technologies,
          multi-tenant architecture, and modern DevOps to deliver reliable SaaS
          platforms. Whether you're launching a startup or expanding enterprise
          operations, we ensure you stay ahead in the digital landscape.
        </p>

        <h3 className="font-bold mb-4 font-roboto text-subTitle">
          Services Include:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 text-textGray font-work text-baseText">
          {[
            "Custom SaaS Application Development",
            "Multi-Tenant Architecture Implementation",
            "Cloud Deployment with AWS/Azure/GCP",
            "Subscription & Billing Integration",
            "User Management & Role-Based Access",
            "Scalable API Design and Integration",
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
            alt="SaaS Example 1"
            className="rounded-lg w-full h-72 object-cover"
          />
          <img
            src="/src/assets/team.jpg"
            alt="SaaS Example 2"
            className="rounded-lg w-full h-72 object-cover"
          />
          <img
            src="/src/assets/team.jpg"
            alt="SaaS Example 3"
            className="rounded-lg w-full h-72 object-cover"
          />
        </div>

        <h3 className="font-roboto text-subTitle font-bold mb-4">
          Our Expertise In SaaS Solutions
        </h3>
        <p className="mb-8 text-gray-600 text-baseText font-work">
          We bring extensive experience in developing SaaS platforms that are
          agile, secure, and built for scale. From back-end infrastructure to
          user-centric frontends, our SaaS development approach ensures seamless
          delivery and user satisfaction.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
          {[
            {
              title: "MVP Launch Support",
              description:
                "Rapid prototyping and lean development to validate your SaaS idea quickly.",
            },
            {
              title: "Cloud-Native Architecture",
              description:
                "Leverage the scalability of cloud for better uptime and performance.",
            },
            {
              title: "Subscription Models",
              description:
                "Integrated billing, invoicing, and recurring payment systems.",
            },
            {
              title: "Continuous Deployment",
              description:
                "CI/CD pipelines for faster release cycles and lower risk.",
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
          <li>Cost-effective and scalable SaaS platforms</li>
          <li>Faster time-to-market with agile delivery</li>
          <li>Seamless user onboarding and retention</li>
          <li>Cloud-first architecture for high availability</li>
        </ul>
      </div>

      <Footer />
    </>
  );
};

export default SaaSDevelopment;
