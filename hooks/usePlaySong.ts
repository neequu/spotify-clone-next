import { Database, Song } from "@/types/supabase";
import usePlayer from "./usePlayer";
import useAuthModal from "./useAuthModal";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const usePlaySong = (songs: Song[]) => {
  const supabaseClient = createClientComponentClient<Database>();
  const player = usePlayer();
  const authModal = useAuthModal();

  const playSong = async (id: number) => {
    const {
      data: { session },
    } = await supabaseClient.auth.getSession();
    if (!session?.user) {
      return authModal.onOpen();
    }
    const ids = songs.map((song) => song.id);
    player.setId(id);
    player.setIds(ids);
  };

  return playSong;
};

export default usePlaySong;
