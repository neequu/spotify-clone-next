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

  // const currentIndex = player.ids.indexOf(player.activeId!);
  if (!song || !songUrl) return null;

  return (
    <>
      {/* <audio
        className='w-[400px]'
        src='https://nlqimebrpdwlvxhpmbre.supabase.co/storage/v1/object/public/songs/song-1-1-4pklo74tkp3'
        controls
        autoPlay
        onEnded={() => player.setId()}
      /> */}
      <footer className='z-50 fixed right-0 left-0 bottom-[64px] md:bottom-0 md:h-[80px] h-[52px] md:bg-black hidden bare:block px-4'>
        <PlayerContent key={song.id} song={song} songUrl={songUrl.publicUrl} />
      </footer>
    </>
  );
};

export default ThePlayer;
