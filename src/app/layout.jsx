import localFont from "next/font/local";
import "./globals.css";

import Providers from "../components/Providers";
import NavBar from "../components/NavBar";

import '@rainbow-me/rainbowkit/styles.css';

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

export const metadata = {
  title: "TrackChain",
  description: "Track ownership history onchain",
};

export default function RootLayout({ children, }) {
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
