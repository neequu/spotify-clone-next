import { Song } from "@/types/supabase";
import SongMediaItem from "./SongMediaItem";
import LikeButton from "./buttons/liked/LikeButton";
import PlayButton from "./buttons/PlayButton";

interface LikedSongsProps {
  likedSongs: Song[];
}

const LikedSongs = async ({ likedSongs }: { likedSongs: Song[] }) => {
  const hasSongs = likedSongs && !!likedSongs.length;

  return (
    <ul className="grid md:gap-1">
      {hasSongs ? (
        likedSongs.map((song, idx) => (
          <SongMediaItem song={song} key={song.id} songs={likedSongs}>
            <PlayButton
              song={song}
              songs={likedSongs}
              className="order-first hidden w-4 md:block"
            >
              <div className="w-4">{idx + 1}</div>
            </PlayButton>
            <div className="ml-auto grid w-3 place-content-center md:w-5">
              <LikeButton songId={song.id} />
            </div>
          </SongMediaItem>
        ))
      ) : (
        <div className="text-neutral-400">You havent added anything yet</div>
      )}
    </ul>
  );
};

export default LikedSongs;
