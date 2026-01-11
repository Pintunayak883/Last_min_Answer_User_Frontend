import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  loading?: boolean;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  loading = false,
  className,
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95";

  const variants = {
    primary:
      "bg-primary-600 text-white hover:bg-primary-700 shadow-sm hover:shadow-md",
    secondary:
      "bg-accent-600 text-white hover:bg-accent-700 shadow-sm hover:shadow-md",
    outline: "border-2 border-primary-600 text-primary-600 hover:bg-primary-50",
    ghost: "text-slate-700 hover:bg-slate-100",
  };

  const sizes = {
    sm: "px-3 py-2 text-sm min-h-touch",
    md: "px-5 py-2.5 text-base min-h-touch",
    lg: "px-6 py-3 text-lg min-h-[52px]",
  };

  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        fullWidth && "w-full",
        loading && "cursor-wait",
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          <span>Loading...</span>
        </div>
      ) : (
        children
      )}
    </button>
  );
}
