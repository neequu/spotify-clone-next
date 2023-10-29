import getImageUrl from '@/composables/getImageUrl';
import { Song } from '@/types/supabase';
import Image from 'next/image';

interface SongMediaItemProps {
  song: Song;
  children?: React.ReactNode;
}

const SongMediaItem = ({ song, children }: SongMediaItemProps) => {
  const songImageUrl = getImageUrl(song);

  return (
    <li className=' group relative flex min-h-[56px] items-center overflow-hidden rounded p-1 pr-4 transition-colors hover:bg-neutral-800'>
      <div className='flex items-center gap-3'>
        <div className='relative aspect-square min-w-[40px] md:w-11 lg:w-12'>
          <Image
            src={songImageUrl}
            alt={song.title || 'song cover image'}
            className='aspect-square object-cover md:rounded'
            fill
            sizes='40px'
            quality={60}
          />
        </div>
        <div className='grid gap-1'>
          <p
            className='w-full
          truncate
          text-[0.78125rem]
          leading-tight'
            title={song.title || ''}>
            {song.title}
          </p>
          <p
            className='
          w-full 
          truncate
          text-[0.78125rem] 
          leading-tight text-neutral-400'
            title={song.artist || ''}>
            {song.artist}
          </p>
        </div>
      </div>
      {children}
    </li>
  );
};

export default SongMediaItem;
