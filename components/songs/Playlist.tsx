import Image from 'next/image';
import Link from 'next/link';
import PlayButton from '../PlayButton';

import { Song } from '@/types/types';
import { getImage } from '@/app/actions';

interface PlaylistProps {
  songData: Song;
}

const Playlist = ({ songData }: PlaylistProps) => {
  const image = getImage(songData);
  return (
    <Link href={`/songs/${songData.id}`} className='w-min'>
      <div
        className='md:max-w-40 max-w-20 aspect-square 
      grid 
      group 
      bg-gray-md bg-opacity-30 backdrop-blur-40 hover:bg-neutral-800 transition
      p-2 pb-8 
      rounded'>
        <div className='relative max-w-[220px] aspect-square'>
          <Image
            src={image}
            alt={songData.title}
            fill
            className='rounded-md object-cover'
            priority
          />
          <PlayButton />
        </div>
        <div className='flex flex-col w-full mt-3'>
          <p
            className='w-[144px] 
            truncate font-bold'
            title={songData.title}>
            {songData.title}
          </p>
          <p
            className='
            w-[144px] 
            truncate
          text-sm 
          text-neutral-400'
            title={songData.artist}>
            {songData.artist}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Playlist;