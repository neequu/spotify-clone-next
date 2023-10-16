'use client';

import Modal from '../Modal';
import useAuthModal from '@/hooks/useAuthModal';
import AuthForm from '../form/AuthForm';

const AuthModal = () => {
  const { isOpen, onClose } = useAuthModal();

  const handleChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };

  return (
    <Modal
      title='Welcome'
      description='Sign in for full access to the app'
      isOpen={isOpen}
      onChange={() => handleChange(false)}>
      <AuthForm />
      {/* <Auth
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
      /> */}
    </Modal>
  );
};

export default AuthModal;
