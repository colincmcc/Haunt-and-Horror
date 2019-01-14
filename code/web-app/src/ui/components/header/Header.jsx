import React from 'react';
import styled from 'styled-components';
import grain from '../../../assets/img/bg-grain-strip.png';
import { HauntLogo } from '../../../assets/img/haunt-logo';

function Header(props) {
  const { small, title } = props;
  console.log(small);
  return (
    <HeaderWrapper isSmall={small} grain={grain}>
      <Logo isSmall={small}>
        <HauntLogo viewbox="0 0 1200 1200" alt="logo" />
      </Logo>
      <Title isSmall={small}>
        {title || ''}
      </Title>
      <Title className="skewed" isSmall={small}>
        {title || ''}
      </Title>
    </HeaderWrapper>
  );
}

export default Header;

const HeaderWrapper = styled.section`
width: 100vw;
height: ${props => (props.isSmall ? '56px' : '100vh')};
background-color: ${props => props.theme.colors.theme};
position: relative;
&:before {
    content: "";
    width: 100%;
    height: ${props => (props.isSmall ? '56px' : '100vh')};
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-image:  url(${grain});
    background-repeat: repeat-x;
    background-attachment: fixed;

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
const Title = styled.div`
  display: ${props => (props.isSmall ? 'block' : 'none')};
  ${props => props.theme.fontStyles.subHeading};

  position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    font-family: "Lower-WestSide";
    color: ${props => props.theme.colors.pinkTheme};

    &.skewed {
      transform: translate(-47%, -44%);
      color: ${props => props.theme.colors.tealTheme};

    }

`;
