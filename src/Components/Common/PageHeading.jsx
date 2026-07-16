import React, { forwardRef, useRef } from "react";
import { Link } from "react-router";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

// Components
import Line from "./Line";

const PageHeading = forwardRef(({ title, className, ...props }, ref) => {
  const heroRef = useRef();

  const setRefs = (el) => {
    heroRef.current = el;

    if (!ref) return;

    if (typeof ref === "function") {
      ref(el);
    } else {
      ref.current = el;
    }
  };

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.from(".page-title", {
        y: 70,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })
        .from(
          ".page-breadcrumb",
          {
            y: 20,
            opacity: 0,
            duration: 0.5,
            ease: "power3.out",
          },
          "-=0.45",
        )
        .from(
          ".page-line",
          {
            scaleX: 0,
            transformOrigin: "center",
            duration: 0.5,
            ease: "power3.out",
          },
          "-=0.3",
        );
    },
    { scope: heroRef },
  );

  return (
    <section
      ref={setRefs}
      className={`relative mx-auto flex flex-col items-center px-6 py-12 text-center ${className}`}
      {...props}
    >
      <h1
        className="
          page-title
          font-[Poppins]
          text-4xl
          font-bold
          bg-gradient-to-b
          from-white
          to-[#4D4D4D]
          bg-clip-text
          text-transparent
          sm:text-5xl
          lg:text-[64px]
        "
      >
        {title.toUpperCase()}
      </h1>

      <div className="page-breadcrumb mt-5 flex items-center gap-3 text-sm sm:text-base">
        <Link
          to="/"
          className="cursor-pointer text-gray-400 transition hover:text-[#2BB3FF]"
        >
          Home
        </Link>

        <span className="text-[#2BB3FF]">/</span>

        <span className="font-medium text-white">{title || "Title"}</span>
      </div>

      <div className="page-line mt-8">
        <Line />
      </div>
    </section>
  );
});

export default PageHeading;
