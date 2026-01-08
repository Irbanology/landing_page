export default function Features() {
  return (
    <section
      id="features"
      className="bg-white w-full py-[140px]"
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px]">

        {/* TOP CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-[120px] items-start">

          {/* Left Heading */}
          <h2 className="font-inter text-[56px] sm:text-[72px] lg:text-[96px] leading-[1] tracking-[-2px] text-black">
            Features
          </h2>

          {/* Right Paragraph */}
          <p className="font-inter text-[16px] sm:text-[18px] leading-[28px] text-black/70 max-w-[520px]">
            WibeIT is built as a highly secured communication layer for everyday life, combining strong encryption, a calm interface, and privacy-respecting design. Every feature is focused on one goal letting people talk, share, and coordinate in a fast
          </p>

        </div>

        {/* FEATURES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-[96px] gap-x-[72px]">

          {[
            {
              title: "P2P",
              desc: "Peer-to-peer delivery keeps messages as close to direct as possible between you and the person you are talking to, reducing unnecessary stops along the way.",
            },
            {
              title: "Fast & Reliable Messaging",
              desc: "Messages send and sync quickly, even on unstable networks, so conversations feel live instead of laggy.",
            },
            {
              title: "Privacy First",
              desc: "The product is designed so that privacy is the default, not a setting you hunt for. Minimal data is collected.",
            },
            {
              title: "Secure Calls & Media Sharing",
              desc: "Voice calls, photos, videos, and documents all travel through the same protected channel as your text messages.",
            },
            {
              title: "Two-Factor Authentication (2FA)",
              desc: "Optional 2FA adds an extra lock to your account by requiring both your password and a one-time code.",
            },
            {
              title: "Cross-Platform Availability",
              desc: "Available on Android and iOS, with secure access through Google Play Store, Apple App Store, and Huawei AppGallery.",
            },
          ].map((item, index) => (
            <div key={index} className="relative text-center px-4">

              {/* Title */}
              <h4 className="font-inter text-[18px] font-semibold text-black mb-4">
                {item.title}
              </h4>

              {/* Description */}
              <p className="font-inter text-[15px] leading-[24px] text-black/60 mx-auto max-w-[260px]">
                {item.desc}
              </p>

              {/* Vertical Divider – Desktop only */}
              {index % 3 !== 2 && (
                <span className="hidden lg:block absolute top-0 right-[-36px] h-full w-[1px] bg-black/10" />
              )}

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
