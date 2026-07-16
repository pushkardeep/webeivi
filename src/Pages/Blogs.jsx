import React, { useRef } from "react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

// Components
import Line from "../Components/Common/Line";
import NavBar from "../Components/Sections/Common/NavBar";
import PageHeading from "../Components/Common/PageHeading";
import Footer from "../Components/Sections/Common/Footer";
import Button from "../Components/Common/Buttons/Button";
import BlogCard from "../Components/Common/Cards/BlogCard";

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
  const pageRef = useRef();

  useGSAP(
    () => {
      // ===========================
      // Heading Animation
      // ===========================
      gsap
        .timeline()
        .from(".blogs-title", {
          y: 60,
          opacity: 0,
          duration: 0.8,
          delay: 0.2,
          ease: "power3.out",
        })
        .from(
          ".blogs-line",
          {
            scaleX: 0,
            transformOrigin: "center",
            duration: 0.5,
            ease: "power3.out",
          },
          "-=0.35",
        );

      // ===========================
      // Cards Animation
      // ===========================
      gsap.utils.toArray(".blog-card").forEach((card, index) => {
        gsap.from(card, {
          y: 70,
          opacity: 0,
          scale: 0.95,
          duration: 0.8,
          delay: index * 0.12, // each card starts 0.12s after the previous
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            once: true,
          },
        });
      });
    },
    { scope: pageRef },
  );

  return (
    <div ref={pageRef} className="w-full relative overflow-hidden bg-black">
      <div className="w-full min-h-fit relative overflow-hidden">
        <NavBar />
        <PageHeading title={"BLOGS"} />

        {/* HERO  */}
        <section className="relative overflow-hidden py-16">
          {/* Heading */}
          <h2
            className="
            blogs-title
            mb-5
            w-fit
            mx-auto
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
            LATEST BLOGS
          </h2>

          {/* Accent Line */}
          <div className="blogs-line w-fit mx-auto mb-12 lg:mb-20">
            <Line />
          </div>

          {/* Cards */}
          <div
            className="
            blogs-grid
            mx-auto
            max-w-[1450px]
            grid
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
              <div
                key={index}
                className="blog-card overflow-hidden rounded-2xl"
              >
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
      </div>
      <Footer />
    </div>
  );
}

export default Blogs;
