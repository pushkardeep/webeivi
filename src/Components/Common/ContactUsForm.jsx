import React, { forwardRef } from "react";
import clsx from "clsx";

// Components
import Line from "./Line";
import Button from "./Buttons/Button";

const ContactUsForm = forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={clsx(
        "w-full xl:w-[560px] bg-gradient-to-b from-[#11162E] to-[#090B15] border border-[#3C4BBF40] rounded-[24px] lg:rounded-[30px] p-6 sm:p-8 lg:p-10 shadow-[0_0_50px_rgba(43,179,255,.15)]",
        className,
      )}
      {...props}
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
        <Button variant="filled" uppercase={false} className="cursor-pointer">
          Submit Now
        </Button>
      </div>
    </div>
  );
});

export default ContactUsForm;
