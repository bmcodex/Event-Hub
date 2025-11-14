import React, { useState } from 'react';
import { Bell, X, Check } from 'lucide-react';

interface Notification {
  id: number;
  type: 'event_reminder' | 'event_update' | 'new_comment' | 'new_photo' | 'event_cancelled';
  title: string;
  message: string;
  read: boolean;
  createdAt: Date;
  eventId?: number;
}

interface NotificationCenterProps {
  notifications: Notification[];
  onMarkAsRead: (notificationId: number) => void;
  onMarkAllAsRead: () => void;
  onDelete: (notificationId: number) => void;
}

const getNotificationIcon = (type: string) => {
  switch (type) {
    case 'event_reminder':
      return '🔔';
    case 'event_update':
      return '📝';
    case 'new_comment':
      return '💬';
    case 'new_photo':
      return '📸';
    case 'event_cancelled':
      return '❌';
    default:
      return '📢';
  }
};

const getNotificationColor = (type: string) => {
  switch (type) {
    case 'event_reminder':
      return 'border-l-blue-500 bg-blue-50';
    case 'event_update':
      return 'border-l-green-500 bg-green-50';
    case 'new_comment':
      return 'border-l-purple-500 bg-purple-50';
    case 'new_photo':
      return 'border-l-pink-500 bg-pink-50';
    case 'event_cancelled':
      return 'border-l-red-500 bg-red-50';
    default:
      return 'border-l-gray-500 bg-gray-50';
  }
};

export const NotificationCenter: React.FC<NotificationCenterProps> = ({
  notifications,
  onMarkAsRead,
  onMarkAllAsRead,
  onDelete
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 text-gray-600 hover:text-gray-900 transition"
      >
        <Bell size={24} />
        {unreadCount > 0 && (
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {unreadCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-96 bg-white rounded-lg shadow-xl z-50 max-h-96 overflow-y-auto">
          <div className="sticky top-0 flex items-center justify-between p-4 border-b border-gray-200 bg-white">
            <h3 className="font-semibold text-gray-800">Notifications</h3>
            {unreadCount > 0 && (
              <button
                onClick={onMarkAllAsRead}
                className="text-sm text-blue-600 hover:text-blue-700 font-medium"
              >
                Mark all as read
              </button>
            )}
          </div>

          {notifications.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              <Bell size={32} className="mx-auto mb-2 opacity-50" />
              <p>No notifications</p>
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {notifications.map(notification => (
                <div
                  key={notification.id}
                  className={`p-4 border-l-4 ${getNotificationColor(notification.type)} cursor-pointer hover:opacity-75 transition`}
                  onClick={() => !notification.read && onMarkAsRead(notification.id)}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3 flex-1">
                      <span className="text-2xl">{getNotificationIcon(notification.type)}</span>
                      <div className="flex-1">
                        <p className={`font-semibold ${notification.read ? 'text-gray-600' : 'text-gray-800'}`}>
                          {notification.title}
                        </p>
                        <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                        <p className="text-xs text-gray-500 mt-2">
                          {new Date(notification.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      {!notification.read && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onMarkAsRead(notification.id);
                          }}
                          className="p-1 text-blue-500 hover:bg-blue-100 rounded transition"
                        >
                          <Check size={16} />
                        </button>
                      )}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onDelete(notification.id);
                        }}
                        className="p-1 text-red-500 hover:bg-red-100 rounded transition"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
