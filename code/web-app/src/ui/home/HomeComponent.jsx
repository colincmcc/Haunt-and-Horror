import React, { Component } from 'react';
import styled from 'styled-components';
import shortid from 'shortid';
import {
  HomePostComponent, Header, PageWrapper, LoadingComponent, ErrorComponent,
} from '../components';


class HomeComponent extends Component {
  render() {
    const { loading, error, posts } = this.props

    if (error) return <ErrorComponent />;
    if (loading) return <LoadingComponent large />;

    return (
      <PageWrapper>
        <Header />
        {posts.map(post => (
        <HomePostComponent key={shortid.generate()} {...post} />
        ))}
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
const HomeContent = styled.div`
height: 100vh;

`;
