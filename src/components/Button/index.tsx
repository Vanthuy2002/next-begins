import React, { ReactNode } from 'react';

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary';
}

const variantClasses = {
  primary:
    'text-white bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800',
  secondary:
    'text-white bg-green-700 hover:bg-green-800 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800',
};

const sizeClasses = {
  sm: 'text-[10px]',
  md: 'text-sm',
  lg: 'text-base',
};

const Button = (props: ButtonProps) => {
  const { children, className = '', size = 'md', variant = 'primary' } = props;
  return (
    <button
      className={`focus:ring-4 focus:outline-none focus:ring-blue-300 px-5 py-2.5 font-medium rounded-lg disabled:opacity-50 text-center ${className} ${variantClasses[variant]} ${sizeClasses[size]}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
