import React from 'react';
import EventCardGrid from '../components/EventListing/EventCardGrid';
import QuickFilters from '../components/EventListing/QuickFilters';
import SidebarNav from '../components/layout/SidebarNav';
import TopHeader from '../components/layout/TopHeader';

/**
 * Index page for the Event Booking Platform.
 * This page serves as the main entry point for users to browse and filter activities.
 * It assembles the primary layout components: TopHeader, SidebarNav, and the main content area
 * which includes QuickFilters and the EventCardGrid.
 * The layout is based on the provided HLSBRS (Header, Left Sidebar, Body, Right Sidebar - simplified here) structure.
 */
const IndexPage: React.FC = () => {
  // The layout is structured with a fixed header and a two-column grid for the main content on larger screens.
  // On smaller screens, the sidebar is hidden, and the layout becomes a single column.
  // The padding-top on the main container accounts for the height of the fixed TopHeader (h-16 + h-12 = h-28, which is 112px).
  // pt-32 (128px) is used to provide a bit of extra spacing below the header.

  return (
    <div className="bg-background text-foreground font-sans min-h-screen">
      <TopHeader />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-[256px_1fr] gap-x-8">
          {/* Left Column: Filters Sidebar (w-64 -> 256px) - visible on large screens */}
          <aside className="hidden lg:block">
            {/* The SidebarNav component itself is styled to fill its container */}
            <SidebarNav />
          </aside>

          {/* Right Column: Main Content Area */}
          <main>
            <h1 className="text-3xl font-bold text-foreground mb-1">
              Activities In Chennai
            </h1>
            <QuickFilters />
            <div className="mt-6">
              <EventCardGrid />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
