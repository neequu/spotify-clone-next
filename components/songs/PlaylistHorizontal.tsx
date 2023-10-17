import Image from 'next/image';
import Link from 'next/link';
import { PiPlayFill } from 'react-icons/pi';

interface PlaylistHorizontalProps {
  image: string;
  name: string;
  to: string;
}

const PlaylistHorizontal = ({ image, name, to }: PlaylistHorizontalProps) => {
  return (
    <Link href={to}>
      <div className='flex group items-center relative bg-gray-md bg-opacity-30 backdrop-blur-40 w-60 p-1.5 rounded gap-4 hover:backdrop-brightness-110 transition'>
        <Image src={image} alt={name} width={60} height={60} quality={100} />
        <p>{name}</p>
      </div>
    </Link>
  );
};

export default PlaylistHorizontal;
