import { getSongs } from "@/app/actions";
import Playlist from "./Playlist";
import { SupabaseClient } from "@supabase/auth-helpers-nextjs";

const SongGrig = async ({ supabase }: { supabase: SupabaseClient }) => {
  const songs = await getSongs();
  return (
    <>
      {songs?.length ? (
        <div className="grid grid-cols-songs place-content-start gap-4 pb-24 md:grid-cols-songs-md lg:grid-cols-songs-lg">
          {songs.map((song) => (
            <Playlist
              song={song}
              songs={songs}
              key={song.id}
              supabase={supabase}
            />
          ))}
        </div>
      ) : (
        <p className="text-sm text-neutral-400">
          No songs yet :( Be the first to upload one!
        </p>
      )}
    </>
  );
};

export default SongGrig;
