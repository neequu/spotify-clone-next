import Image from "next/image";
import LikedSongs from "@/components/LikedSongs";
import { getlikedSongs } from "@/app/actions";

const LikedSongsPage = async () => {
  const likedSongs = await getlikedSongs();

  const formatLength = () => {
    const len = likedSongs.length;
    return `${len} ${len === 1 ? "song" : "songs"}`;
  };
  return (
    <main className="gradient-dark relative h-screen flex-1 overflow-auto  pb-[64px] md:pb-0">
      <div className="gradient-purple flex items-end gap-2 border-b border-neutral-800 px-2 pb-8 pt-[48px] md:gap-4 md:px-4 md:pb-10 md:pt-[60px]">
        <div className="relative aspect-square w-[40px] shadow-2xl sm:w-[10vw] sm:max-w-[100px] md:w-[20vw] md:max-w-[200px]">
          <Image
            src="/images/liked-songs.png"
            alt="liked songs"
            sizes="160px"
            fill
            className="object-cover md:rounded-md"
          />
        </div>
        <div>
          <p className="mb-4 hidden md:block">Playlist</p>
          <h1 className="max-w-[80vw] truncate text-xs font-bold sm:text-xl md:max-w-[40vw] md:py-4 md:text-[clamp(1rem,7vw,3rem)]">
            Liked Songs
          </h1>
          <p className="text-xs text-neutral-300 md:text-sm md:text-white">
            {formatLength()}
          </p>
        </div>
      </div>
      <section className="mt-2 md:mt-4">
        <LikedSongs likedSongs={likedSongs} />
      </section>
    </main>
  );
};

export default LikedSongsPage;
