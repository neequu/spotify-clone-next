"use client";
import usePlaySong from "@/hooks/usePlaySong";
import { Song } from "@/types/supabase";

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
        className={`${children && "hidden justify-center group-hover:flex "}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="0.85em"
          height="0.85em"
          viewBox="0 0 256 256"
        >
          <path
            fill="currentColor"
            d="M240 128a15.74 15.74 0 0 1-7.6 13.51L88.32 229.65a16 16 0 0 1-16.2.3A15.86 15.86 0 0 1 64 216.13V39.87a15.86 15.86 0 0 1 8.12-13.82a16 16 0 0 1 16.2.3l144.08 88.14A15.74 15.74 0 0 1 240 128Z"
          ></path>
        </svg>
      </div>
      <div className="group-hover:hidden">{children}</div>
    </button>
  );
};

export default PlayButton;
