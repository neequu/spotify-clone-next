import { Database, Song } from '@/types/supabase';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import Image from 'next/image';

interface SongMediaItemProps {
  song: Song;
  children?: React.ReactNode;
}

const SongMediaItem = ({ song, children }: SongMediaItemProps) => {
  const cookieStore = cookies();
  const supabase = createServerComponentClient<Database>({
    cookies: () => cookieStore,
  });
  const { data: songImage } = supabase.storage
    .from('images')
    .getPublicUrl(song.image_path!);

  return (
    <li className=' group relative flex min-h-[56px] items-center overflow-hidden rounded p-1 pr-4 transition-colors hover:bg-neutral-800'>
      <div className='flex items-center gap-3'>
        <div className='relative aspect-square min-w-[40px] md:w-11 lg:w-12'>
          <Image
            src={songImage.publicUrl}
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
