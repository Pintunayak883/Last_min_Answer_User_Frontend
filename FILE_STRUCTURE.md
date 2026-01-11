# 📁 Project File Structure

Complete directory tree for the User Frontend application.

```
User_Frontend/
│
├── 📄 Configuration Files
│   ├── package.json                 # Dependencies and scripts
│   ├── tsconfig.json               # TypeScript configuration
│   ├── next.config.js              # Next.js configuration
│   ├── tailwind.config.js          # Tailwind CSS theme
│   ├── postcss.config.js           # PostCSS plugins
│   ├── .eslintrc.json              # ESLint rules
│   ├── next-env.d.ts               # Next.js TypeScript types
│   └── .gitignore                  # Git ignore rules
│
├── 🌍 Environment Files
│   ├── .env.local                  # Local environment variables
│   └── .env.example                # Example environment template
│
├── 📚 Documentation
│   ├── README.md                   # Project overview
│   ├── GETTING_STARTED.md          # Quick start guide
│   ├── DOCUMENTATION.md            # Technical documentation
│   ├── DEPLOYMENT.md               # Deployment guide
│   ├── PROJECT_SUMMARY.md          # Completion summary
│   ├── PRE_LAUNCH_CHECKLIST.md     # Launch checklist
│   └── FILE_STRUCTURE.md           # This file
│
└── 📂 src/                         # Source code directory
    │
    ├── 📂 app/                     # Next.js App Router (Pages)
    │   │
    │   ├── 📄 layout.tsx           # Root layout (Header/Footer)
    │   ├── 📄 page.tsx             # Home page
    │   ├── 📄 error.tsx            # Global error boundary
    │   ├── 📄 not-found.tsx        # 404 page
    │   ├── 📄 globals.css          # Global styles
    │   │
    │   ├── 📂 universities/        # Universities routes
    │   │   ├── 📄 layout.tsx       # Universities layout
    │   │   ├── 📄 page.tsx         # Universities list
    │   │   └── 📂 [id]/            # Dynamic route
    │   │       └── 📄 page.tsx     # University details (courses)
    │   │
    │   ├── 📂 courses/             # Courses routes
    │   │   ├── 📄 layout.tsx       # Courses layout
    │   │   └── 📂 [id]/            # Dynamic route
    │   │       └── 📄 page.tsx     # Course details (subjects)
    │   │
    │   └── 📂 subjects/            # Subjects routes
    │       ├── 📄 layout.tsx       # Subjects layout
    │       └── 📂 [id]/            # Dynamic route
    │           └── 📄 page.tsx     # Subject details (resources)
    │
    ├── 📂 components/              # React components
    │   │
    │   ├── 📂 layout/              # Layout components
    │   │   ├── 📄 Header.tsx       # Site header + mobile menu
    │   │   ├── 📄 Footer.tsx       # Site footer
    │   │   └── 📄 Breadcrumbs.tsx  # Navigation breadcrumbs
    │   │
    │   ├── 📂 providers/           # Context providers
    │   │   └── 📄 Providers.tsx    # Redux Provider wrapper
    │   │
    │   └── 📂 ui/                  # Reusable UI components
    │       ├── 📄 Button.tsx       # Button component
    │       ├── 📄 Card.tsx         # Card components
    │       ├── 📄 Skeleton.tsx     # Loading skeletons
    │       ├── 📄 EmptyState.tsx   # Empty/Error states
    │       └── 📄 DownloadButton.tsx # Download button
    │
    ├── 📂 store/                   # Redux store
    │   ├── 📄 index.ts             # Store configuration
    │   ├── 📄 api.ts               # RTK Query API slice
    │   └── 📄 navigationSlice.ts   # Navigation state slice
    │
    ├── 📂 lib/                     # Utilities & helpers
    │   ├── 📄 utils.ts             # General utilities (cn)
    │   └── 📄 format.ts            # Formatting functions
    │
    ├── 📂 hooks/                   # Custom React hooks
    │   └── 📄 useRedux.ts          # Typed Redux hooks
    │
    └── 📂 types/                   # TypeScript types
        ├── 📄 api.ts               # API response types
        └── 📄 entities.ts          # Domain entity types
```

---

## 📋 File Purposes Quick Reference

### Configuration Files

| File                 | Purpose                                 |
| -------------------- | --------------------------------------- |
| `package.json`       | Project dependencies, scripts, metadata |
| `tsconfig.json`      | TypeScript compiler options             |
| `next.config.js`     | Next.js configuration, API proxy setup  |
| `tailwind.config.js` | Custom theme, colors, breakpoints       |
| `postcss.config.js`  | CSS processing plugins                  |
| `.eslintrc.json`     | Code linting rules                      |

### App Router Structure

| Path                 | Component                        | Purpose                          |
| -------------------- | -------------------------------- | -------------------------------- |
| `/`                  | `app/page.tsx`                   | Landing page with hero, features |
| `/universities`      | `app/universities/page.tsx`      | List all universities            |
| `/universities/[id]` | `app/universities/[id]/page.tsx` | Courses for university           |
| `/courses/[id]`      | `app/courses/[id]/page.tsx`      | Subjects for course              |
| `/subjects/[id]`     | `app/subjects/[id]/page.tsx`     | Resources for subject            |

### Component Library

| Component        | Location             | Purpose                         |
| ---------------- | -------------------- | ------------------------------- |
| `Header`         | `components/layout/` | Navigation bar with mobile menu |
| `Footer`         | `components/layout/` | Site footer                     |
| `Breadcrumbs`    | `components/layout/` | Navigation trail                |
| `Button`         | `components/ui/`     | Reusable button with variants   |
| `Card`           | `components/ui/`     | Container for content           |
| `Skeleton`       | `components/ui/`     | Loading placeholders            |
| `EmptyState`     | `components/ui/`     | Empty content displays          |
| `DownloadButton` | `components/ui/`     | File download button            |

### Redux Store

| File                       | Purpose                     |
| -------------------------- | --------------------------- |
| `store/index.ts`           | Store configuration, types  |
| `store/api.ts`             | RTK Query API endpoints     |
| `store/navigationSlice.ts` | Navigation state management |

### Utilities

| File                | Purpose                        |
| ------------------- | ------------------------------ |
| `lib/utils.ts`      | Class name utilities (cn)      |
| `lib/format.ts`     | Format dates, file sizes, etc. |
| `hooks/useRedux.ts` | Typed Redux hooks              |

### Types

| File                | Purpose                                       |
| ------------------- | --------------------------------------------- |
| `types/api.ts`      | API response types                            |
| `types/entities.ts` | Domain model types (University, Course, etc.) |

---

## 🔍 Key Files to Start With

If you're new to the project, read these files in order:

1. **`README.md`** - Project overview
2. **`GETTING_STARTED.md`** - Setup instructions
3. **`src/app/page.tsx`** - Simple page example
4. **`src/store/api.ts`** - API integration
5. **`src/components/ui/Button.tsx`** - Component example
6. **`DOCUMENTATION.md`** - Deep dive into architecture

---

## 🎯 Finding Specific Features

### Want to modify...?

**Colors/Theme:**
→ `tailwind.config.js`

**API Endpoints:**
→ `src/store/api.ts`

**Home Page:**
→ `src/app/page.tsx`

**Header/Navigation:**
→ `src/components/layout/Header.tsx`

**Button Styles:**
→ `src/components/ui/Button.tsx`

**Loading States:**
→ `src/components/ui/Skeleton.tsx`

**Error Messages:**
→ `src/components/ui/EmptyState.tsx`

**Type Definitions:**
→ `src/types/entities.ts`

**Global Styles:**
→ `src/app/globals.css`

---

## 📊 File Statistics

- **Total Files:** ~40
- **TypeScript Files:** ~30
- **Components:** 15+
- **Pages:** 5
- **Documentation:** 7 files
- **Lines of Code:** 2,500+

---

## 🔄 Data Flow

```
User Action
    ↓
Page Component (src/app/)
    ↓
RTK Query Hook (from src/store/api.ts)
    ↓
API Call to Backend
    ↓
Response Cached in Redux Store
    ↓
UI Component (src/components/)
    ↓
Rendered to User
```

---

## 🎨 Component Hierarchy

```
layout.tsx (Root)
  ├── Header
  │   └── Mobile Menu
  ├── Main Content
  │   ├── Breadcrumbs
  │   └── Page Component
  │       ├── Cards
  │       │   ├── Card Content
  │       │   └── Buttons
  │       ├── Empty States
  │       └── Skeletons
  └── Footer
```

---

## 📝 Naming Conventions

- **Components:** PascalCase (e.g., `Button.tsx`, `EmptyState.tsx`)
- **Utilities:** camelCase (e.g., `utils.ts`, `format.ts`)
- **Hooks:** camelCase with 'use' prefix (e.g., `useRedux.ts`)
- **Types:** PascalCase for interfaces (e.g., `University`, `Course`)
- **Files:** kebab-case for routes, PascalCase for components

---

## 🔐 Important Files (Never Delete)

- `package.json` - Dependencies
- `next.config.js` - Next.js config
- `tsconfig.json` - TypeScript config
- `src/app/layout.tsx` - Root layout
- `src/store/index.ts` - Redux store
- `.env.local` - Environment variables

---

## 📦 File Size Distribution

```
Small (< 100 lines):  Configuration files, simple utilities
Medium (100-300):     Most components, pages
Large (300-500):      Subject details page with tabs
Very Large (500+):    Documentation files
```

---

This structure is designed to be:

- ✅ **Scalable** - Easy to add new pages/components
- ✅ **Maintainable** - Clear organization
- ✅ **Type-Safe** - TypeScript throughout
- ✅ **Mobile-First** - Optimized structure for performance

---

**Quick Navigation Tip:** Use VS Code's file search (Ctrl+P) to quickly find any file by name!
