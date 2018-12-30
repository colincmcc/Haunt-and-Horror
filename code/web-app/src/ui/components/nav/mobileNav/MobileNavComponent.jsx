import React from 'react';
import styled from 'styled-components';
import { withRouter, Link } from 'react-router-dom';
import shortid from 'shortid';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import { withStyles } from '@material-ui/core/styles';

import {
  IconBars, IconEnvelope, IconHaunt, IconVhs,
} from '../../../../assets';
import theme from '../../../../assets/theme';


const MobileNavComponent = (props) => {
  const { navIsShown, location, classes } = props;
  const currentPath = location.pathname;
  const bottomNavItems = [
    {
      link: '/',
      text: 'Home',
      slug: 'home',
      icon: <IconHaunt width="24px" height="24px" />,
    },
    {
      link: '/Movies',
      text: 'Movies',
      slug: 'movies',
      icon: <IconVhs width="24px" height="24px" />,
    },
    {
      link: '/Contact',
      text: 'Contact',
      slug: 'contact',
      icon: <IconEnvelope width="24px" height="24px" />,
    },
    {
      link: { pathname: '#Menu', state: { modal: true } },
      text: 'Menu',
      slug: 'menu',
      icon: <IconBars width="24px" height="24px" />,
    },
  ];

  return (
    <NavWrapper className={navIsShown ? ' ' : 'hide '}>
      <BottomNavigation
        value={currentPath.substr(0, 4)}
        classes={{ root: classes.bottomNavRoot }}
      >
        {bottomNavItems.map(navItem => (
          <BottomNavigationAction
            key={shortid.generate()}
            value={
              navItem.slug !== 'menu' ? navItem.link.substr(0, 4) : navItem.slug
            }
            label={navItem.text}
            icon={navItem.icon}
            component={Link}
            to={navItem.link}
            classes={{
              root: classes.bottomActionRoot,
              selected: classes.bottomActionSelected,
            }}
          />
        ))}
      </BottomNavigation>
    </NavWrapper>
  );
};

export default withStyles(theme.materialUI)(withRouter(MobileNavComponent));

// STYLED COMPONENTS
const NavWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 56px;
  z-index: 100;
  position: fixed;
  left: 0;
  bottom: 0;
  justify-content: center;
  background-color: ${props => props.theme.colors.blackTheme};
  border-top: 2px solid ${props => props.theme.colors.tealTheme};
  transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);
  &.hide {
    transform: translate3d(0, 100%, 0);
  }
  &.slide {
    transform: translate3d(-100%, 0, 0);
    transition: transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  }

  ${props => props.theme.media.tablet_landscape_up`
    display: none;
    visibility: hidden;
  `};
`;
const NavIcon = styled.img`

`;
