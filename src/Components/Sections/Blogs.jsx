import React, { useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// Components
import Line from "../Common/Line";
import Button from "../Common/Buttons/Button";
import BlogCard from "../Common/Cards/BlogCard";

// Configs
const BLOGS = [
  {
    image: "https://picsum.photos/600/400?random=1",
    day: "17",
    month: "Feb",
    author: "WEBEIVI Agency",
    title: "Google Partner in India",
    description:
      "An Ultimate Guide To Choosing The Perfect Google Premier Partner in India!",
  },
  {
    image: "https://picsum.photos/600/400?random=2",
    day: "23",
    month: "May",
    author: "WEBEIVI Agency",
    title: "Best PPC Company in Delhi",
    description:
      "Boost your business with high-converting PPC campaigns managed by experienced marketing professionals.",
  },
  {
    image: "https://picsum.photos/600/400?random=3",
    day: "08",
    month: "Apr",
    author: "WEBEIVI Agency",
    title: "Top 10 Best Digital Marketing Agency",
    description:
      "Discover the leading digital marketing agencies and choose the perfect partner for your business growth.",
  },
];

function Blogs() {
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

      tl.from(".blogs-heading", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })
        .from(
          ".blogs-line",
          {
            scaleX: 0,
            transformOrigin: "center",
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.4",
        )
        .from(
          ".blog-card",
          {
            y: 80,
            opacity: 0,
            scale: 0.92,
            stagger: 0.15,
            duration: 0.8,
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
      <div className="blogs-heading relative z-10 mb-5 flex flex-col items-center leading-none text-center">
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
          CHECK OUT
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
          OUR BLOG
        </span>
      </div>

      {/* Accent Line */}
      <Line className="blogs-line mx-auto mb-12 lg:mb-20" />

      {/* Cards */}
      <div
        className="
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
        {BLOGS.map((blog, index) => (
          <div key={index} className="blog-card overflow-hidden rounded-2xl">
            {/* Actual Card */}
            <BlogCard
              image={blog.image}
              day={blog.day}
              month={blog.month}
              author={blog.author}
              title={blog.title}
              description={blog.description}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blogs;
