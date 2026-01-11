"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  if (items.length === 0) return null;

  return (
    <nav className="flex items-center gap-2 px-4 py-3 bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 overflow-x-auto">
      <Link
        href="/"
        className="flex items-center gap-1 text-sm text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors shrink-0"
      >
        <Home size={16} />
        <span className="hidden sm:inline">Home</span>
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <React.Fragment key={index}>
            <ChevronRight
              size={16}
              className="text-slate-400 dark:text-slate-500 shrink-0"
            />
            {item.href ? (
              <Link
                href={item.href}
                aria-current={isLast ? "page" : undefined}
                className={
                  isLast
                    ? "text-sm text-slate-900 dark:text-white font-medium truncate max-w-[150px] sm:max-w-none"
                    : "text-sm text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors truncate max-w-[150px] sm:max-w-none"
                }
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-sm text-slate-900 dark:text-white font-medium truncate max-w-[150px] sm:max-w-none">
                {item.label}
              </span>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
