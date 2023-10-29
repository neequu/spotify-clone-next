'use client';
import { CircleDashed } from 'lucide-react';
import { useFormStatus } from 'react-dom';

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type='submit'
      aria-label='upload song'
      aria-disabled={pending}
      disabled={pending}
      className='
            w-full 
            rounded-md
            border
            font-light
            border-transparent
            disabled:cursor-not-allowed 
            disabled:bg-gray-500
            md:py-2
            py-[2px]
            hover:bg-accent2-dark
            transition-colors
            bg-accent2
            text-sm
          '>
      <span className='flex justify-center items-center overflow-hidden'>
        {pending ? (
          <CircleDashed className='animate-spin h-5' />
        ) : (
          'Upload song'
        )}
      </span>
    </button>
  );
}
