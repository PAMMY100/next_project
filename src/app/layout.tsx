import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
  variable: "--font-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "LiveDocs",
  description: "A collaborator editor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}
      >
        {children}
      </body>
    </html>
  );
}
