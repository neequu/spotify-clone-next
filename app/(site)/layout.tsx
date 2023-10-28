import TheSidebar from "@/components/TheSidebar";
import ThePlayer from "@/components/player/Player";
import ModalProvider from "@/providers/ModalProvider";
import ToastProvider from "@/providers/ToastProvider";
import TheHeader from "@/components/TheHeader";
import { Figtree } from "next/font/google";

const font = Figtree({
  subsets: ["latin"],
});

export const dynamic = "force-dynamic";
// export const revalidate = 0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body
      className={`${font.className} flex min-h-screen min-w-[170px] select-none flex-col justify-between gap-2 overflow-hidden bg-gray-main text-white md:flex-row md:bg-gray-bg md:px-2`}
    >
      <ToastProvider />
      <ModalProvider />
      <aside className="sticky bottom-0 z-50  order-2 mt-2 flex flex-col gap-2 bg-opacity-20 backdrop-blur md:order-none md:h-screen">
        <TheSidebar />
      </aside>
      <div className="relative order-1 md:order-none md:mt-2 md:flex-1">
        <TheHeader />
        {children}
      </div>
      <ThePlayer />
    </body>
  );
}
