import React, { Component } from 'react';
import { ApolloProvider, Query } from 'react-apollo';
import { Switch, Route, withRouter } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import gql from 'graphql-tag';
import { persistor, apolloClient, cacheStorage } from './data/apolloClient';
import { LoadingComponent, ErrorComponent, asyncComponent } from './ui/components';
import NavContainer from './ui/components/nav/NavContainer';
import PostDetailContainer from './ui/postDetail/PostDetailContainer';
import './App.css';
import theme from './assets/theme';

require('dotenv').config();


// const AsyncDashboard = asyncComponent(() => import('./ui/dashboard/DashboardComponent'));
const AsyncHome = asyncComponent(() => import('./ui/home/HomeContainer'));
const AsyncMovies = asyncComponent(() => import('./ui/movies/MovieListContainer'));
const AsyncContact = asyncComponent(() => import('./ui/contact/ContactContainer'));

const AsyncMobileMenu = asyncComponent(() => import('./ui/components/nav/mobileNav/MobileMenuContainer'));

const SCHEMA_VERSION = '1';
const SCHEMA_VERSION_KEY = 'apollo-schema-version';


const CACHED_STATE = gql`
  {
    networkStatus @client {
      isConnected
    }
  }
`;

class App extends Component {
  previousLocation = this.props.location;

  constructor(props) {
    super(props);
    this.state = {
      client: null,
      loaded: false,
    };
  }

  async componentDidMount() {
    const currentVersion = await cacheStorage.getItem(SCHEMA_VERSION_KEY);
    if (currentVersion === SCHEMA_VERSION) {
      // If the current version matches the latest version,
      // we're good to go and can restore the cache.
      await persistor.restore();
    } else {
      // Otherwise, we'll want to purge the outdated persisted cache
      // and mark ourselves as having updated to the latest version.
      await persistor.purge();
      await cacheStorage.setItem(SCHEMA_VERSION_KEY, SCHEMA_VERSION);
    }

    this.setState({
      client: apolloClient,
      loaded: true,
    });
  }

  componentWillUpdate(nextProps) {
    const { location } = this.props;
    // set previousLocation if props.location is not modal
    if (
      nextProps.history.action !== 'POP'
      && (!location.state || !location.state.modal)
    ) {
      this.previousLocation = location;
    }
  }

  render() {
    const { client, loaded } = this.state;
    const { location } = this.props;

    if (!loaded) return <LoadingComponent />;

    const isModal = !!(
      location.state
      && location.state.modal
      && this.previousLocation !== location
    );
    return (
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <AppWrapper>
            <NavContainer />

            <Query query={CACHED_STATE}>
              {
            ({ loading, error }) => {
              if (loading) return <LoadingComponent />;
              if (error) return <ErrorComponent />;
              return (
                <div>
                  <Switch location={isModal ? this.previousLocation : location}>
                    <Route exact path="/" component={AsyncHome} />

                    <Route path="/Home" component={AsyncHome} />
                    <Route exact path="/Movies" component={AsyncMovies} />
                    <Route path="/Movies/:id" component={PostDetailContainer} />
                    <Route path="/Contact" component={AsyncContact} />

                  </Switch>

                  {isModal ? <Route component={AsyncMobileMenu} path="/:section*/#Menu" /> : null}
                </div>
              );
            }
            }

            </Query>
          </AppWrapper>
        </ThemeProvider>
      </ApolloProvider>
    );
  }
}

export default withRouter(App);
const AppWrapper = styled.div`
overflow: hidden;
background-color: ${props => props.theme.colors.whiteTheme};
min-width: 350px;
`;
