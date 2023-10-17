import HeaderNavButton from './HeaderNavButton';

import ProfileButton from './auth/ProfileButton';
import LoginPanel from './auth/LoginPanel';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { Database } from '@/types/supabase';

export const dynamic = 'force-dynamic';

const TheHeader = async () => {
  const supabase = createServerComponentClient<Database>({ cookies });
  const {
    data: { session },
    error,
  } = await supabase.auth.getSession();
  const user = session?.user;

  return (
    <header className='p-layout-p'>
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
