import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ritzie's Barbeque",
  description: "I get my weedle on",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="h-screen flex flex-col">
          <Header />
          <div className="flex-auto">{children}</div>
        </main>
      </body>
    </html>
  );
}
