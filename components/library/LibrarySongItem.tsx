import { getImage } from '@/app/actions';
import { Song } from '@/types/supabase';
import Image from 'next/image';

interface LibrarySongItemProps {
  song: Song;
  children?: React.ReactNode;
}

const LibrarySongItem = async ({ song, children }: LibrarySongItemProps) => {
  const image = await getImage(song);

  return (
    <li className='select-none relative group p-1 rounded overflow-hidden flex items-center gap-3 hover:bg-neutral-800 transition-colors'>
      <div className='w-11 md:w-12 aspect-square relative'>
        <Image
          src={image}
          alt={song.title || 'song cover image'}
          className='rounded aspect-square object-cover'
          priority
          fill
          sizes='10vw'
          quality={60}
        />
      </div>
      <div className='flex flex-col gap-1'>
        <p
          className='max-w-[176px] 
            truncate
          text-sm
          select-none'
          title={song.title || ''}>
          {song.title}
        </p>
        <p
          className='max-w-[176px] 
            truncate 
            select-none
            text-sm text-neutral-400'
          title={song.artist || ''}>
          {song.artist}
        </p>
      </div>
      {children}
    </li>
  );
};

export default LibrarySongItem;
