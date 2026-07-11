import React, { useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// Icons
import {
  Globe,
  Code2,
  Smartphone,
  Palette,
  Megaphone,
  MapPinned,
} from "lucide-react";

// Components
import Line from "../../Common/Line";

const SERVICES = [
  {
    icon: Globe,
    title: "Website Designing",
    description:
      "Obtain our professional web designing services to create an impressive business page and generate more customers for your business.",
    points: [
      "Static Website Designing",
      "Dynamic Website Designing",
      "Ecommerce Website Designing",
      "Business Website Design",
      "Landing Page Design",
    ],
  },
  {
    icon: Code2,
    title: "Website Development",
    description:
      "Build a robust online presence with our advanced website development services using modern technologies and scalable solutions.",
    points: [
      "PHP Website Development",
      "React Website Development",
      "Custom Website Development",
      "Payment Gateway Integration",
      "CMS Development",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Create powerful Android & iOS applications that deliver exceptional user experiences and help grow your business.",
    points: [
      "Android Development",
      "iOS Development",
      "Flutter Development",
      "React Native Apps",
      "Hybrid Applications",
    ],
  },
  {
    icon: Palette,
    title: "Graphic Designing",
    description:
      "Grasp the attention of your target audience towards your business by sharing outstanding graphics and content across diverse social media platforms.",
    points: [
      "Graphic Designing",
      "Logo Designing",
      "Social Media Post Design",
      "Business Explainer Video",
    ],
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Enable your customers to know about your unique business or brand with our digital marketing services, including business promotion and advertising campaigns.",
    points: [
      "Search Engine Optimization",
      "Google Business Listing SEO",
      "E-Commerce SEO",
      "Google Ads",
    ],
  },
  {
    icon: MapPinned,
    title: "Google Promotion",
    description:
      "Validate the authenticity of your business by listing it on Google to facilitate easy interaction and stronger connections with your target audience.",
    points: [
      "Google Business Page",
      "Google Map Listing",
      "Google Listing Promotion",
      "Google Listing Ads",
    ],
  },
];

function TopServices() {
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          // markers: true,
        },
      });

      tl.from(".services-heading span", {
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
      })
        .from(
          ".services-line",
          {
            scaleX: 0,
            transformOrigin: "center",
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.4",
        )
        .from(
          cardsRef.current.querySelectorAll(".service-card"),
          {
            y: 80,
            opacity: 0,
            scale: 0.9,
            duration: 0.8,
            stagger: 0.15,
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
      {/* Background */}
      <img
        src="/Images/Bg_1.png"
        alt="Background"
        className="absolute inset-0 z-0 h-full w-full object-cover opacity-10"
      />

      {/* Heading */}
      <div className="services-heading relative z-10 mb-5 flex flex-col items-center leading-none text-center">
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
          TOP SERVICES
        </span>
      </div>

      {/* Accent Line */}
      <Line className="services-line relative z-10 mx-auto mb-12 lg:mb-20" />

      {/* Cards */}
      <div
        ref={cardsRef}
        className="
        relative
        z-10
        mx-auto
        grid
        max-w-[1450px]
        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-3
        gap-8
        lg:gap-10
        px-6
        sm:px-10
        lg:px-20
      "
      >
        {SERVICES.map((service, index) => {
          const Icon = service.icon;

          return (
            <div className="service-card">
              <div
                key={index}
                className="
              rounded-[24px]
              lg:rounded-[28px]
              border
              border-[#3C4BBF40]
              bg-gradient-to-b
              from-[#10142B]
              to-[#090B15]
              p-6
              sm:p-8
              lg:p-10
              transition-all
              duration-300
              hover:-translate-y-2
              hover:border-[#2BB3FF]
              hover:shadow-[0_0_45px_rgba(43,179,255,.15)]
            "
              >
                {/* Icon */}
                <div className="mb-6 lg:mb-8 flex justify-center">
                  <div
                    className="
                  service-icon
                  rounded-full
                  bg-gradient-to-b
                  from-[#2BB3FF20]
                  to-[#3C4BBF20]
                  p-4
                  lg:p-5
                "
                  >
                    <Icon className="h-10 w-10 lg:h-12 lg:w-12 text-[#2BB3FF]" />
                  </div>
                </div>

                {/* Title */}
                <h3
                  className="
                service-title
                text-center
                font-[Poppins]
                font-bold
                text-white
                text-2xl
                sm:text-[28px]
                lg:text-[30px]
              "
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className="
                service-description
                mt-5
                lg:mt-6
                text-center
                text-gray-300
                text-base
                lg:text-[17px]
                leading-7
                lg:leading-8
              "
                >
                  {service.description}
                </p>

                {/* Divider */}
                <div className="service-divider my-6 lg:my-8 h-px bg-gradient-to-r from-transparent via-[#3C4BBF] to-transparent" />

                {/* List */}
                <div className="space-y-3 lg:space-y-4">
                  {service.points.map((point, i) => (
                    <div
                      key={i}
                      className="
                    service-point
                    flex
                    items-start
                    gap-3
                    text-gray-300
                    text-base
                    lg:text-[17px]
                  "
                    >
                      <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[#2BB3FF]" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default TopServices;
