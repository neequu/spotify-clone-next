import Input from '../Input';
import SubmitButton from '../SubmitButton';

const UploadForm = () => {
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
        <SubmitButton />
      </div>
    </form>
  );
};

export default UploadForm;
