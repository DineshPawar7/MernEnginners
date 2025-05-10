import React from "react";
import HeroMove from "../components/ui/HeroMove";
import ContactUs from "../components/ContactUs";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import OurProjects from "../components/OurProjects";
import Breadcrumb from "../components/ui/Breadcrumb";

const Projects = () => {
  const breadcrumbPath = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
  ];
  return (
    <div>
      <div>
        <Breadcrumb path={breadcrumbPath} heading="Projects" />
      </div>

      <div className="bg-[#ffffff]">
        <OurProjects />
      </div>

      <ContactUs />

      <Testimonials />

      <Footer />
    </div>
  );
};

export default Projects;
