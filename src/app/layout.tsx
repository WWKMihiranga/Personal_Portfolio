// app/layout.tsx
import "./globals.css";
import { ThemeProvider } from "next-themes";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// import { Providers } from "@/components/ThemeProvider";
// import ThemeProvider from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: {
    default: "My Portfolio",
    template: "%s | My Portfolio",
  },
  description:
    "A modern portfolio built with Next.js, Three.js, and Framer Motion.",
  metadataBase: new URL("https://my-portfolio.vercel.app"),
  openGraph: {
    title: "My Portfolio",
    description: "Modern portfolio with 3D & animation.",
    url: "https://my-portfolio.vercel.app",
    siteName: "My Portfolio",
    images: [
      {
        url: "/images/og-cover.png",
        width: 1200,
        height: 630,
        alt: "My Portfolio OG Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "My Portfolio",
    description: "Frontend Developer Portfolio with Next.js + Three.js",
    creator: "@yourhandle",
    images: ["/images/og-cover.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
