import { useFormStatus } from 'react-dom';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  type?: string;
  required?: boolean;
}
const Input = ({
  className,
  type = 'text',
  disabled,
  required = true,
  ...props
}: InputProps) => {
  const { pending } = useFormStatus();
  return (
    <input
      type={type}
      className={`flex w-full rounded-md bg-neutral-700 md:p-1.5 px-1 py-[2px] placeholder:text-neutral-400 outline-none border-transparent border focus:border-neutral-600  disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      disabled={pending}
      required={required}
      {...props}
    />
  );
};

export default Input;
