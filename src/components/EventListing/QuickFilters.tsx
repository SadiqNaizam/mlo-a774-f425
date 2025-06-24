import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

// Data based on the UI screenshot
const filterCategories: readonly string[] = [
  'Amusement Parks',
  'Tourist Attractions',
  'Gaming',
  'Adventure',
  'Nightlife',
  'Food and Drinks',
  'Parties',
  'Unique Tours',
] as const;

interface QuickFiltersProps {
  className?: string;
}

const QuickFilters: React.FC<QuickFiltersProps> = ({ className }) => {
  const [activeFilter, setActiveFilter] = useState<string>('Amusement Parks');

  const handleFilterClick = React.useCallback((filter: string) => {
    setActiveFilter(prevFilter => (prevFilter === filter ? '' : filter));
  }, []);

  return (
    <div className={cn("py-4", className)}>
      <div className="flex items-center flex-wrap gap-3">
        {filterCategories.map((category) => (
          <Button
            key={category}
            variant="outline"
            onClick={() => handleFilterClick(category)}
            className={cn(
              "rounded-full border-gray-300 bg-white text-gray-800 font-normal text-sm px-4 py-1 h-auto hover:bg-red-50 hover:border-accent-secondary hover:text-accent-secondary transition-colors duration-200",
              {
                'border-accent-secondary text-accent-secondary bg-red-50': activeFilter === category,
              }
            )}
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default QuickFilters;
