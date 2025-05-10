import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import Breadcrumb from "../../components/ui/Breadcrumb";
import Footer from "../../components/Footer";

const WebsiteMaintenance = () => {
  const breadcrumbPath = [
    { label: "services", href: "/services" },
    { label: "Website Maintenance", href: "/websitemaintenance" },
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
                  src="https://www.youtube.com/embed/ZFvT0aDgUq8?autoplay=1"
                  title="Website Maintenance Overview"
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
                  alt="Website Maintenance"
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
          Website Maintenance Services
        </h2>
        <div className="mb-4 flex items-start space-x-2 text-textGray font-work text-baseText">
          <div className="w-12 h-12 flex-shrink-0 rounded-full bg-brand flex items-center justify-center text-black font-bold text-lg">
            W
          </div>
          <p className="leading-relaxed">
            Our comprehensive website maintenance solutions ensure your site
            remains secure, up-to-date, and performing optimally. We handle
            everything from routine backups to emergency bug fixes, allowing you
            to focus on growth.
          </p>
        </div>

        <p className="mb-8 text-textGray font-work text-baseText">
          Whether it's a corporate site, eCommerce platform, or custom web app,
          our maintenance services cover updates, uptime monitoring, SEO
          optimization, and regular content improvements.
        </p>

        <h3 className="font-bold mb-4 font-roboto text-subTitle">
          Services Include:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 text-textGray font-work text-baseText">
          {[
            "Website Backup & Restore Services",
            "Regular Security Scans & Fixes",
            "Performance Optimization",
            "CMS & Plugin Updates (WordPress, etc.)",
            "Broken Link & Error Monitoring",
            "Content & Image Updates",
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
            alt="Maintenance Example 1"
            className="rounded-lg w-full h-72 object-cover"
          />
          <img
            src="/src/assets/team.jpg"
            alt="Maintenance Example 2"
            className="rounded-lg w-full h-72 object-cover"
          />
          <img
            src="/src/assets/team.jpg"
            alt="Maintenance Example 3"
            className="rounded-lg w-full h-72 object-cover"
          />
        </div>

        <h3 className="font-roboto text-subTitle font-bold mb-4">
          Our Website Maintenance Expertise
        </h3>
        <p className="mb-8 text-gray-600 text-baseText font-work">
          We combine proactive monitoring, timely updates, and robust
          infrastructure support to keep your digital assets protected and
          performant. With transparent reporting and SLA-based support, you’re
          always in control.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
          {[
            {
              title: "Scheduled Maintenance",
              description:
                "Routine updates to keep your website current and functioning smoothly.",
            },
            {
              title: "24/7 Uptime Monitoring",
              description:
                "Real-time alerts and resolution for downtime and performance issues.",
            },
            {
              title: "Emergency Fixes",
              description:
                "Rapid response to bugs, security breaches, and content errors.",
            },
            {
              title: "Monthly Reporting",
              description:
                "Detailed logs and performance insights delivered monthly.",
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
          Why Choose Us?
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-600 font-work text-baseText">
          <li>Minimized website downtime and risk</li>
          <li>Peace of mind with 24/7 support coverage</li>
          <li>SEO-friendly updates for better visibility</li>
          <li>Secure and stable website operations</li>
        </ul>
      </div>

      <Footer />
    </>
  );
};

export default WebsiteMaintenance;
