import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 'testimonial-1',
    name: 'Ana García',
    title: 'CEO, Startup Innovadora',
    quote: 'El trabajo de edición de video fue excepcional. Capturó la esencia de nuestra marca y el resultado final superó todas nuestras expectativas. ¡Profesionalismo y creatividad de primer nivel!',
  },
  {
    id: 'testimonial-2',
    name: 'Carlos Rodríguez',
    title: 'Músico Independiente',
    quote: 'El arte para mi nuevo álbum es simplemente increíble. Entendió mi visión a la perfección y la llevó a un nuevo nivel. La comunicación fue fluida y el proceso muy inspirador.',
  },
  {
    id: 'testimonial-3',
    name: 'Laura Fernández',
    title: 'Creadora de Contenido',
    quote: 'Contraté sus servicios para el branding de mi canal y fue la mejor decisión. El diseño es fresco, moderno y me ha ayudado a conectar mucho más con mi audiencia. ¡Totalmente recomendada!',
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonios" className="py-20 md:py-32 bg-card">
      <div className="container max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">
            Lo que Dicen Mis <span className="text-accent">Clientes</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Historias de éxito y colaboraciones que inspiran.
          </p>
        </div>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => {
              const image = PlaceHolderImages.find(p => p.id === testimonial.id);
              return (
                <CarouselItem key={testimonial.id}>
                  <div className="p-1">
                    <Card className="bg-background border-border/60 p-8">
                      <CardContent className="flex flex-col items-center justify-center p-0 gap-6 text-center">
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                          ))}
                        </div>
                        <p className="text-lg md:text-xl italic text-foreground/90">"{testimonial.quote}"</p>
                        <div className="flex items-center gap-4 mt-4">
                          {image && (
                            <Image
                              src={image.imageUrl}
                              alt={`Photo of ${testimonial.name}`}
                              width={64}
                              height={64}
                              className="rounded-full"
                              data-ai-hint={image.imageHint}
                            />
                          )}
                          <div>
                            <p className="font-bold text-lg">{testimonial.name}</p>
                            <p className="text-muted-foreground">{testimonial.title}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
