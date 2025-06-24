import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Ticket, Search, ChevronDown, Menu } from 'lucide-react';

const mainNavLinks = ['Movies', 'Stream', 'Events', 'Plays', 'Sports', 'Activities'] as const;
const secondaryNavLinks = ['ListYourShow', 'Corporates', 'Offers', 'Gift Cards'] as const;

type NavLink = typeof mainNavLinks[number];

const TopHeader: React.FC<{ className?: string }> = ({ className }) => {
  const [activeLink, setActiveLink] = useState<NavLink>('Activities');

  const Logo = () => (
    <div className="flex items-center gap-2 flex-shrink-0">
      <Ticket className="h-8 w-8 text-accent-secondary" />
      <span className="font-bold text-xl text-foreground hidden sm:inline tracking-tighter">
        book<span className="font-extrabold">my</span>show
      </span>
    </div>
  );

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b",
      className
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top row */}
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4 lg:gap-8 flex-1 min-w-0">
            <Logo />
            <div className="relative hidden lg:block w-full max-w-lg">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search for Movies, Events, Plays, Sports and Activities"
                className="pl-10 w-full bg-secondary focus:bg-background h-9"
              />
            </div>
          </div>
          <div className="flex items-center gap-1 md:gap-3 flex-shrink-0 ml-2">
            <Button variant="ghost" className="hidden md:flex items-center gap-1 text-sm font-normal">
              <span>Chennai</span>
              <ChevronDown className="h-4 w-4" />
            </Button>
            <Button className="bg-accent-secondary text-white hover:bg-accent-secondary/90 px-4 sm:px-5 h-9 rounded-md text-sm font-medium hidden sm:block">
              Sign In
            </Button>
             <Button variant="ghost" size="icon" className="lg:hidden">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Bottom row - Navigation */}
        <div className="flex items-center justify-between h-12">
            <nav className="flex items-center gap-4 md:gap-6 text-sm font-medium overflow-x-auto pb-2 -mb-2 scrollbar-hide">
                {mainNavLinks.map((link) => (
                    <a
                        key={link}
                        href="#"
                        onClick={(e) => { e.preventDefault(); setActiveLink(link); }}
                        className={cn(
                            "py-3 whitespace-nowrap transition-colors hover:text-accent-secondary",
                            activeLink === link
                            ? "text-accent-secondary border-b-2 border-accent-secondary"
                            : "text-foreground/80"
                        )}
                    >
                        {link}
                    </a>
                ))}
            </nav>
            <nav className="hidden xl:flex items-center gap-4 md:gap-6 text-xs flex-shrink-0">
                {secondaryNavLinks.map((link) => (
                     <a
                        key={link}
                        href="#"
                        className="text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
                    >
                        {link}
                    </a>
                ))}
            </nav>
        </div>
      </div>
    </header>
  );
};

export default TopHeader;
