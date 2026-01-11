import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type {
  University,
  Course,
  Term,
  Subject,
  SchemeType,
} from "@/types/entities";

interface NavigationState {
  selectedUniversity: University | null;
  selectedCourse: Course | null;
  selectedSchemeType: SchemeType | null;
  selectedTerm: Term | null;
  selectedSubject: Subject | null;
  searchQuery: string;
}

const initialState: NavigationState = {
  selectedUniversity: null,
  selectedCourse: null,
  selectedSchemeType: null,
  selectedTerm: null,
  selectedSubject: null,
  searchQuery: "",
};

const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    setSelectedUniversity: (
      state,
      action: PayloadAction<University | null>
    ) => {
      state.selectedUniversity = action.payload;
      // Clear downstream selections when university changes
      state.selectedCourse = null;
      state.selectedSchemeType = null;
      state.selectedTerm = null;
      state.selectedSubject = null;
    },
    setSelectedCourse: (state, action: PayloadAction<Course | null>) => {
      state.selectedCourse = action.payload;
      // Extract schemeType from course if available
      state.selectedSchemeType = action.payload?.schemeType || null;
      // Clear downstream selections when course changes
      state.selectedTerm = null;
      state.selectedSubject = null;
    },
    setSelectedSchemeType: (
      state,
      action: PayloadAction<SchemeType | null>
    ) => {
      state.selectedSchemeType = action.payload;
      // Clear term and subject when scheme type changes
      state.selectedTerm = null;
      state.selectedSubject = null;
    },
    setSelectedTerm: (state, action: PayloadAction<Term | null>) => {
      state.selectedTerm = action.payload;
      // Clear subject when term changes
      state.selectedSubject = null;
    },
    setSelectedSubject: (state, action: PayloadAction<Subject | null>) => {
      state.selectedSubject = action.payload;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    clearNavigation: (state) => {
      state.selectedUniversity = null;
      state.selectedCourse = null;
      state.selectedSchemeType = null;
      state.selectedTerm = null;
      state.selectedSubject = null;
      state.searchQuery = "";
    },
  },
});

export const {
  setSelectedUniversity,
  setSelectedCourse,
  setSelectedSchemeType,
  setSelectedTerm,
  setSelectedSubject,
  setSearchQuery,
  clearNavigation,
} = navigationSlice.actions;

export default navigationSlice.reducer;
