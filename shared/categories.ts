export type EventCategory = "BMW" | "JDM" | "classics" | "drift" | "tuning" | "racing" | "meetup" | "track_day";

export const CATEGORIES: Record<EventCategory, { name: string; icon: string; color: string; description: string }> = {
  BMW: {
    name: "BMW",
    icon: "🏁",
    color: "from-blue-600 to-blue-400",
    description: "BMW enthusiasts and events"
  },
  JDM: {
    name: "JDM",
    icon: "🇯🇵",
    color: "from-red-600 to-red-400",
    description: "Japanese Domestic Market cars"
  },
  classics: {
    name: "Classics",
    icon: "🚗",
    color: "from-amber-600 to-amber-400",
    description: "Classic and vintage cars"
  },
  drift: {
    name: "Drift",
    icon: "🌪️",
    color: "from-purple-600 to-purple-400",
    description: "Drift events and competitions"
  },
  tuning: {
    name: "Tuning",
    icon: "⚙️",
    color: "from-green-600 to-green-400",
    description: "Car tuning and modifications"
  },
  racing: {
    name: "Racing",
    icon: "🏎️",
    color: "from-red-700 to-red-500",
    description: "Racing events and competitions"
  },
  meetup: {
    name: "Meetup",
    icon: "👥",
    color: "from-indigo-600 to-indigo-400",
    description: "Car meetups and gatherings"
  },
  track_day: {
    name: "Track Day",
    icon: "🏁",
    color: "from-orange-600 to-orange-400",
    description: "Track day events"
  }
};

export const getCategoryColor = (category: EventCategory): string => {
  return CATEGORIES[category]?.color || "from-gray-600 to-gray-400";
};

export const getCategoryIcon = (category: EventCategory): string => {
  return CATEGORIES[category]?.icon || "🚗";
};

export const getCategoryName = (category: EventCategory): string => {
  return CATEGORIES[category]?.name || category;
};
