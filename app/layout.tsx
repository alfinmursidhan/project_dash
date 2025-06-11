import './globals.css';
import { Montserrat } from 'next/font/google';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

// Font configuration
const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
  preload: true,
  weight: ['300', '400', '500', '600', '700'],
});

// The Seasons font for subtitle text
const theSeasons = localFont({
  src: [
    {
      path: '../public/fonts/theseasons/fontspring-demo-theseasons-reg-webfont.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/theseasons/fontspring-demo-theseasons-reg-webfont.woff',
      weight: '400',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-the-seasons',
  preload: true,
});

// Carelia font for main headings
const carelia = localFont({
  src: [
    {
      path: '../public/fonts/carelia/Carelia-Upright.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/carelia/Carelia-Upright.woff',
      weight: '400',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-carelia',
  preload: true,
});

export const metadata: Metadata = {
  title: 'dahs - Premium Hair Products',
  description: 'Premium hair products made with natural ingredients for healthy hair.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${theSeasons.variable} ${carelia.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`font-sans bg-secondary overflow-x-hidden min-h-screen`}>
        {children}
      </body>
    </html>
  );
} 