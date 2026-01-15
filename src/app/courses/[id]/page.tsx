"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  BookMarked,
  Search,
  ChevronRight,
  Hash,
  Award,
  ChevronLeft,
} from "lucide-react";
import {
  useGetCourseByIdQuery,
  useGetTermsQuery,
  useGetSubjectsQuery,
} from "@/store/api";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Card, CardContent } from "@/components/ui/Card";
import { ListSkeleton } from "@/components/ui/Skeleton";
import { EmptyState, ErrorState } from "@/components/ui/EmptyState";
import { TermSelector } from "@/components/ui/term-selector";

export default function CourseSubjectsPage() {
  const params = useParams();
  const courseId = params.id as string;
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedTermId, setSelectedTermId] = React.useState<string | null>(
    null
  );

  const {
    data: course,
    isLoading: courseLoading,
    error: courseError,
  } = useGetCourseByIdQuery(courseId);

  const {
    data: terms,
    isLoading: termsLoading,
    error: termsError,
  } = useGetTermsQuery({ courseId });

  const {
    data: subjects,
    isLoading: subjectsLoading,
    error: subjectsError,
    refetch,
  } = useGetSubjectsQuery(
    { termId: selectedTermId || "" },
    { skip: !selectedTermId }
  );

  // Auto-select first term if not already selected
  React.useEffect(() => {
    if (terms && terms.length > 0 && !selectedTermId) {
      setSelectedTermId(terms[0].id);
    }
  }, [terms, selectedTermId]);

  const selectedTerm = terms?.find((t) => t.id === selectedTermId);

  const filteredSubjects = React.useMemo(() => {
    if (!subjects) return [];
    if (!searchQuery.trim()) return subjects;

    const query = searchQuery.toLowerCase();
    return subjects.filter(
      (subject) =>
        subject.name.toLowerCase().includes(query) ||
        subject.code?.toLowerCase().includes(query)
    );
  }, [subjects, searchQuery]);

  if (courseLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <ListSkeleton count={4} />
      </div>
    );
  }

  if (courseError || !course) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <ErrorState
          title="Course not found"
          message="We couldn't find the course you're looking for."
        />
      </div>
    );
  }

  return (
    <div>
      <Breadcrumbs
        items={[
          { label: "Universities", href: "/universities" },
          {
            label: course.university?.name || "University",
            href: course.universityId
              ? `/universities/${course.universityId}`
              : undefined,
          },
          { label: course.name },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        {/* Course Header */}
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">
            {course.name}
          </h1>
          {course.code && (
            <p className="text-lg text-primary-600 font-medium mb-2">
              {course.code}
            </p>
          )}
          <p className="text-sm text-slate-500 dark:text-slate-400">
            {course.schemeType === "SEMESTER"
              ? "Semester-based course (1–8)"
              : "Year-based course (1–4)"}
          </p>
        </div>

        {/* Term Selection & Subjects */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Left: Term Selector (Desktop-friendly sidebar) */}
          <div className="lg:col-span-1">
            {termsLoading ? (
              <p className="text-slate-500">Loading...</p>
            ) : termsError ? (
              <ErrorState retry={undefined} />
            ) : (
              <TermSelector
                terms={terms}
                isLoading={termsLoading}
                onSelectTerm={(term) => {
                  setSelectedTermId(term.id);
                  setSearchQuery("");
                }}
                selectedTermId={selectedTermId || undefined}
                schemeType={course.schemeType}
              />
            )}
          </div>

          {/* Right: Subjects List */}
          <div className="lg:col-span-3">
            {!selectedTerm ? (
              <EmptyState
                icon={<BookMarked size={64} strokeWidth={1.5} />}
                title="Select a term"
                description="Choose a term from the list to view subjects"
              />
            ) : (
              <>
                {/* Search Bar */}
                <div className="mb-6">
                  <div className="relative">
                    <Search
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500"
                      size={20}
                    />
                    <input
                      type="text"
                      placeholder="Search subjects..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 rounded-lg focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Subjects List */}
                {subjectsLoading ? (
                  <ListSkeleton count={6} />
                ) : subjectsError ? (
                  <ErrorState retry={refetch} />
                ) : filteredSubjects.length === 0 ? (
                  <EmptyState
                    icon={<BookMarked size={64} strokeWidth={1.5} />}
                    title={
                      searchQuery
                        ? "No subjects found"
                        : "No subjects available"
                    }
                    description={
                      searchQuery
                        ? "Try adjusting your search terms"
                        : `No subjects added for ${selectedTerm.label} yet`
                    }
                  />
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6">
                    {filteredSubjects.map((subject) => (
                      <Link key={subject.id} href={`/subjects/${subject.id}`}>
                        <Card hoverable className="h-full">
                          <CardContent>
                            <div className="flex items-start justify-between gap-4 mb-3">
                              <div className="flex-1 min-w-0">
                                <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-1 line-clamp-2">
                                  {subject.name}
                                </h3>
                                {subject.code && (
                                  <p className="text-sm text-primary-600 font-medium">
                                    {subject.code}
                                  </p>
                                )}
                              </div>
                              <ChevronRight
                                className="text-slate-400 dark:text-slate-500 shrink-0"
                                size={20}
                              />
                            </div>

                            {subject.description && (
                              <p className="text-sm text-slate-600 dark:text-slate-300 mb-3 line-clamp-2">
                                {subject.description}
                              </p>
                            )}

                            <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                              {subject.credits && (
                                <div className="flex items-center gap-1">
                                  <Award size={16} />
                                  <span>{subject.credits} Credits</span>
                                </div>
                              )}
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
