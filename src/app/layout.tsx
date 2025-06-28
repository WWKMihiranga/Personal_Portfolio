// app/layout.tsx
import "./globals.css";
import { ThemeProvider } from "next-themes";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: {
    template: "%s | Kavindu Mihiranga",
    default:
      "Kavindu Mihiranga | Full-Stack Developer & AI Enthusiast Portfolio",
  },

  description:
    "The professional portfolio of Kavindu Mihiranga, a Full-Stack Developer based in Sri Lanka, specializing in building intelligent applications with Next.js, Python (AI/ML), and Flutter.",

  keywords: [
    "Kavindu Mihiranga",
    "Full-Stack Developer",
    "Software Engineer",
    "Next.js",
    "Python",
    "Flutter",
    "React",
    "AI",
    "Machine learning",
    "Three.js",
    "Java",
    "Portfolio",
    "Developer Sri Lanka",
  ],

  robots: {
    index: true,
    follow: true,
  },

  metadataBase: new URL("https://kavindumihiranga.com"),

  openGraph: {
    title: "Kavindu Mihiranga | Full-Stack Developer Portfolio",
    description:
      "Building intelligent applications with Next.js, Python (AI/ML), and Flutter. Explore my projects and experience.",
    url: "https://kavindumihiranga.com",
    siteName: "Kavindu Mihiranga's Portfolio",
    images: [
      {
        url: "/Me.jpg",
        width: 1200,
        height: 630,
        alt: "The professional portfolio of Kavindu Mihiranga",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kavindu Mihiranga | Full-Stack Developer (Next.js, Python, AI)",
    description:
      "Building intelligent applications with Next.js, Python (AI/ML), and Flutter. Explore my projects and experience.",
    creator: "@WWKMihiranga",
    images: ["/Me.jpg"],
  },

  alternates: {
    canonical: "/",
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
          <main>
            {children}
            <Analytics />
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
