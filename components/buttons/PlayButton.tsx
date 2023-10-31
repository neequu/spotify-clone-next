"use client";
import usePlaySong from "@/hooks/usePlaySong";
import { Song } from "@/types/supabase";
import { Play, PlayCrossed } from "../icons/play";
import usePlayer from "@/hooks/usePlayer";
const PlayButton = ({
  song,
  songs,
  className,
  children,
}: {
  song: Song;
  songs: Song[];
  className?: string;
  children?: React.ReactNode;
}) => {
  const onPlay = usePlaySong(songs);
  const player = usePlayer();
  return (
    <button
      type="button"
      tabIndex={-1}
      onClick={() => {
        onPlay(song.id);
      }}
      className={`flex justify-center rounded-full hover:brightness-110 ${className} outline-none`}
      aria-label={`play ${song.title} by ${song.artist}`}
    >
      <div
        className={`w-[inherit] ${
          !!children && "hidden justify-center group-hover:flex "
        }`}
      >
        {player.activeId === song.id ? <PlayCrossed /> : <Play />}
      </div>
      <div className="group-hover:hidden">{children}</div>
    </button>
  );
};

export default PlayButton;
