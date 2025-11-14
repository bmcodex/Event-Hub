# 🏎️ Event Hub - English Documentation

**Automotive Events Community Platform**

---

## 📖 Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Technology Stack](#technology-stack)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Architecture](#architecture)
7. [API Reference](#api-reference)
8. [Contributing](#contributing)
9. [License](#license)

---

## 🎯 Overview

Event Hub is a modern web application designed for automotive enthusiasts to discover, create, and share car events. Whether you're interested in BMW meetups, JDM cars, classic vehicles, drift events, or track days, Event Hub connects you with your automotive community.

### Key Highlights

- **8 Event Categories** - BMW, JDM, Classics, Drift, Tuning, Racing, Meetup, Track Day
- **Interactive Calendar** - Browse events by date
- **Location-Based Discovery** - Find events near you with map integration
- **Photo Gallery** - Share and view event photos
- **Community Features** - Comments, ratings, and attendee tracking
- **Real-time Notifications** - Stay updated on event changes
- **Responsive Design** - Works on mobile, tablet, and desktop

---

## ✨ Features

### Event Management
- Create and manage automotive events
- Set event details (date, time, location, category)
- Track attendee count and status
- Event status tracking (upcoming, ongoing, completed, cancelled)

### Discovery & Filtering
- Browse events by category
- Filter by location
- Search functionality
- Calendar view

### Media & Content
- Upload event photos
- Photo gallery with captions
- Photo likes and comments
- User avatars and profiles

### Community Engagement
- Leave comments and reviews
- Rate events (1-5 stars)
- Track event attendance
- Follow favorite categories

### Notifications
- Event reminders
- Update notifications
- New comment alerts
- Photo upload notifications
- Event cancellation alerts

### User Features
- OAuth authentication
- User profiles
- Preference settings
- Event history
- Favorite categories

---

## 🛠️ Technology Stack

### Frontend
- **React 19** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling
- **Vite** - Build tool
- **Lucide React** - Icons

### Backend
- **Express.js** - Web framework
- **Node.js** - Runtime
- **tRPC** - Type-safe API
- **Drizzle ORM** - Database ORM

### Database
- **MySQL/TiDB** - Relational database
- 8 main tables (Users, Events, Attendees, Photos, Comments, Ratings, Notifications, Preferences)

### Additional
- **Google Maps** - Location integration
- **OAuth 2.0** - Authentication
- **JWT** - Session management

---

## 🚀 Installation

### Prerequisites
- Node.js 18 or higher
- pnpm (or npm)
- MySQL/TiDB database
- Git

### Step-by-Step Setup

```bash
# 1. Clone the repository
git clone https://github.com/bmcodex/Event-Hub.git
cd Event-Hub

# 2. Install dependencies
pnpm install

# 3. Create environment file
cp .env.example .env.local

# 4. Configure environment variables
# Edit .env.local with your settings:
# - DATABASE_URL: Your MySQL connection string
# - OAuth credentials
# - API keys

# 5. Setup database
pnpm db:push

# 6. Start development server
pnpm dev
```

The application will be available at `http://localhost:3000`

### Docker Setup

```bash
# Build Docker image
docker build -t event-hub .

# Run container
docker run -p 3000:3000 event-hub
```

---

## 📖 Usage

### Creating an Event

1. Click "Create Event" button
2. Fill in event details:
   - Title
   - Description
   - Category (BMW, JDM, Classics, etc.)
   - Location
   - Date and time
   - Max attendees (optional)
3. Submit form

### Finding Events

1. **Browse Calendar** - Click on dates to see events
2. **Use Filters** - Select categories to filter
3. **View Map** - See events on map
4. **Search** - Find specific events

### Attending Events

1. Click on an event
2. Click "Attend" or "Interested"
3. Your status will be updated
4. You'll receive notifications

### Uploading Photos

1. Go to event details
2. Click "Upload Photo"
3. Select image file
4. Add caption (optional)
5. Submit

### Leaving Comments

1. Scroll to comments section
2. Write your comment
3. Rate the event (1-5 stars)
4. Click "Post"

---

## 🏗️ Architecture

### Frontend Architecture
- **Components** - Reusable UI components
- **Hooks** - Custom React hooks
- **Context** - State management
- **Utils** - Helper functions

### Backend Architecture
- **tRPC Routers** - API endpoints
- **Database Queries** - Data access layer
- **Authentication** - OAuth & JWT
- **Notifications** - Real-time updates

### Database Schema
- **users** - User accounts
- **events** - Event information
- **eventAttendees** - Attendance tracking
- **eventPhotos** - Event photos
- **eventComments** - Comments and reviews
- **eventRatings** - Event ratings
- **notifications** - User notifications
- **userPreferences** - User settings

---

## 🔌 API Reference

### Events
```
GET /api/trpc/events.list - List all events
GET /api/trpc/events.getById - Get event by ID
POST /api/trpc/events.create - Create new event
PUT /api/trpc/events.update - Update event
DELETE /api/trpc/events.delete - Delete event
```

### Comments
```
GET /api/trpc/comments.list - List comments
POST /api/trpc/comments.create - Add comment
DELETE /api/trpc/comments.delete - Delete comment
```

### Photos
```
GET /api/trpc/photos.list - List photos
POST /api/trpc/photos.upload - Upload photo
DELETE /api/trpc/photos.delete - Delete photo
```

### Notifications
```
GET /api/trpc/notifications.list - List notifications
POST /api/trpc/notifications.markAsRead - Mark as read
DELETE /api/trpc/notifications.delete - Delete notification
```

---

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

### Development Workflow
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Write tests
5. Submit a pull request

### Code Style
- Use TypeScript
- Follow ESLint rules
- Use Prettier for formatting
- Write meaningful commit messages

---

## 📝 License

This project is licensed under the MIT License - see [LICENSE](LICENSE) file for details.

---

## 📞 Support & Contact

- 📖 [Full Documentation](docs/)
- ❓ [FAQ](FAQ.md)
- 🐛 [Report Issues](https://github.com/bmcodex/Event-Hub/issues)
- 💡 [Request Features](https://github.com/bmcodex/Event-Hub/issues)

---

## 🗺️ Roadmap

### Version 1.0 (Current) ✅
- Event calendar
- Event listing
- Category filters
- Map integration
- Photo gallery
- Comments & ratings
- Notifications

### Version 1.1 (Planned)
- Advanced search
- Event recommendations
- Social sharing
- Event series
- Recurring events

### Version 1.2 (Planned)
- Mobile app
- Real-time chat
- Event ticketing
- Payment integration
- Analytics dashboard

### Version 2.0 (Future)
- AI-powered recommendations
- Virtual events
- Live streaming
- Community marketplace
- Advanced analytics

---

## 🌟 Statistics

| Metric | Value |
|--------|-------|
| Total Commits | 57 |
| Components | 6+ |
| Database Tables | 8 |
| Event Categories | 8 |
| Documentation Files | 20+ |
| Lines of Code | 4000+ |

---

<div align="center">

**Made with ❤️ by the Event Hub Team**

*Connecting automotive enthusiasts worldwide*

[🏠 Back to Main](README.md) | [📖 Polish Version](README_PL.md)

</div>
