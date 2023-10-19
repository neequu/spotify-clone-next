import Image from 'next/image';
import Link from 'next/link';

interface PlaylistHorizontalProps {
  image: string;
  name: string;
  to: string;
}

const PlaylistHorizontal = ({ image, name, to }: PlaylistHorizontalProps) => {
  return (
    <Link href={to} className='flex-1 max-w-max'>
      <div className='flex group items-center relative bg-gray-md bg-opacity-30 overflow-hidden backdrop-blur-40 md:w-52 w-full pr-[clamp(2rem,10vw,5rem)] md:p-1 rounded md:gap-4 gap-2 hover:backdrop-brightness-110 transition'>
        <div className='w-[40px] aspect-square relative md:rounded overflow-hidden'>
          <Image src={image} alt={name} fill />
        </div>
        <p className='text-xs md:text-sm'>{name}</p>
      </div>
    </Link>
  );
};

export default PlaylistHorizontal;
