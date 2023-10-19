'use client';

import useGetSongById from '@/hooks/useGetSongById';
import usePlayer from '@/hooks/usePlayer';
import LibrarySongItem from './library/LibrarySongItem';

const ThePlayer = () => {
  const player = usePlayer();
  const { song } = useGetSongById(player.activeId);

  return (
    <div className='md:col-span-2 sticky bottom-[64px] md:bottom-0 border md:h-[80px] h-[52px] md:bg-black'>
      {/* <LibrarySongItem song={song} /> */}
    </div>
  );
};

export default ThePlayer;
