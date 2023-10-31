"use client";

import usePlaySong from "@/hooks/usePlaySong";
import { Song } from "@/types/supabase";

interface SongMediaItemWrapperProps {
  song: Song;
  songs?: Song[];
  children?: React.ReactNode;
}

const SongMediaItemWrapper = ({
  children,
  song,
  songs,
}: SongMediaItemWrapperProps) => {
  const onPlay = usePlaySong(songs);
  return (
    <li
      onDoubleClickCapture={() => onPlay(song.id)}
      className="group relative flex min-h-[56px] items-center overflow-hidden rounded p-1 pr-4 transition-colors hover:bg-neutral-800"
    >
      {children}
    </li>
  );
};

export default SongMediaItemWrapper;
