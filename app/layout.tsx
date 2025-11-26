import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import AOSInit from "@/components/AOSInit";

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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
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

