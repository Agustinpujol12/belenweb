import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const portfolioItems = [
  { id: 'portfolio-1', title: 'Cinematic Short Film', category: 'Video Editing' },
  { id: 'portfolio-2', title: 'Brand Identity', category: 'Graphic Design' },
  { id: 'portfolio-3', title: 'Abstract Worlds', category: 'Digital Art' },
  { id: 'portfolio-4', title: 'Motion Graphics Reel', category: 'Video Editing' },
  { id: 'portfolio-5', title: 'Minimalist Logo Suite', category: 'Graphic Design' },
  { id: 'portfolio-6', title: 'Corporate Branding', category: 'Graphic Design' },
];

export function PortfolioSection() {
  return (
    <section id="portafolio" className="py-20 md:py-32 bg-background">
      <div className="container max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">
            Donde la <span className="text-primary">Creatividad</span> Cobra Vida
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Una selección de mis proyectos más recientes y destacados.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => {
            const image = PlaceHolderImages.find(p => p.id === item.id);
            return (
              <Card key={item.id} className="group relative overflow-hidden rounded-lg border-border/60">
                <Link href="#">
                  {image && (
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      data-ai-hint={image.imageHint}
                    />
                  )}
                  <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 group-hover:bg-black/70" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <h3 className="font-headline text-2xl font-bold">{item.title}</h3>
                    <p className="mt-2 text-sm uppercase tracking-wider text-accent">{item.category}</p>
                  </div>
                </Link>
              </Card>
            );
          })}
        </div>
        <div className="text-center mt-16">
          <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-full font-bold border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
            Ver Portafolio Completo
          </Button>
        </div>
      </div>
    </section>
  );
}
