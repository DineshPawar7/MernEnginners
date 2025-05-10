import React from "react";
import HeroMove from "../components/ui/HeroMove";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import Breadcrumb from "../components/ui/Breadcrumb";

const Contact = () => {
  const breadcrumbPath = [
    { label: "Home", href: "/" },
    { label: "Contact", href: "/contact" },
  ];
  return (
    <div>
      <div>
        <Breadcrumb path={breadcrumbPath} heading="Contact Us" />
      </div>

      <ContactUs />

      <HeroMove />

      <Footer />
    </div>
  );
};

export default Contact;
