// @ts-ignore
import useSound from 'use-sound';
import usePlayer from '@/hooks/usePlayer';
import { Song } from '@/types/supabase';
import { useEffect, useState } from 'react';
import useGetSongById from '@/hooks/useGetSongById';
import PlayerControls from '../player/PlayerControls';
import PlayerSong from '../player/PlayerSong';
import { BiVolumeMute, BiVolumeFull, BiVolumeLow } from 'react-icons/bi';
import { Slider } from '@/components/ui/slider';
import { VolumeFull, VolumeLow, VolumeMute } from '../icons/volume';

interface PlayerContentProps {
  song: Song;
  songUrl: string;
}

const PlayerContent = ({ song, songUrl }: PlayerContentProps) => {
  const player = usePlayer();
  const { likedSong } = useGetSongById(player.activeId);

  const currentIndex = player.ids.findIndex((id) => id === player.activeId);

  const onPlayNext = () => {
    if (!player.ids.length) return;
    console.log(player);
    const nextSong = player.ids[currentIndex + 1];
    console.log(nextSong);
    if (!nextSong) {
      player.setId(player.ids[0]);
      console.log(player);
      return;
    }
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

  const [play, { pause, sound }] = useSound(songUrl, {
    volume,
    onplay: () => setPlaying(true),
    onended: () => {
      setPlaying(false);
      onPlayNext();
    },
    onpause: () => setPlaying(false),
    format: ['mp3'],
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
      <PlayerSong song={song} likedSong={likedSong} />
      <PlayerControls playing={playing} handlePlay={handlePlay} />
      <div className='flex-1 flex items-center justify-end'>
        <div className='group flex h-min w-[130px] gap-2'>
          <button
            aria-label='mute song'
            type='button'
            onClick={handleMute}
            className=' text-neutral-400 hover:text-white transition-colors'>
            {volume === 0 ? (
              <VolumeMute />
            ) : volume >= 0.5 ? (
              <VolumeFull />
            ) : (
              <VolumeLow />
            )}
          </button>
          <Slider
            className='max-w-[100px]'
            defaultValue={[volume]}
            max={1}
            step={0.01}
            onValueChange={(e) => setVolume(e[0])}
            value={[volume]}
          />
        </div>
      </div>
    </>
  );
};

export default PlayerContent;
