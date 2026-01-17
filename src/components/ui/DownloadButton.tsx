import React from "react";
import { Download, Eye, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { formatFileSize } from "@/lib/format";
import { getFileUrl } from "@/lib/file-url";

interface DownloadButtonProps {
  filePath?: unknown;
  fileUrl?: unknown;
  fileName?: string;
  fileSize?: number;
  variant?: "primary" | "outline";
  fullWidth?: boolean;
  className?: string;
}

export function DownloadButton({
  filePath,
  fileUrl,
  fileName = "download",
  fileSize,
  variant = "primary",
  fullWidth = false,
  className,
}: DownloadButtonProps) {
  const resolvedUrl = getFileUrl(filePath ?? fileUrl);

  const handleView = () => {
    if (!resolvedUrl) {
      alert("File URL not available. Please try again later.");
      return;
    }
    try {
      window.open(resolvedUrl, "_blank", "noopener,noreferrer");
    } catch (error) {
      console.error("View error:", error);
    }
  };

  const handleDownload = async () => {
    if (!resolvedUrl) {
      alert("File URL not available. Please try again later.");
      return;
    }
    try {
      // Fetch the file
      const response = await fetch(resolvedUrl);
      if (!response.ok) {
        throw new Error("Download failed");
      }

      // Get the blob from the response
      const blob = await response.blob();

      // Create a download link
      const downloadUrl = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = fileName || "download";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(downloadUrl);
    } catch (error) {
      console.error("Download error:", error);
      // Fallback: try to open in new tab if fetch fails
      if (resolvedUrl) {
        window.open(resolvedUrl, "_blank", "noopener,noreferrer");
      }
    }
  };

  const variants = {
    primary:
      "bg-primary-600 text-white hover:bg-primary-700 shadow-sm hover:shadow-md",
    outline: "border-2 border-primary-600 text-primary-600 hover:bg-primary-50",
  };

  // If no resolvedUrl, show a disabled state with error message
  if (!resolvedUrl) {
    return (
      <div className="flex gap-2 flex-col sm:flex-row">
        <button
          disabled
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 font-medium rounded-lg transition-all duration-200 min-h-touch bg-slate-100 text-slate-400 cursor-not-allowed opacity-60"
          title="File not available"
        >
          <Eye size={18} />
          <span className="text-sm font-medium">View</span>
        </button>

        <button
          disabled
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 font-medium rounded-lg transition-all duration-200 min-h-touch bg-slate-100 text-slate-400 cursor-not-allowed opacity-60"
          title="File not available"
        >
          <Download size={18} />
          <span className="flex flex-col items-start">
            <span className="text-sm font-medium">Download</span>
            {fileSize && (
              <span className="text-xs opacity-90">
                {formatFileSize(fileSize)}
              </span>
            )}
          </span>
        </button>
      </div>
    );
  }

  return (
    <div className="flex gap-2 flex-col sm:flex-row">
      {/* View Button */}
      <a
        href={resolvedUrl}
        target="_blank"
        rel="noreferrer"
        className={cn(
          "inline-flex items-center justify-center gap-2 px-4 py-2.5 font-medium rounded-lg transition-all duration-200 min-h-touch active:scale-95",
          "bg-slate-100 text-slate-700 hover:bg-slate-200 shadow-sm hover:shadow-md",
          className,
        )}
        title="View PDF"
      >
        <Eye size={18} />
        <span className="text-sm font-medium">View</span>
      </a>

      {/* Download Button */}
      <button
        onClick={handleDownload}
        className={cn(
          "inline-flex items-center justify-center gap-2 px-5 py-2.5 font-medium rounded-lg transition-all duration-200 min-h-touch active:scale-95",
          variants[variant],
          fullWidth && "w-full",
          className,
        )}
        title="Download file"
      >
        <Download size={18} />
        <span className="text-sm font-medium">Download</span>
      </button>
    </div>
  );
}
