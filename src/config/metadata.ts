import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Smart Surveillance Sphere | Inteligência em Segurança',
  description: 'Plataforma Estratégica de Inteligência em Segurança Baseada em Dados. Transformamos dados de segurança em inteligência estratégica.',
  keywords: [
    'segurança',
    'inteligência',
    'videovigilância',
    'IA',
    'drones',
    'análise de dados',
    'monitorização',
    'Angola',
    'África',
  ],
  authors: [{ name: 'Smart Surveillance Sphere' }],
  creator: 'Smart Surveillance Sphere',
  publisher: 'Smart Surveillance Sphere',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Smart Surveillance Sphere | Inteligência em Segurança',
    description: 'Transformamos dados de segurança em inteligência estratégica para apoiar a tomada de decisão.',
    url: 'https://smartsurveillancesphere.com',
    siteName: 'Smart Surveillance Sphere',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Smart Surveillance Sphere - Videovigilância Inteligente',
      },
    ],
    type: 'website',
    locale: 'pt_PT',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Smart Surveillance Sphere | Inteligência em Segurança',
    description: 'Transformamos dados de segurança em inteligência estratégica.',
    images: ['https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&h=630&fit=crop'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  alternates: {
    canonical: 'https://smartsurveillancesphere.com',
    languages: {
      'pt-PT': 'https://smartsurveillancesphere.com/pt',
      'en-US': 'https://smartsurveillancesphere.com/en',
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: 'dark',
};
