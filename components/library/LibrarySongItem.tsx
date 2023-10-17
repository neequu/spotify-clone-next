import { getImage } from '@/app/actions';
import { Song } from '@/types/types';
import Image from 'next/image';

interface LibrarySongItemProps {
  song: Song;
}

const LibrarySongItem = ({ song }: LibrarySongItemProps) => {
  const image = getImage(song);

  return (
    <li className='p-1 rounded-md overflow-hidden flex items-center gap-2 hover:bg-neutral-800 transition-colors'>
      <div className='w-12 h-12 relative'>
        <Image
          src={image}
          alt={song.title}
          className='rounded-md aspect-square object-cover'
          priority
          fill
          sizes='10vw'
        />
      </div>
      <div className='flex flex-col gap-1'>
        <p
          className='max-w-[176px] 
            truncate
          text-sm
          select-none'
          title={song.title}>
          {song.title}
        </p>
        <p
          className='max-w-[176px] 
            truncate 
            select-none
            text-sm text-neutral-400'
          title={song.artist}>
          {song.artist}
        </p>
      </div>
    </li>
  );
};

export default LibrarySongItem;
