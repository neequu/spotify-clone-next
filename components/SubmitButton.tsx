'use client';
import {
  // ts-ignore because experimental_useFormStatus is not in the types
  // @ts-ignore
  experimental_useFormStatus as useFormStatus,
  useFormState,
} from 'react-dom';

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type='submit'
      aria-disabled={pending}
      disabled={pending}
      className='
            w-full 
            rounded-md
            border
            border-transparent
            disabled:cursor-not-allowed 
            disabled:opacity-50
            py-1
            hover:bg-accent2-dark
            transition-colors
            bg-accent2
            text-sm
          '>
      {pending ? 'pending' : 'eh'}
      Upload songs
    </button>
  );
}
