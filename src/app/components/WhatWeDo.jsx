import Image from "next/image";

export default function WhatWeDo() {
  return (
    <section
      id="what-we-do"
      className="w-full bg-white py-20 lg:py-28"
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        
        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

       
{/* LEFT CONTENT */}
<div className="max-w-[650px]">
  
  {/* HEADING */}
  <h3 className="font-inter text-[56px] leading-[58px] font-semibold tracking-[-0.5px] text-black mb-6">
    WHAT WE DO
  </h3>

  {/* PARAGRAPH */}
  <p className="font-inter text-[16px] leading-[26px] text-black/70 max-w-[466px] mb-12">
    WibeIT builds a calm, highly encrypted communication layer
    for people who want real privacy in a noisy digital world.
  </p>

  {/* LIST */}
  <ul className="space-y-6">
    {[
      "Provide Double-Layer End-To-End Encryption For Chats, Calls, And Shared Files.",
      "Keep Conversations Private With A Design That Collects Minimal Data And Avoids Tracking.",
      "Offer Fast, Reliable 1-To-1 And Group Messaging That Feels Modern And Smooth.",
      "Deliver The Same Secure Experience Across Android And iOS So Your Privacy Follows You Everywhere.",
    ].map((item, index) => (
      <li
        key={index}
        className="flex items-center gap-4 min-h-[50px]"
      >
        {/* ICON */}
        <div className="relative w-[31px] h-[30px] flex-shrink-0">
          <Image
            src="/checkmark.svg"
            alt="Check"
            fill
            className="object-contain"
          />
        </div>

        {/* TEXT */}
        <p className="font-inter text-[15px] leading-[24px] text-black/80 max-w-[520px]">
          {item}
        </p>
      </li>
    ))}
  </ul>
</div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-[320px] sm:w-[360px] lg:w-[420px] aspect-[420/362] rounded-[24px] bg-black flex items-center justify-center shadow-xl">
              <Image
                src="/Logo.svg"
                alt="WibeIT Logo"
                width={220}
                height={220}
                className="object-contain"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
