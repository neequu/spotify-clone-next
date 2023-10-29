import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { Database } from '@/types/supabase';
import { cookies } from 'next/headers';

import HeaderNavButton from './buttons/HeaderNavButton';
import ProfileButton from './buttons/ProfileButton';
import LoginPanel from './auth/LoginPanel';

const TheHeader = async () => {
  const cookieStore = cookies();
  const supabase = createServerComponentClient<Database>({
    cookies: () => cookieStore,
  });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const user = session?.user;

  return (
    <header className='absolute left-0 right-0 top-0 z-50 p-2 md:p-4'>
      <div className='flex items-center justify-end md:justify-between'>
        <div className='hidden gap-2 md:flex'>
          <HeaderNavButton />
          <HeaderNavButton forward={true} />
        </div>
        {user ? <ProfileButton user={user} /> : <LoginPanel />}
      </div>
    </header>
  );
};

export default TheHeader;
