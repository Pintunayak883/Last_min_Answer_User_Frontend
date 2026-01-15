# One Answers - User Frontend

## 🎯 Project Overview

A production-ready, mobile-first education platform built with Next.js 14, TypeScript, and Redux Toolkit. Designed specifically for students to easily browse and download study materials on their mobile devices.

## 📱 Key Features

### Mobile-First Design

- ✅ Responsive design optimized for mobile devices
- ✅ Touch-friendly UI with 44px minimum touch targets
- ✅ Single-column layouts on mobile
- ✅ Large, readable fonts
- ✅ Fast performance on mobile networks

### User Experience

- ✅ Intuitive drill-down navigation: University → Course → Subject → Resources
- ✅ Search functionality on all listing pages
- ✅ Breadcrumb navigation adapted for mobile
- ✅ Skeleton loaders for smooth loading states
- ✅ Empty states and error handling
- ✅ Direct PDF downloads

### Technical Excellence

- ✅ Redux Toolkit for state management
- ✅ RTK Query for API calls with caching
- ✅ SEO optimization with Next.js Metadata API
- ✅ Server-side rendering where beneficial
- ✅ Type-safe with TypeScript
- ✅ Clean component architecture

## 🏗️ Architecture

### Project Structure

```
User_Frontend/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # Root layout with providers
│   │   ├── page.tsx            # Home page
│   │   ├── error.tsx           # Global error handler
│   │   ├── not-found.tsx       # 404 page
│   │   ├── universities/       # Universities routes
│   │   │   ├── page.tsx        # List all universities
│   │   │   └── [id]/
│   │   │       └── page.tsx    # Show courses for university
│   │   ├── courses/            # Courses routes
│   │   │   └── [id]/
│   │   │       └── page.tsx    # Show subjects for course
│   │   └── subjects/           # Subjects routes
│   │       └── [id]/
│   │           └── page.tsx    # Show resources for subject
│   ├── components/
│   │   ├── layout/             # Layout components
│   │   │   ├── Header.tsx      # Site header with mobile menu
│   │   │   ├── Footer.tsx      # Site footer
│   │   │   └── Breadcrumbs.tsx # Navigation breadcrumbs
│   │   ├── providers/
│   │   │   └── Providers.tsx   # Redux Provider wrapper
│   │   └── ui/                 # Reusable UI components
│   │       ├── Button.tsx      # Button with variants
│   │       ├── Card.tsx        # Card components
│   │       ├── Skeleton.tsx    # Loading skeletons
│   │       ├── EmptyState.tsx  # Empty/error states
│   │       └── DownloadButton.tsx # Download button
│   ├── store/                  # Redux store
│   │   ├── index.ts            # Store configuration
│   │   ├── api.ts              # RTK Query API slice
│   │   └── navigationSlice.ts  # Navigation state
│   ├── lib/                    # Utilities
│   │   ├── utils.ts            # General utilities
│   │   └── format.ts           # Formatting helpers
│   ├── hooks/
│   │   └── useRedux.ts         # Typed Redux hooks
│   └── types/                  # TypeScript types
│       ├── api.ts              # API types
│       └── entities.ts         # Domain entities
├── package.json
├── tsconfig.json
├── next.config.js
├── tailwind.config.js
└── .env.local
```

### State Management

**Redux Store Structure:**

```typescript
{
  api: {
    // RTK Query cache for all endpoints
    queries: { ... },
    mutations: { ... }
  },
  navigation: {
    selectedUniversity: University | null,
    selectedCourse: Course | null,
    selectedSubject: Subject | null,
    searchQuery: string
  }
}
```

**RTK Query Endpoints:**

- `getUniversities` - GET /universities
- `getUniversityById` - GET /universities/:id
- `getCourses` - GET /courses?universityId=
- `getCourseById` - GET /courses/:id
- `getSubjects` - GET /subjects?courseId=
- `getSubjectById` - GET /subjects/:id
- `getSyllabusBySubject` - GET /syllabus/subject/:subjectId
- `getQuestionPapersBySubject` - GET /question-papers/subject/:subjectId
- `getNotesBySubject` - GET /notes/subject/:subjectId

## 🎨 Design System

### Colors

- **Primary (Blue):** Trust and academic professionalism
  - 600: #2563eb (Main)
  - 700: #1d4ed8 (Hover)
- **Accent (Green):** Success and positivity
  - 600: #16a34a
- **Neutral (Slate):** Content and backgrounds

### Typography

- System font stack for optimal performance
- Responsive font sizes (mobile-first)
- Clear visual hierarchy

### Components

- **Cards:** Rounded corners, subtle shadows, hover effects
- **Buttons:** Large touch targets (min 44px), clear visual feedback
- **Inputs:** Clear focus states, mobile-optimized
- **Loading:** Shimmer skeletons for better perceived performance

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Install dependencies:**

```bash
cd User_Frontend
npm install
```

2. **Configure environment:**

```bash
cp .env.example .env.local
```

Edit `.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXT_PUBLIC_SITE_URL=http://localhost:3001
```

3. **Run development server:**

```bash
npm run dev
```

4. **Open browser:**
   Navigate to [http://localhost:3001](http://localhost:3001)

### Production Build

```bash
npm run build
npm start
```

## 📡 API Integration

The frontend expects the backend API to be running and accessible. The API base URL is configured via `NEXT_PUBLIC_API_URL`.

### API Response Format

All endpoints return responses in this format:

```typescript
{
  success: boolean;
  data: T;
  message?: string;
}
```

### Error Handling

- Network errors: Graceful fallback with retry option
- 404 errors: Custom not-found page
- 500 errors: Custom error page
- Empty data: Friendly empty states

## 📱 Mobile Optimization

### Performance

- Code splitting per route
- Image optimization with Next.js Image
- Lazy loading where appropriate
- RTK Query caching reduces API calls

### UX Considerations

- Touch targets minimum 44x44px
- No hover-only interactions
- Clear visual feedback on tap
- Optimized for one-handed use
- Fast page transitions

### Progressive Enhancement

- Works without JavaScript (SSR)
- Graceful degradation
- Mobile-first responsive design

## 🔍 SEO Features

### Metadata

- Dynamic page titles
- Meta descriptions per page
- Open Graph tags
- Proper heading hierarchy

### Technical SEO

- Semantic HTML
- Server-side rendering
- Static generation where possible
- Clean URL structure
- Sitemap ready

## 🧪 Development Tips

### Adding New Pages

1. Create page component in `src/app/`
2. Add metadata export
3. Use RTK Query hooks for data
4. Follow mobile-first design
5. Add proper loading/error states

### Component Guidelines

- Keep components small and focused
- Use TypeScript for type safety
- Follow mobile-first approach
- Ensure touch targets are adequate
- Test on actual mobile devices

### Performance Best Practices

- Use Server Components by default
- Client Components only when needed (interactivity)
- Optimize images with next/image
- Lazy load heavy components
- Monitor bundle size

## 🎯 User Flow

1. **Home Page** → Overview and CTA
2. **Universities** → Browse/search universities
3. **University Detail** → View courses
4. **Course Detail** → View subjects (grouped by semester)
5. **Subject Detail** → View and download resources
   - Syllabus tab
   - Question Papers tab (grouped by year)
   - Notes tab (grouped by unit)

## 🔐 Security

- No authentication required (public access)
- Environment variables for configuration
- Secure file downloads via backend
- XSS protection via React
- CSRF protection via Next.js

## 📦 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
CMD ["npm", "start"]
```

### Environment Variables

Required for production:

- `NEXT_PUBLIC_API_URL` - Backend API URL
- `NEXT_PUBLIC_SITE_URL` - Frontend site URL

## 🤝 Contributing

1. Follow the existing code structure
2. Maintain mobile-first approach
3. Write TypeScript, not JavaScript
4. Test on mobile devices
5. Keep accessibility in mind

## 📄 License

All rights reserved.

## 🆘 Support

For issues or questions, contact: support@lastminanswers.com

---

**Built with ❤️ for students everywhere**
