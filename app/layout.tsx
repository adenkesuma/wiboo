import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wiboo",
  description: "Your favorite anime, all in one place.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${dmSans.className} bg-[#0F1117]`}>
        <Hero />
        <main className="mx-auto container">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
