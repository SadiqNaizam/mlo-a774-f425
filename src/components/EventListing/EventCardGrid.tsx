import React from 'react';
import EventCard, { EventData } from './EventCard';
import { cn } from '@/lib/utils';

const eventsData: EventData[] = [
  {
    id: 'evt-1',
    imageUrl: 'https://placehold.co/300x400/6D28D9/FFFFFF?text=Wonder\nWorld',
    isPromoted: true,
    date: 'Sun, 22 Jun onwards',
    title: 'VGP Wonder World Chennai',
    description: 'VGP Wonder World: Chennai',
    category: 'Amusement & Theme parks',
  },
  {
    id: 'evt-2',
    imageUrl: 'https://placehold.co/300x400/0984E3/FFFFFF?text=Summer\nFun',
    isPromoted: true,
    date: 'Mon, 23 Jun onwards',
    title: 'Ideal Beach Resort Day Outing',
    description: 'Ideal Beach Resort: ECR, Chennai',
    category: 'Resorts',
  },
  {
    id: 'evt-3',
    imageUrl: 'https://placehold.co/300x400/2D3436/FFFFFF?text=Sun\nDance',
    isPromoted: false,
    date: 'Sun, 22 Jun onwards',
    title: 'Casagrand Sundance',
    description: 'Casagrand Suncity: Chennai',
    category: 'Theme parks',
  },
  {
    id: 'evt-4',
    imageUrl: 'https://placehold.co/300x400/4C78B2/FFFFFF?text=Sea\nThe+Magic',
    isPromoted: false,
    date: 'Sun, 22 Jun onwards',
    title: 'VGP Marine Kingdom - Chennai',
    description: 'VGP Marine Kingdom: Chennai',
    category: 'Aquariums',
  },
];

interface EventCardGridProps {
    className?: string;
}

const EventCardGrid: React.FC<EventCardGridProps> = ({ className }) => {
  return (
    <div className={cn("grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-8", className)}>
      {eventsData.map(event => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
};

export default EventCardGrid;
