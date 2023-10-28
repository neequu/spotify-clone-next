'use client';
import { submitSong } from '@/app/actions';
import Input from '../Input';
import SubmitButton from '../buttons/SubmitButton';
import useUploadModal from '@/hooks/useUploadModal';

const UploadForm = ({
  handleChange,
}: {
  handleChange: (a: boolean) => void;
}) => {
  const uploadModal = useUploadModal();

  return (
    <form
      onSubmit={() => {
        handleChange(false);
        uploadModal.onClose();
      }}
      action={submitSong}
      className='grid gap-y-3 md:text-sm text-xs'>
      <Input id='title' name='title' placeholder='Song title' />
      <Input id='artist' name='artist' placeholder='Song artist' />
      <div>
        <p className='text-sm mb-1'>Select an audio file</p>
        <Input
          id='song'
          name='song'
          type='file'
          accept='audio/mpeg,audio/wav,audio/ogg'
          className='[&::file-selector-button]:hidden'
        />
      </div>
      <div>
        <p className='text-sm mb-1'>Select an image file</p>
        <Input
          id='image'
          type='file'
          name='image'
          accept='image/jpeg,image/png,image/svg+xml'
          className='[&::file-selector-button]:hidden'
        />
      </div>
      <div className='mt-3'>
        <SubmitButton handleChange={handleChange} />
      </div>
    </form>
  );
};

export default UploadForm;
