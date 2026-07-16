import React, { forwardRef } from "react";
import clsx from "clsx";

const AnalyticCard = forwardRef(
  ({ icon: Icon, title, value, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(
          "h-full flex flex-col items-center rounded-3xl border border-[#3C4BBF40] bg-gradient-to-b from-[#11162E] to-[#090B15] p-6 lg:p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#2BB3FF] hover:shadow-[0_0_40px_rgba(43,179,255,.15)]",
          className,
        )}
        {...props}
      >
        <div className="rounded-full bg-gradient-to-b from-[#2BB3FF20] to-[#3C4BBF20] p-4 lg:p-5">
          <Icon className="h-10 w-10 lg:h-12 lg:w-12 text-[#2BB3FF]" />
        </div>

        <h3
          className="
        mt-6
        text-center
        font-[Poppins]
        font-semibold
        leading-snug
        text-white
        text-xl
        lg:text-[22px]
       "
        >
          {title}
        </h3>

        <span
          className="
        mt-4
        bg-gradient-to-b
        from-[#2BB3FF]
        to-[#7EDCFF]
        bg-clip-text
        text-transparent
        font-bold
        text-4xl
        lg:text-[46px]
       "
        >
          {value}
        </span>
      </div>
    );
  },
);

export default AnalyticCard;
