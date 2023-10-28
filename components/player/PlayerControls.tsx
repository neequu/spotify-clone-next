import Pause from "../icons/Pause";
import Play from "../icons/Play";
import StepBack from "../icons/StepBack";

interface PlayerControlsProps {
  onPlayPrevious: () => Promise<void>;
  onPlayNext: () => Promise<void>;
  isLoading: boolean;
  handlePlayPause: () => void;
  isPlaying: boolean;
}

const PlayerControls = ({
  isLoading,
  onPlayNext,
  onPlayPrevious,
  handlePlayPause,
  isPlaying,
}: PlayerControlsProps) => {
  return (
    <div className="mb-1 flex items-center justify-center gap-2">
      <button
        className="hidden rounded-full text-neutral-400 outline-none transition-colors hover:text-white focus-visible:shadow-focus disabled:cursor-auto sm:block"
        type="button"
        aria-label="previous song"
        onClick={onPlayPrevious}
        disabled={isLoading}
      >
        <StepBack />
      </button>
      <button
        aria-label="pause or play song"
        className="ml-auto rounded-full outline-none focus-visible:shadow-focus md:ml-0 "
        type="button"
        onClick={handlePlayPause}
      >
        {isPlaying ? <Pause /> : <Play />}
      </button>
      <button
        aria-label="next song"
        type="button"
        className="hidden rotate-180 rounded-full text-neutral-400 outline-none transition-colors hover:text-white focus-visible:shadow-focus disabled:cursor-auto sm:block"
        disabled={isLoading}
        onClick={onPlayNext}
      >
        <StepBack />
      </button>
    </div>
  );
};

export default PlayerControls;
