import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Video, Brush, Sparkles } from 'lucide-react';

const services = [
  {
    icon: <Video className="h-10 w-10 text-primary" />,
    title: 'Edición de Video',
    description: 'Transformo tus ideas en historias visuales cautivadoras, desde cortos para redes hasta proyectos cinematográficos.',
  },
  {
    icon: <Brush className="h-10 w-10 text-primary" />,
    title: 'Diseño Gráfico',
    description: 'Creo identidades visuales impactantes, material de marketing y gráficos que comunican tu mensaje con claridad y estilo.',
  },
  {
    icon: <Sparkles className="h-10 w-10 text-primary" />,
    title: 'Creación de Arte Digital',
    description: 'Desarrollo piezas de arte digital únicas y originales que exploran nuevos horizontes estéticos y conceptuales.',
  },
];

export function ServicesSection() {
  return (
    <section id="servicios" className="py-20 md:py-32 bg-background">
      <div className="container max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">
            Servicios que Impulsan tu <span className="text-primary">Visión</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Ofrezco soluciones creativas para llevar tus proyectos al siguiente nivel.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border-border/60 hover:border-primary transition-colors duration-300 transform hover:-translate-y-2 group">
              <CardHeader className="items-center text-center">
                <div className="p-4 bg-muted rounded-full mb-4 group-hover:bg-primary/10 transition-colors">
                  {service.icon}
                </div>
                <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground">
                <p>{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
