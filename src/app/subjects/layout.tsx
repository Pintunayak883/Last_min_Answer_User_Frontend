import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Subject Details",
  description: "Access syllabus, question papers, and notes for this subject.",
};

export default function SubjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
