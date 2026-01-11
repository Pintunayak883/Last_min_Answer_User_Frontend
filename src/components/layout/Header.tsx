"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, GraduationCap } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function Header() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home", icon: Home },
    { href: "/universities", label: "Universities", icon: GraduationCap },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 shadow-sm transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-xl text-primary-600 dark:text-primary-400"
          >
            <GraduationCap size={28} />
            <span className="hidden xs:inline">Last Min Answers</span>
            <span className="xs:hidden">LMA</span>
          </Link>

          {/* Navigation */}
          <div className="flex items-center gap-2">
            <nav className="flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                    isActive(link.href)
                      ? "bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400"
                      : "text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-100"
                  } ${link.href === "/" ? "hidden sm:flex" : ""}`}
                >
                  <link.icon size={18} />
                  {link.label}
                </Link>
              ))}
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
