import { MutableRefObject } from 'react';
import { Slider } from '../ui/slider';

interface PlayerProgressProps {
  audioRef: MutableRefObject<HTMLAudioElement | null>;
  progress: number;
  handleProgressChange: (time: number[]) => void;
}

const PlayerProgress = ({
  audioRef,
  progress,
  handleProgressChange,
}: PlayerProgressProps) => {
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

  return (
    <div className='hidden md:flex items-center justify-center '>
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
  );
};

export default PlayerProgress;
