import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { Database } from '@/types/supabase';
import { cookies } from 'next/headers';

import HeaderNavButton from './HeaderNavButton';
import ProfileButton from './auth/ProfileButton';
import LoginPanel from './auth/LoginPanel';

export const dynamic = 'force-dynamic';

const TheHeader = async () => {
  const supabase = createServerComponentClient<Database>({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const user = session?.user;

  return (
    <header className='p-layout-p md:sticky md:top-0 bg-gray-main z-50'>
      <div className='flex items-center md:justify-between justify-end'>
        <div className='hidden md:flex gap-2'>
          <HeaderNavButton />
          <HeaderNavButton forward={true} />
        </div>
        {user ? <ProfileButton /> : <LoginPanel />}
      </div>
    </header>
  );
};

export default TheHeader;
