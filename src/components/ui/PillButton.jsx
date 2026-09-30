import React from "react";

const PillButton = ({ image, name, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex shrink-0 items-center gap-4 rounded-full border border-faint-border bg-white py-2 pl-4 pr-4 shadow-sm cursor-pointer hover:bg-canvas-mist"
    >
      <div className="h-7 w-7 overflow-hidden rounded-full">
        <img src={image} alt={name} className="h-7 w-7 object-cover" />
      </div>
      <span className="text-sm font-medium">{name}</span>
    </button>
  );
};

export default PillButton;
