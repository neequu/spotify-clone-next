'use client';

import { useState, useEffect, useRef } from 'react';
import useGetSongById from '@/hooks/useGetSongById';
import usePlayer from '@/hooks/usePlayer';
import useSongUrl from '@/hooks/useSongUrl';
import PlayerContent from './PlayerContent';
import { VolumeFull, VolumeLow, VolumeMute } from '../icons/volume';

import Pause from '../icons/Pause';
import Play from '../icons/Play';
import StepBack from '../icons/StepBack';
import PlayerSong from './PlayerSong';
import { Slider } from '../ui/slider';

// export const revalidate = 0;

const ThePlayer = () => {
  // const player = usePlayer();
  const songs = [
    'https://nlqimebrpdwlvxhpmbre.supabase.co/storage/v1/object/public/songs/song-zzz111-qwe-1k4lo34v1q6',
    'https://nlqimebrpdwlvxhpmbre.supabase.co/storage/v1/object/public/songs/song-1-1-4pklo74tkp3',
    'https://nlqimebrpdwlvxhpmbre.supabase.co/storage/v1/object/public/songs/song-scrapee%20my%20knee-softheart-1d4lnvhqdxg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const onPlayNext = () => {
    if (currentIndex < songs.length - 1) {
      setCurrentIndex((p) => p + 1);
    } else {
      setCurrentIndex(0);
    }
    handlePlay();
  };

  const onPlayPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((p) => p - 1);
    } else {
      setCurrentIndex(songs.length - 1);
    }
  };

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);
  const [prevVolume, setPrevVolume] = useState(volume);
  const [isPlaying, setIsPlaying] = useState(true);

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
    <footer className='z-50 fixed right-0 left-0 bottom-[64px] md:bottom-0 md:h-[80px] h-[52px] md:bg-black hidden bare:flex px-4 items-center'>
      <div className='flex-1'>
        <PlayerSong
          song={{
            id: 1,
            artist: '9tails',
            created_at: '123',
            image_path: 'image-1am-9tails-85clnul8bqf',
            song_path: 'song-1am-9tails-85clnul8bqf',
            user_id: 'c3fcb383-0c2c-447f-a5f0-7ccdbf49ecba',
            title: '1am',
          }}
        />
      </div>
      <div className='flex flex-col flex-1'>
        <div className='flex items-center gap-2 justify-center mb-1'>
          <button
            className='outline-none focus:shadow-focus rounded-full text-neutral-400 hover:text-white transition-colors hidden sm:block'
            type='button'
            aria-label='previous song'
            onClick={onPlayPrevious}>
            <StepBack />
          </button>
          <button
            aria-label='pause or play song'
            className='outline-none focus:shadow-focus rounded-full '
            type='button'
            onClick={handlePlayPause}>
            {isPlaying ? <Pause /> : <Play />}
          </button>
          <button
            aria-label='next song'
            type='button'
            className='outline-none focus:shadow-focus rounded-full text-neutral-400 hover:text-white transition-colors rotate-180 hidden sm:block'
            onClick={onPlayNext}>
            <StepBack />
          </button>
          <audio
            ref={audioRef}
            src={songs[currentIndex]}
            onEnded={onPlayNext}
            autoPlay
            onTimeUpdate={getProgress}
          />
        </div>
        <div className='flex items-center'>
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
            className=' text-neutral-400 outline-none focus:shadow-focus rounded-full hover:text-white transition-colors'>
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
