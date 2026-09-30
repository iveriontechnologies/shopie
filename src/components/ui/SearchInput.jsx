import React, { forwardRef } from "react";
import { cn } from "../../lib/utils";
import { Search } from "lucide-react";

const SearchInput = forwardRef(
  ({
    className,
    type = "text",
    placeholder,
    name,
    value,
    onChange,
    ...props
  }) => {
    return (
      <div className="relative w-full">
        <Search
          size={20}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-gray"
        />
        <input
          placeholder={placeholder}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className={cn(
            "h-16 w-full rounded-full border border-faint-border bg-#fffff px-4 py-1 pl-11 outline-none transition shadow-lg",
            // // Interactive states (Focus ring & Placeholder)
            // "focus:outline-2",
            className,
          )}
        />
      </div>
    );
  },
);

export default SearchInput;
