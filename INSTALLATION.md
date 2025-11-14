# Installation Guide

## Prerequisites
- Node.js 18+
- pnpm or npm
- MySQL/TiDB database
- Git

## Quick Start (5 minutes)

```bash
# 1. Clone repository
git clone https://github.com/bmcodex/Event-Hub.git
cd Event-Hub

# 2. Install dependencies
pnpm install

# 3. Configure environment
cp .env.example .env.local
# Edit .env.local with your settings

# 4. Setup database
pnpm db:push

# 5. Start development server
pnpm dev
```

Visit `http://localhost:3000`

## Database Setup

1. Create MySQL database
2. Set DATABASE_URL in .env.local
3. Run migrations: `pnpm db:push`

## Environment Variables

See `.env.example` for all available variables.

## Troubleshooting

### Port already in use
```bash
# Change port in vite.config.ts
```

### Database connection error
- Check DATABASE_URL format
- Verify MySQL is running
- Check credentials

### Build errors
```bash
# Clear cache and reinstall
rm -rf node_modules
pnpm install
pnpm build
```
