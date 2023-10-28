import Pause from '../icons/Pause';
import Play from '../icons/Play';
import StepBack from '../icons/StepBack';

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
        className='ml-auto md:ml-0 outline-none focus-visible:shadow-focus rounded-full '
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
    </div>
  );
};

export default PlayerControls;
