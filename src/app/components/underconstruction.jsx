"use client";

import { useEffect, useState } from "react";

export default function UnderConstruction() {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);

  const progress = 80; // 🔥 completion %

  useEffect(() => {
    setOpen(true);
  }, []);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      setOpen(false);
      setClosing(false);
    }, 300);
  };

  if (!open) return null;

  return (
    <>
      {/* BACKDROP */}
      <div
        className={`
          fixed inset-0 z-40 bg-black/40 backdrop-blur-sm
          transition-opacity duration-300
          ${closing ? "opacity-0" : "opacity-100"}
        `}
      />

      {/* MODAL */}
      <div className="fixed inset-0 z-50 flex items-center justify-center px-6">
        <div
          className={`
            relative
            bg-white max-w-[760px] w-full rounded-2xl
            p-8 sm:p-10 shadow-xl
            transform transition-all duration-300
            ${closing
              ? "opacity-0 scale-95 translate-y-2"
              : "opacity-100 scale-100 translate-y-0"}
          `}
        >
          {/* MAIN CONTENT */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_80px] gap-8 items-center">

            {/* LEFT CONTENT */}
            <div className="text-center md:text-left">
              <h2 className="font-inter text-[36px] sm:text-[42px] font-semibold text-black mb-6">
                🚧 Under Construction
              </h2>

              <p className="font-inter text-[18px] leading-[30px] text-black/70 mb-4">
                We’re carefully crafting the next parts of WibeIT's Frontend.
                The core experience is already in place, while advanced features,
                refinements, and enhancements are actively being built.
              </p>

              <p className="font-inter text-[16px] leading-[26px] text-black/60 mb-6">
                More improvements in responsiveness, new features,
                and additional functionality are currently in progress.
              </p>

              <p className="font-inter text-[14px] text-black/45 mb-8">
                Upcoming updates will be rolled out in the coming days.
              </p>

              <button
                onClick={handleClose}
                className="
                  inline-flex items-center justify-center
                  rounded-full bg-[#FE5800] text-white
                  px-10 py-3 text-[15px] font-medium
                  hover:bg-[#ff6a1a]
                  transition
                "
              >
                OK, Continue
              </button>
            </div>

            {/* RIGHT PROGRESS */}
            <div className="flex flex-col items-center justify-center gap-3">

              {/* PERCENT */}
              <span className="font-inter text-[14px] text-black/60">
                {progress}% Complete
              </span>

              {/* BAR */}
              <div className="w-[8px] h-[180px] bg-black/10 rounded-full overflow-hidden">
                <div
                  className="bg-[#FE5800] w-full rounded-full transition-all duration-700"
                  style={{ height: `${progress}%` }}
                />
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
