import PlaylistHorizontal from "@/components/songs/PlaylistHorizontal";
import SongGrig from "@/components/songs/SongGrig";

import { Database } from "@/types/supabase";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Suspense } from "react";

export default async function Home() {
  const cookieStore = cookies();
  const supabase = createServerComponentClient<Database>({
    cookies: () => cookieStore,
  });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <main className="md:gradient-green gradient-dark h-screen flex-1 overflow-auto px-2 pb-[64px] pt-[60px] md:rounded md:px-4 md:pb-0">
      <h1 className="font-semibold xs:text-xl md:text-2xl">
        {session ? "Welcome back!" : "Welcome new comer!"}
      </h1>
      <section className="mt-4 flex gap-4">
        <PlaylistHorizontal
          name="Liked Songs"
          image="/images/liked-songs.png"
          to="/liked-songs"
          hasSession={!!session}
        />
      </section>
      <section className="mt-6 md:mt-8">
        <h2 className="font-semibold xs:text-xl">Newest songs</h2>
        <div className="mt-2 md:mt-4 ">
          <Suspense fallback={<div>loading...</div>}>
            <SongGrig supabase={supabase} />
          </Suspense>
        </div>
      </section>
    </main>
  );
}
