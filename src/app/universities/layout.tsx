import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Universities",
  description:
    "Browse all universities and access their courses, syllabus, question papers, and notes.",
};

export default function UniversitiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
