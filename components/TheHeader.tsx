import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { Database } from '@/types/supabase';
import { cookies } from 'next/headers';

import HeaderNavButton from './buttons/HeaderNavButton';
import ProfileButton from './buttons/ProfileButton';
import LoginPanel from './auth/LoginPanel';

export const dynamic = 'force-dynamic';

const TheHeader = async () => {
  const supabase = createServerComponentClient<Database>({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const user = session?.user;

  return (
    <header className='p-layout-p fixed right-0 left-0 lg:left-[323px] md:left-[266px] md:top-0 z-50'>
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
