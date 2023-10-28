import { useFormStatus } from "react-dom";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  type?: string;
  required?: boolean;
}
const Input = ({
  className,
  type = "text",
  disabled,
  required = true,
  ...props
}: InputProps) => {
  const { pending } = useFormStatus();
  return (
    <input
      type={type}
      className={`flex w-full rounded-md border border-transparent bg-neutral-700 px-1 py-[2px] outline-none placeholder:text-neutral-400 focus:border-neutral-600 disabled:cursor-not-allowed  disabled:opacity-50 md:p-1.5 ${className}`}
      disabled={pending}
      required={required}
      {...props}
    />
  );
};

export default Input;
