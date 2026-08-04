import type { Metadata } from 'next';
import { Inter, Manrope, Poppins } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' });
const poppins = Poppins({ subsets: ['latin'], variable: '--font-poppins' });

export const metadata: Metadata = {
  title: 'Smart Surveillance Sphere | Inteligência em Segurança',
  description: 'Plataforma Estratégica de Inteligência em Segurança Baseada em Dados. Transformamos dados de segurança em inteligência estratégica.',
  keywords: 'segurança, inteligência, videovigilância, IA, drones, análise de dados, monitorização, Angola, África',
  openGraph: {
    title: 'Smart Surveillance Sphere | Inteligência em Segurança',
    description: 'Transformamos dados de segurança em inteligência estratégica para apoiar a tomada de decisão.',
    type: 'website',
    locale: 'pt_PT',
  },
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1.0',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <head>
        <meta name="theme-color" content="#0a0a0a" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className={`${inter.variable} ${manrope.variable} ${poppins.variable}`}>
        {children}
      </body>
    </html>
  );
}
