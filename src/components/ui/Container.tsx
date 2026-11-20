import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  as: Component = 'div',
}) => {
  return (
    <Component className={`mx-auto w-full max-w-[1400px] px-6 sm:px-8 lg:px-12 ${className}`}>
      {children}
    </Component>
  );
};
