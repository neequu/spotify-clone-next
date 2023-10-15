import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import TheSidebar from '@/components/TheSidebar';
import ThePlayer from '@/components/ThePlayer';
import SupabaseProvider from '@/providers/SupabaseProvider';
import UserProvider from '@/providers/UserProvider';
import ModalProvider from '@/providers/ModalProvider';

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
      <body
        className={`${font.className} bg-gray-bg flex flex-col md:px-2 md:pt-2 min-w-[275px]`}>
        <div className='grid grid-rows-mobile md:grid-cols-md flex-1 gap-x-layout-gap'>
          <SupabaseProvider>
            <UserProvider>
              <ModalProvider />
              <TheSidebar />
              {children}
            </UserProvider>
            <ThePlayer />
          </SupabaseProvider>
        </div>
      </body>
    </html>
  );
}
