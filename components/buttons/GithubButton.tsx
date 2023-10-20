'use client';
import { RiGithubFill } from 'react-icons/ri';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Database } from '@/types/supabase';

const GithubButton = () => {
  async function auth() {
    const supabase = createClientComponentClient<Database>();

    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: `${location.origin}/api/auth/callback`,
      },
    });
  }

  return (
    <button
      onClick={auth}
      type='submit'
      className='flex text-sm gap-2 justify-center items-center w-full bg-neutral-900 hover:bg-opacity-60 transition-colors py-2 rounded-sm'>
      <RiGithubFill size={22} />
      Sign in with Github
    </button>
  );
};

export default GithubButton;
