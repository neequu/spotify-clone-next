// 'use client';
import useUploadModal from '@/hooks/useUploadModal';

import Modal from './Modal';
import UploadForm from '../form/UploadForm';

const UploadModal = () => {
  const uploadModal = useUploadModal();

  const handleChange = (open: boolean) => {
    if (!open) {
      uploadModal.onClose();
    }
  };
  return (
    <Modal
      title='Upload your song'
      description='You can add a song and a cover'
      isOpen={uploadModal.isOpen}
      onChange={handleChange}>
      <UploadForm />
    </Modal>
  );
};

export default UploadModal;
