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
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
