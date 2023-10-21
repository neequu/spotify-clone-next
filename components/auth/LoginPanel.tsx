'use client';
import useAuthModal from '@/hooks/useAuthModal';
import { BiLockAlt } from 'react-icons/bi';

const LoginPanel = () => {
  const AuthModal = useAuthModal();

  return (
    <div className='flex items-center gap-3 md:gap-4 self-end font-bold'>
      <div className='hidden md:flex items-center gap-3 md:gap-4 self-end font-bold'>
        <button
          aria-label='login'
          type='button'
          className='hover:text-neutral-300 transition-colors'
          onClick={AuthModal.onOpen}>
          Sign in
        </button>
        <button
          aria-label='sign up'
          onClick={AuthModal.onOpen}
          type='button'
          className='bg-white text-black  hover:bg-accent transition-colors px-4 py-1 rounded-full'>
          Sign up
        </button>
      </div>
      <button
        aria-label='login or sign up'
        onClick={AuthModal.onOpen}
        type='button'
        className='bg-white text-black p-[2px] rounded-full text-xl md:hidden'>
        <BiLockAlt />
      </button>
    </div>
  );
};

export default LoginPanel;
