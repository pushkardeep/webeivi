import React, { forwardRef } from "react";
import clsx from "clsx";

// CONFIGS
const sizes = {
  sm: {
    line: "w-20 h-[2px]",
    gap: "gap-2",
    dot: "w-2",
  },

  md: {
    line: "w-28 h-[3px]",
    gap: "gap-3",
    dot: "w-3",
  },

  lg: {
    line: "w-36 h-[3px]",
    gap: "gap-4",
    dot: "w-4",
  },
};

const Line = forwardRef(({ size = "lg", className, ...props }, ref) => {
  const currentSize = sizes[size];

  return (
    <div
      ref={ref}
      className={clsx(
        "relative overflow-hidden rounded-full bg-[#2BB3FF]",
        currentSize.line,
        className,
      )}
      {...props}
    >
      <div
        className={clsx(
          "accent_line absolute top-0 left-0 flex h-full items-center",
          currentSize.gap,
        )}
      >
        <div
          className={clsx("h-full rounded-full bg-black", currentSize.dot)}
        />
        <div
          className={clsx("h-full rounded-full bg-black", currentSize.dot)}
        />
      </div>
    </div>
  );
});

export default Line;
