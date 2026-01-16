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
  title: "Basmallah Travel & Tour – Hajj & Umrah Pilgrimage",
  description: "Trusted and affordable Hajj and Umrah pilgrimage services.",
  openGraph: {
    title: "Basmallah Travel & Tour – Hajj & Umrah Pilgrimage",
    description: "Trusted and affordable Hajj and Umrah pilgrimage services.",
    url: "https://basmallah-travel-tour.vercel.app",
    siteName: "Basmallah Travel & Tour",
    images: [
      {
        url: "https://basmallah-travel-tour.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Basmallah Travel & Tour",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Basmallah Travel & Tour – Hajj & Umrah Pilgrimage",
    description: "Trusted and affordable Hajj and Umrah pilgrimage services.",
    images: ["https://basmallah-travel-tour.vercel.app/og-image.png"],
  },
  icons: {
    icon: "/images/favicon.ico",
    apple: "/favicon_io/apple-touch-icon.png",
  },
  manifest: "/favicon_io/site.webmanifest",
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
        {children}
      </body>
    </html>
  );
}

