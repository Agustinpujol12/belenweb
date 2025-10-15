import Link from 'next/link';
import { Logo } from '@/components/ui/icons';
import { Github, Twitter, Linkedin } from 'lucide-react';

export function AppFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-card">
      <div className="container max-w-7xl py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Logo className="h-8 w-8" />
            <span className="font-headline text-lg font-bold">Visually Inspiring</span>
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Visually Inspiring. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" aria-label="Twitter">
              <Twitter className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
            </Link>
            <Link href="#" aria-label="GitHub">
              <Github className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <Linkedin className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
