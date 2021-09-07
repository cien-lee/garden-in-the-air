import React from 'react';
import { styled } from 'linaria/react';
import { css } from 'linaria';

interface ButtonProps {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** What background color to use */
  backgroundColor?: string;
  /**  How large should the button be? */
  size?: 'small' | 'medium' | 'large';
  /** Button contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
const Button = ({ primary = false, size = 'medium', backgroundColor, label, ...props }: ButtonProps) => {
  return (
    <ButtonStyle type="button" style={{ backgroundColor }} {...props}>
      {label}
    </ButtonStyle>
  );
};

const ButtonStyle = styled.button`
  padding: 0 24px;
  height: 54px;

  font-size: 16px;
  background-color: aliceblue;
`;

export default Button;
