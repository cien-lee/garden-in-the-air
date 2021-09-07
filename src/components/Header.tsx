import React from 'react';
import { styled } from 'linaria/react';

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  return (
    <HeaderStyle>
      <p>header</p>
    </HeaderStyle>
  );
};

const HeaderStyle = styled.header`
  padding: 0 24px;
  height: 54px;

  font-size: 16px;
  background-color: aliceblue;
`;

export default Header;
