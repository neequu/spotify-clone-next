import { Database, Song } from '@/types/supabase';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import Image from 'next/image';

interface SongMediaItemProps {
  song: Song;
  children?: React.ReactNode;
}

const SongMediaItem = async ({ song, children }: SongMediaItemProps) => {
  const cookieStore = cookies();
  const supabase = createServerComponentClient<Database>({
    cookies: () => cookieStore,
  });
  const { data: songImage } = supabase.storage
    .from('images')
    .getPublicUrl(song.image_path!);

  return (
    <li className=' min-h-[56px] relative group p-1 rounded overflow-hidden flex items-center hover:bg-neutral-800 transition-colors pr-4'>
      <div className='flex items-center gap-3'>
        <div className='lg:w-12 md:w-11 min-w-[40px] aspect-square relative'>
          <Image
            src={songImage.publicUrl}
            alt={song.title || 'song cover image'}
            className='md:rounded aspect-square object-cover'
            fill
            quality={60}
          />
        </div>
        <div className='grid gap-1'>
          <p
            className='w-full
          truncate
          leading-tight
          text-[0.78125rem]'
            title={song.title || ''}>
            {song.title}
          </p>
          <p
            className='
          w-full 
          leading-tight
          truncate 
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
