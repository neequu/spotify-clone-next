import TheLibrary from "@/components/library/TheLibrary";
import PlaylistHorizontal from "@/components/songs/PlaylistHorizontal";
import { Database } from "@/types/supabase";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { Metadata } from "next";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "Library · Nextify",
  description: "View your library on Nextify",
};

const page = async () => {
  const cookieStore = cookies();
  const supabase = createServerComponentClient<Database>({
    cookies: () => cookieStore,
  });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  return (
    <main className="gradient-dark  h-screen flex-1 overflow-auto px-2 pb-[64px] pt-[64px] md:px-4 md:pb-0">
      <h1 className="mb-4 font-semibold xs:text-xl">Your library</h1>
      <div className="flex">
        <PlaylistHorizontal
          name="Liked Songs"
          image="/images/liked-songs.png"
          to="/liked-songs"
          hasSession={!!session}
        />
      </div>
      <TheLibrary>
        <h1 className="font-semibold xs:text-xl ">Uploaded songs</h1>
      </TheLibrary>
    </main>
  );
};

export default page;
