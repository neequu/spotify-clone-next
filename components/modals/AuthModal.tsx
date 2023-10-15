'use client';

import {
  useSessionContext,
  useSupabaseClient,
} from '@supabase/auth-helpers-react';
import Modal from '../Modal';
import { useRouter } from 'next/navigation';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import useAuthModal from '@/hooks/useAuthModal';

const AuthModal = () => {
  const supabaseClient = useSupabaseClient();
  const route = useRouter();
  const { session } = useSessionContext();
  const { isOpen, onClose } = useAuthModal();

  const handleChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };

  return (
    <Modal
      title='Welcome back'
      description='Login'
      isOpen={isOpen}
      onChange={() => handleChange(false)}>
      <Auth
        theme='dark'
        providers={['github']}
        magicLink
        supabaseClient={supabaseClient}
        appearance={{
          theme: ThemeSupa,
          variables: {
            default: {
              colors: {
                brand: '#282828',
                brandAccent: '#333',
              },
            },
          },
        }}
      />
    </Modal>
  );
};

export default AuthModal;
