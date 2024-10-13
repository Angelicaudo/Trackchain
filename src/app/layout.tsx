import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import Providers from "../components/OnchainkitProvider";
import NavBar from "@/components/NavBar";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "TrackChain",
  description: "Track ownership history onchain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <div className="bg-black">
            <section className="bg-heroImg bg-cover bg-center h-screen bg-repeat">
              <NavBar />
              {children}
            </section>
          </div>
        </Providers>
      </body>
    </html>
  );
}
