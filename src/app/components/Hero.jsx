"use client";

import DownloadModal from "@/app/components/DownloadModal";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import Container from "@/app/components/Container";

export default function Hero() {
  // const [isOpen, setIsOpen] = useState(false);
  const [showDownload, setShowDownload] = useState(false);
  return (
    <section className="relative bg-black text-white overflow-hidden min-h-screen flex items-center pt-20 lg:pt-0">

      {/* Background SVG */}
      <Image
        src="/bg.svg"
        alt="background"
        fill
        className="object-cover opacity-15 z-0"
        priority
      />

      {/* 50/50 Grid Container */}
      <Container className="relative z-10 grid lg:grid-cols-2 items-center">

        {/* Left Content Half */}
        <div className="relative z-20 space-y-6 lg:space-y-8 py-10 lg:py-20 text-center lg:text-left">
          <h1 className="font-bold text-[48px] md:text-[60px] lg:text-[72px] leading-[1.1] lg:leading-[85px] tracking-[-0.02em] max-w-[684px] mx-auto lg:mx-0">
            {/* Highly Encrypted & <br /> Secure */}
            Stop Being Tracked. Start Chatting Securely.
          </h1>

          <p className="max-w-[585px] mx-auto lg:mx-0 text-white/70 text-[18px] lg:text-[22px] leading-[26px] lg:leading-[30px] font-normal">
            Experience double layer encrypted chats, calls, and
            file sharing, built for people who want real privacy
            in an always connected world.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
            <button className="w-full sm:w-auto h-[56px] px-10 rounded-full cursor-pointer bg-[#FE5800] duration-500 text-white text-[16px] font-bold hover:bg-[#ff6a1a] transition-all"
              onClick={() => setShowDownload(true)}
            >
              Download
            </button>

            <Link href="#howitworks" scroll={true}>
              <button className="w-full sm:w-auto h-[56px] cursor-pointer px-8 flex items-center justify-center gap-3 rounded-full border border-white/20 text-white text-[16px] hover:bg-white/5 transition-all">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-[12px]">
                  ▶
                </span>
                How it works
              </button>
            </Link>
          </div>
        </div>

        {/* Right Content Half - Phone Mockup */}
        <div className="relative flex justify-center lg:justify-end items-center h-[600px] sm:h-[680px] md:h-[780px] lg:h-[980px]">
          {/* On Desktop: We use absolute positioning to pull the phone 
            towards the center (left-[-15%]) to "close the gap" per your Figma files 
          */}
          <div className="absolute lg:relative w-[175%] sm:w-[165%] md:w-[160%] lg:w-[205%] xl:w-[215%] h-full left-1/2 -translate-x-1/2 lg:left-[-14%] lg:translate-x-0 xl:left-[-8%] z-10 opacity-100 lg:opacity-100 pointer-events-none lg:pointer-events-auto">
            <Image
              src="/iPhone.png"
              alt="App preview"
              fill
              priority
              className="object-contain object-center lg:object-right scale-[1.18] sm:scale-[1.16] md:scale-[1.18] lg:scale-[1.34] xl:scale-[1.42] lg:translate-x-16 xl:translate-x-20"
            />
          </div>
        </div>

      </Container>
      <DownloadModal
        open={showDownload}
        onClose={() => setShowDownload(false)}
      />
    </section>
  );
}