import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";

const bebas = Bebas_Neue({ subsets: ['latin'], weight: '400', variable: '--font-heading', });
const inter = Inter({ subsets: ['latin'], variable: '--font-body', });

export const metadata = {
  title: "Ritzie's Barbecue",
  description: "I get my weedle on",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${bebas.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body className="font-body">{children}</body>
    </html>
  );
}