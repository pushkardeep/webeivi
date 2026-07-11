import React, { useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// Components
import Line from "../../Common/Line";
import Button from "../../Common/Buttons/Button";

// Configs
const BLOGS = [
  {
    image: "/Images/blog-1.jpg",
    day: "17",
    month: "Feb",
    author: "Digital Marketing King",
    title: "Google Partner in India",
    description:
      "An Ultimate Guide To Choosing The Perfect Google Premier Partner in India!",
  },
  {
    image: "/Images/blog-2.jpg",
    day: "23",
    month: "May",
    author: "Digital Marketing King",
    title: "Best PPC Company in Delhi",
    description:
      "Boost your business with high-converting PPC campaigns managed by experienced marketing professionals.",
  },
  {
    image: "/Images/blog-3.jpg",
    day: "08",
    month: "Apr",
    author: "Digital Marketing King",
    title: "Top 10 Best Digital Marketing Agency in Delhi",
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
      <h2
        className="
          blogs-heading
          mx-auto
          mb-5
          w-fit
          bg-gradient-to-b
          from-white
          via-[#D8D8D8]
          to-[#4D4D4D]
          bg-clip-text
          text-transparent
          font-bold
          text-center
          text-4xl
          sm:text-5xl
          lg:text-[48px]
        "
      >
        CHECK OUT OUR BLOG
      </h2>

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
            <div
              className="
                group
                overflow-hidden
                rounded-2xl
                border
                border-[#3C4BBF30]
                bg-[#0C101F]
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-[#2BB3FF80]
              "
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="
                    h-[220px]
                    sm:h-[240px]
                    lg:h-[230px]
                    w-full
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-105
                  "
                />
              </div>

              {/* Content */}
              <div className="relative px-6 sm:px-8 pt-10 pb-8">
                {/* Timeline */}
                <div className="absolute left-10 sm:left-12 top-0 h-full w-[2px] bg-[#2BB3FF20]" />

                {/* Date */}
                <div
                  className="
                    absolute
                    left-4
                    sm:left-6
                    top-6
                    z-10
                    flex
                    h-14
                    w-14
                    sm:h-16
                    sm:w-16
                    flex-col
                    items-center
                    justify-center
                    rounded-full
                    bg-gradient-to-b
                    from-[#2BB3FF]
                    to-[#3C4BBF]
                    text-white
                    shadow-lg
                  "
                >
                  <span className="text-lg sm:text-xl font-bold leading-none">
                    {blog.day}
                  </span>

                  <span className="text-[10px] sm:text-xs uppercase">
                    {blog.month}
                  </span>
                </div>

                {/* Dot */}
                <div className="absolute bottom-6 left-[34px] sm:left-[42px] h-4 w-4 rounded-full bg-[#2BB3FF]" />

                <div className="ml-16 sm:ml-20">
                  <p className="font-[Poppins] text-sm sm:text-[15px] text-gray-400">
                    Posted by <span className="text-white">{blog.author}</span>
                  </p>

                  <h3
                    className="
                      mt-4
                      font-[Poppins]
                      font-bold
                      leading-tight
                      text-white
                      text-2xl
                      lg:text-[30px]
                    "
                  >
                    {blog.title}
                  </h3>

                  <p
                    className="
                      mt-5
                      font-[Poppins]
                      text-gray-400
                      text-base
                      lg:text-[17px]
                      leading-7
                      lg:leading-8
                    "
                  >
                    {blog.description}
                  </p>

                  <Button uppercase={false} className="mt-8 cursor-pointer">
                    Read Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blogs;
