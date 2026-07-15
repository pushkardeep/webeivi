import React, { useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// Icons
import { Users, Trophy, Flag, Award } from "lucide-react";

// Components
import Line from "../Common/Line";

// Configs
const STATS = [
  {
    icon: Users,
    title: "Active Clients",
    value: "488",
    suffix: "+",
  },
  {
    icon: Trophy,
    title: "Projects Done",
    value: "1059",
    suffix: "+",
  },
  {
    icon: Flag,
    title: "Success Rate",
    value: "99",
    suffix: "%",
  },
  {
    icon: Award,
    title: "Awards",
    value: "90",
    suffix: "+",
  },
];

function Stats() {
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

      tl.from(".stats-heading", {
        y: 50,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
      })
        .from(
          ".stats-line",
          {
            scaleX: 0,
            transformOrigin: "center",
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.35",
        )
        .from(
          ".stats-card",
          {
            y: 70,
            opacity: 0,
            stagger: 0.15,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.2",
        )
        .from(
          ".stats-title",
          {
            y: 20,
            opacity: 0,
            stagger: 0.15,
            duration: 0.4,
          },
          "-=0.5",
        )
        .from(
          ".stats-value",
          {
            y: 20,
            opacity: 0,
            stagger: 0.15,
            duration: 0.5,
          },
          "-=0.35",
        );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24"
    >
      {/* HEADING */}
      <h2
        className="
        stats-heading
        mx-auto
        mb-5
        w-fit
        bg-gradient-to-b
        from-white
        via-[#D8D8D8]
        to-[#4D4D4D]
        bg-clip-text
        text-transparent
        font-[Poppins]
        font-bold
        text-3xl
        sm:text-4xl
        lg:text-[48px]
        text-center
      "
      >
        OUR STATS
      </h2>

      {/* ACCENT LINE */}
      <Line className="stats-line mx-auto mb-12 lg:mb-20" />

      <div
        className="
        mx-auto
        grid
        max-w-[1350px]
        grid-cols-2
        xl:grid-cols-4
        gap-10
        lg:gap-12
        px-6
        sm:px-10
        lg:px-20
      "
      >
        {STATS.map(({ icon: Icon, title, value, suffix }, index) => (
          <div
            key={index}
            className="stats-card group flex flex-col items-center text-center"
          >
            {/* Icon */}
            <div
              className="
              flex
              h-24
              w-24
              sm:h-28
              sm:w-28
              lg:h-[140px]
              lg:w-[140px]
              items-center
              justify-center
              rounded-full
              border
              border-[#3C4BBF50]
              bg-gradient-to-b
              from-[#11162E]
              to-[#090B15]
              shadow-[0_0_40px_rgba(43,179,255,.15)]
              transition-all
              duration-300
              hover:-translate-y-2
              hover:shadow-[0_0_60px_rgba(43,179,255,.35)]
            "
            >
              <Icon
                className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 text-[#2BB3FF]"
                strokeWidth={1.8}
              />
            </div>

            {/* Title */}
            <h3
              className="
              stats-title
              mt-6
              lg:mt-8
              font-[Poppins]
              font-semibold
              text-white
              text-lg
              sm:text-xl
            "
            >
              {title}
            </h3>

            {/* Value */}
            <h2
              className="
              stats-value
              mt-2
              lg:mt-3
              font-[Poppins]
              font-bold
              text-[#2BB3FF]
              text-4xl
              sm:text-[42px]
              lg:text-[46px]
            "
            >
              {value}
              <span className="align-top text-lg sm:text-xl lg:text-[22px]">
                {suffix}
              </span>
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;
