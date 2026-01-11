"use client";

import React from "react";
import Link from "next/link";
import { GraduationCap, Search, ChevronRight } from "lucide-react";
import { useGetUniversitiesQuery } from "@/store/api";
import { Card, CardContent } from "@/components/ui/Card";
import { ListSkeleton } from "@/components/ui/Skeleton";
import { EmptyState, ErrorState } from "@/components/ui/EmptyState";

export default function UniversitiesPage() {
  const {
    data: universities,
    isLoading,
    error,
    refetch,
  } = useGetUniversitiesQuery();
  const [searchQuery, setSearchQuery] = React.useState("");

  const filteredUniversities = React.useMemo(() => {
    if (!universities) return [];
    if (!searchQuery.trim()) return universities;

    const query = searchQuery.toLowerCase();
    return universities.filter(
      (uni) =>
        uni.name.toLowerCase().includes(query) ||
        uni.shortName?.toLowerCase().includes(query)
    );
  }, [universities, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
          Universities
        </h1>
        <p className="text-slate-600">
          Select your university to browse courses and study materials
        </p>
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
            placeholder="Search universities..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 rounded-lg focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent outline-none transition-all"
          />
        </div>
      </div>

      {/* Content */}
      {isLoading ? (
        <ListSkeleton count={6} />
      ) : error ? (
        <ErrorState retry={refetch} />
      ) : filteredUniversities.length === 0 ? (
        <EmptyState
          icon={<GraduationCap size={64} strokeWidth={1.5} />}
          title={
            searchQuery ? "No universities found" : "No universities available"
          }
          description={
            searchQuery
              ? "Try adjusting your search terms"
              : "Universities will appear here once added"
          }
        />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {filteredUniversities.map((university) => (
            <Link key={university.id} href={`/universities/${university.id}`}>
              <Card hoverable className="h-full">
                <CardContent className="flex items-center justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-slate-900 mb-1 truncate">
                      {university.name}
                    </h3>
                    {university.shortName && (
                      <p className="text-sm text-slate-600 truncate">
                        {university.shortName}
                      </p>
                    )}
                    {university.description && (
                      <p className="text-sm text-slate-500 mt-2 line-clamp-2">
                        {university.description}
                      </p>
                    )}
                  </div>
                  <ChevronRight className="text-slate-400 shrink-0" size={20} />
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
