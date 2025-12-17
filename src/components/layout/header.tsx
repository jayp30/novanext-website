'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu } from 'lucide-react';

import { cn } from '@/lib/utils';
import { NAV_LINKS } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Logo } from '@/components/logo';

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-lg">
      <div className="container flex h-20 max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Logo />
          </Link>
          <nav className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-primary',
                  pathname === link.href ? 'text-foreground' : 'text-muted-foreground'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-2">
          <Button asChild>
            <Link href="/dashboard">Dashboard</Link>
          </Button>
        </div>

        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <SheetHeader>
               <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
            </SheetHeader>
            <Link href="/" className="mb-8 flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
              <Logo />
            </Link>
            <div className="flex flex-col space-y-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    'text-lg font-medium transition-colors hover:text-primary',
                    pathname === link.href ? 'text-primary' : 'text-foreground/80'
                  )}
                >
                  {link.label}
                </Link>
              ))}
               <Link
                  href="/dashboard"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    'text-lg font-medium transition-colors hover:text-primary',
                    pathname === '/dashboard' ? 'text-primary' : 'text-foreground/80'
                  )}
                >
                  Dashboard
                </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
