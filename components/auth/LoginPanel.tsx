'use client';
import useAuthModal from '@/hooks/useAuthModal';

const LoginPanel = () => {
  const AuthModal = useAuthModal();

  return (
    <div className='flex items-center gap-3 md:gap-4 self-end'>
      <button type='button' className='' onClick={AuthModal.onOpen}>
        Sign in
      </button>
      <button
        onClick={AuthModal.onOpen}
        type='button'
        className='bg-white text-black px-4 py-1 rounded-full'>
        Sign up
      </button>
    </div>
  );
};

export default LoginPanel;
