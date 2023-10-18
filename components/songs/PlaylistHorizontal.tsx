import Image from 'next/image';
import Link from 'next/link';

interface PlaylistHorizontalProps {
  image: string;
  name: string;
  to: string;
}

const PlaylistHorizontal = ({ image, name, to }: PlaylistHorizontalProps) => {
  return (
    <Link href={to} className='block flex-1 md:flex-initial'>
      <div className='flex group items-center relative bg-gray-md bg-opacity-30 overflow-hidden backdrop-blur-40 md:w-60 w-full max-w-[200px] md:p-1.5 rounded md:gap-4 gap-2 hover:backdrop-brightness-110 transition'>
        <div className='md:w-[60px] w-[40px] aspect-square relative md:rounded overflow-hidden'>
          <Image src={image} alt={name} fill />
        </div>
        <p className='text-xs md:text-base'>{name}</p>
      </div>
    </Link>
  );
};

export default PlaylistHorizontal;
