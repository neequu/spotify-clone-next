import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, disabled, type = 'button', ...props }, ref) => {
    return (
      <button
        type={type}
        className={twMerge(
          `
        w-full 
        rounded-md
        border
        border-transparent
        disabled:cursor-not-allowed 
        disabled:opacity-50
        py-1
        hover:bg-accent2-dark
        transition-colors
        bg-accent2
        text-sm
      `,
          disabled && 'opacity-75 cursor-not-allowed',
          className
        )}
        disabled={disabled}
        ref={ref}
        {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
