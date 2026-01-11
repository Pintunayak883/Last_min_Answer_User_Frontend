import React from "react";
import { FileQuestion, AlertCircle } from "lucide-react";

interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  action?: React.ReactNode;
}

export function EmptyState({
  icon,
  title,
  description,
  action,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
      <div className="mb-4 text-slate-400">
        {icon || <FileQuestion size={64} strokeWidth={1.5} />}
      </div>
      <h3 className="text-lg font-semibold text-slate-900 mb-2">{title}</h3>
      {description && (
        <p className="text-sm text-slate-600 mb-4 max-w-md">{description}</p>
      )}
      {action && <div className="mt-2">{action}</div>}
    </div>
  );
}

interface ErrorStateProps {
  title?: string;
  message?: string;
  retry?: () => void;
}

export function ErrorState({
  title = "Something went wrong",
  message = "We encountered an error while loading this content. Please try again.",
  retry,
}: ErrorStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
      <div className="mb-4 text-red-400">
        <AlertCircle size={64} strokeWidth={1.5} />
      </div>
      <h3 className="text-lg font-semibold text-slate-900 mb-2">{title}</h3>
      <p className="text-sm text-slate-600 mb-4 max-w-md">{message}</p>
      {retry && (
        <button
          onClick={retry}
          className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
        >
          Try Again
        </button>
      )}
    </div>
  );
}
