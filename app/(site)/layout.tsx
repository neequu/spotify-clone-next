import TheSidebar from '@/components/TheSidebar';
import ThePlayer from '@/components/player/Player';
import ModalProvider from '@/providers/ModalProvider';
import ToastProvider from '@/providers/ToastProvider';
import TheHeader from '@/components/TheHeader';
import { Figtree } from 'next/font/google';

const font = Figtree({
  subsets: ['latin'],
});

export const dynamic = 'force-dynamic';
// export const revalidate = 0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body
      className={`${font.className} select-none flex md:flex-row justify-between flex-col min-h-screen gap-2 bg-gray-main md:bg-gray-bg min-w-[170px] md:px-2 text-white overflow-hidden`}>
      <ToastProvider />
      <ModalProvider />
      <aside className='z-50 sticky bottom-0 flex flex-col gap-2 bg-opacity-20 backdrop-blur mt-2 md:h-screen order-2 md:order-none'>
        <TheSidebar />
      </aside>
      <div className='md:flex-1 md:mt-2 relative order-1 md:order-none'>
        <TheHeader />
        {children}
      </div>
      <ThePlayer />
    </body>
  );
}
