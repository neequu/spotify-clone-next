interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}
const Input = ({
  className,
  type = 'text',
  disabled,
  required = true,
  ...props
}: any) => {
  return (
    <input
      type={type}
      className={`flex w-full rounded-md bg-neutral-700 p-1.5 text-sm file:text-sm placeholder:text-neutral-400 outline-none border-transparent border focus:border-neutral-600  disabled:opacity-50 ${className}`}
      disabled={disabled}
      required={required}
      {...props}
    />
  );
};

export default Input;
