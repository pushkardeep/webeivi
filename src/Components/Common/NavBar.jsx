import React, { useState, useRef, forwardRef } from "react";
import { Link } from "react-router";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP); // register the hook to avoid React version discrepancies

// Icons
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

import { Phone, Mail, Copy, Menu, X } from "lucide-react";

// Components
import SmButton from "./Buttons/SmButton";
import CopyButton from "./Buttons/CopyButton";

const SOCIAL_LINKS = [
  {
    icon: FaFacebookF,
    path: "https://facebook.com",
  },
  {
    icon: FaXTwitter,
    path: "https://x.com",
  },
  {
    icon: FaLinkedinIn,
    path: "https://linkedin.com",
  },
  {
    icon: FaInstagram,
    path: "https://instagram.com",
  },
];

// Configs
const NAV_LINKS = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About Us",
    path: "/about",
  },
  {
    label: "Our Services",
    path: "/services",
  },
  {
    label: "Blogs",
    path: "/blogs",
  },
  {
    label: "Contact Us",
    path: "/contact",
  },
];

const NavBar = forwardRef(({ className, ...props }, ref) => {
  const topBarRef = useRef(null);
  const navRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(topBarRef.current, {
      y: -40,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
    }).from(
      navRef.current,
      {
        y: -30,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
      },
      "-=0.25",
    );
  });

  return (
    <div
      ref={ref}
      className={`relative w-ful h-fit overflow-hidden ${className}`}
    >
      {/* TOP BAR */}
      <div
        ref={topBarRef}
        className="hidden lg:block relative z-50 w-full border-b border-[#3C4BBF40]"
      >
        <div className="mx-auto flex h-12 items-center justify-between px-14">
          {/* LEFT */}
          <div className="flex items-center gap-6 text-[14px] font-[Poppins] text-gray-300">
            {/* PHONE */}
            <CopyButton icon={Phone}>+91 98765 43210</CopyButton>

            {/* EMAIL */}
            <CopyButton icon={Mail}>info@webivifam.com</CopyButton>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-6 text-[14px] font-[Poppins] text-gray-300">
            {/* SOCIAL LINKS */}
            <div className="flex items-center gap-4 text-[18px] text-gray-300">
              {SOCIAL_LINKS.map(({ icon: Icon, path }, index) => (
                <SmButton key={index} className="cursor-pointer">
                  <div className="p-1">
                    <Icon />
                  </div>
                </SmButton>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* NAV BAR */}
      <nav ref={navRef} className="relative z-50 w-full h-fit">
        {/* MAIN */}
        <div className="flex items-center justify-between px-6 lg:px-14 py-5">
          {/* LOGO */}
          <img
            src="/Images/Logo.png"
            alt="Logo"
            className="w-12 lg:w-14 object-contain"
          />

          {/* NAV LINKS */}
          <div className="hidden lg:flex items-center gap-12">
            {NAV_LINKS.map(({ label, path }, index) => (
              <SmButton key={index} className="cursor-pointer">
                {label}
              </SmButton>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden text-white"
          >
            <Menu size={30} />
          </button>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-[#3C4BBF] to-transparent opacity-60"></div>
      </nav>

      <div
        className={`
        fixed top-0 right-0 z-[100]
        h-screen w-72
        bg-[#050505]
        border-l border-[#3C4BBF40]
        transition-transform duration-500
        ${isOpen ? "translate-x-0" : "translate-x-full"}
      `}
      >
        <div className="flex items-center justify-between p-6">
          <img src="/Images/Logo.png" className="w-12" alt="" />

          <button onClick={() => setIsOpen(false)} className="text-white">
            <X size={28} />
          </button>
        </div>

        <div className="mt-10 flex flex-col">
          {NAV_LINKS.map(({ label }) => (
            <button
              key={label}
              className="px-8 py-4 text-left text-white hover:bg-[#3C4BBF20] transition"
              onClick={() => setIsOpen(false)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-50 bg-black/50 lg:hidden"
        />
      )}
    </div>
  );
});

export default NavBar;
