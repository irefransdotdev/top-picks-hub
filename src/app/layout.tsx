import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/providers/theme/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Top Pick Hubs",
    template: "%s - Top Pick Hubs",
  },
  description:
    "Discover honest product reviews and handpicked top picks at TopPicksHub. Find the best deals in tech, home, health, fashion, beauty, and more—trusted by smart shoppers worldwide.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  keywords: [
    "product reviews",
    "top picks",
    "best deals",
    "tech products",
    "home essentials",
    "health and wellness",
    "fashion finds",
    "beauty products",
  ],
  authors: [
    {
      name: "Top Pick Hubs Team",
      url: "https://toppickshub.com/about",
    },
  ],
  creator: "@toppickshub",
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
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
