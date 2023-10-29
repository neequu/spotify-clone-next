import { getSongById } from "@/app/actions";
import getImageUrl from "@/composables/getImageUrl";
import Image from "next/image";
import { redirect } from "next/navigation";

const page = async ({ params }: { params: { id: string } }) => {
  const song = await getSongById(+params.id);
  if (!song) {
    redirect("/not-found");
  }

  const songImageUrl = getImageUrl(song);

  return (
    <>
      <main className="gradient-dark h-screen overflow-auto pb-[64px] md:pb-0">
        <div className="flex  flex-col gap-4 border-b border-neutral-800 bg-pink-400 px-2 pb-4 pt-[48px] md:flex-row md:items-end md:px-4 md:pb-10 md:pt-[60px]">
          <div className="relative aspect-square w-full min-w-[80px] max-w-[30vw] self-center shadow-2xl md:block md:w-[20vw] md:max-w-[200px]">
            <Image
              src={songImageUrl}
              alt="liked songs"
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
        </div>
        <section className="mt-2 md:mt-4"></section>
      </main>
    </>
  );
};

export default page;
