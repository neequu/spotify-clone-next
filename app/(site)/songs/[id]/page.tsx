import { Suspense } from "react";
import Spinner from "@/components/Spinner";
import { getSongById } from "@/app/actions";
import Image from "next/image";
import { redirect } from "next/navigation";

const page = async ({ params }: { params: { id: string } }) => {
  const song = await getSongById(+params.id)
  if (!song) {
    redirect("/not-found");
  }
  return (
    <main className='relative md:gradient-purple gradient-purple-mobile h-screen flex-1 overflow-auto px-2 pb-[64px] pt-[60px] md:px-4 md:pb-0'>
          <div className='flex items-end gap-4'>
        <Image
          src='/images/liked-songs.png'
          alt='liked songs'
          width={160}
          height={160}
          className='hidden object-cover md:block md:rounded-md'
        />
        <div>
          <p className='mb-4 hidden md:mb-6 md:block'>Single</p>
          <h1 className='text-xl font-bold md:mb-8 md:text-[clamp(2rem,5vw,3.75rem)]'>
            {song?.title}
          </h1>
          <p  className='text-xs text-neutral-300 md:text-sm md:text-white'>something</p>
        </div>
      </div>
      <section className=''>

      </section>
    </main>
  )
};

export default page;
