import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function HeroSection() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');

  return (
    <section id="inicio" className="relative h-[calc(100vh-4rem)] w-full">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4">
        <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter !leading-[1.1] animate-fade-in-up">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">VISUALIZA.</span> CREA. INSPIRA.
        </h1>
        <p className="mt-4 max-w-2xl text-lg md:text-xl text-foreground/80">
          Edición de Video | Diseño Gráfico | Arte Digital
        </p>
        <div className="mt-8">
          <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent text-primary-foreground text-lg px-8 py-6 rounded-full font-bold hover:opacity-90 transition-all transform hover:scale-105">
            <Link href="#portafolio">Ver Portafolio</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
