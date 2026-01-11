# Deployment Guide

## Quick Start

### Local Development

```bash
npm install
cp .env.example .env.local
npm run dev
```

### Production Build

```bash
npm run build
npm start
```

## Deployment Platforms

### 1. Vercel (Recommended)

**Why Vercel?**

- Built for Next.js
- Zero configuration
- Automatic HTTPS
- Global CDN
- Serverless functions

**Steps:**

1. Push code to GitHub
2. Import repository in Vercel
3. Configure environment variables:
   - `NEXT_PUBLIC_API_URL`
   - `NEXT_PUBLIC_SITE_URL`
4. Deploy

**CLI Deployment:**

```bash
npm i -g vercel
vercel login
vercel
```

### 2. Netlify

**Steps:**

1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Add environment variables
5. Deploy

### 3. Docker

**Dockerfile:**

```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3001
CMD ["npm", "start"]
```

**Build & Run:**

```bash
docker build -t user-frontend .
docker run -p 3001:3001 -e NEXT_PUBLIC_API_URL=http://api:5000/api user-frontend
```

### 4. Traditional VPS (Ubuntu/Nginx)

**Install Node.js:**

```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

**Setup Application:**

```bash
cd /var/www
git clone <your-repo>
cd User_Frontend
npm install
npm run build
```

**PM2 Process Manager:**

```bash
sudo npm i -g pm2
pm2 start npm --name "user-frontend" -- start
pm2 startup
pm2 save
```

**Nginx Configuration:**

```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## Environment Variables

Required for all deployments:

```env
# API Configuration
NEXT_PUBLIC_API_URL=https://api.yourdomain.com/api

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## Post-Deployment Checklist

- [ ] Test all routes work
- [ ] Verify API connection
- [ ] Check mobile responsiveness
- [ ] Test download functionality
- [ ] Verify SEO metadata
- [ ] Test error pages (404, 500)
- [ ] Check loading states
- [ ] Monitor performance metrics
- [ ] Setup analytics (optional)
- [ ] Configure custom domain
- [ ] Enable HTTPS
- [ ] Setup CDN (if not using Vercel)

## Performance Optimization

### 1. Enable Compression

Already handled by Next.js in production mode.

### 2. Image Optimization

Using Next.js Image component - automatic optimization.

### 3. Caching

- RTK Query caching for API responses
- Browser caching via headers
- CDN caching (Vercel/Netlify automatic)

### 4. Code Splitting

Automatic per-route code splitting via Next.js.

## Monitoring

### Recommended Tools

- **Vercel Analytics** - Built-in for Vercel deployments
- **Google Analytics** - User behavior tracking
- **Sentry** - Error monitoring
- **Lighthouse** - Performance auditing

### Key Metrics to Monitor

- First Contentful Paint (FCP)
- Largest Contentful Paint (LCP)
- Time to Interactive (TTI)
- Cumulative Layout Shift (CLS)
- API response times
- Error rates

## Troubleshooting

### Build Fails

```bash
# Clear cache
rm -rf .next node_modules
npm install
npm run build
```

### API Not Connecting

1. Verify `NEXT_PUBLIC_API_URL` is set correctly
2. Check CORS settings on backend
3. Verify backend is accessible from deployment environment

### 404 on Routes

Ensure hosting platform supports Next.js rewrites.

### Slow Performance

1. Check bundle size: `npm run build -- --analyze`
2. Verify images are optimized
3. Check API response times
4. Review network waterfall in DevTools

## Scaling

### Horizontal Scaling

Most platforms (Vercel, Netlify) auto-scale.

For VPS:

- Use load balancer (Nginx/HAProxy)
- Run multiple instances with PM2 cluster mode
- Use Redis for session storage if needed

### CDN Configuration

- Already included with Vercel/Netlify
- For VPS: Cloudflare or AWS CloudFront

## Security

### Headers Configuration

Add to `next.config.js`:

```javascript
async headers() {
  return [
    {
      source: '/:path*',
      headers: [
        {
          key: 'X-Frame-Options',
          value: 'DENY',
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        {
          key: 'Referrer-Policy',
          value: 'origin-when-cross-origin',
        },
      ],
    },
  ];
}
```

### SSL/HTTPS

- Vercel/Netlify: Automatic
- VPS: Use Let's Encrypt with Certbot

## Maintenance

### Updates

```bash
# Update dependencies
npm update

# Check for outdated packages
npm outdated

# Update Next.js
npm install next@latest react@latest react-dom@latest
```

### Backups

- Code: Version control (Git)
- Environment variables: Document securely
- Database: N/A (backend responsibility)

---

**Need help? Contact: support@lastminanswers.com**
