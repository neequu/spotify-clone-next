import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <body>
      <main className='w-screen h-screen bg-gray-main grid place-content-center justify-items-center text-white'>
        <Image
          src='/not-found.svg'
          width={60}
          height={60}
          alt='not found image'
        />
        <h1 className='mt-10 text-5xl font-bold'>Page not found</h1>
        <p className='text-neutral-400 mt-6'>
          We can’t seem to find the page you are looking for.
        </p>
        <Link
          href='/'
          className='px-7 py-3 font-bold border border-neutral-400 rounded-full mt-10 hover:scale-105 hover:border-neutral-600 transition ease-linear'>
          Home
        </Link>
      </main>
    </body>
  );
}
