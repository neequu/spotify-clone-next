import { Database, Song } from "@/types/supabase";
import usePlayer from "./usePlayer";
import useAuthModal from "./useAuthModal";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const usePlaySong = (songs: Song[] | undefined) => {
  const player = usePlayer();
  const authModal = useAuthModal();

  const playSong = async (id: number) => {
    const supabaseClient = createClientComponentClient<Database>();
    const {
      data: { session },
    } = await supabaseClient.auth.getSession();
    if (!session?.user) {
      return authModal.onOpen();
    }

    player.setId(id);
    if (!songs) return;

    const ids = songs.map((song) => song.id);
    player.setIds(ids);
  };

  return playSong;
};

export default usePlaySong;
