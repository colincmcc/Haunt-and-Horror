import React from 'react';
import { Query } from 'react-apollo';
import styled from 'styled-components';
import gql from 'graphql-tag';
import LoadingComponent from '../../loading/LoadingComponent';
import ErrorComponent from '../../loading/ErrorComponent';
import MobileMenuComponent from './MobileMenuComponent';

const WP_HOME = gql`
  {
    mobileMenuOpen @client
  }
`;
const MobileMenuContainer = () => {
  const mobileNavItems = [
    {
      link: '/',
      text: 'Home',
      slug: 'home',
      icon: <NavIcon src="../../../../assets/img/icon-haunt.svg" />,
    },
    {
      link: '/Contact',
      text: 'Contact',
      slug: 'contact',
      icon: <NavIcon src="../../../../assets/img/icon-envelope-regular.svg" />,
    },
    {
      link: { pathname: '#Menu', state: { modal: true } },
      text: 'Menu',
      slug: 'menu',
      icon: <NavIcon src="../../../../assets/img/icon-bars-solid.svg" />,
    },
  ];
  return (
    <Query query={WP_HOME}>
      {
      ({
        data, loading, error, client,
      }) => {
        if (loading) return <LoadingComponent />;
        if (error) return <ErrorComponent />;

        return (
          <MobileMenuComponent
            client={client}
            isOpen={data.mobileMenuOpen}
            navItems={mobileNavItems}
          />
        );
      }
    }
    </Query>
  );
};

export default MobileMenuContainer;

const NavIcon = styled.img`

`;
