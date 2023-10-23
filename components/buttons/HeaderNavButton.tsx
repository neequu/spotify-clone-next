'use client';
import { useRouter } from 'next/navigation';
import { ChevronLeft } from 'lucide-react';

interface HeaderNavButtonProps {
  forward?: boolean;
}

const HeaderNavButton = ({ forward }: HeaderNavButtonProps) => {
  const router = useRouter();

  const navigate = () => (forward ? router.forward() : router.back());

  return (
    <button
      aria-label='navigate'
      type='button'
      onClick={() => navigate()}
      className={`bg-black bg-opacity-30 focus-visible:outline-white hover:bg-opacity-50 transition-all rounded-full p-1 ${
        forward && 'rotate-180'
      }`}>
      <ChevronLeft className='w-5 h-5' />
    </button>
  );
};

export default HeaderNavButton;
