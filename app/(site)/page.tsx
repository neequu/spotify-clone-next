import Spinner from "@/components/Spinner";
import PlaylistHorizontal from "@/components/songs/PlaylistHorizontal";
import SongGrid from "@/components/songs/SongGrid";
import getSessionServer from "@/composables/getSessionServer";

import { Suspense } from "react";

export default async function Home() {
  const session = await getSessionServer();

  return (
    <main className="gradient-dark h-screen flex-1 overflow-auto  pb-[64px]  md:rounded md:pb-0">
      <div className="gradient-green px-2 pb-4 pt-[48px] md:px-4 md:pt-[60px]">
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
      </div>
      <section className="mt-6 px-2 md:mt-8 md:px-4">
        <h2 className="font-semibold xs:text-xl">Newest songs</h2>
        <div className="mt-2 md:mt-4 ">
          <Suspense
            fallback={
              <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <Spinner />
              </div>
            }
          >
            <SongGrid />
          </Suspense>
        </div>
      </section>
    </main>
  );
}
