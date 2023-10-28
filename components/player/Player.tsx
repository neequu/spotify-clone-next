'use client';

import { useState, useEffect, useRef } from 'react';
import useGetSongById from '@/hooks/useGetSongById';
import usePlayer from '@/hooks/usePlayer';
import useSongUrl from '@/hooks/useSongUrl';
import { VolumeFull, VolumeLow, VolumeMute } from '../icons/volume';

import Pause from '../icons/Pause';
import Play from '../icons/Play';
import StepBack from '../icons/StepBack';
import PlayerSong from './PlayerSong';
import { Slider } from '../ui/slider';

// export const revalidate = 0;

const ThePlayer = () => {
  const player = usePlayer();
  const { song, isLoading } = useGetSongById(player.activeId);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);
  const [prevVolume, setPrevVolume] = useState(volume);
  const [isPlaying, setIsPlaying] = useState(true);

  const songUrl = useSongUrl(song);
  if (!song) return null;

  const onPlayNext = async () => {
    if (!player.activeId) return;
    setProgress(0);
    handleProgressChange([0]);
    // await new Promise((r) => setTimeout(r, 40));

    const currentIndex = player.ids.indexOf(player.activeId);
    if (currentIndex === player.ids.length - 1) {
      const firstItem = player.ids[0];
      player.setId(firstItem);
      return;
    }
    player.setId(player.ids[currentIndex + 1]);
  };

  const onPlayPrevious = async () => {
    if (!player.activeId) return;
    // await new Promise((r) => setTimeout(r, 40));
    setProgress(0);
    handleProgressChange([0]);

    const currentIndex = player.ids.indexOf(player.activeId);

    if (currentIndex === 0) {
      const lastItem = player.ids[player.ids.length - 1];
      player.setId(lastItem);
      return;
    }
    player.setId(player.ids[currentIndex - 1]);
  };

  const handlePlay = async () => {
    audioRef.current?.play();
    setIsPlaying(true);
  };
  const handlePause = async () => {
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
    if (!audioRef.current) return;

    const [newProgress] = time;
    if (newProgress === undefined) return;

    setProgress(newProgress);
    audioRef.current.currentTime = audioRef.current.duration * newProgress;
  };

  const formatTime = (time: number) => {
    const totalSeconds = Math.floor(time);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}`;
  };

  const getCurrentTime = () => {
    if (!audioRef.current?.currentTime) return '00:00';
    return formatTime(audioRef.current.currentTime);
  };

  const getDuration = () => {
    if (!audioRef.current?.duration) return '00:00';
    return formatTime(audioRef.current.duration);
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
    <footer className='z-50  fixed right-0 left-0 bottom-[64px] md:bottom-0 md:h-[80px] h-[52px] md:bg-black hidden bare:flex px-4 items-center'>
      <div className='flex-1'>
        <PlayerSong song={song} />
      </div>
      <div className='flex flex-col flex-1'>
        <div className='flex items-center gap-2 justify-center mb-1'>
          <button
            className='outline-none focus-visible:shadow-focus rounded-full text-neutral-400 hover:text-white transition-colors hidden sm:block disabled:cursor-auto'
            type='button'
            aria-label='previous song'
            onClick={onPlayPrevious}
            disabled={isLoading}>
            <StepBack />
          </button>
          <button
            aria-label='pause or play song'
            className='outline-none focus-visible:shadow-focus rounded-full '
            type='button'
            onClick={handlePlayPause}>
            {isPlaying ? <Pause /> : <Play />}
          </button>
          <button
            aria-label='next song'
            type='button'
            className='outline-none focus-visible:shadow-focus rounded-full text-neutral-400 hover:text-white transition-colors rotate-180 hidden sm:block disabled:cursor-auto'
            disabled={isLoading}
            onClick={onPlayNext}>
            <StepBack />
          </button>
          <audio
            key={songUrl}
            ref={audioRef}
            src={songUrl}
            onEnded={onPlayNext}
            autoPlay
            onPlaying={handlePlay}
            onPause={handlePause}
            onTimeUpdate={getProgress}
          />
        </div>
        <div className='flex items-center justify-center'>
          <span className='w-9 flex justify-start text-[0.625rem] text-neutral-300'>
            {getCurrentTime()}
          </span>
          <div className='group max-w-[600px] w-full rounded-full flex items-center'>
            <Slider
              min={0}
              max={1}
              step={0.01}
              defaultValue={[progress]}
              onValueChange={handleProgressChange}
              value={[progress]}
            />
          </div>
          <span className='w-9 flex justify-end text-[0.625rem] text-neutral-300'>
            {getDuration()}
          </span>
        </div>
      </div>
      <div className='flex justify-end flex-1'>
        <div className=' flex gap-2 items-center  group'>
          <button
            aria-label='mute song'
            type='button'
            onClick={handleMute}
            className=' text-neutral-400 outline-none focus-visible:shadow-focus rounded-full hover:text-white transition-colors'>
            {volume < 0.01 ? (
              <VolumeMute />
            ) : volume >= 0.5 ? (
              <VolumeFull />
            ) : (
              <VolumeLow />
            )}
          </button>
          <div className='max-w-[100px] w-full rounded-full flex items-center'>
            <Slider
              min={0}
              max={1}
              step={0.01}
              defaultValue={[volume]}
              onValueChange={handleVolumeChange}
              value={[volume]}
              className='min-w-[100px]'
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ThePlayer;
