import PlayerControls from '../player/PlayerControls';
import PlayerSong from '../player/PlayerSong';
import { BiVolumeMute, BiVolumeFull, BiVolumeLow } from 'react-icons/bi';
import { Slider } from '@/components/ui/slider';
// @ts-ignore
import useSound from 'use-sound';
import usePlayer from '@/hooks/usePlayer';
import { Song } from '@/types/supabase';
import { useState } from 'react';
import useGetSongById from '@/hooks/useGetSongById';

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

    const nextSong = player.ids[currentIndex + 1];
    if (!nextSong) {
      return player.setId(player.ids[0]);
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
  const [volume, setVolume] = useState(50);
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

  return (
    <>
      <PlayerSong song={song} likedSong={likedSong} />
      <PlayerControls playing />
      <div className='flex-1 flex justify-end gap-2'>
        <button
          type='button'
          onClick={handleMute}
          className=' text-neutral-400 hover:text-white transition-colors'>
          {volume === 0 ? (
            <BiVolumeMute size={20} />
          ) : volume >= 50 ? (
            <BiVolumeFull size={20} />
          ) : (
            <BiVolumeLow size={20} />
          )}
        </button>
        <Slider
          className='max-w-[100px]'
          defaultValue={[volume]}
          max={100}
          step={1}
          onValueChange={(e) => setVolume(e[0])}
          value={[volume]}
        />
      </div>
    </>
  );
};

export default PlayerContent;
