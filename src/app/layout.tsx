import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "@/components/nav/nav";
import Footer from "@/components/footer/footer";
import "./globals.css";

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
const metaVars = {
  title: "portfolio",
  description: "portfolio website",
  path: "/portfolio",
};
export const metadata: Metadata = {
  title: metaVars.title,
  description: metaVars.description,
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
export const viewport = {
  themeColor: "##171717",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: "no",
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
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
