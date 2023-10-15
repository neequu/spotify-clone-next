import * as Dialog from '@radix-ui/react-dialog';
import { PiXBold } from 'react-icons/pi';

interface ModalProps {
  isOpen: boolean;
  onChange: (open: boolean) => void;
  title: string;
  description: string;
  children: React.ReactNode;
}

const Modal = ({
  isOpen,
  onChange,
  title,
  description,
  children,
}: ModalProps) => {
  return (
    <Dialog.Root open={isOpen} defaultOpen={isOpen} onOpenChange={onChange}>
      <Dialog.Portal>
        <Dialog.Overlay className='bg-neutral-900/90 backdrop-blur-sm fixed inset-0 grid place-content-center'>
          <Dialog.Content className='drop-shadow-md bg-neutral-800 border border-neutral-700 rounded-md outline-none md:place-content-center md:max-w-[450px] p-6 relative w-screen'>
            <Dialog.Title className='text-center text-xl mb-2'>
              {title}
            </Dialog.Title>
            <Dialog.Description className='border-b text-neutral-400 border-neutral-700 pb-4 mb-4 text-center text-sm'>
              {description}
            </Dialog.Description>
            <div>{children}</div>
            <Dialog.Close asChild>
              <button
                type='button'
                className='text-neutral-400 hover:text-neutral-500 transition-colors absolute top-2 right-2'>
                <PiXBold size={20} />
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;
