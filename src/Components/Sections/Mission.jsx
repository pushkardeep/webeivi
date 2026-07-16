import React, { useRef } from "react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// Components
import Line from "../Common/Line";
import Button from "../Common/Buttons/Button";

function Mission() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          // markers: true,
        },
      });

      tl.from(".mission-heading span", {
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
      })
        .from(
          ".mission-line",
          {
            scaleX: 0,
            transformOrigin: "center",
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.35",
        )
        .from(
          ".mission-content p",
          {
            y: 40,
            opacity: 0,
            stagger: 0.2,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.2",
        )
        .from(
          ".mission-button",
          {
            y: 25,
            opacity: 0,
            scale: 0.9,
            duration: 0.5,
            ease: "back.out(1.8)",
          },
          "-=0.25",
        );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24"
    >
      {/* Background */}
      <img
        src="/Images/Bg_1.png"
        alt="Background"
        className="absolute inset-0 z-0 h-full w-full object-cover opacity-10"
      />

      {/* Heading */}
      <div className="mission-heading relative z-10 mb-5 flex flex-col items-center leading-none text-center">
        <span
          className="
            font-[Poppins]
            font-bold
            text-white
            text-4xl
            sm:text-5xl
            lg:text-[64px]
          "
        >
          OUR
        </span>

        <span
          className="
            bg-gradient-to-b
            from-white
            to-[#4D4D4D]
            bg-clip-text
            text-transparent
            font-[Poppins]
            font-bold
            text-4xl
            sm:text-5xl
            lg:text-[64px]
          "
        >
          MISSION
        </span>
      </div>

      {/* Accent Line */}
      <Line className="mission-line relative z-10 mx-auto mb-12 lg:mb-20" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[760px] px-6 sm:px-10 lg:px-20">
        <div className="mission-content">
          <p
            className="
              font-[Poppins]
              text-gray-300
              text-base
              lg:text-[18px]
              leading-8
              lg:leading-[36px]
            "
          >
            WEBEIVI Agency embraces the latest technologies and modern
            strategies to deliver exceptional digital experiences. Our team
            carefully studies every project, understands business goals, and
            creates tailored solutions that drive measurable growth.
          </p>

          <p
            className="
              mt-6
              font-[Poppins]
              text-gray-300
              text-base
              lg:text-[18px]
              leading-8
              lg:leading-[36px]
            "
          >
            We believe in transparency, collaboration, and innovation. Through
            creative thinking, reliable development, and strategic execution, we
            help businesses strengthen their online presence, connect with their
            audience, and achieve long-term success while saving valuable time
            and resources.
          </p>

          <div className="mission-button mt-8 lg:mt-10">
            <Button className="cursor-pointer">Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mission;
