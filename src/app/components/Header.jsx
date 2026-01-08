"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full h-[70px] border-b border-white/10 bg-black sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto h-full flex items-center justify-between px-10">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href="/" scroll={true} className="flex items-center gap-2 cursor-pointer">
            <Image
              src="/Logo.svg"
              alt="WibeIT Logo"
              width={40}
              height={40}
              priority
            />
          </Link>
        </div>

        {/* Navigation - Desktop */}

        <nav className="hidden md:flex gap-10 font-[var(--font-inter)] text-[15px] leading-[20.8px] text-white">

          <Link href="#showcase" className="hover:opacity-80 cursor-pointer">
            Showcase
          </Link>
          <Link href="#about" className="hover:opacity-80 cursor-pointer">
            About
          </Link>
          <Link href="#features" className="hover:opacity-80 cursor-pointer">
            Features
          </Link>
          <Link href="#blog" className="hover:opacity-80 cursor-pointer">
            Blog
          </Link>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-6">
          <span className="text-white/70 text-sm hidden md:block cursor-pointer">
            Support
          </span>
          <button className="bg-orange-500  text-white font-bold text-sm px-6 py-2 rounded-full cursor-pointer hover:bg-[#ff6a1a] transition-all duration-500">
            Download
          </button>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5 w-6 h-6 justify-center"
            aria-label="Toggle menu"
          >
            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`md:hidden absolute top-[70px] left-0 w-full bg-black border-b border-white/10 transition-all duration-300 overflow-hidden ${isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <nav className="flex flex-col gap-2 p-6 font-[var(--font-inter)] text-[15px] leading-[20.8px] text-white">



          <Link
            href="#showcase"
            onClick={() => setIsOpen(false)}
            className="py-3 px-4 rounded-lg cursor-pointer transition-all duration-200 hover:bg-white/5 active:bg-white/10"
          >
            Showcase
          </Link>

          <Link
            href="#about"
            onClick={() => setIsOpen(false)}
            className="py-3 px-4 rounded-lg cursor-pointer transition-all duration-200 hover:bg-white/5 active:bg-white/10"
          >
            About
          </Link>

          <Link
            href="#blog"
            onClick={() => setIsOpen(false)}
            className="py-3 px-4 rounded-lg cursor-pointer transition-all duration-200 hover:bg-white/5 active:bg-white/10"
          >
            Blog
          </Link>

          <Link
            href="#features"
            onClick={() => setIsOpen(false)}
            className="py-3 px-4 rounded-lg cursor-pointer transition-all duration-200 hover:bg-white/5 active:bg-white/10"
          >
            Features
          </Link>
          <Link
            href="#support"
            onClick={() => setIsOpen(false)}
            className="py-3 px-4 rounded-lg cursor-pointer transition-all duration-200 text-white/70 hover:bg-white/5 active:bg-white/10"
          >
            Support
          </Link>

        </nav>
      </div>
    </header>
  );
}