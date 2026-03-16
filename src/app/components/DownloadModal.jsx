"use client";

import { FaGooglePlay, FaApple } from "react-icons/fa";
import { SiAppgallery } from "react-icons/si";

export default function DownloadModal({ open, onClose }) {
  // If not open, we stop everything right here. No delay.
  if (!open) return null;

  return (
    <>
      {/* BACKDROP - Reduced blur and removed exit transitions */}
      <div
        onClick={onClose}
        className="fixed inset-0 z-[90] bg-black/60 backdrop-blur-[2px] transition-opacity duration-200"
      />

      {/* MODAL */}
      <div className="fixed inset-0 z-[100] flex items-center justify-center px-6 pointer-events-none">
        <div
          onClick={(e) => e.stopPropagation()}
          className="
            pointer-events-auto
            w-full max-w-[420px]
            bg-[#0b0b0b]
            border border-white/10
            rounded-2xl
            p-6 sm:p-7
            text-white
            shadow-2xl
          "
        >
          {/* TITLE */}
          <h2 className="font-inter text-[22px] font-semibold mb-1">
            Download WibeIT
          </h2>

          <p className="font-inter text-[14px] text-white/60 mb-6">
            Choose your platform to get started
          </p>

          {/* BUTTONS - Hover transitions kept smooth */}
          <div className="space-y-3">
            <a
              href="https://play.google.com/store/apps/details?id=com.wibeit"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-3 rounded-full border border-white/15 text-white/90 hover:bg-[#FE5800] hover:border-[#FE5800] transition-colors duration-300"
            >
              <FaGooglePlay size={18} />
              Google Play
            </a>

            <a
              href="https://apps.apple.com/pk/app/wibeit/id6752349315"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-3 rounded-full border border-white/15 text-white/90 hover:bg-[#FE5800] hover:border-[#FE5800] transition-colors duration-300"
            >
              <FaApple size={18} />
              App Store
            </a>

            <a
              href="https://appgallery.huawei.com/app/C115158819"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-3 rounded-full border border-white/15 text-white/90 hover:bg-[#FE5800] hover:border-[#FE5800] transition-colors duration-300"
            >
              <SiAppgallery size={18} />
              AppGallery
            </a>
          </div>

          {/* CLOSE */}
          <button
            onClick={onClose}
            className="mt-5 w-full text-center text-[13px] text-white/50 hover:text-white transition-colors duration-300 cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
}