import React, { useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// Icons
import { SearchCheck, Lightbulb, Code2, Rocket } from "lucide-react";

// Components
import Line from "../Common/Line";

const PROCESS = [
  {
    icon: SearchCheck,
    title: "Analysis",
  },
  {
    icon: Lightbulb,
    title: "Design",
  },
  {
    icon: Code2,
    title: "Development",
  },
  {
    icon: Rocket,
    title: "Launch",
  },
];

function WorkingProcess() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      tl.from(".process-heading span", {
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
      })
        .from(
          ".process-line",
          {
            scaleX: 0,
            transformOrigin: "center",
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.4",
        )
        .from(
          ".process-connector",
          {
            scaleX: 0,
            transformOrigin: "left center",
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.3",
        )
        .from(
          ".process-item",
          {
            y: 80,
            opacity: 0,
            scale: 0.9,
            stagger: 0.18,
            duration: 0.8,
            ease: "back.out(1.5)",
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
      {/* Heading */}
      <div className="process-heading mb-5 flex flex-col items-center leading-none text-center">
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
          WORKING PROCESS
        </span>
      </div>

      {/* Accent Line */}
      <Line className="process-line mx-auto mb-12 lg:mb-20" />

      {/* Process */}
      <div
        className="
          relative
          mx-auto
          max-w-[1450px]
          px-6
          sm:px-10
          lg:px-20
        "
      >
        {/* Connector Line (Desktop only) */}
        <div
          className="
            process-connector
            absolute
            left-[14%]
            right-[14%]
            top-[72px]
            hidden
            h-[2px]
            lg:block
            bg-gradient-to-r
            from-transparent
            via-[#3C4BBF]
            to-transparent
          "
        />

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-10
            lg:gap-6
          "
        >
          {PROCESS.map((item, index) => {
            const Icon = item.icon;

            return (
              <div key={index} className="process-item">
                <div
                  className="
                    flex
                    flex-col
                    items-center
                  "
                >
                  {/* Hover wrapper */}
                  <div
                    className="
                      flex
                      h-[130px]
                      w-[130px]
                      sm:h-[150px]
                      sm:w-[150px]
                      lg:h-[170px]
                      lg:w-[170px]
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
                      className="
                        h-12
                        w-12
                        sm:h-14
                        sm:w-14
                        lg:h-16
                        lg:w-16
                        text-[#2BB3FF]
                      "
                      strokeWidth={1.8}
                    />
                  </div>

                  <h3
                    className="
                      mt-6
                      lg:mt-8
                      text-center
                      font-[Poppins]
                      font-semibold
                      text-white
                      text-xl
                      sm:text-2xl
                      lg:text-[28px]
                    "
                  >
                    {String(index + 1).padStart(2, "0")}. {item.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WorkingProcess;
