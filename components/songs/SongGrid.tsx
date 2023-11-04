import { getSongs } from "@/app/actions";
import Playlist from "./Playlist";

const SongGrid = async () => {
  const songs = await getSongs();

  return (
    <>
      {songs?.length ? (
        <>
          {songs.map((song) => (
            <Playlist song={song} songs={songs} key={song.id} />
          ))}
        </>
      ) : (
        <p className="col-span-3 text-sm text-neutral-400">
          No songs yet :( Be the first to upload one!
        </p>
      )}
    </>
  );
};

export default SongGrid;
