import { Slider } from '../ui/slider';
import { VolumeFull, VolumeLow, VolumeMute } from '../icons/volume';

interface PlayerVolumeProps {
  handleMute: () => void;
  handleVolumeChange: (vol: number[]) => void;
  volume: number;
}

const PlayerVolume = ({
  handleMute,
  volume,
  handleVolumeChange,
}: PlayerVolumeProps) => {
  return (
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
  );
};

export default PlayerVolume;
