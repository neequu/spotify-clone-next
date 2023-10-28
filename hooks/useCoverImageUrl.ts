import { Database, Song } from "@/types/supabase";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const useCoverImageUrl = (song: Song) => {
  const supabaseClient = createClientComponentClient<Database>();

  const { data: songImage } = supabaseClient.storage
    .from("images")
    .getPublicUrl(song.image_path!);

  return songImage;
};

export default useCoverImageUrl;
