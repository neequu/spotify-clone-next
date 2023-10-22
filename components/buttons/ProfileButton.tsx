'use client';

import { UserCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import {
  User,
  createClientComponentClient,
} from '@supabase/auth-helpers-nextjs';
import { Database } from '@/types/supabase';
import Image from 'next/image';

const ProfileButton = ({ user }: { user: User }) => {
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
    <div
      onClick={handleSignOut}
      className='w-7 aspect-square relative rounded-full overflow-hidden'>
      {user?.user_metadata?.avatar_url ? (
        <Image src={`${user.user_metadata.avatar_url}`} alt='user image' fill />
      ) : (
        <UserCircle strokeWidth={1.5} />
      )}
    </div>
  );
};

export default ProfileButton;
