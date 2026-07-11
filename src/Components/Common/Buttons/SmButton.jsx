import React, { forwardRef } from "react";
import clsx from "clsx";

const sizes = {
  sm: "h-[24px] text-[14px]",
  md: "h-[27px] text-[16px]",
  lg: "h-[33px] text-[18px]",
};

const SmButton = forwardRef(
  ({ children, size = "md", className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={clsx(
          "group overflow-hidden font-[Poppins] font-medium text-gray-300 transition hover:text-white",
          sizes[size],
          className,
        )}
        {...props}
      >
        <div className="transition-transform duration-300 ease-in-out group-hover:-translate-y-1/2">
          <span className="flex h-full items-center">{children}</span>
          <span className="flex h-full items-center">{children}</span>
        </div>
      </button>
    );
  },
);

export default SmButton;
