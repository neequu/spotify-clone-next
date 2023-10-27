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
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [prevVolume, setPrevVolume] = useState<number>(50);

  const player = usePlayer();
  const currentIndex = player.ids.indexOf(player.activeId!);

  const onPlayNext = () => {
    if (currentIndex < player.ids.length) {
      player.setId(currentIndex + 1);
    } else {
      player.setId(player.ids[0]);
    }
  };

  const onPlayPrevious = () => {
    if (currentIndex > 1) {
      player.setId(currentIndex - 1);
    } else {
      player.setId(player.ids[player.ids.length]);
    }
  };

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
    console.log(sound);
    sound?.play();

    return () => {
      sound?.unload();
    };
  }, [sound, player.activeId]);

  const handlePlay = () => {
    if (!playing) {
      play();
    } else {
      pause();
    }
  };

  return (
    <div key={player.activeId} className='flex items-center h-full'>
      <PlayerSong song={song} />
      <PlayerControls
        playing={playing}
        handlePlay={handlePlay}
        onPlayNext={onPlayNext}
        onPlayPrevious={onPlayPrevious}
        duration={duration}
        song={song}
      />
      <PlayerVolume
        handleMute={handleMute}
        setVolume={setVolume}
        volume={volume}
      />
    </div>
  );
};

export default PlayerContent;
