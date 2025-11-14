import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Event {
  id: number;
  title: string;
  date: Date;
  category: string;
}

interface EventCalendarProps {
  events: Event[];
  onDateSelect: (date: Date) => void;
  onEventClick: (eventId: number) => void;
}

export const EventCalendar: React.FC<EventCalendarProps> = ({
  events,
  onDateSelect,
  onEventClick
}) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const daysInMonth = getDaysInMonth(currentDate);
  const firstDay = getFirstDayOfMonth(currentDate);
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const emptyDays = Array.from({ length: firstDay }, (_, i) => i);

  const getEventsForDate = (day: number) => {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    return events.filter(event => {
      const eventDate = new Date(event.date);
      return eventDate.toDateString() === date.toDateString();
    });
  };

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  return (
    <div className="w-full bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
        </h2>
        <div className="flex gap-2">
          <button
            onClick={handlePrevMonth}
            className="p-2 hover:bg-gray-100 rounded-lg transition"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={handleNextMonth}
            className="p-2 hover:bg-gray-100 rounded-lg transition"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-2 mb-4">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="text-center font-semibold text-gray-600 py-2">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2">
        {emptyDays.map(i => (
          <div key={`empty-${i}`} className="aspect-square" />
        ))}
        {days.map(day => {
          const dayEvents = getEventsForDate(day);
          return (
            <div
              key={day}
              onClick={() => onDateSelect(new Date(currentDate.getFullYear(), currentDate.getMonth(), day))}
              className="aspect-square p-2 border border-gray-200 rounded-lg hover:bg-blue-50 cursor-pointer transition"
            >
              <div className="font-semibold text-gray-800 mb-1">{day}</div>
              {dayEvents.length > 0 && (
                <div className="text-xs space-y-1">
                  {dayEvents.slice(0, 2).map(event => (
                    <div
                      key={event.id}
                      onClick={(e) => {
                        e.stopPropagation();
                        onEventClick(event.id);
                      }}
                      className="bg-blue-500 text-white px-1 py-0.5 rounded truncate hover:bg-blue-600"
                    >
                      {event.title}
                    </div>
                  ))}
                  {dayEvents.length > 2 && (
                    <div className="text-gray-500">+{dayEvents.length - 2} more</div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
