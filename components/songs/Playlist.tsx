import Image from "next/image";
import Link from "next/link";
import PlayButton from "../buttons/PlayButton";

import { Song } from "@/types/supabase";
import getImageUrl from "@/composables/getImageUrl";

const Playlist = async ({ song, songs }: { song: Song; songs: Song[] }) => {
  const songImageUrl = await getImageUrl(song);

  return (
    <div
      className="backdrop-blur-40 group grid w-full rounded bg-gray-md bg-opacity-60
      pb-5 transition hover:bg-neutral-800 md:p-2 md:pb-9 "
    >
      <div className="relative aspect-square min-w-[80px]">
        <Image
          src={songImageUrl}
          alt={song.title || "song cover image"}
          fill
          sizes="33vw"
          className="rounded-t-sm object-cover md:rounded-md"
        />
        <PlayButton
          songs={songs}
          song={song}
          className="absolute bottom-0 right-2 bg-accent p-2 text-black opacity-0 transition-[bottom_filter_opacity] group-hover:bottom-2 group-hover:opacity-100"
        />
      </div>
      <div className="mt-3 grid px-1.5 md:px-0">
        <p
          className="
            mb-0.5 
            w-full
            truncate
            text-sm
            font-bold
            md:text-base"
          title={song.title || ""}
        >
          <Link
            href={`/songs/${song.id}`}
            className="border-b border-transparent pb-[2px] outline-none transition-colors hover:border-neutral-500 focus:border-neutral-500"
          >
            {song.title}
          </Link>
        </p>
        <p
          className="
          w-full
            cursor-default
            truncate
            text-xs 
            text-neutral-400
            md:text-sm"
          title={song.artist || ""}
        >
          {song.artist}
        </p>
      </div>
    </div>
  );
};

export default Playlist;
