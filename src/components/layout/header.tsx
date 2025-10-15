'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Logo } from '@/components/ui/icons';
import { Menu } from 'lucide-react';

const navLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#sobre-mi', label: 'Sobre Mí' },
  { href: '#portafolio', label: 'Portafolio' },
  { href: '#contacto', label: 'Contacto' },
];

export function AppHeader() {
  const [isSheetOpen, setSheetOpen] = useState(false);

  const handleLinkClick = () => {
    setSheetOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-7xl items-center justify-between">
        <Link href="#inicio" className="flex items-center gap-2">
          <Logo className="h-8 w-8" />
          <span className="font-headline text-lg font-bold">Visually Inspiring</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button asChild className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 transition-opacity">
            <Link href="#contacto">Contactar Ahora</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-background">
              <div className="flex flex-col h-full">
                <div className="p-4 border-b">
                   <Link href="#inicio" className="flex items-center gap-2" onClick={handleLinkClick}>
                      <Logo className="h-8 w-8" />
                      <span className="font-headline text-lg font-bold">Visually Inspiring</span>
                   </Link>
                </div>
                <nav className="flex flex-col gap-4 p-4 text-lg">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="transition-colors hover:text-primary"
                      onClick={handleLinkClick}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                 <div className="mt-auto p-4">
                    <Button asChild size="lg" className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 transition-opacity">
                      <Link href="#contacto" onClick={handleLinkClick}>Contactar Ahora</Link>
                    </Button>
                  </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
