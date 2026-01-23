import Image from "next/image";

export default function SecureCommunication() {
  return (
    <section className="relative w-full bg-black overflow-hidden py-24">
      <div className="relative max-w-[1280px] mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-16">
        
        {/* LEFT CONTENT - Forced z-20 to stay above background on mobile */}
        <div className="relative z-20 w-full lg:max-w-[600px] text-left">
          {/* Headline: Exact Figma Specs (40px, 400 weight, 100% leading) */}
          <h2 className="font-poppins text-[40px] font-normal leading-12 text-white max-w-[482px] tracking-tight">
            Highly Secure <br />
            Communication <br />
            Crafted for True Privacy
          </h2>

          <p className="mt-6 max-w-[405px] font-inter text-[15px] leading-[20.8px]  text-white/60">
            Experience encrypted messaging, private group chats,
            and secure file sharing built for people, teams, and
            businesses who want a fast, modern, and truly private
            communication app.
          </p>

          {/* Stats Section */}
          <div className="mt-10">
            <div className="flex items-center ">
                {/* EXACT GREEN ARROW SVG (No font padding) */}
              <svg 
                width="32" 
                height="32" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0"
              >
                <path 
                  d="M6 18L18 6M18 6H9M18 6V15" 
                  stroke="#00EB8D" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-white text-[38px] font-medium leading-none">65%</span>
              <div className="ml-2">
              <span className="text-white/50 text-[26px] font-normal leading-none ">
                higher attendance
              </span>
              </div>
            </div>
            <p className="mt-2 text-white/40 font-inter text-[12px] tracking-[-0.25px] ml-1">
              in secure chats, calls, and check‑ins.
            </p>
          </div>
        </div>

        {/* RIGHT IMAGE - Background behavior on mobile */}
        <div
          className="
            /* Mobile: Stays behind content */
            absolute 
            lg:relative 
            inset-0 
            lg:inset-auto
            w-full 
            flex 
            justify-end 
            items-center 
            pointer-events-none 
            z-10
            lg:z-0
          "
        >
          <div className="relative w-[340px] h-[240px] md:w-[480px] md:h-[320px] lg:mr-[-40px]">
            <Image
              src="/Layer 1.png"
              alt="WT Background Layer"
              fill
              priority
              className="
                object-contain
                transition-all duration-700 ease-out
                /* Mobile tweaks: faded and scaled behind text */
                opacity-30 
                scale-[1.4]
                translate-x-[15%]
                translate-y-[10%]
                /* Desktop tweaks: full visibility and original scale */
                lg:opacity-100 
                lg:scale-100
                lg:translate-x-0
                lg:translate-y-0
              "
            />
          </div>
        </div>

      </div>
    </section>
  );
}