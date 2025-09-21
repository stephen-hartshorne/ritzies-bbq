import { Bebas_Neue, Inter } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";

const bebas = Bebas_Neue({ subsets: ['latin'], weight: '400', variable: '--font-heading', });
const inter = Inter({ subsets: ['latin'], variable: '--font-body', });

export const metadata = {
  title: "Ritzie's Barbecue - Texas meets Memphis BBQ | Memphis, TN",
  description: "Authentic barbecue bridging the gap between Texas and Memphis styles. Mobile BBQ truck serving the best brisket, ribs, and smoked meats in Memphis, Tennessee. Follow us for locations and daily specials.",
  keywords: "BBQ, barbecue, Memphis BBQ, Texas BBQ, food truck, brisket, ribs, smoked meat, Memphis Tennessee, mobile food, catering",
  openGraph: {
    title: "Ritzie's Barbecue - Texas meets Memphis BBQ",
    description: "Authentic barbecue bridging the gap between Texas and Memphis styles. Mobile BBQ truck serving the best brisket, ribs, and smoked meats in Memphis, TN.",
    url: "https://ritziesbbq.com",
    siteName: "Ritzie's Barbecue",
    images: [
      {
        url: "https://ritziesbbq.com/trailer-1.jpg",
        width: 1200,
        height: 630,
        alt: "Ritzie's Barbecue food truck and smoker",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ritzie's Barbecue - Texas meets Memphis BBQ",
    description: "Authentic barbecue bridging the gap between Texas and Memphis styles. Mobile BBQ truck serving Memphis, TN.",
    images: ["https://ritziesbbq.com/trailer-1.jpg"],
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
  alternates: {
    canonical: "https://ritziesbbq.com",
  },
};

export interface RootLayoutProps {
  children: ReactNode
}
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${bebas.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body className="font-body">{children}</body>
    </html>
  );
}