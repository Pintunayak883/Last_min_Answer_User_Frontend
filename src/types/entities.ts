// Domain Entities
export interface University {
  id: string;
  name: string;
  shortName?: string;
  description?: string;
  logo?: string;
  createdAt: string;
  updatedAt: string;
}

export type SchemeType = "SEMESTER" | "YEAR";

export interface Course {
  id: string;
  name: string;
  code?: string;
  description?: string;
  duration?: string;
  universityId: string;
  schemeType?: SchemeType;
  university?: University;
  terms?: Term[];
  createdAt: string;
  updatedAt: string;
}

export interface Term {
  id: string;
  courseId: string;
  type: SchemeType;
  value: number;
  label: string;
  course?: Course;
  subjects?: Subject[];
  createdAt?: string;
  updatedAt?: string;
}

export interface Subject {
  id: string;
  name: string;
  code?: string;
  description?: string;
  semester?: number;
  credits?: number;
  termId: string;
  term?: Term;
  createdAt: string;
  updatedAt: string;
}

export interface Syllabus {
  id: string;
  title: string;
  description?: string;
  fileName: string;
  fileUrl: string;
  fileSize?: number;
  subjectId: string;
  subject?: Subject;
  createdAt: string;
  updatedAt: string;
}

export interface QuestionPaper {
  id: string;
  title: string;
  description?: string;
  year?: number;
  month?: string;
  examType?: string;
  fileName: string;
  fileUrl: string;
  fileSize?: number;
  subjectId: string;
  subject?: Subject;
  createdAt: string;
  updatedAt: string;
}

export interface Note {
  id: string;
  title: string;
  description?: string;
  unit?: number;
  topic?: string;
  fileName: string;
  fileUrl: string;
  fileSize?: number;
  subjectId: string;
  subject?: Subject;
  createdAt: string;
  updatedAt: string;
}
