import { Song } from "@/types/supabase";
import SongMediaItem from "../SongMediaItem";

interface LibrarySongListProps {
  userSongs: Song[] | undefined;
}

const LibrarySongList = ({ userSongs }: LibrarySongListProps) => {
  const hasSongs = userSongs && userSongs?.length;

  return (
    <ul className="md:h-[78vh] md:overflow-auto md:pb-[22vh]">
      {hasSongs ? (
        userSongs.map((song) => (
          <SongMediaItem song={song} songs={userSongs} key={song.id} />
        ))
      ) : (
        <p className="text-neutral-400">You haven&#39;t added any songs yet!</p>
      )}
    </ul>
  );
};

export default LibrarySongList;
