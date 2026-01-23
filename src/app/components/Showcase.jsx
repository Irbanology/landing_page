import Image from "next/image";
import Link from "next/link";


export default function Showcase() {
  return (
    <section
      id="showcase"
      className="bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-20 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto">

        {/* HEADER SECTION - Fluid Typography Fixed */}
        <div className="mb-20 md:mb-32 relative">
          <h3 className="font-inter text-[32px] md:text-[48px] lg:text-[64px] font-normal leading-none tracking-[-0.02em] text-black">
            Seamless Chatting
          </h3>

          {/* 1. 'Experience' text ko responsive banaya bina screen se bahar nikle.
      2. Tracking ko tight kiya professional look ke liye.
      3. Leading aur Margin ko adjust kiya taaki 'S' aur 'E' ke beech perfect gap rahe.
  */}
          <h2 className="font-inter text-[18vw] md:text-[200px] lg:text-[248px] font-normal leading-[0.8] tracking-[-0.05em] text-black mt-2 md:mt-4 -ml-1 md:-ml-3 block">
            Experience
          </h2>
        </div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* BOX 1: How to make account? - Full Width */}
          <div
            className="md:col-span-12 relative overflow-hidden rounded-2xl min-h-[450px] lg:min-h-[476px] p-8 lg:p-16 flex flex-col md:flex-row transition-transform duration-500 hover:shadow-xl"
            style={{ background: 'linear-gradient(115deg, #FFFFFF 45%, #FE5800 100%)' }}
          >
            <div className="max-w-[450px] z-10 flex flex-col justify-center">
              <h4 className="text-black font-semibold text-[20px] lg:text-[22px] mb-4">How to make account?</h4>
              <p className="text-black/80 text-[15px] lg:text-[17px] leading-[1.5] lg:max-w-[400px]">
                Sign up in seconds with just your email and password, then step straight into a highly encrypted chat experience built for real privacy.
              </p>
            </div>

            {/* Phone Image - Responsive Position */}
            <div className="relative mt-8 md:mt-0 flex-1 h-[350px] md:h-full">
              <div className="absolute -bottom-12 md:-bottom-24 -right-4 md:right-0 w-[110%] md:w-full h-full lg:w-full">
                <Image
                  src="/login_Ui.png"
                  alt="Login Interface"
                  fill
                  priority
                  className="object-contain object-right-bottom"
                />
              </div>
            </div>
          </div>

          {/* BOX 2: Upcoming features? - 5/12 Columns */}
          <div
            className="md:col-span-12 lg:col-span-5 relative overflow-hidden rounded-2xl min-h-[550px] lg:min-h-[612px] p-8 lg:p-12 flex flex-col justify-between"
            style={{ background: 'linear-gradient(180deg, #D1D1D1 0%, #FFFFFF 100%)' }}
          >
            <div className="z-10">
              <h4 className="text-black font-semibold text-[20px] lg:text-[22px] mb-4">Upcoming features?</h4>
              <p className="text-black/70 text-[15px] lg:text-[16px] leading-relaxed max-w-[300px]">
                Anonymous chats, secure calling, and more privacy tools are already in development.
              </p>
            </div>
            <div className="flex-grow flex items-center justify-center">
              <h5 className="font-black text-[50px] sm:text-[65px] lg:text-[80px] text-white leading-[0.9] tracking-tighter uppercase drop-shadow-2xl text-center select-none">
                COMING <br /> SOON
              </h5>
            </div>
          </div>

          {/* BOX 3: Built for Real Privacy - 7/12 Columns */}
          <div
            className="md:col-span-12 lg:col-span-7 relative overflow-hidden rounded-2xl min-h-[550px] lg:min-h-[612px] p-8 lg:p-12 flex flex-col"
            style={{ background: 'linear-gradient(135deg, #FE5800 0%, #979797 100%)' }}
          >
            <div className="max-w-[380px] z-10">
              <h4 className="text-white font-semibold text-[20px] lg:text-[22px] mb-4">
                Built for Real Privacy
              </h4>
              <p className="text-white/90 text-[15px] lg:text-[16px] leading-relaxed">
                Every part of WibeIT is engineered so your conversations stay secure, focused, and fully under your control.
              </p>
            </div>

            {/* IMAGE */}
            <div className="absolute bottom-0 right-0   w-[360px] h-[360px]
  sm:w-[390px] sm:h-[390px]
  md:w-[420px] md:h-[420px]
  lg:w-[500px] lg:h-[500px]">
              <Image
                src="/intro_Ui.png"
                alt="Chat Interface"
                fill
                priority
                className="object-cover object-right-bottom"
              />
            </div>
          </div>

          {/* BOX 4: Security - 6/12 Columns */}
          <div
            className="md:col-span-12 lg:col-span-6 relative overflow-hidden rounded-2xl min-h-[360px] lg:min-h-[363px] p-8 lg:p-12"
            style={{ background: 'linear-gradient(135deg, #FE5800 0%, #999999 100%)' }}
          >
            <div className="max-w-[350px] z-10">
              <h4 className="text-white font-semibold text-[20px] lg:text-[22px] mb-4">Security</h4>
              <p className="text-white/90 text-[15px] lg:text-[16px] leading-relaxed">
                Highly secured, double-layer encryption keeps every message, call, and file protected from the moment you send it.
              </p>
            </div>
            <div className="absolute bottom-4 right-4 w-[160px] h-[160px] lg:w-[220px] lg:h-[220px] opacity-90">
              <Image
                src="/Lock icon.svg"
                alt="Lock Icon"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* BOX 5: Chat - 6/12 Columns */}
          <div
            className="md:col-span-12 lg:col-span-6 relative overflow-hidden rounded-2xl min-h-[360px] lg:min-h-[363px] p-8 lg:p-12 flex flex-col justify-between"
            style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #999999 100%)' }}
          >
            <div>
              <h4 className="text-black font-semibold text-[20px] lg:text-[22px] mb-4">Chat</h4>
              <p className="text-black/70 text-[15px] lg:text-[16px] leading-relaxed max-w-[300px]">
                Fast, distraction-free chats designed for real conversations, not feeds or algorithms.
              </p>
            </div>

            <div className="space-y-4 self-end w-full max-w-[300px] mt-6">
              {/* Alexander Bubble */}
              <div className="bg-white/70 backdrop-blur-lg p-3 rounded-2xl flex items-center gap-4 shadow-lg border border-white/40 transform transition-transform hover:-translate-y-1">
                <div className="w-11 h-11 rounded-full relative overflow-hidden flex-shrink-0 border-2 border-white">
                  <Image src="/Mask group 2.png" alt="Alexander" fill className="object-cover" />
                </div>
                <div>
                  <p className="text-[14px] font-bold text-black font-inter">Alexander</p>
                  <p className="text-[12px] text-black/60 font-inter">How are you?</p>
                </div>
              </div>
              {/* Nancy Bubble - Shifted Right on Desktop */}
              <div className="bg-white/70 backdrop-blur-lg p-3 rounded-2xl flex items-center gap-4 shadow-lg border border-white/40 transform transition-transform lg:translate-x-10 hover:-translate-y-1">
                <div className="w-11 h-11 rounded-full relative overflow-hidden flex-shrink-0 border-2 border-white">
                  <Image src="/Mask group 1.png" alt="Nancy" fill className="object-cover" />
                </div>
                <div>
                  <p className="text-[14px] font-bold text-black font-inter">Nancy</p>
                  <p className="text-[12px] text-black/60 font-inter">Amazing how's your day?</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}