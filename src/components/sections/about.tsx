import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function AboutSection() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about-photo');

  return (
    <section id="sobre-mi" className="py-20 md:py-32 bg-card">
      <div className="container max-w-7xl px-4">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2">
            <Card className="overflow-hidden rounded-lg shadow-lg border-2 border-primary/50">
              {aboutImage && (
                <Image
                  src={aboutImage.imageUrl}
                  alt={aboutImage.description}
                  width={400}
                  height={500}
                  className="w-full h-auto object-cover"
                  data-ai-hint={aboutImage.imageHint}
                />
              )}
            </Card>
          </div>
          <div className="md:col-span-3">
            <h2 className="font-headline text-4xl md:text-5xl font-bold">
              Mi Historia. <span className="text-accent">Tu Visión.</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Desde que tengo memoria, he sentido una fascinación por contar historias a través de imágenes. Lo que comenzó como un pasatiempo se convirtió en mi pasión y profesión: dar vida a las ideas, capturar emociones y construir mundos visuales.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              Con años de experiencia en edición de video y diseño gráfico, mi enfoque es fusionar la técnica con la creatividad. Creo en la colaboración y en entender profundamente tu visión para traducirla en un producto final que no solo cumpla, sino que supere tus expectativas. Mi filosofía es simple: cada proyecto es una oportunidad para innovar y crear algo memorable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
