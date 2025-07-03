"use client";
import { useState, useEffect, useCallback } from "react";
import Header from "./header";
import Footer from "./footer";
import { Geist, Geist_Mono } from "next/font/google";
import CookieConsent from "./cookie";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Set initial mode based on system preference
  useEffect(() => {
    if (typeof window === "undefined") return;
    // Check for saved theme preference in localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    } else {
      // Default to system preference
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setIsDarkMode(systemPrefersDark);
    }
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
    const theme = checked ? "dark" : "light";
    localStorage.setItem("theme", theme);
  }, []);

  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
    >
      <Header isDarkMode={isDarkMode} toggleDarkMode={handleToggleDarkMode} />
      <main>{children}</main>
      <Footer />
      <CookieConsent />
    </div>
  );
}
