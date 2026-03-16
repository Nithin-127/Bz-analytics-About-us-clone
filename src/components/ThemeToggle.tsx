"use client";

import React from "react";

export default function ThemeToggle() {
  return (
    <div className="fixed left-6 bottom-6 z-30 animate-float">
      <button
        onClick={() => {
          if (typeof window !== "undefined" && (window as any).toggleTheme) {
            (window as any).toggleTheme();
          }
        }}
        className="group px-2 py-3 border border-white bg-black text-white text-sm font-bold relative overflow-hidden transition-all duration-300 hover:scale-105"
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          lineHeight: "1",
        }}
      >
        {/* Text */}
        <span className="relative z-10 font-extrabold transition-colors duration-300 group-hover:text-[#f5900d]">
          Light/Dark
        </span>

        {/* Hover animation */}
        <span className="absolute left-1/2 top-1/2 h-0 w-[150%] -translate-x-1/2 -translate-y-1/2 -rotate-[25deg] bg-white transition-all duration-700 ease-out group-hover:h-[450%]"></span>
      </button>
    </div>
  );
}