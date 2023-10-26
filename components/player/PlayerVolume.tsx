'use client';
import { Slider } from '@/components/ui/slider';
import { VolumeFull, VolumeLow, VolumeMute } from '../icons/volume';
import { Dispatch, SetStateAction } from 'react';
import { cn } from '@/lib/utils';

interface PlayerVolumeProps {
  handleMute: () => void;
  volume: number;
  setVolume: Dispatch<SetStateAction<number>>;
}

const PlayerVolume = ({ handleMute, volume, setVolume }: PlayerVolumeProps) => {
  return (
    <div className='hidden sm:flex flex-1 items-center justify-end'>
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
          className={cn(`sm:max-w-[100px] max-w-[70px]`)}
          defaultValue={[volume]}
          max={1}
          step={0.01}
          onValueChange={(e) => setVolume(e[0])}
          value={[volume]}
        />
      </div>
    </div>
  );
};

export default PlayerVolume;
