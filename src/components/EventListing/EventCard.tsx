import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export interface EventData {
  id: string;
  imageUrl: string;
  isPromoted?: boolean;
  date: string;
  title: string;
  description: string;
  category: string;
}

interface EventCardProps {
  event: EventData;
  className?: string;
}

const EventCard: React.FC<EventCardProps> = ({ event, className }) => {
  return (
    <div className={cn("w-full group cursor-pointer", className)}>
      <Card className="overflow-hidden rounded-xl border-none shadow-none bg-transparent">
        <div className="relative">
          <img
            src={event.imageUrl}
            alt={event.title}
            className="w-full h-auto aspect-[3/4] object-cover rounded-xl group-hover:scale-105 transition-transform duration-300 ease-in-out"
          />
          {event.isPromoted && (
            <Badge
              variant="default"
              className="absolute top-3 left-3 bg-red-600 text-white uppercase text-xs font-bold border-none px-2.5 py-1"
            >
              Promoted
            </Badge>
          )}
          <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent flex items-end h-24">
            <p className="text-white font-semibold text-sm drop-shadow-md">{event.date}</p>
          </div>
        </div>
      </Card>
      <div className="pt-3">
        <h3 className="font-bold text-lg text-foreground truncate group-hover:text-accent-secondary transition-colors">{event.title}</h3>
        <p className="text-sm text-muted-foreground mt-0.5 truncate">{event.description}</p>
        <p className="text-sm text-muted-foreground truncate">{event.category}</p>
      </div>
    </div>
  );
};

export default EventCard;
