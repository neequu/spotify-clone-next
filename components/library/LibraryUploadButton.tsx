'use client';
import useAuthModal from '@/hooks/useAuthModal';
import useUploadModal from '@/hooks/useUploadModal';
import { User } from '@supabase/auth-helpers-nextjs';
import { PiPlus } from 'react-icons/pi';

interface LibraryUploadButtonProps {
  user: User | undefined;
}

const LibraryUploadButton = ({ user }: LibraryUploadButtonProps) => {
  const authModal = useAuthModal();
  const uploadModal = useUploadModal();
  const handleClick = () => {
    if (!user) {
      return authModal.onOpen();
    }
    // todo: check for subscription
    return uploadModal.onOpen();
  };

  return (
    <button
      onClick={handleClick}
      type='button'
      aria-label='add song'
      className='text-neutral-400 hover:text-white transition-colors'>
      <PiPlus size={22} />
    </button>
  );
};

export default LibraryUploadButton;
