import Input from '../Input';

const UploadForm = () => {
  const disabled = false;
  return (
    <form
      encType='multipart/form-data'
      action='/api/upload-song'
      method='post'
      className='grid gap-y-3'>
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
        <button
          type='submit'
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
        '
          disabled={disabled}>
          Upload songs
        </button>
      </div>
    </form>
  );
};

export default UploadForm;
