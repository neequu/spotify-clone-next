'use client';
import { submitSong } from '@/app/actions';
import Input from '../Input';
import SubmitButton from '../buttons/SubmitButton';
import { useFormState } from 'react-dom';
import { useEffect } from 'react';

const UploadForm = ({
  handleChange,
}: {
  handleChange: (a: boolean) => void;
}) => {
  const [state, formAction] = useFormState(submitSong, null);

  useEffect(() => {
    if (state?.message === 'success') {
      const open = false;
      handleChange(open);
    }
  }, [state]);

  return (
    <form action={formAction} className='grid gap-y-3 text-xs md:text-sm'>
      <Input id='title' name='title' placeholder='Song title' />
      <Input id='artist' name='artist' placeholder='Song artist' />
      <div>
        <p className='mb-1 text-sm'>Select an audio file</p>
        <Input
          id='song'
          name='song'
          type='file'
          accept='audio/mpeg,audio/wav,audio/ogg'
          className='[&::file-selector-button]:hidden'
        />
      </div>
      <div>
        <p className='mb-1 text-sm'>Select an image file</p>
        <Input
          id='image'
          type='file'
          name='image'
          accept='image/jpeg,image/png,image/svg+xml'
          className='[&::file-selector-button]:hidden'
        />
      </div>
      <div className='mt-3'>
        <SubmitButton />
      </div>
    </form>
  );
};

export default UploadForm;
