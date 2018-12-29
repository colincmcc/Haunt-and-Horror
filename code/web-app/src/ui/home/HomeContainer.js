import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import HomeComponent from './HomeComponent';


const HOME_PAGE = gql`
  {
   isConnected  @client
  }
`;

const HomeContainer = () => (

  <Query query={HOME_PAGE}>
    {
        ({ loading, error, data }) => <HomeComponent loading={loading} error={error} {...data} />
      }
  </Query>
);

export default HomeContainer;
