import React from "react";

function CustomButton({ text, style }) {
  return (
    <button
      className={`${style} text-lg px-3 py-1 rounded-md font-bold border transition-all duration-300"
      type="button`}
    >
      {text}
    </button>
  );
}

export default CustomButton;
