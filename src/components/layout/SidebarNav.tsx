import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

const dateFilters = ["Today", "Tomorrow", "This Weekend"] as const;
type DateFilter = typeof dateFilters[number];

const SidebarNav: React.FC<{ className?: string }> = ({ className }) => {
  const [activeDateFilter, setActiveDateFilter] = useState<DateFilter>("Today");
  const [isDateRange, setIsDateRange] = useState<boolean>(false);

  const FilterSectionHeader = ({ title, onClear }: { title: string; onClear: (e: React.MouseEvent) => void }) => (
    <div className="flex items-center justify-between w-full">
      <span className="text-foreground font-medium text-base">{title}</span>
      <Button
        variant="link"
        className="text-xs text-accent-secondary p-0 h-auto hover:no-underline font-normal"
        onClick={(e) => {
          e.stopPropagation(); // prevent accordion from toggling
          onClear(e);
        }}
      >
        Clear
      </Button>
    </div>
  );

  return (
    <aside className={cn('w-full max-w-xs bg-background p-1', className)}>
      <h2 className="text-2xl font-bold mb-4 text-foreground px-4">Filters</h2>
      <div className="space-y-1">
        <Accordion type="multiple" defaultValue={['date']} className="w-full">
          {/* Date Filter */}
          <AccordionItem value="date" className="border rounded-lg overflow-hidden mb-2">
            <AccordionTrigger className="hover:no-underline p-4 bg-card">
              <FilterSectionHeader title="Date" onClear={() => { setActiveDateFilter("Today"); setIsDateRange(false); }} />
            </AccordionTrigger>
            <AccordionContent className="p-4 pt-2 space-y-4 bg-card">
              <div className="flex items-center gap-2 flex-wrap">
                {dateFilters.map((filter) => (
                  <Button
                    key={filter}
                    variant="outline"
                    onClick={() => setActiveDateFilter(filter)}
                    className={cn(
                      'rounded-md font-normal text-sm flex-auto',
                      'border-border text-accent-secondary bg-white hover:bg-red-50 hover:border-accent-secondary',
                      {
                        'border-accent-secondary ring-1 ring-accent-secondary': activeDateFilter === filter,
                      }
                    )}
                  >
                    {filter}
                  </Button>
                ))}
              </div>
              <div className="flex items-center space-x-2 pt-2">
                <Checkbox id="date-range" checked={isDateRange} onCheckedChange={(checked) => setIsDateRange(!!checked)} />
                <Label htmlFor="date-range" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-foreground">
                  Date Range
                </Label>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Categories Filter */}
          <AccordionItem value="categories" className="border rounded-lg overflow-hidden mb-2">
            <AccordionTrigger className="hover:no-underline p-4 bg-card">
              <FilterSectionHeader title="Categories" onClear={() => console.log('Clear Categories')} />
            </AccordionTrigger>
            <AccordionContent className="p-4 bg-card">
              <p className="text-sm text-muted-foreground">Category filters will go here.</p>
            </AccordionContent>
          </AccordionItem>

          {/* More Filters */}
          <AccordionItem value="more-filters" className="border rounded-lg overflow-hidden mb-2">
            <AccordionTrigger className="hover:no-underline p-4 bg-card">
                <FilterSectionHeader title="More Filters" onClear={() => console.log('Clear More Filters')} />
            </AccordionTrigger>
            <AccordionContent className="p-4 bg-card">
              <p className="text-sm text-muted-foreground">Additional filters will go here.</p>
            </AccordionContent>
          </AccordionItem>

          {/* Price Filter */}
          <AccordionItem value="price" className="border rounded-lg overflow-hidden">
            <AccordionTrigger className="hover:no-underline p-4 bg-card">
              <FilterSectionHeader title="Price" onClear={() => console.log('Clear Price')} />
            </AccordionTrigger>
            <AccordionContent className="p-4 bg-card">
               <p className="text-sm text-muted-foreground">Price range slider will go here.</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="px-4 mt-6">
        <Button variant="outline" className="w-full text-accent-secondary border-accent-secondary hover:bg-red-50 hover:text-accent-secondary">
          Browse by Venues
        </Button>
      </div>
    </aside>
  );
};

export default SidebarNav;
