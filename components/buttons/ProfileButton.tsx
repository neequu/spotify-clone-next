'use client';

import { UserCircle } from 'lucide-react';
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
    <button type='button' onClick={handleSignOut} className='md:my-[1px]'>
      <UserCircle strokeWidth={1.5} />
    </button>
  );
};

export default ProfileButton;
