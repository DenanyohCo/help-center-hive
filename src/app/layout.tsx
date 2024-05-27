import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import { cn } from "@/lib/utils"
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const fontSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={clsx(fontSans.className)}>
      <body className=
        {cn("container min-h-screen overscroll-none bg-background font-sans antialiased", fontSans.variable)}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
