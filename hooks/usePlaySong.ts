import { Song } from "@/types/supabase";
import usePlayer from "./usePlayer";
import useAuthModal from "./useAuthModal";
import getSessionClient from "@/composables/getSessionClient";

const usePlaySong = (songs: Song[] | undefined) => {
  const player = usePlayer();
  const authModal = useAuthModal();

  const playSong = async (id: number) => {
    const session = await getSessionClient();

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
