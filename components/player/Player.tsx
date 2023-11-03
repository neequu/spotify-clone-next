"use client";

import useGetSongById from "@/hooks/useGetSongById";
import usePlayer from "@/hooks/usePlayer";
import PlayerContent from "./PlayerContent";

const ThePlayer = () => {
  const player = usePlayer();
  const { song, isLoading } = useGetSongById(player.activeId);

  return (
    <>
      {player.activeId && (
        <footer
          className={`${
            isLoading && "animate-pulse"
          } fixed bottom-[64px] left-0 right-0 z-50 mx-1 hidden h-[52px] items-center rounded-md bg-[#121212] px-4 backdrop-blur-2xl bare:flex md:bottom-0 md:mx-0 md:h-[80px] md:rounded-none md:bg-black`}
        >
          <PlayerContent song={song} isLoading={isLoading} />
        </footer>
      )}
    </>
  );
};

export default ThePlayer;
