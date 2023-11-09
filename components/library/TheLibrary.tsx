import getSessionServer from "@/app/actions/getSessionServer";
import LibrarySongList from "./LibrarySongList";
import LibraryUploadButton from "./LibraryUploadButton";

import { getSongsByUserId } from "@/app/actions";
import { Suspense } from "react";

interface TheLibraryProps {
  children?: React.ReactNode;
}

const TheLibrary = async ({ children }: TheLibraryProps) => {
  const session = await getSessionServer();

  const user = session?.user;
  const userSongs = (await getSongsByUserId(user)) || [];

  return (
    <section className="flex flex-col gap-3 md:h-screen">
      <div className="mt-6 flex items-center justify-between md:mt-0">
        {children}
        <LibraryUploadButton user={user} />
      </div>
      {!session ? (
        <div className="h-screen text-sm text-neutral-400">
          You need to sign in to use your library
        </div>
      ) : (
        <Suspense fallback="loaidng..">
          <LibrarySongList userSongs={userSongs} />
        </Suspense>
      )}
    </section>
  );
};

export default TheLibrary;
