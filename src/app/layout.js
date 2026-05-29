import "./globals.css";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: {
    default: "VETECH | NDT & Metallurgical Services",
    template: "%s | VETECH",
  },

  description:
    "VETECH delivers precision Non-Destructive Testing (NDT) and Metallurgical Services for industrial, oil & gas, manufacturing, power, and infrastructure sectors.",

  keywords: [
    "VETECH",
    "NDT Services",
    "Non Destructive Testing",
    "Metallurgical Services",
    "Ultrasonic Testing",
    "Radiographic Testing",
    "Magnetic Particle Testing",
    "Dye Penetrant Testing",
    "Industrial Inspection",
    "Material Testing",
    "Weld Inspection",
    "Quality Assurance",
  ],

  authors: [
    {
      name: "VETECH",
    },
  ],

  creator: "VETECH",

  openGraph: {
    title: "VETECH | NDT & Metallurgical Services",
    description:
      "Precision NDT and Metallurgical Services for industrial and infrastructure sectors.",
    siteName: "VETECH",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "VETECH | NDT & Metallurgical Services",
    description:
      "Precision NDT and Metallurgical Services for industrial and infrastructure sectors.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/vetech logo/favicon.ico",
    shortcut: "/vetech logo/favicon.ico",
    apple: "/vetech logo/apple-touch-icon.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f172a",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col bg-background">
          <Header />

          <main className="flex-1 pt-20">
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}