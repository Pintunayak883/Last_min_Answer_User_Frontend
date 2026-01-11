# Last Min Answers - User Frontend

A mobile-first, production-ready education platform for students to browse and download study materials.

## 🎯 Overview

This is the **User Frontend** - a public-facing website built specifically for students to access educational resources on their mobile devices. Clean, fast, and easy to use.

## ✨ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State Management:** Redux Toolkit + RTK Query
- **Icons:** Lucide React
- **SEO:** Next.js Metadata API

## 🚀 Features

- 📱 **Mobile-First Design** - Optimized for phones and tablets
- 🚀 **Server-Side Rendering** - Fast initial page loads
- 🔍 **SEO Optimized** - Dynamic metadata for all pages
- ⚡ **Smart Caching** - RTK Query reduces API calls
- 📥 **Direct Downloads** - One-tap access to study materials
- 🎨 **Professional UI** - Clean, trust-inspiring design
- 🔄 **Real-Time Search** - Find content quickly
- 💪 **Type-Safe** - Full TypeScript coverage
- ♿ **Accessible** - Semantic HTML and keyboard navigation

## 🏃 Quick Start

### Prerequisites

- Node.js 18 or higher
- Backend server running on `http://localhost:5000`

### Installation

```bash
# 1. Install dependencies
npm install

# 2. Environment already configured in .env.local
# (Edit if your backend uses different port)

# 3. Start development server
npm run dev

# 4. Open browser
# Navigate to http://localhost:3001
```

**That's it!** You should see the home page. 🎉

### First Steps

1. Browse to `/universities` to see the list
2. Click a university to see its courses
3. Click a course to see subjects
4. Click a subject to see and download resources

## 📱 Mobile Testing

**Test on real device:**

1. Find your computer's IP address
2. Make sure mobile is on same WiFi
3. Open `http://YOUR_IP:3001` on mobile browser

**Use DevTools:**

1. Press `F12` in browser
2. Click device toggle icon (📱)
3. Select mobile device

## 📂 Project Structure

```
User_Frontend/
├── src/
│   ├── app/              # Next.js pages (App Router)
│   │   ├── page.tsx      # Home page
│   │   ├── universities/ # Universities routes
│   │   ├── courses/      # Courses routes
│   │   └── subjects/     # Subjects routes
│   ├── components/
│   │   ├── layout/       # Header, Footer, Breadcrumbs
│   │   ├── ui/           # Reusable components
│   │   └── providers/    # Redux Provider
│   ├── store/           # Redux + RTK Query
│   ├── lib/             # Utilities
│   ├── hooks/           # Custom hooks
│   └── types/           # TypeScript types
├── GETTING_STARTED.md   # Quick start guide
├── DOCUMENTATION.md     # Technical docs
├── DEPLOYMENT.md        # Deploy guide
└── package.json         # Dependencies
```

## 🌐 Environment Variables

Required in `.env.local`:

```env
# Backend API URL
NEXT_PUBLIC_API_URL=http://localhost:5000/api

# Frontend site URL
NEXT_PUBLIC_SITE_URL=http://localhost:3001
```

## 🛠️ Available Scripts

```bash
# Development server (with hot reload)
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 📖 Documentation

- **[GETTING_STARTED.md](GETTING_STARTED.md)** - Detailed setup guide
- **[DOCUMENTATION.md](DOCUMENTATION.md)** - Full technical documentation
- **[DEPLOYMENT.md](DEPLOYMENT.md)** - How to deploy to production
- **[FILE_STRUCTURE.md](FILE_STRUCTURE.md)** - Project file organization
- **[PRE_LAUNCH_CHECKLIST.md](PRE_LAUNCH_CHECKLIST.md)** - Pre-deployment checklist
- **[PROJECT_SUMMARY.md](PROJECT_SUMMARY.md)** - Complete project overview

## 🎨 Pages

| Route                | Description                        |
| -------------------- | ---------------------------------- |
| `/`                  | Landing page with features and CTA |
| `/universities`      | Browse all universities            |
| `/universities/[id]` | View courses for a university      |
| `/courses/[id]`      | View subjects for a course         |
| `/subjects/[id]`     | View and download resources        |

## 🔌 API Integration

Connects to backend API with these endpoints:

- GET `/universities` - List all universities
- GET `/universities/:id` - Get university details
- GET `/courses?universityId=` - Get courses
- GET `/subjects?courseId=` - Get subjects
- GET `/syllabus/subject/:id` - Get syllabus
- GET `/question-papers/subject/:id` - Get papers
- GET `/notes/subject/:id` - Get notes

## 🚀 Deployment

### Quick Deploy to Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

### Other Options

- **Netlify** - Connect GitHub repo
- **Docker** - See DEPLOYMENT.md
- **VPS** - See DEPLOYMENT.md

**Important:** Set environment variables in your hosting platform!

## 🐛 Troubleshooting

**Port already in use?**

```bash
npm run dev -- -p 3002
```

**API not connecting?**

1. Verify backend is running
2. Check `.env.local` has correct URL
3. Look for CORS errors in console

**Build errors?**

```bash
rm -rf .next node_modules
npm install
npm run build
```

See `GETTING_STARTED.md` for more help.

## 🎯 Key Features for Students

- ✅ **Easy Navigation** - Simple drill-down flow
- ✅ **Search Everything** - Find content quickly
- ✅ **Mobile Optimized** - Works great on phones
- ✅ **Fast Downloads** - One tap to get files
- ✅ **Always Available** - Access anytime, anywhere

## 💻 For Developers

- ✅ **Type-Safe** - Full TypeScript
- ✅ **Clean Code** - Well-organized structure
- ✅ **Mobile-First** - Responsive by design
- ✅ **SEO Ready** - Metadata on all pages
- ✅ **Well Documented** - Comprehensive guides

## 📊 Tech Highlights

- **Server Components** - Better performance
- **RTK Query** - Smart API caching
- **Tailwind CSS** - Utility-first styling
- **Redux Toolkit** - Predictable state
- **Next.js Image** - Optimized images

## 🔐 Security

- No authentication required (public access)
- Environment variables for config
- XSS protection via React
- CSRF protection via Next.js
- Secure file downloads via backend

## 📞 Support

Questions or issues?

- Check documentation files
- Review code comments
- Email: support@lastminanswers.com

## 📄 License

All rights reserved.

---

**Built with ❤️ for students everywhere. Happy studying! 📚✨**
