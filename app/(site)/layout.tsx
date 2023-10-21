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
      className={`${font.className} bg-gray-main md:bg-gray-bg flex flex-col min-w-[275px] md:pt-2 md:px-2`}>
      <div className='grid grid-rows-mobile md:grid-cols-md flex-1 gap-x-layout-gap'>
        <ToastProvider />
        <ModalProvider />
        <TheSidebar />
        <div className='flex-1 flex flex-col'>
          <TheHeader />
          {children}
        </div>
        <ThePlayer />
      </div>
    </body>
  );
}
