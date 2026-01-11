import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Course Details",
  description: "Browse subjects and access study materials for this course.",
};

export default function CoursesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
