import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ReactSVG from 'react-svg';
import { LoadingComponent, ErrorComponent } from '../components';
import PageWrapper from '../components/PageWrapper';
import Header from '../components/header/Header';

class HomeComponent extends Component {
  render() {
    return (
      <PageWrapper id="homePage">
        <Header />
        <HomePageOverlay id="main" />
      </PageWrapper>
    );
  }
}

export default HomeComponent;

const HomePageOverlay = styled.div`
  position: relative;

  background-color: ${props => props.theme.colors.whiteTheme};
  box-shadow: 0 0 29px 0px ${props => props.theme.colors.blackTheme};
  max-width: 1160px;
  margin: auto;
`;
