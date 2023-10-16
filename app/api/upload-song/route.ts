import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import uniqid from 'uniqid';

import type { Database } from '@/types/supabase';

export async function POST(request: Request) {
  const requestUrl = new URL(request.url);
  const formData = await request.formData();
  // get form values
  const song = formData.get('song');
  const title = formData.get('title');
  const artist = formData.get('artist');
  const image = formData.get('image');
  const cookieStore = cookies();
  const supabase = createRouteHandlerClient<Database[]>({
    cookies: () => cookieStore,
  });
  const { data, error } = await supabase.auth.getSession();
  const user = data.session?.user;

  const uniqueId = uniqid();

  if (!song || !image || !user) {
    return NextResponse.redirect(`${requestUrl.origin}`, {
      status: 301,
    });
  }

  const { data: songData, error: songError } = await supabase.storage
    .from('songs')
    .upload(`song-${title}-${artist}-${uniqueId}`, song, {
      cacheControl: '7200',
    });

  const { data: imageData, error: imageError } = await supabase.storage
    .from('images')
    .upload(`image-${title}-${artist}-${uniqueId}`, image, {
      cacheControl: '7200',
    });

  const { error: uploadError } = await supabase.from('songs').insert({
    user_id: user?.id,
    title: title,
    artist: artist,
    image_path: imageData,
    song_path: songData,
  });

  console.log(songError, imageError, uploadError);

  return NextResponse.redirect(`${requestUrl.origin}`, {
    status: 301,
  });
}
