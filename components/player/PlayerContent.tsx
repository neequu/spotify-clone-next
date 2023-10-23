'use client';
// @ts-ignore
import useSound from 'use-sound';
import usePlayer from '@/hooks/usePlayer';
import { Song } from '@/types/supabase';
import { useEffect, useState } from 'react';
import PlayerControls from '../player/PlayerControls';
import PlayerSong from '../player/PlayerSong';
import PlayerVolume from './PlayerVolume';
interface PlayerContentProps {
  song: Song;
  songUrl: string;
}

const PlayerContent = ({ song, songUrl }: PlayerContentProps) => {
  const player = usePlayer();
  const currentIndex = player.ids.findIndex((id) => id === player.activeId);

  const onPlayNext = () => {
    if (!player.ids.length) return;
    const nextSong = player.ids[currentIndex + 1];
    if (!nextSong) {
      player.setId(player.ids[0]);
      return;
    }
    handlePlay();
  };

  const onPlayPrevious = () => {
    if (!player.ids.length) return;

    const prevSong = player.ids[currentIndex - 1];
    if (!prevSong) {
      return player.setId(player.ids[currentIndex - 1]);
    }
  };

  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [prevVolume, setPrevVolume] = useState<number>(50);

  const [play, { pause, sound, duration }] = useSound(songUrl, {
    volume,
    onplay: () => setPlaying(true),
    onend: () => {
      setPlaying(false);
      onPlayNext();
    },
    onpause: () => {
      setPlaying(false);
    },
    format: ['mp3', 'wav'],
  });

  const handleMute = () => {
    const muted = volume === 0;
    if (muted) {
      setVolume(prevVolume);
    } else {
      setPrevVolume(volume);
      setVolume(0);
    }
  };

  useEffect(() => {
    sound?.play();

    return () => {
      sound?.unload();
    };
  }, [sound]);

  const handlePlay = () => {
    if (!playing) {
      play();
    } else {
      pause();
    }
  };

  return (
    <>
      <PlayerSong song={song} />
      <PlayerControls
        playing={playing}
        handlePlay={handlePlay}
        onPlayNext={onPlayNext}
        onPlayPrevious={onPlayPrevious}
        duration={duration}
      />
      <PlayerVolume
        handleMute={handleMute}
        setVolume={setVolume}
        volume={volume}
      />
    </>
  );
};

export default PlayerContent;
