'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { submitContactForm } from '@/app/actions';
import { Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

const formSchema = z.object({
  name: z.string().min(2, { message: 'El nombre debe tener al menos 2 caracteres.' }),
  email: z.string().email({ message: 'Por favor, introduce un email válido.' }),
  message: z.string().min(10, { message: 'El mensaje debe tener al menos 10 caracteres.' }),
});

export function ContactSection() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const result = await submitContactForm(values);

    if (result.success) {
      toast({
        title: '¡Mensaje enviado!',
        description: 'Gracias por contactarme. Te responderé lo antes posible.',
      });
      form.reset();
    } else {
      toast({
        variant: 'destructive',
        title: 'Error al enviar',
        description: result.message,
      });
    }
  }

  return (
    <section id="contacto" className="py-20 md:py-32 bg-background">
      <div className="container max-w-7xl px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-headline text-4xl md:text-5xl font-bold">
              ¿Listo para Dar Vida a tu <span className="text-primary">Proyecto</span>?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Hablemos de tu idea. Rellena el formulario o contáctame a través de mis redes sociales.
            </p>
            <div className="mt-8 flex items-center gap-6">
              <Link href="#" aria-label="Twitter">
                <Twitter className="h-8 w-8 text-muted-foreground transition-colors hover:text-primary" />
              </Link>
              <Link href="#" aria-label="GitHub">
                <Github className="h-8 w-8 text-muted-foreground transition-colors hover:text-primary" />
              </Link>
              <Link href="#" aria-label="LinkedIn">
                <Linkedin className="h-8 w-8 text-muted-foreground transition-colors hover:text-primary" />
              </Link>
            </div>
          </div>
          <div className="bg-card p-8 rounded-lg border border-border/60">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base">Nombre</FormLabel>
                      <FormControl>
                        <Input placeholder="Tu nombre" {...field} className="text-base py-6" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base">Email</FormLabel>
                      <FormControl>
                        <Input placeholder="tu@email.com" {...field} className="text-base py-6"/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base">Mensaje</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Cuéntame sobre tu proyecto..."
                          className="min-h-[150px] text-base"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground text-lg py-7 font-bold hover:opacity-90 transition-opacity" disabled={form.formState.isSubmitting}>
                  {form.formState.isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
