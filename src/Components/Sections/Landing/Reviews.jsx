import React, { useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// Components
import Line from "../../Common/Line";
import Button from "../../Common/Buttons/Button";

function Reviews() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          // markers: true,
        },
      });

      tl.from(".reviews-heading", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })
        .from(
          ".reviews-line",
          {
            scaleX: 0,
            transformOrigin: "center",
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.4",
        )
        .from(
          leftRef.current,
          {
            x: -100,
            opacity: 0,
            duration: 0.9,
            ease: "power3.out",
          },
          "-=0.2",
        )
        .from(
          rightRef.current,
          {
            x: 100,
            opacity: 0,
            duration: 0.9,
            ease: "power3.out",
          },
          "-=0.6",
        );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-black py-16 sm:py-20 lg:py-24"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-[#3C4BBF20] blur-[150px] sm:h-[600px] sm:w-[600px] lg:h-[700px] lg:w-[700px]" />

      <div
        className="
        relative
        z-10
        mx-auto
        flex
        max-w-[1400px]
        flex-col
        gap-10
        px-6
        sm:px-10
        lg:px-20
        xl:flex-row
        xl:items-start
        xl:gap-16
      "
      >
        {/* LEFT */}
        <div ref={leftRef} className="review-panel flex-1">
          <h2
            className="
            reviews-heading
            mx-auto
            mb-5
            w-fit
            bg-gradient-to-b
            from-white
            via-[#D8D8D8]
            to-[#4D4D4D]
            bg-clip-text
            text-center
            font-[Poppins]
            font-bold
            text-transparent
            text-3xl
            sm:text-4xl
            lg:text-[48px]
          "
          >
            CLIENT REVIEWS
          </h2>

          <Line className="reviews-line mx-auto mb-10 lg:mb-14" />

          <div
            className="
            rounded-[24px]
            lg:rounded-[30px]
            border
            border-[#3C4BBF40]
            bg-gradient-to-b
            from-[#11162E]
            to-[#090B15]
            p-6
            sm:p-8
            lg:p-12
            shadow-[0_0_50px_rgba(43,179,255,.15)]
          "
          >
            <p
              className="
              text-gray-300
              italic
              text-base
              lg:text-[18px]
              leading-8
              lg:leading-[36px]
            "
            >
              Digital Marketing King is truly a King organization. Thanks for
              building a competent website for my business. I like the work and
              appreciate the team's coordinative effort. I'm glad to have shaken
              hands with this website designing service provider in a world full
              of incompetent agencies.
            </p>

            <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4 sm:gap-5">
                <img
                  src="/Images/avatar.png"
                  className="h-16 w-16 rounded-2xl object-cover sm:h-20 sm:w-20"
                />

                <div>
                  <h3 className="text-xl font-semibold text-white lg:text-[26px]">
                    Mohd. Arif
                  </h3>

                  <p className="text-sm text-gray-400 lg:text-base">
                    CEO • Zoya Clothing
                  </p>
                </div>
              </div>

              <span className="self-end text-6xl text-[#2BB3FF] opacity-30 lg:text-[90px]">
                "
              </span>
            </div>
          </div>

          {/* DOTS */}
          <div className="mt-8 flex justify-center gap-3 lg:mt-10">
            {[1, 2, 3, 4, 5].map((_, i) => (
              <div
                key={i}
                className={`rounded-full ${
                  i === 1 ? "h-4 w-4 bg-[#2BB3FF]" : "h-3 w-3 bg-[#3C4BBF]"
                }`}
              />
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div
          ref={rightRef}
          className="
          form-panel
          w-full
          xl:w-[560px]
          rounded-[24px]
          lg:rounded-[30px]
          border
          border-[#3C4BBF40]
          bg-gradient-to-b
          from-[#11162E]
          to-[#090B15]
          p-6
          sm:p-8
          lg:p-10
          shadow-[0_0_50px_rgba(43,179,255,.15)]
        "
        >
          <h2 className="mb-5 text-center text-3xl font-bold text-white lg:text-[42px]">
            Connect With Our Experts
          </h2>

          <Line className="mx-auto mb-8 lg:mb-10" />

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-white">
                Name <span className="text-red-500">*</span>
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="h-14 w-full rounded-xl border border-[#3C4BBF60] bg-[#0F1327] px-5 text-white placeholder:text-gray-500 outline-none transition focus:border-[#2BB3FF]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-white">
                Company <span className="text-gray-400">(Optional)</span>
              </label>

              <input
                type="text"
                placeholder="Company name"
                className="h-14 w-full rounded-xl border border-[#3C4BBF60] bg-[#0F1327] px-5 text-white placeholder:text-gray-500 outline-none transition focus:border-[#2BB3FF]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-white">
                Mobile Number <span className="text-red-500">*</span>
              </label>

              <input
                type="tel"
                placeholder="Enter mobile number"
                className="h-14 w-full rounded-xl border border-[#3C4BBF60] bg-[#0F1327] px-5 text-white placeholder:text-gray-500 outline-none transition focus:border-[#2BB3FF]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-white">
                Email Address <span className="text-red-500">*</span>
              </label>

              <input
                type="email"
                placeholder="Enter email address"
                className="h-14 w-full rounded-xl border border-[#3C4BBF60] bg-[#0F1327] px-5 text-white placeholder:text-gray-500 outline-none transition focus:border-[#2BB3FF]"
              />
            </div>
          </div>

          <div className="mt-5">
            <label className="mb-2 block text-sm font-medium text-white">
              Service <span className="text-red-500">*</span>
            </label>

            <select className="h-14 w-full rounded-xl border border-[#3C4BBF60] bg-[#0F1327] px-5 text-white outline-none transition focus:border-[#2BB3FF]">
              <option>Select a service</option>
              <option>Website Development</option>
              <option>Website Designing</option>
              <option>SEO</option>
              <option>Digital Marketing</option>
              <option>Graphic Designing</option>
            </select>
          </div>

          <div className="mt-5">
            <label className="mb-2 block text-sm font-medium text-white">
              Description <span className="text-gray-400">(Optional)</span>
            </label>

            <textarea
              rows={5}
              placeholder="Tell us about your project..."
              className="w-full rounded-xl border border-[#3C4BBF60] bg-[#0F1327] p-5 text-white placeholder:text-gray-500 outline-none transition focus:border-[#2BB3FF]"
            />
          </div>

          <div className="mt-8 flex justify-center">
            <Button
              variant="filled"
              uppercase={false}
              className="cursor-pointer"
            >
              Submit Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
