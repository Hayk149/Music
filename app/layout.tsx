import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Music Explorer",
  description: "Discover music, artists and tracks",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}