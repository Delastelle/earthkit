import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";
import Sidebar from "@/components/sidebar";
import ResourceBar from "@/components/resource_bar";
import { DefaultKBar } from "@/components/kbar";

export const metadata: Metadata = {
  title: "EarthKit",
  description: "EarthKit is a tool for locating images on the Earth.",
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <main className="h-screen w-screen flex overflow-hidden">
          <Sidebar />
          <div className="h-full flex-1 relative"> {children}</div>
          {/* <ResourceBar /> */}
          <DefaultKBar />
        </main>
        <Toaster />
      </body>
    </html>
  );
}
