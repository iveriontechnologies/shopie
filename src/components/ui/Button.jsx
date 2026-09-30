import React from "react";
import { cn } from "../../lib/utils.js";
import { cva } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full outline-none font-medium text-body focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 cursor-pointer",

  {
    variants: {
      variant: {
        default:
          "bg-shop-violet text-white  hover:shadow-none transition-all duration-300 shadow-lg",
        secondary: "bg-black text-white shadow-2xl ",
      },

      size: {
        default: "h-8 gap-1.5 px-2.5",
        xs: "h-6 gap-1 px-2 text-xs",
        sm: "h-7 gap-1 px-2.5",
        lg: "h-12 gap-1.5 px-2.5",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const Button = ({
  className,
  variant = "default",
  size,
  children,
  ...props
}) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
