import React, { forwardRef } from "react";
import clsx from "clsx";

// Icons
import { Copy } from "lucide-react";

const sizes = {
  sm: {
    wrapper: "gap-2 text-[13px]",
    icon: "h-4 w-4",
    copy: "h-3.5 w-3.5",
  },

  md: {
    wrapper: "gap-2 text-[15px]",
    icon: "h-4.5 w-4.5",
    copy: "h-4 w-4",
  },

  lg: {
    wrapper: "gap-3 text-[17px]",
    icon: "h-5 w-5",
    copy: "h-4.5 w-4.5",
  },
};

const CopyButton = forwardRef(
  ({ icon: Icon, children, value, size = "sm", className, ...props }, ref) => {
    const currentSize = sizes[size];

    const handleCopy = async () => {
      try {
        await navigator.clipboard.writeText(value);
        alert("Copied to clipboard!");
      } catch (err) {
        console.error(err);
      }
    };

    return (
      <button
        ref={ref}
        onClick={handleCopy}
        className={clsx(
          "relative group flex items-center text-gray-300 transition hover:text-white cursor-pointer overflow-hidden",
          currentSize.wrapper,
          className,
        )}
        {...props}
      >
        {Icon && (
          <Icon className={clsx(currentSize.icon, "text-[#2BB3FF] shrink-0")} />
        )}

        <span>{children}</span>
        <Copy
          className={clsx(
            currentSize.copy,
            "opacity-0 -translate-x-1 text-[#2BB3FF] transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100",
          )}
        />

        <hr className="absolute w-full bottom-0 -translate-x-[102%] group-hover:-translate-x-[0%] transition-all duration-200 ease-in-out" />
      </button>
    );
  },
);

export default CopyButton;
