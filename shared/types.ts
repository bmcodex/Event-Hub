export type EventCategory = "BMW" | "JDM" | "classics" | "drift" | "tuning" | "racing" | "meetup" | "track_day";
export type EventStatus = "upcoming" | "ongoing" | "completed" | "cancelled";
export type AttendeeStatus = "interested" | "attending" | "cancelled";
export type NotificationType = "event_reminder" | "event_update" | "new_comment" | "new_photo" | "event_cancelled";
export type UserRole = "user" | "admin" | "organizer";

export interface User {
  id: number;
  openId: string;
  name?: string;
  email?: string;
  avatar?: string;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
}

export interface Event {
  id: number;
  title: string;
  description?: string;
  category: EventCategory;
  startDate: Date;
  endDate?: Date;
  location: string;
  latitude?: number;
  longitude?: number;
  organizerId: number;
  maxAttendees?: number;
  currentAttendees: number;
  imageUrl?: string;
  status: EventStatus;
  createdAt: Date;
  updatedAt: Date;
}

export interface EventAttendee {
  id: number;
  eventId: number;
  userId: number;
  status: AttendeeStatus;
  joinedAt: Date;
}

export interface EventPhoto {
  id: number;
  eventId: number;
  userId: number;
  photoUrl: string;
  caption?: string;
  createdAt: Date;
}

export interface EventComment {
  id: number;
  eventId: number;
  userId: number;
  content: string;
  rating?: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface EventRating {
  id: number;
  eventId: number;
  userId: number;
  rating: number;
  createdAt: Date;
}

export interface Notification {
  id: number;
  userId: number;
  eventId?: number;
  type: NotificationType;
  title: string;
  message?: string;
  read: boolean;
  createdAt: Date;
}

export interface UserPreference {
  id: number;
  userId: number;
  favoriteCategories?: string;
  notificationsEnabled: boolean;
  emailNotifications: boolean;
  createdAt: Date;
  updatedAt: Date;
}
