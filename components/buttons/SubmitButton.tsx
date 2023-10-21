'use client';

export default function SubmitButton() {
  return (
    <button
      type='submit'
      aria-label='upload song'
      aria-disabled={false}
      disabled={false}
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
      {false ? 'Uploading...' : 'Upload songs'}
    </button>
  );
}
