'use client';
import useAuthModal from '@/hooks/useAuthModal';
import Image from 'next/image';
import Link from 'next/link';

interface PlaylistHorizontalProps {
  image: string;
  name: string;
  to: string;
  hasSession: boolean;
}

const PlaylistHorizontal = ({
  image,
  name,
  to,
  hasSession,
}: PlaylistHorizontalProps) => {
  const authModal = useAuthModal();
  return (
    <Link
      onClick={() => !hasSession && authModal.onOpen()}
      href={to}
      className='flex-1 max-w-max'>
      <div className='flex group select-none items-center relative bg-gray-md bg-opacity-30 overflow-hidden backdrop-blur-40 md:w-52 w-full pr-[clamp(2rem,10vw,5rem)] md:p-1 rounded md:gap-4 gap-2 hover:backdrop-brightness-110 transition'>
        <Image src={image} alt={`a ${name} playlist`} width={40} height={40} />
        <p className='text-xs md:text-sm'>{name}</p>
      </div>
    </Link>
  );
};

export default PlaylistHorizontal;
