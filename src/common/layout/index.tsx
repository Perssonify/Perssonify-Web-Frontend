"use client";
import { useState, useEffect, useCallback } from "react";
import Header from "./header";
import Footer from "./footer";
import { Geist, Geist_Mono } from "next/font/google";
import CookieConsent from "./cookie";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Set initial mode based on system preference
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Toggle 'dark' class on html element
  useEffect(() => {
    if (typeof document === "undefined") return;
    const html = document.documentElement;
    if (isDarkMode) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [isDarkMode]);

  // Memoized toggle for Header
  const handleToggleDarkMode = useCallback((checked: boolean) => {
    setIsDarkMode(checked);
  }, []);

  return (
    <div className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}> 
      <Header isDarkMode={isDarkMode} toggleDarkMode={handleToggleDarkMode} />
      <main className="w-full">{children}</main>
      <Footer />
      <CookieConsent />
    </div>
  );
} 