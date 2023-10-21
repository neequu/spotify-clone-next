import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Spotify Clone',
  description: 'Spotify clone using next.js 13, supabase, prisma and',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
