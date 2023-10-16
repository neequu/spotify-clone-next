import HeaderNavButton from './HeaderNavButton';

import ProfileButton from './auth/ProfileButton';
import LoginPanel from './auth/LoginPanel';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

const TheHeader = async () => {
  const supabase = createServerComponentClient({ cookies });
  const { data, error } = await supabase.auth.getSession();
  const user = data.session?.user;

  return (
    <header className='p-layout-p font-medium'>
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
