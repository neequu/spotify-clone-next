import { getSongById } from "@/app/actions";
import SongLyrics from "@/components/SongLyrics";
import Spinner from "@/components/Spinner";
import getImageUrl from "@/composables/getImageUrl";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import SongInfo from "./SongInfo";
import Image from "next/image";

const page = async ({ params }: { params: { id: string } }) => {
  const song = await getSongById(+params.id);
  if (!song) {
    redirect("/not-found");
  }

  const songImageUrl = getImageUrl(song);

  return (
    <main className="gradient-dark h-screen overflow-auto pb-[110px] md:pb-[94px]">
      <SongInfo songImageUrl={songImageUrl}>
        <div className="relative aspect-square w-full min-w-[80px] max-w-[min(130px,60vw)] self-center shadow-2xl md:block md:w-[20vw] md:max-w-[200px] ">
          <Image
            src={songImageUrl}
            alt={`${song.title} by ${song.artist}`}
            sizes="160px"
            fill
            className="object-cover md:rounded-md"
          />
        </div>
        <div>
          <p className="hidden md:block">Single</p>
          <h1 className="max-w-[96vw] truncate text-xs font-bold sm:text-xl md:max-w-[38vw] md:pb-8 md:pt-4 md:text-[clamp(1rem,7vw,3rem)]">
            {song.title}
          </h1>
          <p className="text-xs text-neutral-300 md:text-sm md:text-white">
            {song.artist}
          </p>
        </div>
      </SongInfo>
      <section className="mt-2 flex px-2 text-base md:mt-4 md:px-4">
        <Suspense
          fallback={
            <div className="flex h-full flex-1 items-center justify-center">
              <Spinner />
            </div>
          }
        >
          <SongLyrics song={song} />
        </Suspense>
      </section>
    </main>
  );
};

export default page;
