import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { sleekClient } from "@/lib/sleekcms";

export async function generateMetadata() {
  let data;
  try {
    const client = await sleekClient;
    data = await client.getContent();
  } catch (error) {
    console.error("Failed to fetch metadata:", error);
    // Fallback metadata
    return {
      title: "Navonmesh Hackathon",
      description: "Join the ultimate hackathon experience.",
    };
  }

  const { title, subtitle, website_Logo } = data;

  return {
    title: title || "Navonmesh Hackathon",
    description: subtitle || "Join the ultimate hackathon experience.",
    icons: {
      icon: website_Logo?.url,
    },
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://unpkg.com/@sleekcms/ajaxed-forms"
          strategy="afterInteractive"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
