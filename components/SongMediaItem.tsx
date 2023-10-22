import { Database, Song } from '@/types/supabase';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import Image from 'next/image';

interface SongMediaItemProps {
  song: Song;
  children?: React.ReactNode;
}

const SongMediaItem = ({ song, children }: SongMediaItemProps) => {
  const supabase = createServerComponentClient<Database>({ cookies });

  const { data: songImage } = supabase.storage
    .from('images')
    .getPublicUrl(song.image_path!);

  return (
    <li className='select-none min-h-[56px] relative group p-1 rounded overflow-hidden flex justify-between items-center hover:bg-neutral-800 transition-colors pr-4'>
      <div className='flex items-center gap-3'>
        <div className='lg:w-12 md:w-11 w-10 aspect-square relative'>
          <Image
            src={songImage.publicUrl}
            alt={song.title || 'song cover image'}
            className='md:rounded aspect-square object-cover'
            fill
            sizes='50'
            quality={60}
          />
        </div>
        <div className='grid gap-1'>
          <p
            className='w-full
          truncate
          leading-none
          text-[0.78125rem]
          select-none'
            title={song.title || ''}>
            {song.title}
          </p>
          <p
            className='
          w-full 
          leading-none
          truncate 
          select-none
          text-[0.78125rem] text-neutral-400'
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
