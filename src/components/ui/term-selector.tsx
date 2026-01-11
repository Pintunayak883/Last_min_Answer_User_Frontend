import React from "react";

import { cn } from "@/lib/utils";
import type { SchemeType, Term } from "@/types/entities";

interface TermSelectorProps {
  terms?: Term[];
  selectedTermId?: string;
  onSelectTerm: (term: Term) => void;
  isLoading?: boolean;
  schemeType?: SchemeType;
  className?: string;
}

export function TermSelector({
  terms,
  selectedTermId,
  onSelectTerm,
  isLoading = false,
  schemeType,
  className,
}: TermSelectorProps) {
  const title = schemeType === "YEAR" ? "Select Year" : "Select Semester";

  const selectId = React.useId();

  if (isLoading) {
    return (
      <div className={cn("text-sm text-slate-500", className)}>Loading...</div>
    );
  }

  if (!terms || terms.length === 0) {
    return (
      <div
        className={cn(
          "bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-4",
          className
        )}
      >
        <p className="text-sm text-slate-600 dark:text-slate-300">
          No terms available.
        </p>
      </div>
    );
  }

  const currentValue = selectedTermId ?? terms[0]?.id;

  return (
    <div
      className={cn(
        "bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden",
        className
      )}
    >
      <div className="px-4 py-3 border-b border-slate-100 dark:border-slate-700">
        <label
          htmlFor={selectId}
          className="text-sm font-semibold text-slate-900 dark:text-white"
        >
          {title}
        </label>
      </div>

      <div className="p-3">
        <select
          id={selectId}
          value={currentValue}
          onChange={(e) => {
            const term = terms.find((t) => t.id === e.target.value);
            if (term) onSelectTerm(term);
          }}
          className={cn(
            "w-full rounded-lg border px-3 py-2 text-sm bg-white dark:bg-slate-800",
            "border-slate-300 dark:border-slate-600",
            "text-slate-900 dark:text-white",
            "focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent outline-none transition-all",
            "min-h-touch"
          )}
        >
          {terms.map((term) => (
            <option key={term.id} value={term.id}>
              {term.label} ({schemeType === "YEAR" ? `Year ${term.value}` : `Sem ${term.value}`})
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
