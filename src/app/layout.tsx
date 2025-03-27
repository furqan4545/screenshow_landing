import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { TempoInit } from "@/components/tempo-init";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Screenshow - Transform Screen Recordings into Magical Demos",
  description: "Create professional screen recordings with powerful built-in editing features including animations, transitions, and zooms - all in one intuitive package.",
  keywords: "screen recording, video editing, macOS app, screen capture, demo creation, video tutorials",
  authors: [{ name: "Screenshow" }],
  creator: "Screenshow",
  publisher: "Screenshow",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://screenshow.app",
    title: "Screenshow - Transform Screen Recordings into Magical Demos",
    description: "Create professional screen recordings with powerful built-in editing features including animations, transitions, and zooms - all in one intuitive package.",
    siteName: "Screenshow",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Screenshow - Screen Recording App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Screenshow - Transform Screen Recordings into Magical Demos",
    description: "Create professional screen recordings with powerful built-in editing features including animations, transitions, and zooms - all in one intuitive package.",
    images: ["/og-image.png"],
    creator: "@screenshow",
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
    google: "your-google-site-verification",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="overflow-x-hidden">
      <Script src="https://api.tempolabs.ai/proxy-asset?url=https://storage.googleapis.com/tempo-public-assets/error-handling.js" />
      <body className={`${inter.className} overflow-x-hidden min-h-screen`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <TempoInit />
      </body>
    </html>
  );
}
