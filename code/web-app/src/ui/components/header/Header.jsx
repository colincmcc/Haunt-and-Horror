import React from 'react';
import ReactSVG from 'react-svg';
import styled from 'styled-components';
import grain from '../../../assets/img/bg-grain2.png';
import logo from '../../../assets/img/haunt-logo.svg';

function Header() {
  return (
    <HeaderWrapper grain={grain}>
      <Logo src={logo} alt="logo" />
      <ReactSVG src="../../../assets/img/haunt-logo.svg" />
    </HeaderWrapper>
  );
}

export default Header;

const HeaderWrapper = styled.section`
width: 100%;
height: 100vh;
background-color: ${props => props.theme.colors.theme};
&:before {
    content: "";
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-image:  url(${grain});
    background-size: cover;
  }
`;
const Logo = styled.img`
  position: absolute;
  top: 0;
  left: 0;
`;
