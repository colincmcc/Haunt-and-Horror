import React from 'react';
import styled from 'styled-components';
import grain from '../../../assets/img/bg-grain2.png';
import { HauntLogo } from '../../../assets/img/haunt-logo';

function Header(props) {
  const { small } = props;
  console.log(small);
  return (
    <HeaderWrapper isSmall={small} grain={grain}>
      <Logo isSmall={small}>
        <HauntLogo viewbox="0 0 1200 1200" alt="logo" />
      </Logo>
    </HeaderWrapper>
  );
}

export default Header;

const HeaderWrapper = styled.section`
width: 100vw;
height: ${props => (props.isSmall ? '25vh' : '100vh')};
background-color: ${props => props.theme.colors.theme};
&:before {
    content: "";
    width: 100%;
    height: ${props => (props.isSmall ? '25vh' : '100vh')};
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-image:  url(${grain});
    background-size: cover;
  }
`;
const Logo = styled.div`
  display: ${props => (props.isSmall ? 'none' : 'block')};
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;


`;
