import Link from "next/link";
import { FileQuestion } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-6 text-slate-400 flex justify-center">
          <FileQuestion size={64} strokeWidth={1.5} />
        </div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          Page Not Found
        </h2>
        <p className="text-slate-600 dark:text-slate-300 mb-6">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <Link href="/">
          <Button size="lg">Go Home</Button>
        </Link>
      </div>
    </div>
  );
}
