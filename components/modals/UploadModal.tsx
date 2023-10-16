'use client';

import useUploadModal from '@/hooks/useUploadModal';
import Modal from '../Modal';

const UploadModal = () => {
  const uploadModal = useUploadModal();

  const handleChange = (open: boolean) => {
    if (!open) {
      // todo: reset form
      uploadModal.onClose();
    }
  };

  return (
    <Modal
      title='Upload your song'
      description='You can add a song and a cover'
      isOpen={uploadModal.isOpen}
      onChange={handleChange}>
      <div></div>
    </Modal>
  );
};

export default UploadModal;
