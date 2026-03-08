import './globals.css';

export const metadata = {
  title: 'qord',
  description: 'A methodology and protocol for preserving the continuity of understanding across any boundary the work touches.',
  metadataBase: new URL('https://theqord.com'),
  openGraph: {
    title: 'qord',
    description: 'Understanding doesn\'t survive the boundary. Qord fixes that.',
    url: 'https://theqord.com',
    siteName: 'qord',
    images: [
      {
        url: '/images/qord-social-1024-light.png',
        width: 1024,
        height: 1024,
        alt: 'qord',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'qord',
    description: 'Understanding doesn\'t survive the boundary. Qord fixes that.',
    images: ['/images/qord-social-1024-light.png'],
  },
  icons: {
    icon: '/images/qord-favicon-32.png',
    apple: '/images/qord-apple-touch.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
