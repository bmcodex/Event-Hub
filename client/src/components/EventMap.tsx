import React, { useEffect, useRef } from 'react';
import { MapPin } from 'lucide-react';

interface Event {
  id: number;
  title: string;
  latitude: number;
  longitude: number;
  category: string;
}

interface EventMapProps {
  events: Event[];
  onEventClick: (eventId: number) => void;
  center?: { lat: number; lng: number };
  zoom?: number;
}

export const EventMap: React.FC<EventMapProps> = ({
  events,
  onEventClick,
  center = { lat: 52.2297, lng: 21.0122 },
  zoom = 10
}) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    // Placeholder for Google Maps integration
    // In production, you would initialize Google Maps here
    const mapContainer = mapRef.current;
    mapContainer.innerHTML = `
      <div class="w-full h-full flex items-center justify-center bg-gray-100 rounded-lg">
        <div class="text-center">
          <MapPin size={48} className="mx-auto mb-4 text-gray-400" />
          <p class="text-gray-600">Map integration with ${events.length} events</p>
          <p class="text-sm text-gray-500 mt-2">Center: ${center.lat}, ${center.lng}</p>
        </div>
      </div>
    `;
  }, [events, center]);

  return (
    <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
      <div ref={mapRef} className="w-full h-96" />
      
      <div className="p-4 border-t border-gray-200">
        <h3 className="font-semibold text-gray-800 mb-3">Events on Map ({events.length})</h3>
        <div className="space-y-2 max-h-40 overflow-y-auto">
          {events.map(event => (
            <button
              key={event.id}
              onClick={() => onEventClick(event.id)}
              className="w-full text-left p-2 hover:bg-gray-100 rounded-lg transition"
            >
              <div className="flex items-start gap-2">
                <MapPin size={16} className="text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-800">{event.title}</p>
                  <p className="text-xs text-gray-500">{event.category}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
