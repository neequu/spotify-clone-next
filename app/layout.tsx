import TheHeader from '@/components/TheHeader';
import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import TheSidebar from '@/components/TheSidebar';
import ThePlayer from '@/components/ThePlayer';

const font = Poppins({
  subsets: ['latin'],
  weight: ['400'],
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
      <body className={`${font.className} bg-gray-bg flex flex-col p-2`}>
        <div className='flex flex-1 gap-layout-gap'>
          <TheSidebar />
          <div className='flex-1 flex flex-col rounded overflow-hidden'>
            <TheHeader />
            {children}
          </div>
        </div>
        <ThePlayer />
      </body>
    </html>
  );
}
