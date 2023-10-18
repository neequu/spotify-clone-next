import './globals.css';
import type { Metadata } from 'next';
import { Lato } from 'next/font/google';
import TheSidebar from '@/components/TheSidebar';
import ThePlayer from '@/components/ThePlayer';
import ModalProvider from '@/providers/ModalProvider';
import ToastProvider from '@/providers/ToastProvider';

const font = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
});

export const metadata: Metadata = {
  title: 'Spotify Clone',
  description: 'Spotify clone using next.js 13, supabase, prisma and',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`${font.className} bg-gray-bg flex flex-col md:px-2 md:pt-2 min-w-[275px]`}>
        <div className='grid grid-rows-mobile md:grid-cols-md flex-1 gap-x-layout-gap'>
          <ToastProvider />
          <ModalProvider />
          <TheSidebar />
          {children}
          <ThePlayer />
        </div>
      </body>
    </html>
  );
}
