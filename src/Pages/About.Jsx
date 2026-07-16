import React, { useRef } from "react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

// Components
import Line from "../Components/Common/Line";
import Mission from "../Components/Sections/Mission";
import Reviews from "../Components/Sections/Reviews"; 
import Footer from "../Components/Sections/Common/Footer";
import NavBar from "../Components/Sections/Common/NavBar";
import PageHeading from "../Components/Common/PageHeading";

function About() {
  const pageRef = useRef();

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.from(".hero-bg", {
        scale: 1.15,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      })
        .from(
          ".hero-title",
          {
            y: 70,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.6",
        )
        .from(
          ".hero-line",
          {
            scaleX: 0,
            transformOrigin: "left",
            duration: 0.5,
            ease: "power3.out",
          },
          "-=0.5",
        )
        .from(
          ".hero-text p",
          {
            y: 30,
            opacity: 0,
            stagger: 0.15,
            duration: 0.55,
            ease: "power3.out",
          },
          "-=0.35",
        );
    },
    { scope: pageRef },
  );
  return (
    <div ref={pageRef} className="w-full relative overflow-hidden bg-black">
      <div className="w-full min-h-fit relative overflow-hidden">
        <NavBar />

        <PageHeading title={"ABOUT US"} />

        {/* HERO */}
        <section className="hero-section relative overflow-hidden py-16">
          {/* Background */}
          <img
            src="/Images/Bg_1.png"
            alt=""
            className="hero-bg absolute inset-0 h-full w-full object-cover opacity-10"
          />

          <div className="relative z-10 mx-auto flex max-w-[1450px] flex-col-reverse items-center gap-14 px-6 sm:px-10 lg:flex-row lg:gap-24 lg:px-20">
            {/* Left */}
            <div className="hero-content flex-1">
              <h2 className="hero-title font-[Poppins] text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[52px]">
                WEBEIVI Agency -
                <br />
                <span className="bg-gradient-to-b from-white via-[#D8D8D8] to-[#4D4D4D] bg-clip-text text-transparent">
                  Your Trusted Digital Partner
                </span>
              </h2>

              <div className="hero-line my-8">
                <Line />
              </div>

              <div className="hero-text space-y-7">
                <p className="text-base leading-8 text-gray-300 lg:text-lg lg:leading-9">
                  WEBEIVI Agency was founded with a mission to help businesses
                  establish a strong digital presence through innovative design,
                  scalable development, and data-driven marketing strategies.
                </p>

                <p className="text-base leading-8 text-gray-300 lg:text-lg lg:leading-9">
                  Our experienced team combines creativity with technology to
                  build websites, mobile applications, and marketing campaigns
                  that generate measurable business growth while maintaining
                  exceptional user experiences.
                </p>

                <p className="text-base leading-8 text-gray-300 lg:text-lg lg:leading-9">
                  From startups to enterprise organizations, we provide complete
                  digital solutions including UI/UX design, web development,
                  branding, SEO, digital marketing, and business automation.
                  Every project is carefully planned and executed with
                  transparency and long-term success in mind.
                </p>

                <p className="text-base leading-8 text-gray-300 lg:text-lg lg:leading-9">
                  Our commitment is simple — deliver premium quality work, build
                  lasting relationships, and help our clients stay ahead in
                  today's competitive digital world.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Mission />
      <Reviews />
      <Footer />
    </div>
  );
}

export default About;
