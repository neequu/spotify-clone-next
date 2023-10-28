import Image from 'next/image';
import Link from 'next/link';
import PlayButton from '../buttons/play/PlayButton';

import { Song } from '@/types/supabase';
import { SupabaseClient } from '@supabase/auth-helpers-nextjs';

const Playlist = async ({
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
    <div
      className='grid group bg-gray-md bg-opacity-60 backdrop-blur-40 hover:bg-neutral-800 transition
      md:p-2 md:pb-9 pb-5 rounded w-full '>
      <div className='relative min-w-[80px] aspect-square'>
        <Image
          src={songImage.publicUrl}
          alt={song.title || 'song cover art'}
          fill
          sizes='33vw'
          className='md:rounded-md rounded-t-sm object-cover'
        />
        <PlayButton
          songs={songs}
          song={song}
          className='absolute opacity-0 group-hover:opacity-100 group-hover:bottom-2 bottom-0 right-2 transition-[bottom_filter_opacity] text-black bg-accent p-2'
        />
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
          <Link
            href={`/songs/${song.id}`}
            className='border-b pb-[2px] border-transparent hover:border-neutral-500 transition-colors outline-none focus:border-neutral-500'>
            {song.title}
          </Link>
        </p>
        <p
          className='
          cursor-default
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
  );
};

export default Playlist;
