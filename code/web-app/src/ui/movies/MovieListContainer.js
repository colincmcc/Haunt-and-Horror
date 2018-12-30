import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import MovieListComponent from './MovieListComponent';

const MOVIE_PAGE = gql`
  {
    networkStatus @client {
      isConnected
    }
  }
`;
function MovieListContainer() {
  return (
    <Query query={MOVIE_PAGE}>
      {
        ({ loading, error, data }) => <MovieListComponent loading={loading} error={error} {...data} />
      }
    </Query>
  );
}

export default MovieListContainer;
