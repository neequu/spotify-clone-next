import { Song } from '@/types/supabase';
import usePlayer from './usePlayer';
import useAuthModal from './useAuthModal';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

const usePlaySong = (songs: Song[]) => {
  const player = usePlayer();
  const authModal = useAuthModal();

  const playSong = (id: string) => {};
};

export default usePlaySong;
