'use client';
import useAuthModal from '@/hooks/useAuthModal';

const LoginPanel = () => {
  const AuthModal = useAuthModal();

  return (
    <div className='flex items-center gap-3 md:gap-4 self-end'>
      <button
        type='button'
        className='hover:text-neutral-300 transition-colors'
        onClick={AuthModal.onOpen}>
        Sign in
      </button>
      <button
        onClick={AuthModal.onOpen}
        type='button'
        className='bg-white text-black  hover:bg-accent transition-colors px-4 py-1 rounded-full'>
        Sign up
      </button>
    </div>
  );
};

export default LoginPanel;
