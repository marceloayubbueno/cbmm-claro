import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import AOSInit from "@/components/AOSInit";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "FinTech - Create physical and virtual cards for your business",
  description: "Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      </head>
      <body className="antialiased bg-white">
        {children}
        <Script 
          src="https://unpkg.com/aos@next/dist/aos.js" 
          strategy="afterInteractive"
        />
        <AOSInit />
      </body>
    </html>
  );
}

