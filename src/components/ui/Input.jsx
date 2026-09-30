import React, { forwardRef } from "react";
import { cn } from "../../lib/utils";
import { cva } from "class-variance-authority";

const Input = forwardRef(
  (
    { className, type = "text", placeholder, name, value, onChange, ...props },
    ref,
  ) => {
    return (
      <input
        placeholder={placeholder}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={cn(
          // Base structure & sizing
          "flex h-12 w-full rounded-full border border-faint-border bg-[#f2f2f2f2] px-3 py-1 text-sm transition-colors shadow-none",
          // Interactive states (Focus ring & Placeholder)
          "placeholder:text-cool-stone focus:outline-1 text-body-lg hover:bg-faint-border",
          // Disabled state
          "disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);

export default Input;
