import React, { forwardRef } from "react";
import clsx from "clsx";

// Components
import Button from "../Buttons/Button";

const ServiceCard = forwardRef(
  (
    { icon: Icon, title, description, points = [], className, ...props },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={clsx(
          "rounded-[24px] lg:rounded-[28px] border border-[#3C4BBF40] bg-gradient-to-b from-[#10142B] to-[#090B15] p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:-translate-y-2 hover:border-[#2BB3FF] hover:shadow-[0_0_45px_rgba(43,179,255,.15)]",
          className,
        )}
        {...props}
      >
        {/* Icon */}
        <div className="mb-6 flex justify-center lg:mb-8">
          <div
            className="
              rounded-full
              bg-gradient-to-b
              from-[#2BB3FF20]
              to-[#3C4BBF20]
              p-4
              lg:p-5
            "
          >
            <Icon className="h-10 w-10 text-[#2BB3FF] lg:h-12 lg:w-12" />
          </div>
        </div>

        {/* Title */}
        <h3
          className="
            text-center
            font-[Poppins]
            text-2xl
            font-bold
            text-white
            sm:text-[28px]
            lg:text-[30px]
          "
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className="
            mt-5
            text-center
            text-base
            leading-7
            text-gray-300
            lg:mt-6
            lg:text-[17px]
            lg:leading-8
          "
        >
          {description}
        </p>

        {/* Divider */}
        <div className="my-6 h-px bg-gradient-to-r from-transparent via-[#3C4BBF] to-transparent lg:my-8" />

        {/* Points */}
        <div className="space-y-3 lg:space-y-4">
          {points.map((point, index) => (
            <div
              key={index}
              className="
                flex
                items-start
                gap-3
                text-base
                text-gray-300
                lg:text-[17px]
              "
            >
              <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[#2BB3FF]" />
              <span>{point}</span>
            </div>
          ))}
        </div>
      </div>
    );
  },
);

export default ServiceCard;
