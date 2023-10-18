'use client';
import useDebounce from '@/hooks/useDebounce';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { PiMagnifyingGlass } from 'react-icons/pi';
import { useSearchParams } from 'next/navigation';

const SearchElement = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get('s');

  const router = useRouter();
  const [value, setValue] = useState(search || '');
  const debouncedValue = useDebounce(value);

  useEffect(() => {
    const url = debouncedValue
      ? `${location.pathname}?s=${debouncedValue}`
      : location.pathname;

    router.push(url);
  }, [value, debouncedValue, router]);

  return (
    <form className='flex items-center bg-neutral-800 rounded-md shadow transition border border-transparent group [&:has(input:focus-visible)]:border-neutral-500 mt-4'>
      <label
        htmlFor='song-query'
        className='p-2 md:p-4 text-neutral-500 group-[&:has(input:focus-visible)]:text-white transition-colors'>
        <PiMagnifyingGlass size={20} />
      </label>
      <input
        onChange={(e) => setValue(e.target.value)}
        type='text'
        name='song-query'
        id='song-query'
        placeholder='What do you want to search for?'
        autoFocus
        className='bg-transparent w-full placeholder:text-neutral-500 md:py-3 py-2 outline-none text-sm md:text-base'
      />
    </form>
  );
};

export default SearchElement;
