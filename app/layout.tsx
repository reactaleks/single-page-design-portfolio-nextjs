import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Single Page Design Portfolio",
  description: "Single Page Design Portfolio project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
