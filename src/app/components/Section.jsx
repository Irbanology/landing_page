import Image from "next/image";
import Link from "next/link";

export default function Section() {
  return (
    <section
      id="about"
      className="relative w-full min-h-[100vh] bg-black overflow-hidden flex items-center"
    >
      {/* Background Image */}
<Image
  src="/section.png"
  alt=""
  fill
  className="
    absolute
    inset-0
    object-contain
    object-right
    z-0
    opacity-100
  "
/>

      {/* Content Wrapper */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-[640px]">
          
          {/* Heading */}
          <h2 className="text-white font-inter text-[40px] sm:text-[48px] lg:text-[56px] leading-[1.1] tracking-[-2px]">
            About Us
          </h2>

          {/* Paragraph */}
          <p className="mt-6 text-white/70 font-inter text-[18px] leading-[31px] max-w-[447px]">
            Private, powerful, and built for people who take their
            conversations as seriously as their security.
          </p>

          {/* Button */}
          <Link href="/#hero">
            <button
              className="
                mt-10
                px-6 py-3
                rounded-full
                border border-white/20
                text-white
                hover:bg-white hover:text-black
                transition-all
                duration-300
              "
            >
              Start Now
            </button>
          </Link>

        </div>
      </div>

      {/* Dark Gradient Overlay (for text readability) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/10 z-[1]" />
    </section>
  );
}
