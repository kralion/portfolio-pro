import { Sidebar } from "@/components/Sidebar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Brayan Paucar",
  description:
    "Brayan Paucar is a software developer both mobile and web. He is a digital nomad and travels around the world while working remotely.",
  icons: [
    {
      rel: "icon",
      url: "https://github.com/kralion/portfolio/blob/main/public/icon.png?raw=true",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.className,
          "flex antialiased h-screen overflow-hidden bg-gray-100"
        )}
      >
        <Sidebar />
        <div className="lg:pl-2 lg:pt-2 bg-gray-100 dark:bg-neutral-900 flex-1 overflow-y-auto">
          <div className="flex-1 bg-white dark:bg-neutral-800 min-h-screen lg:rounded-tl-xl border border-transparent lg:border-neutral-200 dark:border-neutral-700  overflow-y-auto">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
