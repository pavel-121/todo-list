import React from 'react';

interface ButtonProps extends React.ComponentPropsWithRef<'button'> {
  which?: 'edit' | 'remove'
}

const Button: React.FC<ButtonProps> = ({ which, children, onClick }) => {
  const className = `todo__button todo__button-${which}`

  return (
    <button className={className} onClick={onClick} >
      {children}
    </button >
  );
};

export default Button;