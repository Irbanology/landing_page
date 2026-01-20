import Image from "next/image";
import Link from "next/link";

export default function HowItWorks() {
  return (
    /* SECTION: Background black rahega aur padding-y responsive taaki mobile par saaf dikhe */
    <section id="howitworks" className=" w-full bg-black min-h-[1056px] flex items-center justify-center px-6 py-10 lg:py-0 overflow-hidden">

      {/* OUTER CONTAINER: Locked to 1440px frame */}
      <div className="w-full max-w-[1440px] flex justify-center">

        {/* MAIN CARD: 
            1. py-20 (Mobile) aur md:py-24 (Desktop) for breathing space.
            2. h-auto (Mobile) aur md:min-h-[605px] (Desktop).
        */}
        <div
          className="relative w-full max-w-[1380px] h-auto md:min-h-[605px] rounded-[32px] overflow-hidden px-6 md:px-10 py-20 md:py-24 flex flex-col items-center justify-center text-white"
          style={{
            background: "linear-gradient(115deg, #9B9B9B 0%, #FE5800 100%)",
          }}
        >
          {/* Headline: "HOW IT'S WORKS?" */}
          <h2 className="text-center font-inter text-[32px] md:text-[40px] font-bold mb-16 md:mb-28 tracking-tight uppercase leading-none z-20">
            HOW IT&apos;S WORKS?
          </h2>

          {/* CONNECTING LINE - Desktop only */}
          <div className="hidden lg:block absolute left-0 right-0 top-[285px] px-20 pointer-events-none z-0">
            <div className="w-full h-[100px]">
              <Image
                src="/Line_Vector.svg"
                alt="Connecting dashed line"
                fill
                className="object-contain opacity-40"
              />
            </div>
          </div>

          {/* STEPS GRID: Mobile par gap barha diya hai (gap-20) taaki clear separation ho */}
          <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-[30px] items-start justify-items-center">

            {/* STEP 1 */}
            <div className="flex flex-col items-center text-center max-w-[286px]">
              <div className="w-[89px] h-[89px] bg-white rounded-full flex items-center justify-center mb-8 md:mb-10 shadow-lg relative overflow-hidden">
                <Image
                  src="/Base.svg"
                  alt="Download Icon"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <h4 className="font-inter text-[22px] font-semibold mb-4 md:mb-5 leading-tight">
                Download The App
              </h4>
              <p className="font-inter text-[15px] leading-[22px] text-white/90">
                Get Wibelt from the App Store, Google Play, or AppGallery.
              </p>
            </div>

            {/* STEP 2 */}
            <div className="flex flex-col items-center text-center max-w-[336px]">
              <div className="w-[89px] h-[89px] bg-white rounded-full flex items-center justify-center mb-8 md:mb-10 shadow-lg relative overflow-hidden">
                <Image
                  src="/Create.svg"
                  alt="Account Icon"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <h4 className="font-inter text-[22px] font-semibold mb-4 md:mb-5 leading-tight">
                Create Your Secure Account
              </h4>
              <p className="font-inter text-[15px] leading-[22px] text-white/90">
                Sign up in seconds and enable extra protection with 2FA.
              </p>
            </div>

            {/* STEP 3 */}
            <div className="flex flex-col items-center text-center max-w-[317px]">
              <div className="w-[89px] h-[89px] bg-white rounded-full flex items-center justify-center mb-8 md:mb-10 shadow-lg relative overflow-hidden">
                <Image
                  src="/Message.svg"
                  alt="Chat Icon"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <h4 className="font-inter text-[22px] font-semibold mb-4 md:mb-5 leading-tight">
                Start Private Messaging
              </h4>
              <p className="font-inter text-[15px] leading-[22px] text-white/90">
                Chat, call, and share media securely with end-to-end protection.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}