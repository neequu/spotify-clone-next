'use client';

import Modal from './Modal';
import useAuthModal from '@/hooks/useAuthModal';
import AuthForm from '../form/AuthForm';
// import dynamic from 'next/dynamic'

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
    </Modal>
  );
};

export default AuthModal;
