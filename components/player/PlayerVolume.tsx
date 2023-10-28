import { Slider } from "../ui/slider";
import { VolumeFull, VolumeLow, VolumeMute } from "../icons/volume";

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
    <div className=" group flex items-center  gap-2">
      <button
        aria-label="mute song"
        type="button"
        onClick={handleMute}
        className=" rounded-full text-neutral-400 outline-none transition-colors hover:text-white focus-visible:shadow-focus"
      >
        {volume < 0.01 ? (
          <VolumeMute />
        ) : volume >= 0.5 ? (
          <VolumeFull />
        ) : (
          <VolumeLow />
        )}
      </button>
      <div className="flex w-full max-w-[100px] items-center rounded-full">
        <Slider
          min={0}
          max={1}
          step={0.01}
          defaultValue={[volume]}
          onValueChange={handleVolumeChange}
          value={[volume]}
          className="min-w-[100px]"
        />
      </div>
    </div>
  );
};

export default PlayerVolume;
