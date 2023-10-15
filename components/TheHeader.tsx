'use client';
import { useState } from 'react';
import HeaderNavButton from './HeaderNavButton';
import { PiUserCircle } from 'react-icons/pi';
import useAuthModal from '@/hooks/useAuthModal';
import { useRouter } from 'next/navigation';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { useUser } from '@/hooks/useUser';

const TheHeader = () => {
  const AuthModal = useAuthModal();
  const router = useRouter();
  const supabaseClient = useSupabaseClient();
  const { user } = useUser();

  const handleSignOut = async () => {
    const { error } = await supabaseClient.auth.signOut();
    router.refresh();

    // todo: reset playing song

    if (error) {
      console.log(error);
    }
  };

  return (
    <header className='p-layout-p font-medium'>
      <div className='flex items-center md:justify-between justify-end'>
        <div className='hidden md:flex gap-2'>
          <HeaderNavButton />
          <HeaderNavButton forward={true} />
        </div>
        {user ? (
          <button type='button' className='py-1' onClick={handleSignOut}>
            <PiUserCircle size={24} />
          </button>
        ) : (
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
        )}
      </div>
    </header>
  );
};

export default TheHeader;
