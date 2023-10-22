'use client';
import useDebounce from '@/hooks/useDebounce';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Search, CircleDashed } from 'lucide-react';

const SearchElement = ({
  query,
  resultsLength,
}: {
  query: string;
  resultsLength: number | undefined;
}) => {
  const router = useRouter();
  const [value, setValue] = useState(query);
  const debouncedValue = useDebounce(value);

  useEffect(() => {
    const url = debouncedValue
      ? `${location.pathname}?s=${debouncedValue}`
      : location.pathname;

    router.push(url);
  }, [value, debouncedValue, router]);

  const typing = value !== debouncedValue;

  return (
    <>
      <form className='flex items-center bg-neutral-800 rounded-md shadow transition border border-transparent group [&:has(input:focus-visible)]:border-neutral-500 mt-4 pr-4'>
        <label
          htmlFor='song-query'
          className='px-2 md:px-4 text-neutral-500 group-[&:has(input:focus-visible)]:text-white transition-colors'>
          <Search className='w-5 aspect-square md:w-6' strokeWidth='1.5' />
        </label>
        <input
          onChange={(e) => setValue(e.target.value)}
          type='text'
          name='song-query'
          id='song-query'
          placeholder='What do you want to search for?'
          autoFocus
          className='bg-transparent w-full placeholder:text-neutral-500 md:py-3 py-[9px] outline-none text-sm md:text-base'
        />
        <div className='text-2xl  text-neutral-400 w-10 flex justify-end'>
          {typing ? <CircleDashed className='w-5  md:w-6 animate-spin' /> : ''}
        </div>
      </form>
      <p className='mt-4 text-red-500'>
        {resultsLength === 0 ? 'no results' : ''}
      </p>
    </>
  );
};

export default SearchElement;
