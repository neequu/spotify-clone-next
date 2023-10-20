import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import uniqid from 'uniqid';

import type { Database } from '@/types/supabase';
import { revalidatePath } from 'next/cache';

export async function POST(request: Request) {
  const requestUrl = new URL(request.url);
  const formData = await request.formData();
  // get form values
  const song = formData.get('song');
  const title = formData.get('title');
  const artist = formData.get('artist');
  const image = formData.get('image');

  const supabase = createRouteHandlerClient<Database[]>({ cookies });
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
      cacheControl: '3600',
      upsert: false,
    });

  const { data: imageData, error: imageError } = await supabase.storage
    .from('images')
    .upload(`image-${title}-${artist}-${uniqueId}`, image, {
      cacheControl: '3600',
      upsert: false,
    });

  const { error: uploadError } = await supabase.from('songs').insert({
    user_id: user?.id,
    title: title,
    artist: artist,
    image_path: imageData?.path,
    song_path: songData?.path,
  });

  revalidatePath(requestUrl.origin);

  return NextResponse.redirect(`${requestUrl.origin}`, {
    status: 301,
  });
}
