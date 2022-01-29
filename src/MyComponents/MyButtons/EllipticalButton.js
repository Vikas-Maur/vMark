import React from "react";

export default function EllipticalButton({ children, className, onClick }) {
  return (
    <button
      onClick={onClick}
      className={
        "border border-neutral-700 w-5/6 rounded-full py-3 px-4 mb-3 flex items-center text-white " +
        (className || "")
      }
    >
      {children}
    </button>
  );
}
