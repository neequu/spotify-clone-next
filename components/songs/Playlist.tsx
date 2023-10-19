import Image from 'next/image';
import Link from 'next/link';
import PlayButton from '../PlayButton';

import { Database, Song } from '@/types/supabase';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

interface PlaylistProps {
  songData: Song;
}
const Playlist = ({ songData }: PlaylistProps) => {
  const supabase = createServerComponentClient<Database>({ cookies });

  const { data: songImage } = supabase.storage
    .from('images')
    .getPublicUrl(songData.image_path!);

  return (
    <Link href={`/songs/${songData.id}`}>
      <div
        className='grid group bg-gray-md bg-opacity-30 backdrop-blur-40 hover:bg-neutral-800 transition
      md:p-2 md:pb-9 pb-5 rounded'>
        <div className='relative min-w-[50px] aspect-square'>
          <Image
            src={songImage.publicUrl}
            alt={songData.title || 'song cover art'}
            fill
            className='md:rounded-md object-cover'
            priority
          />
          <PlayButton songId={songData.id} />
        </div>
        <div className='flex flex-col w-full mt-3'>
          <p
            className='

            truncate font-bold
            text-sm
            md:text-base
            mb-0.5'
            title={songData.title || ''}>
            {songData.title}
          </p>
          <p
            className='

            truncate
            md:text-sm 
            text-xs
            text-neutral-400'
            title={songData.artist || ''}>
            {songData.artist}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Playlist;
