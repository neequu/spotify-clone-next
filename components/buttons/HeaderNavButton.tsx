'use client';
import { useRouter } from 'next/navigation';
import { PiCaretLeft } from 'react-icons/pi';
import { twMerge } from 'tailwind-merge';

interface HeaderNavButtonProps {
  forward?: boolean;
}

const HeaderNavButton = ({ forward }: HeaderNavButtonProps) => {
  const router = useRouter();

  const navigate = () => (forward ? router.forward() : router.back());

  return (
    <button
      type='button'
      onClick={() => navigate()}
      className={twMerge(
        'bg-black bg-opacity-30 hover:bg-opacity-50 transition-all rounded-full p-1.5',
        forward && 'rotate-180'
      )}>
      <PiCaretLeft size={18} />
    </button>
  );
};

export default HeaderNavButton;