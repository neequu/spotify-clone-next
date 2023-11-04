import { getSongById } from "@/app/actions";
import SongLyrics from "@/components/SongLyrics";
import Spinner from "@/components/Spinner";
import getImageUrl from "@/composables/getImageUrl";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import SongInfo from "./SongInfo";
import Image from "next/image";
import LikeButton from "@/components/buttons/liked/LikeButton";
import PlayButton from "@/components/buttons/PlayButton";
import { Metadata } from "next";
import SongLyricsSkeleton from "@/components/skeletons/SongLyricsSkeleton";

interface SongParams {
  params: { id: string };
}

export async function generateMetadata({
  params,
}: SongParams): Promise<Metadata> {
  const song = await getSongById(+params.id);

  return {
    title: `${song?.title} · Nextify`,
    description: `Lyrics and information about ${song?.title} by ${song?.artist}`,
  };
}

const page = async ({ params }: SongParams) => {
  const song = await getSongById(+params.id);
  if (!song) {
    redirect("/not-found");
  }

  const songImageUrl = await getImageUrl(song);

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
      <section className="mt-2 grid items-start px-2 sm:ml-0 md:ml-10 md:mt-4 md:px-4 lg:ml-14 xl:grid-cols-2">
        <Suspense fallback={<SongLyricsSkeleton />}>
          <div className="mt-4 xl:mt-0">
            <SongLyrics song={song} />
          </div>
        </Suspense>
        <div className="order-first flex items-center justify-center gap-4 border border-neutral-600 p-2 text-xs sm:gap-6 md:p-4 xl:order-none xl:p-6 xl:text-base">
          <PlayButton
            song={song}
            songs={[song]}
            className="w-5 rounded-full bg-accent p-1 text-black md:w-8 md:p-2 lg:w-14 lg:p-4"
          />
          <div className="flex aspect-square w-5 min-w-[24px] items-center justify-center md:w-8 lg:w-10 lg:min-w-[40px]">
            <LikeButton songId={song.id} />
          </div>
          <p className="flex flex-wrap items-center gap-1">
            <span>{song.title}</span>
            <span>·</span>
            <span>{song.artist}</span>
            <span>·</span>
            <span>
              <span className="hidden sm:inline-flex">Upload date:</span>{" "}
              {new Date(song.created_at).toLocaleDateString()}
            </span>
          </p>
        </div>
      </section>
    </main>
  );
};

export default page;
