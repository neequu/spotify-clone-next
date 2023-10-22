'use client';
import {
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { UserCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import {
  User,
  createClientComponentClient,
} from '@supabase/auth-helpers-nextjs';
import { Database } from '@/types/supabase';
import Image from 'next/image';
import usePlayer from '@/hooks/usePlayer';
import { DropdownMenu } from '../ui/dropdown-menu';

const ProfileButton = ({ user }: { user: User }) => {
  const router = useRouter();
  const supabaseClient = createClientComponentClient<Database>();

  const player = usePlayer();
  const handleSignOut = async () => {
    const { error } = await supabaseClient.auth.signOut();
    router.refresh();
    // todo: reset playing song
    player.reset();

    if (error) {
      console.log(error);
      toast.error(error.message);
    } else {
      toast.success('Signed Out!');
    }
  };
  return (
    <button
      aria-label='show drpodown menu'
      type='button'
      className='w-7 aspect-square relative rounded-full overflow-hidden'>
      {user?.user_metadata?.avatar_url ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Image
              src={`${user.user_metadata.avatar_url}`}
              alt='user image'
              fill
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent className='w-56'>
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem onClick={handleSignOut}>
              Sign Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <UserCircle strokeWidth={1.5} />
      )}
    </button>
  );
};

export default ProfileButton;
