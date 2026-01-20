"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import DownloadModal from "@/app/components/DownloadModal";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showDownload, setShowDownload] = useState(false);

  return (
    <header className="w-full h-[70px] border-b border-white/10 bg-black sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto h-full flex items-center justify-between px-6 md:px-10">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/Logo.svg"
            alt="WibeIT Logo"
            width={40}
            height={40}
            priority
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-10 text-[15px] text-white">
          <Link href="/#showcase" className="hover:opacity-80">Showcase</Link>
          <Link href="/#about" className="hover:opacity-80">About</Link>
          <Link href="/#features" className="hover:opacity-80">Features</Link>
          <Link href="/#blog" className="hover:opacity-80">Blog</Link>
        </nav>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-4">
          <span className="hidden md:block text-white/70 text-sm cursor-pointer">
            Support
          </span>

          <button
            onClick={() => setShowDownload(true)}
            className="bg-[#FE5800] hover:bg-[#ff6a1a] transition text-white font-bold text-sm px-6 py-2 rounded-full cursor-pointer"
          >
            Download
          </button>

          {/* HAMBURGER */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 w-6 h-6 justify-center"
          >
            <span className={`h-0.5 bg-white transition ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`h-0.5 bg-white transition ${isMenuOpen ? "opacity-0" : ""}`} />
            <span className={`h-0.5 bg-white transition ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden absolute top-[70px] left-0 w-full bg-black border-b border-white/10
        transition-all duration-400 overflow-hidden
        ${isMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <nav className="flex flex-col p-6 gap-2 text-white text-[15px]">
          {["showcase", "about", "features", "blog"].map((item) => (
            <Link
              key={item}
              href={`#${item}`}
              onClick={() => setIsMenuOpen(false)}
              className="py-3 px-4 rounded-lg hover:bg-white/5"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}

          <Link
            href="#support"
            onClick={() => setIsMenuOpen(false)}
            className="py-3 px-4 rounded-lg text-white/70 hover:bg-white/5"
          >
            Support
          </Link>
        </nav>
      </div>

      {/* DOWNLOAD MODAL */}
      <DownloadModal
        open={showDownload}
        onClose={() => setShowDownload(false)}
      />
    </header>
  );
}
