import React from "react";

// Comonent Sections
import Hero from "../Components/Sections/Hero";
import Boost from "../Components/Sections/Boost";
import Stats from "../Components/Sections/Stats";
import Blogs from "../Components/Sections/Blogs";
import Footer from "../Components/Sections/Common/Footer";
import Welcome from "../Components/Sections/Welcome";
import Mission from "../Components/Sections/Mission";
import Reviews from "../Components/Sections/Reviews";
import SeoPartner from "../Components/Sections/SeoPartner";
import Speciality from "../Components/Sections/Speciality";
import TopServices from "../Components/Sections/TopServices";
import WorkingProcess from "../Components/Sections/WorkingProcess";
import TablesOfContent from "../Components/Sections/TablesOfContent";

function Landing() {
  return (
    <div className="w-full relative overflow-hidden bg-black">
      <Hero />
      <Boost />
      <Welcome />
      <Stats />
      <TopServices />
      <Speciality />
      <WorkingProcess />
      <Mission />
      <SeoPartner />
      <Blogs />
      <Reviews />
      <Footer />
    </div>
  );
}

export default Landing;
