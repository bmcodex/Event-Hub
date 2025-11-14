# Deployment Guide

## Prerequisites
- Node.js 18+
- MySQL database
- Environment variables configured

## Build
```bash
pnpm build
```

## Deploy to Production
```bash
# Set environment variables
export NODE_ENV=production

# Start server
pnpm start
```

## Docker Deployment
```bash
docker build -t event-hub .
docker run -p 3000:3000 event-hub
```

## GitHub Pages
```bash
pnpm build
git add dist/
git commit -m "Deploy to GitHub Pages"
git push origin main
```
