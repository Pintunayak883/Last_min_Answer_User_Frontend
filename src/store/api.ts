import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
  University,
  Course,
  Term,
  Subject,
  Syllabus,
  QuestionPaper,
  Note,
} from "@/types/entities";
import type { ApiResponse, PaginatedResponse } from "@/types/api";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "/api";
console.log("Api base url", API_BASE_URL);
export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
  }),
  tagTypes: [
    "University",
    "Course",
    "Term",
    "Subject",
    "Syllabus",
    "QuestionPaper",
    "Note",
  ],
  endpoints: (builder) => ({
    // Universities
    getUniversities: builder.query<University[], void>({
      query: () => "/universities",
      transformResponse: (response: ApiResponse<University[]>) => response.data,
      providesTags: ["University"],
    }),
    getUniversityById: builder.query<University, string>({
      query: (id) => `/universities/${id}`,
      transformResponse: (response: ApiResponse<University>) => response.data,
      providesTags: ["University"],
    }),

    // Courses
    getCourses: builder.query<Course[], { universityId?: string }>({
      query: ({ universityId }) => ({
        url: "/courses",
        params: universityId ? { universityId } : undefined,
      }),
      transformResponse: (response: ApiResponse<Course[]>) => response.data,
      providesTags: ["Course"],
    }),
    getCourseById: builder.query<Course, string>({
      query: (id) => `/courses/${id}`,
      transformResponse: (response: ApiResponse<Course>) => response.data,
      providesTags: ["Course"],
    }),

    // Terms (Semesters/Years)
    getTerms: builder.query<Term[], { courseId: string }>({
      query: ({ courseId }) => ({
        url: "/terms",
        params: { courseId },
      }),
      transformResponse: (response: ApiResponse<Term[]>) => response.data,
      providesTags: ["Term"],
    }),
    getTermById: builder.query<Term, string>({
      query: (id) => `/terms/${id}`,
      transformResponse: (response: ApiResponse<Term>) => response.data,
      providesTags: ["Term"],
    }),

    // Subjects
    getSubjects: builder.query<
      Subject[],
      { termId?: string; courseId?: string }
    >({
      query: ({ termId, courseId }) => ({
        url: "/subjects",
        params: termId ? { termId } : courseId ? { courseId } : undefined,
      }),
      transformResponse: (response: ApiResponse<Subject[]>) => response.data,
      providesTags: ["Subject"],
    }),
    getSubjectById: builder.query<Subject, string>({
      query: (id) => `/subjects/${id}`,
      transformResponse: (response: ApiResponse<Subject>) => response.data,
      providesTags: ["Subject"],
    }),

    // Syllabus
    getSyllabusBySubject: builder.query<Syllabus[], string>({
      query: (subjectId) => `/syllabus/subject/${subjectId}`,
      transformResponse: (response: ApiResponse<Syllabus[]>) => response.data,
      providesTags: ["Syllabus"],
    }),

    // Question Papers
    getQuestionPapersBySubject: builder.query<QuestionPaper[], string>({
      query: (subjectId) => `/question-papers/subject/${subjectId}`,
      transformResponse: (response: ApiResponse<QuestionPaper[]>) =>
        response.data,
      providesTags: ["QuestionPaper"],
    }),

    // Notes
    getNotesBySubject: builder.query<Note[], string>({
      query: (subjectId) => `/notes/subject/${subjectId}`,
      transformResponse: (response: ApiResponse<Note[]>) => response.data,
      providesTags: ["Note"],
    }),
  }),
});

export const {
  useGetUniversitiesQuery,
  useGetUniversityByIdQuery,
  useGetCoursesQuery,
  useGetCourseByIdQuery,
  useGetTermsQuery,
  useGetTermByIdQuery,
  useGetSubjectsQuery,
  useGetSubjectByIdQuery,
  useGetSyllabusBySubjectQuery,
  useGetQuestionPapersBySubjectQuery,
  useGetNotesBySubjectQuery,
} = api;
