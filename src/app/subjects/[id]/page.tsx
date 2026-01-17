"use client";

import React from "react";
import { useParams } from "next/navigation";
import {
  BookOpen,
  FileText,
  GraduationCap,
  Calendar,
  Layers,
} from "lucide-react";
import {
  useGetSubjectByIdQuery,
  useGetSyllabusBySubjectQuery,
  useGetQuestionPapersBySubjectQuery,
  useGetNotesBySubjectQuery,
} from "@/store/api";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { ListSkeleton } from "@/components/ui/Skeleton";
import { EmptyState, ErrorState } from "@/components/ui/EmptyState";
import { DownloadButton } from "@/components/ui/DownloadButton";
import { formatDate, formatFileSize } from "@/lib/format";

type TabType = "syllabus" | "question-papers" | "notes";

export default function SubjectDetailPage() {
  const params = useParams();
  const subjectId = params.id as string;
  const [activeTab, setActiveTab] = React.useState<TabType>("syllabus");

  const {
    data: subject,
    isLoading: subjectLoading,
    error: subjectError,
  } = useGetSubjectByIdQuery(subjectId);

  const {
    data: syllabus,
    isLoading: syllabusLoading,
    error: syllabusError,
    refetch: refetchSyllabus,
  } = useGetSyllabusBySubjectQuery(subjectId);

  const {
    data: questionPapers,
    isLoading: qpLoading,
    error: qpError,
    refetch: refetchQP,
  } = useGetQuestionPapersBySubjectQuery(subjectId);

  const {
    data: notes,
    isLoading: notesLoading,
    error: notesError,
    refetch: refetchNotes,
  } = useGetNotesBySubjectQuery(subjectId);

  const tabs = [
    {
      id: "syllabus" as TabType,
      label: "Syllabus",
      icon: BookOpen,
      count: syllabus?.length || 0,
    },
    {
      id: "question-papers" as TabType,
      label: "Question Papers",
      icon: FileText,
      count: questionPapers?.length || 0,
    },
    {
      id: "notes" as TabType,
      label: "Notes",
      icon: GraduationCap,
      count: notes?.length || 0,
    },
  ];

  if (subjectLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <ListSkeleton count={4} />
      </div>
    );
  }

  if (subjectError || !subject) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <ErrorState
          title="Subject not found"
          message="We couldn't find the subject you're looking for."
        />
      </div>
    );
  }

  const course = subject.term?.course;
  const courseIdFromTerm = subject.term?.courseId;
  const courseId = course?.id || courseIdFromTerm;
  const universityId = course?.universityId;

  return (
    <div>
      <Breadcrumbs
        items={[
          { label: "Universities", href: "/universities" },
          {
            label: course?.university?.name || "University",
            href: universityId ? `/universities/${universityId}` : undefined,
          },
          {
            label: course?.name || "Course",
            href: courseId ? `/courses/${courseId}` : undefined,
          },
          { label: subject.name, href: `/subjects/${subject.id}` },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        {/* Subject Header */}
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">
            {subject.name}
          </h1>
          {subject.code && (
            <p className="text-lg text-primary-600 dark:text-primary-400 font-medium mb-2">
              {subject.code}
            </p>
          )}
          {subject.description && (
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              {subject.description}
            </p>
          )}
          <div className="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-300">
            {subject.semester && (
              <div className="flex items-center gap-1">
                <span className="font-medium">Semester:</span>
                <span>{subject.semester}</span>
              </div>
            )}
            {subject.credits && (
              <div className="flex items-center gap-1">
                <span className="font-medium">Credits:</span>
                <span>{subject.credits}</span>
              </div>
            )}
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-6 overflow-x-auto">
          <nav
            className="flex gap-2 min-w-max border-b border-slate-200 dark:border-slate-700"
            aria-label="Tabs"
          >
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-3 font-medium border-b-2 transition-colors min-h-touch ${
                    isActive
                      ? "border-primary-600 dark:border-primary-400 text-primary-600 dark:text-primary-400"
                      : "border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:border-slate-300 dark:hover:border-slate-600"
                  }`}
                >
                  <Icon size={18} />
                  <span className="whitespace-nowrap">{tab.label}</span>
                  {tab.count > 0 && (
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full ${
                        isActive
                          ? "bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400"
                          : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                      }`}
                    >
                      {tab.count}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Tab Content with Scrollable Container */}
        <div className="h-[calc(100vh-400px)] overflow-y-auto border border-slate-200 dark:border-slate-700 rounded-lg p-4 bg-white dark:bg-slate-900">
          {activeTab === "syllabus" && (
            <SyllabusTab
              syllabus={syllabus || []}
              isLoading={syllabusLoading}
              error={syllabusError}
              refetch={refetchSyllabus}
            />
          )}
          {activeTab === "question-papers" && (
            <QuestionPapersTab
              questionPapers={questionPapers || []}
              isLoading={qpLoading}
              error={qpError}
              refetch={refetchQP}
            />
          )}
          {activeTab === "notes" && (
            <NotesTab
              notes={notes || []}
              isLoading={notesLoading}
              error={notesError}
              refetch={refetchNotes}
            />
          )}
        </div>
      </div>
    </div>
  );
}

// Syllabus Tab Component
function SyllabusTab({ syllabus, isLoading, error, refetch }: any) {
  if (isLoading) return <ListSkeleton count={3} />;
  if (error) return <ErrorState retry={refetch} />;

  const syllabusArray = Array.isArray(syllabus) ? syllabus : [];

  if (syllabusArray.length === 0) {
    return (
      <EmptyState
        icon={<BookOpen size={64} strokeWidth={1.5} />}
        title="No syllabus available"
        description="Syllabus files will appear here once uploaded"
      />
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4">
      {syllabusArray.map((item: any) => (
        <Card key={item.id}>
          <CardContent className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">
                {item.title}
              </h3>
              {item.description && (
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                  {item.description}
                </p>
              )}
              <div className="flex flex-wrap gap-3 text-sm text-slate-500 dark:text-slate-400">
                <span>Added {formatDate(item.createdAt)}</span>
              </div>
            </div>
            <DownloadButton
              filePath={item.filePath ?? item.fileUrl}
              fileName={item.fileName}
              fileSize={item.fileSize}
            />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

// Question Papers Tab Component
function QuestionPapersTab({ questionPapers, isLoading, error, refetch }: any) {
  if (isLoading) return <ListSkeleton count={3} />;
  if (error) return <ErrorState retry={refetch} />;

  const qpArray = Array.isArray(questionPapers) ? questionPapers : [];

  if (qpArray.length === 0) {
    return (
      <EmptyState
        icon={<FileText size={64} strokeWidth={1.5} />}
        title="No question papers available"
        description="Question papers will appear here once uploaded"
      />
    );
  }

  // Group by year
  const groupedByYear = qpArray.reduce((acc: any, qp: any) => {
    const year = qp.year || "Unknown";
    if (!acc[year]) acc[year] = [];
    acc[year].push(qp);
    return acc;
  }, {});

  return (
    <div className="space-y-6">
      {Object.entries(groupedByYear)
        .sort(([a], [b]) => Number(b) - Number(a))
        .map(([year, papers]: [string, any]) => (
          <div key={year}>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
              Year {year}
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {papers.map((item: any) => (
                <Card key={item.id}>
                  <CardContent className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">
                        {item.title}
                      </h4>
                      {item.description && (
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                          {item.description}
                        </p>
                      )}
                      <div className="flex flex-wrap gap-3 text-sm text-slate-500 dark:text-slate-400">
                        {item.month && <span>{item.month}</span>}
                        {item.examType && (
                          <>
                            {item.month && <span>•</span>}
                            <span>{item.examType}</span>
                          </>
                        )}
                      </div>
                    </div>
                    <DownloadButton
                      filePath={item.filePath ?? item.fileUrl}
                      fileName={item.fileName}
                      fileSize={item.fileSize}
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
}

// Notes Tab Component
function NotesTab({ notes, isLoading, error, refetch }: any) {
  if (isLoading) return <ListSkeleton count={3} />;
  if (error) return <ErrorState retry={refetch} />;

  const notesArray = Array.isArray(notes) ? notes : [];

  if (notesArray.length === 0) {
    return (
      <EmptyState
        icon={<GraduationCap size={64} strokeWidth={1.5} />}
        title="No notes available"
        description="Study notes will appear here once uploaded"
      />
    );
  }

  // Group by unit
  const groupedByUnit = notesArray.reduce((acc: any, note: any) => {
    const unit = note.unit ? `Unit ${note.unit}` : "General";
    if (!acc[unit]) acc[unit] = [];
    acc[unit].push(note);
    return acc;
  }, {});

  return (
    <div className="space-y-6">
      {Object.entries(groupedByUnit).map(([unit, unitNotes]: [string, any]) => (
        <div key={unit}>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
            <Layers size={20} />
            {unit}
          </h3>
          <div className="grid grid-cols-1 gap-4">
            {unitNotes.map((item: any) => (
              <Card key={item.id}>
                <CardContent className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">
                      {item.title}
                    </h4>
                    {item.description && (
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                        {item.description}
                      </p>
                    )}
                    <div className="flex flex-wrap gap-3 text-sm text-slate-500">
                      {item.topic && (
                        <>
                          <span>{item.topic}</span>
                          <span>•</span>
                        </>
                      )}
                      <span>Added {formatDate(item.createdAt)}</span>
                    </div>
                  </div>
                  <DownloadButton
                    filePath={item.filePath ?? item.fileUrl}
                    fileName={item.fileName}
                    fileSize={item.fileSize}
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
