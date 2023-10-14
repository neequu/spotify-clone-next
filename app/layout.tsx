import TheHeader from '@/components/TheHeader';
import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import TheSidebar from '@/components/TheSidebar';
import ThePlayer from '@/components/ThePlayer';

const font = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

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
      <body className={`${font.className} bg-gray-bg flex flex-col md:p-2`}>
        <div className='grid grid-rows-mobile md:grid-cols-md flex-1 gap-layout-gap'>
          <TheSidebar />
          {children}
          <ThePlayer />
        </div>
      </body>
    </html>
  );
}
