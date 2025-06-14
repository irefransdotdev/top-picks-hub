import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/providers/theme/ThemeProvider";

const robotoSans = Roboto({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Top Pick Hubs",
    template: "%s - Top Pick Hubs",
  },
  description:
    "Discover honest product reviews and handpicked top picks at TopPicksHub. Find the best deals in tech, home, health, fashion, beauty, and more—trusted by smart shoppers worldwide.",
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
  openGraph: {
    title: "Top Pick Hubs",
    description:
      "Discover honest product reviews and handpicked top picks at TopPicksHub. Find the best deals in tech, home, health, fashion, beauty, and more—trusted by smart shoppers worldwide.",
    url: "https://top-picks-hub-iota.vercel.app/",
    siteName: "Top Pick Hubs",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Top Pick Hubs Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  authors: [
    {
      name: "Top Pick Hubs Team",
      url: "https://top-picks-hub-iota.vercel.app/about",
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
      <body className={`${robotoSans.className} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
