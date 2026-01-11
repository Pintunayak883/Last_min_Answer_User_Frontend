# 🚀 Quick Start Guide - User Frontend

Welcome! This guide will help you get the User Frontend up and running in minutes.

## ✅ Prerequisites

Before you begin, ensure you have:

- **Node.js 18 or higher** installed ([Download here](https://nodejs.org/))
- **npm** (comes with Node.js)
- **Backend server** running on `http://localhost:5000`

## 📦 Step 1: Install Dependencies

Open your terminal in the `User_Frontend` folder and run:

```bash
npm install
```

This will install all required packages including Next.js, Redux Toolkit, Tailwind CSS, and more.

## ⚙️ Step 2: Configure Environment

The `.env.local` file is already created with default settings:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXT_PUBLIC_SITE_URL=http://localhost:3001
```

**If your backend runs on a different port**, edit `.env.local` accordingly.

## 🎯 Step 3: Start Development Server

Run the following command:

```bash
npm run dev
```

You should see:

```
✓ Ready in 2.5s
✓ Local: http://localhost:3001
```

## 🌐 Step 4: Open in Browser

1. Open your web browser
2. Navigate to: **http://localhost:3001**
3. You should see the Last Min Answers home page!

## 📱 Step 5: Test on Mobile

For the best experience (since this is mobile-first):

**Option 1: Browser DevTools**

1. Press `F12` to open DevTools
2. Click the device toggle icon (📱)
3. Select a mobile device (e.g., iPhone 12)

**Option 2: Real Mobile Device**

1. Find your computer's local IP address:
   - Windows: `ipconfig` (look for IPv4)
   - Mac/Linux: `ifconfig` (look for inet)
2. On your mobile device, open browser
3. Navigate to: `http://YOUR_IP_ADDRESS:3001`
4. Make sure both devices are on the same network!

## 🎨 What You'll See

### Home Page

- Hero section with call-to-action
- Feature highlights
- Resource types overview

### Universities Page (`/universities`)

- List of all universities
- Search functionality
- Click any university to see courses

### Course Listings

- Courses for selected university
- Search and filter options
- Click any course to see subjects

### Subject Details

- Tabbed interface for resources
- **Syllabus** tab - Course outlines
- **Question Papers** tab - Past papers by year
- **Notes** tab - Study notes by unit
- Download buttons for all files

## 🔧 Available Commands

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

## 📊 Project Structure Overview

```
User_Frontend/
├── src/
│   ├── app/              # Pages (Next.js App Router)
│   ├── components/       # Reusable UI components
│   ├── store/           # Redux store & API
│   ├── lib/             # Utilities
│   ├── hooks/           # Custom React hooks
│   └── types/           # TypeScript types
├── public/              # Static files
└── package.json         # Dependencies
```

## 🐛 Troubleshooting

### Port 3001 already in use

```bash
# Change port in package.json or run:
npm run dev -- -p 3002
```

### API connection failed

1. Verify backend is running: `http://localhost:5000/api/universities`
2. Check `.env.local` has correct `NEXT_PUBLIC_API_URL`
3. Look for CORS errors in browser console

### Module not found errors

```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
```

### TypeScript errors

```bash
# Restart TypeScript server in VS Code:
# Press Ctrl+Shift+P, type "TypeScript: Restart TS Server"
```

## 🎓 Learning Resources

### Next.js

- [Next.js Documentation](https://nextjs.org/docs)
- [App Router Guide](https://nextjs.org/docs/app)

### Redux Toolkit

- [RTK Query Tutorial](https://redux-toolkit.js.org/tutorials/rtk-query)
- [Redux Toolkit Docs](https://redux-toolkit.js.org/)

### Tailwind CSS

- [Tailwind Documentation](https://tailwindcss.com/docs)
- [Responsive Design](https://tailwindcss.com/docs/responsive-design)

## 🚀 Next Steps

1. **Explore the Code**

   - Start with `src/app/page.tsx` (home page)
   - Check `src/store/api.ts` (API integration)
   - Review components in `src/components/ui/`

2. **Customize Design**

   - Edit colors in `tailwind.config.js`
   - Modify components in `src/components/`
   - Update metadata in page files

3. **Add Features**

   - See `DOCUMENTATION.md` for architecture details
   - Follow existing patterns for consistency
   - Test on mobile devices

4. **Deploy**
   - See `DEPLOYMENT.md` for deployment options
   - Recommended: Vercel (easiest for Next.js)

## 💡 Tips for Success

✅ **Always test on mobile first** - This is a mobile-first app
✅ **Use Redux DevTools** - Install browser extension for debugging
✅ **Check Network tab** - Monitor API calls in DevTools
✅ **Hot reload** - Changes appear instantly in dev mode
✅ **TypeScript** - Let IntelliSense guide you

## 📞 Getting Help

- Check `DOCUMENTATION.md` for detailed architecture info
- Review `DEPLOYMENT.md` for production deployment
- Look at existing components for examples
- Email: support@lastminanswers.com

## ✨ You're Ready!

The User Frontend is now running. Happy coding! 🎉

---

**Key URLs:**

- Frontend: http://localhost:3001
- Backend API: http://localhost:5000/api
- Documentation: See DOCUMENTATION.md
