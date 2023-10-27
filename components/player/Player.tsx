'use client';

import useGetSongById from '@/hooks/useGetSongById';
import usePlayer from '@/hooks/usePlayer';
import useSongUrl from '@/hooks/useSongUrl';
import PlayerContent from './PlayerContent';

export const revalidate = 0;

const ThePlayer = () => {
  const player = usePlayer();

  const { song } = useGetSongById(player.activeId);
  const songUrl = useSongUrl(song);

  if (!song || !songUrl) return null;

  return (
    <footer className='md:col-span-2 z-50 fixed right-0 left-0 bottom-[64px] md:bottom-0 md:h-[80px] h-[52px] md:bg-black hidden bare:flex px-4'>
      <PlayerContent key={song.id} song={song} songUrl={songUrl.publicUrl} />
    </footer>
  );
};

export default ThePlayer;