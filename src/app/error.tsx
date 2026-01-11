"use client";

import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-6 text-red-500 flex justify-center">
          <AlertCircle size={64} strokeWidth={1.5} />
        </div>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          Something went wrong!
        </h2>
        <p className="text-slate-600 mb-6">
          We encountered an unexpected error. Please try again.
        </p>
        <Button onClick={reset} size="lg">
          Try Again
        </Button>
      </div>
    </div>
  );
}
