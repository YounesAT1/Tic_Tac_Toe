import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tic-Tac-Toe",
  description:
    "Play Tic Tac Toe Online: Challenge your friends or AI. Enjoy classic X vs O game on our interactive webpages. Fun for all ages! Play now!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico.png" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico.png" type="image/x-icon" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
