import { Database, Song } from '@/types/supabase';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import Image from 'next/image';

interface LibrarySongItemProps {
  song: Song;
  children?: React.ReactNode;
}

const LibrarySongItem = ({ song, children }: LibrarySongItemProps) => {
  const supabase = createServerComponentClient<Database>({ cookies });

  const { data: songImage } = supabase.storage
    .from('images')
    .getPublicUrl(song.image_path!);

  return (
    <li className='select-none relative group p-1 rounded overflow-hidden flex items-center gap-3 hover:bg-neutral-800 transition-colors'>
      <div className='min-w-[clamp(30px,6vw,50px)] aspect-square relative'>
        <Image
          src={songImage.publicUrl}
          alt={song.title || 'song cover image'}
          className='rounded aspect-square object-cover'
          priority
          fill
          quality={60}
        />
      </div>
      <div className='grid gap-1'>
        <p
          className='w-full
            truncate
          text-sm
          select-none'
          title={song.title || ''}>
          {song.title}
        </p>
        <p
          className='
          w-full 
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
