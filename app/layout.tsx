import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/navigation";

export const metadata: Metadata = {
  title: "BoisInMotion",
  description: "Community, Podcasts, and Events",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">
        <Navigation />
        {children}
      </body>
    </html>
  );
}
