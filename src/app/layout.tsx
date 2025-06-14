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
  icons: {
    icon: "/favicon.ico", // now points to /public/favicon.ico
  },
  openGraph: {
    images: ["/opengraph-image.png"], // points to /public/opengraph-image.png
  },
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
      <body className={`${robotoSans.className} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
