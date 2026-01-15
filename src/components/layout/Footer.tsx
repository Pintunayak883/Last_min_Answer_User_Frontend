import React from "react";
import Link from "next/link";
import { GraduationCap, Mail, Github } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-slate-300 dark:text-slate-400 mt-auto border-t border-slate-800 dark:border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="flex items-center gap-2 font-bold text-xl text-white mb-4"
            >
              <GraduationCap size={28} />
              <span>One Answers</span>
            </Link>
            <p className="text-sm text-slate-400">
              Your trusted portal for exam preparation. Access syllabus,
              question papers, and notes anytime, anywhere.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/universities"
                  className="text-sm hover:text-white transition-colors"
                >
                  Universities
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm">
                <Mail size={16} />
                <a
                  href="mailto:boynayak31@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  boynayak31@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800 text-center text-sm text-slate-400">
          <p>&copy; {currentYear} One Answers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
