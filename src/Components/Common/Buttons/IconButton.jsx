import React, { forwardRef } from "react";
import clsx from "clsx";

const sizes = {
  sm: "h-10 w-10",
  md: "h-12 w-12",
  lg: "h-14 w-14",
};

const variants = {
  default: {
    wrapper:
      "bg-gradient-to-r from-[#2BB3FF] to-[#3C4BBF] text-white shadow-[0_0_20px_rgba(43,179,255,.25)]",
    overlay: "bg-[#0D1226]",
    hoverShadow: "hover:shadow-[0_0_30px_rgba(43,179,255,.45)]",
  },

  filled: {
    wrapper:
      "border border-[#3C4BBF40] bg-[#11162E] text-[#2BB3FF] shadow-[0_0_15px_rgba(43,179,255,.15)]",
    overlay: "bg-gradient-to-r from-[#2BB3FF] to-[#3C4BBF]",
    hoverShadow: "hover:shadow-[0_0_25px_rgba(43,179,255,.45)]",
  },

  outline: {
    wrapper: "border border-[#2BB3FF] text-[#2BB3FF]",
    overlay: "bg-[#2BB3FF]",
    hoverShadow: "hover:shadow-[0_0_25px_rgba(43,179,255,.35)]",
  },

  ghost: {
    wrapper: "text-[#2BB3FF]",
    overlay: "bg-white/10",
    hoverShadow: "",
  },
};

const IconButton = forwardRef(
  (
    {
      icon: Icon,
      size = "md",
      variant = "default",
      className,
      disabled = false,
      ...props
    },
    ref,
  ) => {
    const currentSize = sizes[size];
    const currentVariant = variants[variant];

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={clsx(
          "group relative inline-flex items-center justify-center overflow-hidden rounded-full transition-all duration-300 hover:-translate-y-[2px] active:scale-95 disabled:pointer-events-none disabled:opacity-50",
          currentSize,
          currentVariant.wrapper,
          currentVariant.hoverShadow,
          className,
        )}
        {...props}
      >
        {/* Icon */}
        {Icon && (
          <Icon
            size={18}
            className="relative z-20 transition-all duration-300 group-hover:scale-110 group-hover:text-white"
          />
        )}

        {/* Sliding Layer */}
        <div
          className={clsx(
            "absolute left-1/2 top-1/2 z-10 h-[94%] w-[94%] -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-[170%] group-hover:rounded-none",
            currentVariant.overlay,
          )}
        />
      </button>
    );
  },
);

export default IconButton;
