import Input from '../Input';
import Button from '../Button';

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
        />
      </div>
      <div>
        <p className='text-sm mb-1'>Select an image file</p>
        <Input
          id='image'
          type='file'
          name='image'
          accept='image/jpeg,image/png,image/svg+xml'
        />
      </div>
      <div className='mt-3'>
        <Button type='submit'>Upload songs</Button>
      </div>
    </form>
  );
};

export default UploadForm;
