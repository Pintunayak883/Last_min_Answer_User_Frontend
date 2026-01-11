"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { BookOpen, Search, ChevronRight, Clock } from "lucide-react";
import { useGetUniversityByIdQuery, useGetCoursesQuery } from "@/store/api";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Card, CardContent } from "@/components/ui/Card";
import { ListSkeleton } from "@/components/ui/Skeleton";
import { EmptyState, ErrorState } from "@/components/ui/EmptyState";

export default function UniversityCoursesPage() {
  const params = useParams();
  const universityId = params.id as string;
  const [searchQuery, setSearchQuery] = React.useState("");

  const {
    data: university,
    isLoading: universityLoading,
    error: universityError,
  } = useGetUniversityByIdQuery(universityId);

  const {
    data: courses,
    isLoading: coursesLoading,
    error: coursesError,
    refetch,
  } = useGetCoursesQuery({ universityId });

  const filteredCourses = React.useMemo(() => {
    if (!courses) return [];
    if (!searchQuery.trim()) return courses;

    const query = searchQuery.toLowerCase();
    return courses.filter(
      (course) =>
        course.name.toLowerCase().includes(query) ||
        course.code?.toLowerCase().includes(query)
    );
  }, [courses, searchQuery]);

  const isLoading = universityLoading || coursesLoading;
  const error = universityError || coursesError;

  if (universityLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <ListSkeleton count={4} />
      </div>
    );
  }

  if (universityError || !university) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <ErrorState
          title="University not found"
          message="We couldn't find the university you're looking for."
        />
      </div>
    );
  }

  return (
    <div>
      <Breadcrumbs
        items={[
          { label: "Universities", href: "/universities" },
          { label: university.name },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        {/* University Header */}
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
            {university.name}
          </h1>
          {university.shortName && (
            <p className="text-lg text-slate-600 mb-2">
              {university.shortName}
            </p>
          )}
          {university.description && (
            <p className="text-slate-600">{university.description}</p>
          )}
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500"
              size={20}
            />
            <input
              type="text"
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 rounded-lg focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent outline-none transition-all"
            />
          </div>
        </div>

        {/* Courses List */}
        {coursesLoading ? (
          <ListSkeleton count={6} />
        ) : coursesError ? (
          <ErrorState retry={refetch} />
        ) : filteredCourses.length === 0 ? (
          <EmptyState
            icon={<BookOpen size={64} strokeWidth={1.5} />}
            title={searchQuery ? "No courses found" : "No courses available"}
            description={
              searchQuery
                ? "Try adjusting your search terms"
                : "Courses will appear here once added for this university"
            }
          />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {filteredCourses.map((course) => (
              <Link key={course.id} href={`/courses/${course.id}`}>
                <Card hoverable className="h-full">
                  <CardContent>
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-slate-900 mb-1 line-clamp-2">
                          {course.name}
                        </h3>
                        {course.code && (
                          <p className="text-sm text-primary-600 font-medium">
                            {course.code}
                          </p>
                        )}
                      </div>
                      <ChevronRight
                        className="text-slate-400 shrink-0"
                        size={20}
                      />
                    </div>

                    {course.description && (
                      <p className="text-sm text-slate-600 mb-3 line-clamp-2">
                        {course.description}
                      </p>
                    )}

                    {course.duration && (
                      <div className="flex items-center gap-2 text-sm text-slate-500">
                        <Clock size={16} />
                        <span>{course.duration}</span>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
