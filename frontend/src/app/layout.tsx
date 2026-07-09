import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Iqra Hussain | Full Stack Developer & AI/ML Engineer",
  description: "Portfolio of Iqra Hussain, a Full Stack Developer and AI/ML Engineer specializing in MERN stack, Node.js, Express, and AI integrations using Gemini API and LangChain.",
  keywords: ["Full Stack Developer", "AI/ML Engineer", "MERN Stack", "React", "Node.js", "MongoDB", "Next.js", "TypeScript", "Gemini API", "LangChain"],
  authors: [{ name: "Iqra Hussain" }],
  creator: "Iqra Hussain",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://iqrahussain.dev",
    title: "Iqra Hussain | Full Stack Developer & AI/ML Engineer",
    description: "Portfolio of Iqra Hussain, a Full Stack Developer and AI/ML Engineer specializing in MERN stack, Node.js, Express, and AI integrations.",
    siteName: "Iqra Hussain Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Iqra Hussain Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Iqra Hussain | Full Stack Developer & AI/ML Engineer",
    description: "Portfolio of Iqra Hussain, a Full Stack Developer and AI/ML Engineer specializing in MERN stack, Node.js, Express, and AI integrations.",
    images: ["/og-image.png"],
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
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
