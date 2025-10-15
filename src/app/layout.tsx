import type { Metadata } from 'next';
import { AppHeader } from '@/components/layout/header';
import { AppFooter } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster"
import './globals.css';

export const metadata: Metadata = {
  title: 'Visually Inspiring | Digital Creator',
  description: 'Edición de Video | Diseño Gráfico | Arte Digital',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&family=Lato:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <AppHeader />
        <main>{children}</main>
        <AppFooter />
        <Toaster />
      </body>
    </html>
  );
}
