import React, { useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// Icons
import {
  Megaphone,
  BadgeDollarSign,
  Search,
  Smartphone,
  Palette,
  Globe,
  TrendingUp,
  Share2,
} from "lucide-react";

// Components
import Line from "../../Common/Line";

const SPECIALITIES = [
  {
    title: "Branding",
    icon: Palette,
  },
  {
    title: "Digital Marketing",
    icon: Megaphone,
  },
  {
    title: "Mobile Marketing",
    icon: Smartphone,
  },
  {
    title: "Online Marketing",
    icon: Globe,
  },
  {
    title: "Search Engine Marketing",
    icon: TrendingUp,
  },
  {
    title: "Paid Marketing",
    icon: BadgeDollarSign,
  },
  {
    title: "Search Engine Optimization",
    icon: Search,
  },
  {
    title: "Social Media Marketing",
    icon: Share2,
  },
];

function Speciality() {
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

      tl.from(".speciality-heading span", {
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
      })
        .from(
          ".speciality-line",
          {
            scaleX: 0,
            transformOrigin: "center",
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.4",
        )
        .from(
          ".speciality-card",
          {
            y: 70,
            opacity: 0,
            scale: 0.9,
            stagger: 0.12,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.2",
        );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24"
    >
      {/* Heading */}
      <div className="speciality-heading mb-5 flex flex-col items-center leading-none text-center">
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
          SPECIALITY
        </span>
      </div>

      {/* Accent Line */}
      <Line className="speciality-line mx-auto mb-12 lg:mb-20" />

      {/* Grid */}
      <div
        className="
          mx-auto
          grid
          max-w-[1350px]
          grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
          gap-6
          px-6
          sm:px-10
          lg:px-16
        "
      >
        {SPECIALITIES.map((item, index) => {
          const Icon = item.icon;

          return (
            <div key={index} className="speciality-card">
              <div
                className="
                  h-full
                  rounded-[24px]
                  lg:rounded-[28px]
                  border
                  border-[#3C4BBF40]
                  bg-gradient-to-b
                  from-[#11162E]
                  to-[#090B15]
                  p-6
                  sm:p-7
                  lg:p-8
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-[#2BB3FF]
                  hover:shadow-[0_0_45px_rgba(43,179,255,.18)]
                  flex
                  flex-col
                  items-center
                  justify-between
                  gap-5
                "
              >
                {/* Icon */}
                <div className="rounded-full bg-gradient-to-b from-[#2BB3FF20] to-[#3C4BBF20] p-4 lg:p-5">
                  <Icon
                    className="h-10 w-10 lg:h-14 lg:w-14 text-[#2BB3FF]"
                    strokeWidth={1.8}
                  />
                </div>

                {/* Title */}
                <h3
                  className="
                    text-center
                    font-[Poppins]
                    font-medium
                    text-white
                    leading-tight
                    text-xl
                    sm:text-2xl
                    lg:text-[28px]
                  "
                >
                  {item.title}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Speciality;
