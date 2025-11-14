import { int, mysqlEnum, mysqlTable, text, timestamp, varchar, decimal, boolean } from "drizzle-orm/mysql-core";

// Users table
export const users = mysqlTable("users", {
  id: int("id").autoincrement().primaryKey(),
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  avatar: text("avatar"),
  role: mysqlEnum("role", ["user", "admin", "organizer"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

// Events table
export const events = mysqlTable("events", {
  id: int("id").autoincrement().primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description"),
  category: mysqlEnum("category", ["BMW", "JDM", "classics", "drift", "tuning", "racing", "meetup", "track_day"]).notNull(),
  startDate: timestamp("startDate").notNull(),
  endDate: timestamp("endDate"),
  location: varchar("location", { length: 255 }).notNull(),
  latitude: decimal("latitude", { precision: 10, scale: 8 }),
  longitude: decimal("longitude", { precision: 11, scale: 8 }),
  organizerId: int("organizerId").notNull(),
  maxAttendees: int("maxAttendees"),
  currentAttendees: int("currentAttendees").default(0),
  imageUrl: text("imageUrl"),
  status: mysqlEnum("status", ["upcoming", "ongoing", "completed", "cancelled"]).default("upcoming").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

// Event attendees
export const eventAttendees = mysqlTable("eventAttendees", {
  id: int("id").autoincrement().primaryKey(),
  eventId: int("eventId").notNull(),
  userId: int("userId").notNull(),
  status: mysqlEnum("status", ["interested", "attending", "cancelled"]).default("interested").notNull(),
  joinedAt: timestamp("joinedAt").defaultNow().notNull(),
});

// Event photos
export const eventPhotos = mysqlTable("eventPhotos", {
  id: int("id").autoincrement().primaryKey(),
  eventId: int("eventId").notNull(),
  userId: int("userId").notNull(),
  photoUrl: text("photoUrl").notNull(),
  caption: text("caption"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

// Event comments
export const eventComments = mysqlTable("eventComments", {
  id: int("id").autoincrement().primaryKey(),
  eventId: int("eventId").notNull(),
  userId: int("userId").notNull(),
  content: text("content").notNull(),
  rating: int("rating"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

// Event ratings
export const eventRatings = mysqlTable("eventRatings", {
  id: int("id").autoincrement().primaryKey(),
  eventId: int("eventId").notNull(),
  userId: int("userId").notNull(),
  rating: int("rating").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

// Notifications
export const notifications = mysqlTable("notifications", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  eventId: int("eventId"),
  type: mysqlEnum("type", ["event_reminder", "event_update", "new_comment", "new_photo", "event_cancelled"]).notNull(),
  title: varchar("title", { length: 255 }).notNull(),
  message: text("message"),
  read: boolean("read").default(false),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

// User preferences
export const userPreferences = mysqlTable("userPreferences", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull().unique(),
  favoriteCategories: text("favoriteCategories"),
  notificationsEnabled: boolean("notificationsEnabled").default(true),
  emailNotifications: boolean("emailNotifications").default(true),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

// Types
export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;
export type Event = typeof events.$inferSelect;
export type InsertEvent = typeof events.$inferInsert;
export type EventAttendee = typeof eventAttendees.$inferSelect;
export type EventPhoto = typeof eventPhotos.$inferSelect;
export type EventComment = typeof eventComments.$inferSelect;
export type EventRating = typeof eventRatings.$inferSelect;
export type Notification = typeof notifications.$inferSelect;
export type UserPreference = typeof userPreferences.$inferSelect;
