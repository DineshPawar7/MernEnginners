import React from "react";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import Breadcrumb from "../components/ui/Breadcrumb";
import Team from "../components/ui/Team";
import TeamJourneySection from "../components/TeamHighlights";

const OurTeam = () => {
  const breadcrumbPath = [
    { label: "Home", href: "/" },
    { label: "Team", href: "/team" },
  ];
  return (
    <div>
      <div>
        <Breadcrumb path={breadcrumbPath} heading="Our Team" />
      </div>

      <TeamJourneySection />

      <Team />

      <Testimonials />

      <Footer />
    </div>
  );
};

export default OurTeam;
