import Image from 'next/image';
import Link from 'next/link';
import PlayButton from '../buttons/PlayButton';

import { Song } from '@/types/supabase';
import { SupabaseClient } from '@supabase/auth-helpers-nextjs';

const Playlist = ({
  song,
  songs,
  supabase,
}: {
  song: Song;
  songs: Song[];
  supabase: SupabaseClient;
}) => {
  const { data: songImage } = supabase.storage
    .from('images')
    .getPublicUrl(song.image_path!);

  return (
    <Link href={`/`}>
      <div
        className='grid group bg-gray-md bg-opacity-60 backdrop-blur-40 hover:bg-neutral-800 transition
      md:p-2 md:pb-9 pb-5 rounded w-full'>
        <div className='relative min-w-[80px] aspect-square select-none'>
          <Image
            src={songImage.publicUrl}
            alt={song.title || 'song cover art'}
            fill
            sizes='33vw'
            className='md:rounded-md rounded-t-sm object-cover'
          />
          <PlayButton songs={songs} song={song} />
        </div>
        <div className='grid mt-3 px-1.5 md:px-0'>
          <p
            className='
            truncate 
            font-bold
            w-full
            text-sm
            md:text-base
            mb-0.5'
            title={song.title || ''}>
            {song.title}
          </p>
          <p
            className='
            w-full
            truncate
            md:text-sm 
            text-xs
            text-neutral-400'
            title={song.artist || ''}>
            {song.artist}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Playlist;
