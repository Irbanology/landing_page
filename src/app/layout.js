// import UnderConstruction from "@/app/components/underconstruction";
import ScrollToTop from "@/app/components/ScrollToTop";
import { Poppins } from "next/font/google";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  // 1. FIX: metadataBase set karein (Error solve ho jayega)
  metadataBase: new URL('https://wibeit.co'),

  title: "WibeIT - Highly Encrypted & Secure Messaging",
  description: "Experience double layer encrypted chats, calls, and file sharing built for people who want real privacy. Secure messaging with end-to-end encryption.",
  icons: {
    icon: "/favicon.png",
  },
  alternates: {
    // 2. FIX: Canonical mein hamesha full URL dena chahiye
    canonical: 'https://wibeit.co',
  },
  openGraph: {
    title: "WibeIT - Highly Encrypted & Secure Messaging",
    description: "Experience double layer encrypted chats, calls, and file sharing built for real privacy.",
    url: "https://wibeit.co",
    type: "website",
    siteName: "WibeIT",
    images: [
      {
        // 3. TIP: .svg social media par kabhi kabhi support nahi hoti, 
        // Best hai ke 1200x630 ki PNG/JPG use karein.
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "WibeIT - Secure Messaging App",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "WibeIT",
    "applicationCategory": "CommunicationApplication",
    "operatingSystem": "Android, iOS",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    // TIP: Rating tab tak mat dalein jab tak real reviews na hon
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.5",
      "reviewCount": "10"
    },
    "description": "Highly encrypted and secure messaging app with double-layer encryption.",
    "url": "https://wibeit.co",
    "author": {
      "@type": "Organization",
      "name": "Wibeit Technologies"
    }
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${poppins.variable} font-sans antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* <UnderConstruction /> */}

        {/* 4. FIX: Landmark tag add kiya accessibility ke liye */}
        <main id="main-content">
          {children}
        </main>

        <ScrollToTop />
      </body>
    </html>
  );
}