import Image from "next/image";
import Link from "next/link";
import { FiTwitter, FiFacebook, FiMail } from "react-icons/fi";
import { FaInstagram, FaTelegramPlane } from "react-icons/fa";

/* =======================
   FOOTER LINKS CONFIG
======================= */
const footerLinks = {
  about: [
    { label: "Home", href: "/" },
    { label: "Features", href: "#features" },
    { label: "Showcase", href: "#showcase" },
  ],
  explore: [
    { label: "Blog", href: "#blog" },
  ],
  policy: [
    { label: "Child Safety", href: "/child-safety" },
    { label: "FAQs", href: "#faq" },
  ],
  company: [
    { label: "About us", href: "#about" },
    { label: "Contact us", href: "#contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-[80px] pt-20 lg:pt-[112px]">

        {/* ================= TOP SECTION ================= */}
        <div className="flex flex-col lg:flex-row gap-16 lg:justify-between">

          {/* LOGO */}
          <div className="flex justify-center lg:justify-start">
            <Link href="/">
              <Image
                src="/logo.svg"
                alt="WibeIT"
                width={147}
                height={102}
                className="cursor-pointer"
              />
            </Link>
          </div>

          {/* LINKS GRID */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-[96px]">

            {/* ABOUT */}
            <div>
              <p className="font-inter text-[13px] text-white/65 mb-6">
                About Us
              </p>
              <ul className="space-y-4">
                {footerLinks.about.map((item, i) => (
                  <li key={i}>
                    <Link
                      href={item.href}
                      className="text-[19px] hover:opacity-80 transition"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* EXPLORE */}
            <div>
              <p className="font-inter text-[13px] text-white/65 mb-6">
                Explore
              </p>
              <ul className="space-y-4">
                {footerLinks.explore.map((item, i) => (
                  <li key={i}>
                    <Link
                      href={item.href}
                      className="text-[18px] hover:opacity-80 transition"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* POLICY */}
            <div>
              <p className="font-inter text-[13px] text-white/65 mb-6">
                Policy
              </p>
              <ul className="space-y-4">
                {footerLinks.policy.map((item, i) => (
                  <li key={i}>
                    <Link
                      href={item.href}
                      className="text-[18px] hover:opacity-80 transition"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* COMPANY */}
            <div>
              <p className="font-inter text-[13px] text-white/65 mb-6">
                Company
              </p>
              <ul className="space-y-4">
                {footerLinks.company.map((item, i) => (
                  <li key={i}>
                    <Link
                      href={item.href}
                      className="text-[18px] hover:opacity-80 transition"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* ================= DIVIDER ================= */}
        <div className="mt-20 border-t border-white/10" />

        {/* ================= BOTTOM BAR ================= */}
        <div className="flex flex-col gap-6 py-6 sm:flex-row sm:items-center sm:justify-between">

          {/* COPYRIGHT */}
          <p className="font-inter text-[13px] text-white/65 text-center sm:text-left">
            © 2025 Welcome. All right reserved.
            <Link
              href="/privacy-policy"
              className="block sm:inline sm:mx-6 hover:opacity-80 transition"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="block sm:inline hover:opacity-80 transition"
            >
              Terms of Service
            </Link>
          </p>

          {/* RIGHT SIDE */}
          <div className="flex flex-col sm:flex-row items-center gap-5">

            {/* EMAIL */}
            <a
              href="mailto:support@wibeit.co"
              className="inline-flex items-center gap-3 text-white text-[14px] hover:opacity-90 transition"
            >
              <FiMail size={18} />
              <span>support@wibeit.co</span>
            </a>

            {/* SOCIAL ICONS */}
            <div className="flex gap-5 text-white/65">
              <a href="https://x.com/WibeIT" target="_blank" rel="noopener noreferrer">
                <FiTwitter size={18} className="hover:text-white transition" />
              </a>
              <a href="https://www.instagram.com/wibe.it/" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={18} className="hover:text-white transition" />
              </a>
              <a href="https://www.facebook.com/people/Wibeit/61581175611436/" target="_blank" rel="noopener noreferrer">
                <FiFacebook size={18} className="hover:text-white transition" />
              </a>
              <a href="https://t.me/wibeitapplication" target="_blank" rel="noopener noreferrer">
                <FaTelegramPlane size={18} className="hover:text-white transition" />
              </a>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}
