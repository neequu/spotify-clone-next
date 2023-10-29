'use client';
import useAuthModal from '@/hooks/useAuthModal';
import { Lock } from 'lucide-react';

const LoginPanel = () => {
  const AuthModal = useAuthModal();

  return (
    <div className='flex items-center gap-3 md:gap-4 self-end font-bold'>
      <div className='hidden md:flex items-center gap-3 md:gap-4 self-end font-bold'>
        <button
          aria-label='sign in'
          onClick={AuthModal.onOpen}
          type='button'
          className='bg-white text-black  hover:bg-accent transition-colors px-4 py-1 rounded-full'>
          Sign In
        </button>
      </div>
      <button
        aria-label='login or sign up'
        onClick={AuthModal.onOpen}
        type='button'
        className='md:hidden rounded-full overflow-hidden'>
        <Lock className='w-6 h-6 bg-white text-black p-1' />
      </button>
    </div>
  );
};

export default LoginPanel;
