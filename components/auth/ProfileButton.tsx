'use client';

import { PiUserCircle } from 'react-icons/pi';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Database } from '@/types/supabase';

const ProfileButton = () => {
  const router = useRouter();
  const supabaseClient = createClientComponentClient<Database>();
  const handleSignOut = async () => {
    const { error } = await supabaseClient.auth.signOut();
    router.refresh();

    // todo: reset playing song

    if (error) {
      console.log(error);
      toast.error(error.message);
    } else {
      toast.success('Signed Out!');
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
