import Image from "next/image";
import { getlikedSongs } from "../../actions";
import LikedSongs from "@/components/LikedSongs";

const LikedSongsPage = async () => {
  const likedSongs = await getlikedSongs();

  const formattedString = () => {
    const len = likedSongs?.length;
    return `${len} ${len === 1 ? "song" : "songs"}`;
  };

  return (
    <main className="md:gradient-purple gradient-purple-mobile h-screen flex-1 overflow-auto px-2 pb-[64px] pt-[60px] md:px-4 md:pb-0">
      <div className="flex items-end gap-4">
        <Image
          src="/images/liked-songs.png"
          alt="liked songs"
          width={160}
          height={160}
          className="hidden object-cover md:block md:rounded-md"
        />
        <div>
          <p className="mb-4 hidden md:mb-6 md:block">Playlist</p>
          <h1 className="text-xl font-bold md:mb-8 md:text-[clamp(2rem,5vw,3.75rem)]">
            Liked Songs
          </h1>
          <p className="text-xs text-neutral-300 md:text-sm md:text-white">
            {formattedString()}
          </p>
        </div>
      </div>
      <LikedSongs likedSongs={likedSongs} />
    </main>
  );
};

export default LikedSongsPage;
