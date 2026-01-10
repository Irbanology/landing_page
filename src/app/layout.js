import UnderConstruction from "@/app/components/underconstruction";
import ScrollToTop from "@/app/components/ScrollToTop";
import { Poppins } from "next/font/google";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "WibeIT",
  description: "Highly Encrypted & Secure Messaging",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "WibeIT",
    description: "Highly Encrypted & Secure Messaging",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${poppins.variable} font-sans antialiased`}
      >
        <UnderConstruction />
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
