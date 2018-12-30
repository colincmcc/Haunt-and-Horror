import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import HomeComponent from './HomeComponent';


const HOME_PAGE = gql`
  {
    posts: postByMeta(metaType: "status", metaValue: "publish") {
    id
    title {
      rendered
    }
    content {
      rendered
    }
    author
    featured_image {
      media_details {
        sizes {
          thumbnail {
            source_url
          }
          medium {
            source_url
          }
          medium_large {
            source_url
          }
          large {
            source_url
          }
          full {
            source_url
          }
        }
      }
    }
  }
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
