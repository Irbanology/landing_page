// import UnderConstruction from "@/app/components/underconstruction";
import ScrollToTop from "@/app/components/ScrollToTop";
import { Poppins } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

// Fonts
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

// SEO 
export const metadata = {
  metadataBase: new URL("https://wibeit.co"),

  title: {
    default: "WibeIT – Secure & Private Messaging App",
    template: "%s | WibeIT",
  },

  description:
    "WibeIT is a secure messaging app with end-to-end encryption for private chats, calls, and file sharing.",

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://wibeit.co",
  },

  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "WibeIT – Secure & Private Messaging App",
    description:
      "Private, encrypted messaging with calls and file sharing built for real privacy.",
    url: "https://wibeit.co",
    siteName: "WibeIT",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "WibeIT Secure Messaging",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "WibeIT – Secure & Private Messaging",
    description:
      "Experience secure chats and calls with end-to-end encryption.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }) {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",

    name: "WibeIT",
    applicationCategory: "CommunicationApplication",
    operatingSystem: "Android, iOS",

    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD"
    },

    description: "Highly encrypted and secure messaging app with double-layer encryption.",

    keywords: [
      "secure messaging app",
      "encrypted chat",
      "private messaging",
      "end-to-end encryption",
      "privacy focused app",
      "Best Encryptin algorithm 2026",
      "WibeIT encrypted chatting module"
    ],

    url: "https://wibeit.co",

    author: {
      "@type": "Organization",
      name: "Wibeit Technologies"
    },

    publisher: {
      "@type": "Organization",
      name: "Wibeit Technologies",
      
      url: "https://wibeit.co",
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${poppins.variable} font-sans antialiased`}
      >
        {/* JSON-LD STRUCTURED DATA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        {/* <UnderConstruction /> */}
        {/* 4. FIX: Landmark tag add kiya accessibility ke liye */}

        <main id="main-content">
          {children}

          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                background: "#000000",   // 🖤 black bg
                color: "#ffffff",        // 🤍 white text
                borderRadius: "12px",
                fontSize: "16px",
                padding: "14px 18px",
              },

              success: {
                iconTheme: {
                  primary: "#FE5800",    // 🟧 orange icon
                  secondary: "#000000",  // icon bg same as toast
                },
              },

              error: {
                iconTheme: {
                  primary: "#FE5800",    // 🟧 orange error icon too
                  secondary: "#000000",
                },
              },
            }}
          />

        </main>
        <ScrollToTop />
      </body>
    </html>
  );
}