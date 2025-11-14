import React from 'react';
import { MapPin, Calendar, Users, Star, MessageCircle, Image } from 'lucide-react';
import { getCategoryIcon, getCategoryName } from '../../shared/categories';

interface EventCardProps {
  id: number;
  title: string;
  category: string;
  startDate: Date;
  location: string;
  attendees: number;
  maxAttendees?: number;
  rating: number;
  commentsCount: number;
  photosCount: number;
  imageUrl?: string;
  onClick: () => void;
}

export const EventCard: React.FC<EventCardProps> = ({
  id,
  title,
  category,
  startDate,
  location,
  attendees,
  maxAttendees,
  rating,
  commentsCount,
  photosCount,
  imageUrl,
  onClick
}) => {
  const formattedDate = new Date(startDate).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg shadow-md hover:shadow-xl transition transform hover:scale-105 overflow-hidden cursor-pointer"
    >
      {imageUrl && (
        <div className="h-40 bg-gray-200 overflow-hidden">
          <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
      
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-bold text-gray-800 flex-1 line-clamp-2">{title}</h3>
          <span className="text-2xl ml-2">{getCategoryIcon(category as any)}</span>
        </div>

        <p className="text-sm text-gray-600 mb-3">{getCategoryName(category as any)}</p>

        <div className="space-y-2 mb-4 text-sm text-gray-700">
          <div className="flex items-center gap-2">
            <Calendar size={16} className="text-blue-500" />
            <span>{formattedDate}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-red-500" />
            <span className="truncate">{location}</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-gray-200">
          <div className="flex items-center gap-3 text-sm">
            <div className="flex items-center gap-1">
              <Users size={16} className="text-green-500" />
              <span>{attendees}{maxAttendees ? `/${maxAttendees}` : ''}</span>
            </div>
            <div className="flex items-center gap-1">
              <Star size={16} className="text-yellow-500" fill="currentColor" />
              <span>{rating.toFixed(1)}</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-gray-500">
            <div className="flex items-center gap-1 text-xs">
              <MessageCircle size={14} />
              <span>{commentsCount}</span>
            </div>
            <div className="flex items-center gap-1 text-xs">
              <Image size={14} />
              <span>{photosCount}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
