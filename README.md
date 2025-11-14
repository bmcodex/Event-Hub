# 🏎️ Event Hub

> **Automotive Events Community Platform**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub Stars](https://img.shields.io/github/stars/bmcodex/Event-Hub?style=social)](https://github.com/bmcodex/Event-Hub)
[![GitHub Forks](https://img.shields.io/github/forks/bmcodex/Event-Hub?style=social)](https://github.com/bmcodex/Event-Hub)
[![Commits](https://img.shields.io/badge/Commits-55-blue)](https://github.com/bmcodex/Event-Hub/commits/main)

---

## 🌐 Select Language / Wybierz Język

<div align="center">

### **[📖 English Documentation](README_EN.md)** | **[📖 Dokumentacja Polska](README_PL.md)**

</div>

---

## 📊 Project Statistics

<div align="center">

| Metric | Value |
|--------|-------|
| **Total Commits** | 55 🎯 |
| **Documentation Files** | 20+ 📚 |
| **React Components** | 6+ ⚛️ |
| **Event Categories** | 8 🎨 |
| **Database Tables** | 8 💾 |
| **Lines of Code** | 4000+ 💻 |
| **License** | MIT 📄 |
| **Repository** | GitHub 🔗 |

</div>

---

## ✨ Key Features

### 🗓️ **Event Calendar**
- Interactive calendar with date picker
- Event listing with pagination
- Event details page
- Status tracking (upcoming, ongoing, completed, cancelled)

### 🎨 **8 Event Categories**
- BMW, JDM, Classics, Drift, Tuning, Racing, Meetup, Track Day
- Multi-category filtering
- Category-based discovery
- Color-coded categories

### 🗺️ **Location & Maps**
- Event location display
- Map integration with markers
- Latitude/longitude coordinates
- Location-based filtering

### 📸 **Photos & Media**
- Photo upload for events
- Photo gallery per event
- Photo captions and likes
- Drag-and-drop upload

### 💬 **Comments & Ratings**
- Event comments and reviews
- 5-star rating system
- User avatars and timestamps
- Comment management

### 🔔 **Notifications**
- Event reminders
- Event updates
- New comments
- New photos
- Event cancellations
- Notification settings

### 👥 **User Features**
- OAuth authentication
- User profiles
- User preferences
- Favorite categories
- Event attendance tracking

---

## 🛠️ Technology Stack

```
Frontend:        React 19 + TypeScript + Tailwind CSS 4 + Vite
Backend:         Express.js + Node.js + tRPC
Database:        MySQL/TiDB + Drizzle ORM
Maps:            Google Maps Integration
Notifications:   Real-time system
```

---

## 🚀 Quick Start

### Installation (5 minutes)

```bash
# 1. Clone repository
git clone https://github.com/bmcodex/Event-Hub.git
cd Event-Hub

# 2. Install dependencies
pnpm install

# 3. Configure environment
cp .env.example .env.local

# 4. Setup database
pnpm db:push

# 5. Start development server
pnpm dev
```

Visit: **http://localhost:3000**

---

## 📁 Project Structure

```
event-hub/
├── client/                    # Frontend (React)
│   ├── src/components/       # UI Components
│   ├── src/pages/            # Page Components
│   ├── src/hooks/            # Custom Hooks
│   └── src/utils/            # Utilities
├── server/                    # Backend (Express)
│   ├── db.ts                 # Database Queries
│   └── routers.ts            # tRPC Procedures
├── shared/                    # Shared Code
│   ├── categories.ts         # Event Categories
│   ├── types.ts              # TypeScript Types
│   └── constants.ts          # Constants
├── drizzle/                   # Database
│   └── schema.ts             # Database Schema
└── docs/                      # Documentation
```

---

## 📚 Documentation

Complete documentation is available in two languages:

### 📖 **Full Documentation**
- **[README_EN.md](README_EN.md)** - English Version
- **[README_PL.md](README_PL.md)** - Polish Version

### 📋 **Additional Guides**
- [FEATURES.md](FEATURES.md) - Feature descriptions
- [INSTALLATION.md](INSTALLATION.md) - Installation guide
- [USAGE.md](USAGE.md) - User guide
- [ARCHITECTURE.md](ARCHITECTURE.md) - System architecture
- [API_DOCUMENTATION.md](API_DOCUMENTATION.md) - API reference
- [CONTRIBUTING.md](CONTRIBUTING.md) - Contribution guidelines
- [FAQ.md](FAQ.md) - Frequently asked questions
- [ROADMAP.md](ROADMAP.md) - Product roadmap
- [SECURITY.md](SECURITY.md) - Security guidelines
- [DEPLOYMENT.md](DEPLOYMENT.md) - Deployment guide

---

## 🎯 Use Cases

- 🏁 **Car Enthusiasts** - Find and organize car events
- 📸 **Photographers** - Share and showcase car photos
- 🏢 **Event Organizers** - Manage automotive events
- 🚗 **Car Clubs** - Coordinate meetups and races
- 🌍 **Community** - Connect with automotive community

---

## 🔒 Privacy & Security

- ✅ OAuth 2.0 authentication
- ✅ HTTPS encryption
- ✅ Database encryption
- ✅ User data privacy
- ✅ Secure API

---

## 🚀 Performance

- ⚡ Fast event loading
- 🎬 Smooth animations
- 📦 Optimized bundle
- 🖥️ GPU acceleration
- 💾 Efficient memory usage

---

## 🤝 Contributing

We welcome contributions! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

---

## 📝 License

MIT License - see [LICENSE](LICENSE) file for details.

---

## 📞 Support

- 📖 [Documentation](docs/)
- ❓ [FAQ](FAQ.md)
- 🐛 [Report Bug](https://github.com/bmcodex/Event-Hub/issues)
- 💡 [Request Feature](https://github.com/bmcodex/Event-Hub/issues)

---

## 🗺️ Roadmap

### Version 1.0 ✅
- Event calendar
- Event listing
- Category filters
- Map integration
- Photo gallery
- Comments & ratings
- Notifications

### Version 1.1 (Planned)
- Advanced search
- Recommendations
- Social sharing
- Event series

### Version 2.0 (Future)
- Mobile app
- Real-time chat
- Event ticketing
- Analytics

---

## 🌟 Star Us!

If you find this helpful, please give it a star ⭐

---

<div align="center">

### **Made with ❤️ by the Event Hub Team**

*Connecting automotive enthusiasts worldwide*

---

**[📖 English Documentation](README_EN.md)** | **[📖 Dokumentacja Polska](README_PL.md)**

</div>
