import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-black text-white overflow-hidden min-h-screen flex items-center pt-20 lg:pt-0">
      
      {/* Background SVG */}
      <Image
        src="/bg.svg"
        alt="background"
        fill
        className="object-cover opacity-20 z-0"
        priority
      />

      {/* 50/50 Grid Container */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 items-center">
        
        {/* Left Content Half */}
        <div className="relative z-20 space-y-6 lg:space-y-8 py-10 lg:py-20 text-center lg:text-left">
          <h1 className="font-bold text-[48px] md:text-[60px] lg:text-[72px] leading-[1.1] lg:leading-[85px] tracking-[-0.02em] max-w-[684px] mx-auto lg:mx-0">
            Highly Encrypted & <br /> Secure
          </h1>

          <p className="max-w-[585px] mx-auto lg:mx-0 text-white/70 text-[18px] lg:text-[22px] leading-[26px] lg:leading-[30px] font-normal">
            Experience double layer encrypted chats, calls, and
            file sharing, built for people who want real privacy
            in an always connected world.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
            <button className="w-full sm:w-auto h-[56px] px-10 rounded-full cursor-pointer bg-[#FE5800] duration-500 text-white text-[16px] font-bold hover:bg-[#ff6a1a] transition-all">
              Download
            </button>

            <button className="w-full sm:w-auto h-[56px] cursor-pointer px-8 flex items-center justify-center gap-3 rounded-full border border-white/20 text-white text-[16px] hover:bg-white/5 transition-all">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-[12px]">
                ▶
              </span>
              How it works
            </button>
          </div>
        </div>

        {/* Right Content Half - Phone Mockup */}
        <div className="relative flex justify-end items-center h-[500px] md:h-[700px] lg:h-[900px]">
          {/* On Desktop: We use absolute positioning to pull the phone 
            towards the center (left-[-15%]) to "close the gap" per your Figma files 
          */}
          <div className="absolute lg:relative w-[140%] lg:w-[150%] h-full lg:left-[-15%] z-10 opacity-100 lg:opacity-100 pointer-events-none lg:pointer-events-auto">
            <Image
              src="/iPhone.svg"
              alt="App preview"
              fill
              priority
              className="object-contain object-bottom lg:object-center scale-110 lg:scale-110"
            />
          </div>
        </div>

      </div>
    </section>
  );
}