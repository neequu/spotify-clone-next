'use client';

import { PiUserCircle } from 'react-icons/pi';
import { useRouter } from 'next/navigation';
import { useSupabaseClient } from '@supabase/auth-helpers-react';

const ProfileButton = () => {
  const router = useRouter();
  const supabaseClient = useSupabaseClient();
  const handleSignOut = async () => {
    const { error } = await supabaseClient.auth.signOut();
    router.refresh();

    // todo: reset playing song

    if (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <button type='button' className='py-1' onClick={handleSignOut}>
        <PiUserCircle size={24} />
      </button>
    </div>
  );
};

export default ProfileButton;
