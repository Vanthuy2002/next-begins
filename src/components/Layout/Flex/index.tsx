import React from 'react';

interface FlexBoxProps {
  children: React.ReactNode;
  className?: string;
}

const Flexbox = ({ children, className = '' }: FlexBoxProps) => {
  return <div className={`flex items-center ${className}`}>{children}</div>;
};

export default Flexbox;
