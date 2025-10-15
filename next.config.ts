import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // --- OPCIONES PARA DESPLIEGUE EN GITHUB PAGES ---
  output: 'export',
  basePath: '/belenweb',

  // --- TUS OPCIONES ORIGINALES (LAS MANTENEMOS) ---
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  // --- COMBINACIÓN DE LA CONFIGURACIÓN DE IMÁGENES ---
  images: {
    // Necesario para que las imágenes funcionen en la exportación estática
    unoptimized: true,
    
    // Tus patrones de imágenes remotas que ya tenías
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;