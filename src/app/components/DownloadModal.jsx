"use client";

import { FaGooglePlay, FaApple } from "react-icons/fa";
import { SiAppgallery } from "react-icons/si";
import { useEffect, useState } from "react";

export default function DownloadModal({ open, onClose }) {
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    if (!open) setClosing(false);
  }, [open]);

  if (!open) return null;

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      onClose();
      setClosing(false);
    }, 300);
  };

  return (
    <>
      {/* BACKDROP */}
      <div
        onClick={handleClose}
        className={`
          fixed inset-0 z-[90]
          bg-black/70 backdrop-blur-sm
          transition-opacity duration-300
          ${closing ? "opacity-0" : "opacity-100"}
        `}
      />

      {/* MODAL */}
      <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
        <div
          onClick={(e) => e.stopPropagation()}
          className={`
            w-full max-w-[420px]
            bg-[#0b0b0b]
            border border-white/10
            rounded-2xl
            p-6 sm:p-7
            text-white
            shadow-2xl
          `}
        >
          {/* TITLE */}
          <h2 className="font-inter text-[22px] font-semibold mb-1">
            Download WibeIT
          </h2>

          <p className="font-inter text-[14px] text-white/60 mb-6">
            Choose your platform to get started
          </p>

          {/* GOOGLE PLAY (PRIMARY) */}
          <a
            href="https://play.google.com/store/apps/details?id=com.wibeit"
            target="_blank"
            rel="noopener noreferrer"
            className="
               flex items-center justify-center gap-3
              w-full py-3 mb-3
              rounded-full
              border border-white/15
              text-white/90
              hover:bg-[#FE5800]
            "
          >
            <FaGooglePlay size={18} />
            Google Play
          </a>

          {/* APP STORE */}
          <a
            href="https://apps.apple.com/pk/app/wibeit/id6752349315"
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center justify-center gap-3
              w-full py-3 mb-3
              rounded-full
              border border-white/15
              text-white/90
              hover:bg-[#FE5800]
            "
          >
            <FaApple size={18} />
            App Store
          </a>

          {/* APP GALLERY */}
          <a
            href="https://appgallery.huawei.com/app/C115158819"
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center justify-center gap-3
              w-full py-3
              rounded-full
              border border-white/15
              text-white/90
              hover:bg-[#FE5800]
            "
          >
            <SiAppgallery size={18} />
            AppGallery
          </a>

          {/* CLOSE */}
          <button
            onClick={handleClose}
            className="mt-5 w-full text-center text-[13px] text-white/50 hover:text-white transition cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
}
