import React from "react";

// Comonent Sections
import Hero from "../Components/Sections/Landing/Hero";
import Boost from "../Components/Sections/Landing/Boost";
import Stats from "../Components/Sections/Landing/Stats";
import Blogs from "../Components/Sections/Landing/Blogs";
import Footer from "../Components/Common/Footer";
import Welcome from "../Components/Sections/Landing/Welcome";
import Mission from "../Components/Sections/Landing/Mission";
import Reviews from "../Components/Sections/Landing/Reviews";
import SeoPartner from "../Components/Sections/Landing/SeoPartner";
import Speciality from "../Components/Sections/Landing/Speciality";
import TopServices from "../Components/Sections/Landing/TopServices";
import WorkingProcess from "../Components/Sections/Landing/WorkingProcess";
import TablesOfContent from "../Components/Sections/Landing/TablesOfContent";

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
      {/* <Blogs /> */}
      <Reviews />
      <Footer />
    </div>
  );
}

export default Landing;
