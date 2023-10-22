import TheSidebar from '@/components/TheSidebar';
import ThePlayer from '@/components/Player';
import ModalProvider from '@/providers/ModalProvider';
import ToastProvider from '@/providers/ToastProvider';
import TheHeader from '@/components/TheHeader';
import { Figtree } from 'next/font/google';

const font = Figtree({
  subsets: ['latin'],
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body
      className={`${font.className} bg-gray-main md:bg-gray-bg flex flex-col min-w-[170px]  md:px-2 text-white`}>
      <ToastProvider />
      <ModalProvider />
      <div className='flex flex-1 flex-col md:flex-row gap-x-layout-gap'>
        <aside className='sticky md:self-start md:top-2 z-50 h-[64px] md:h-[initial] flex justify-center md:block bottom-0 order-2 md:-order-none md:bg-none bg-gray-main bg-opacity-20 backdrop-blur'>
          <TheSidebar />
        </aside>

        <div className='flex flex-1 flex-col relative '>
          <TheHeader />
          {children}
        </div>
        <ThePlayer />
      </div>
    </body>
  );
}
