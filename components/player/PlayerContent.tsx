import useSongUrl from "@/hooks/useSongUrl";
import usePlayer from "@/hooks/usePlayer";
import { useState, useRef } from "react";

import PlayerSong from "./PlayerSong";
import PlayerControls from "./PlayerControls";
import PlayerProgress from "./PlayerProgress";
import PlayerVolume from "./PlayerVolume";
import { Song } from "@/types/supabase";

const PlayerContent = ({
  song,
  isLoading,
}: {
  song: Song | undefined;
  isLoading: boolean;
}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(0.25);
  const [prevVolume, setPrevVolume] = useState(volume);
  const [isPlaying, setIsPlaying] = useState(true);
  const player = usePlayer();
  const songUrl = useSongUrl(song);
  if (!song || player.activeId === undefined) return null;

  const ressetProgressWithDelay = async () => {
    await new Promise((r) => setTimeout(r, 100));
    setProgress(0);
    handleProgressChange([0]);
  };

  const onPlayNext = async () => {
    if (!player.activeId) return;

    const currentIndex = player.ids.indexOf(player.activeId);
    if (currentIndex === player.ids.length - 1) {
      const firstItem = player.ids[0];
      player.setId(firstItem);
      await ressetProgressWithDelay();
      return;
    }
    player.setId(player.ids[currentIndex + 1]);
    await ressetProgressWithDelay();
  };

  const onPlayPrevious = async () => {
    if (!player.activeId) return;

    const currentIndex = player.ids.indexOf(player.activeId);
    if (currentIndex === 0) {
      const lastItem = player.ids[player.ids.length - 1];
      player.setId(lastItem);
      await ressetProgressWithDelay();
      return;
    }
    player.setId(player.ids[currentIndex - 1]);
    await ressetProgressWithDelay();
  };

  const handlePlay = () => {
    audioRef.current?.play();
    setIsPlaying(true);
  };
  const handlePause = () => {
    audioRef.current?.pause();
    setIsPlaying(false);
  };

  const handlePlayPause = () => {
    if (isPlaying) {
      handlePause();
      return;
    }

    handlePlay();
  };

  const handleVolumeChange = (vol: number[]) => {
    if (!audioRef.current) return;

    const [newVolume] = vol;
    if (newVolume === undefined) return;

    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  const handleProgressChange = (time: number[]) => {
    if (!audioRef.current || !audioRef.current.currentTime) return;

    const [newProgress] = time;
    if (newProgress === undefined) return;

    setProgress(newProgress);
    audioRef.current.currentTime = audioRef.current.duration * newProgress;
  };

  const getProgress = () => {
    if (!audioRef.current) return;
    setProgress(audioRef.current.currentTime / audioRef.current.duration);
  };

  const handleMute = () => {
    if (!audioRef.current) return;

    const muted = volume < 0.01;
    if (muted) {
      setVolume(prevVolume);
      audioRef.current.volume = prevVolume;
      return;
    }
    audioRef.current.volume = 0;
    setPrevVolume(volume);
    setVolume(0);
  };
  return (
    <>
      <div className="flex-1">
        <PlayerSong song={song} />
      </div>
      <div className="flex flex-col md:flex-1">
        <PlayerControls
          handlePlayPause={handlePlayPause}
          isLoading={isLoading}
          isPlaying={isPlaying}
          onPlayNext={onPlayNext}
          onPlayPrevious={onPlayPrevious}
        />
        <audio
          ref={audioRef}
          src={songUrl}
          onEnded={onPlayNext}
          autoPlay
          onPlaying={handlePlay}
          onPause={handlePause}
          onTimeUpdate={getProgress}
        />
        <PlayerProgress
          audioRef={audioRef}
          progress={progress}
          handleProgressChange={handleProgressChange}
        />
      </div>
      <div className="hidden flex-1 justify-end md:flex">
        <PlayerVolume
          handleMute={handleMute}
          handleVolumeChange={handleVolumeChange}
          volume={volume}
        />
      </div>
    </>
  );
};

export default PlayerContent;
