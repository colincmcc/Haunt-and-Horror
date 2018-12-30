import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import PostDetailComponent from './PostDetailComponent';


const POST_DETAIL = gql`
 query SelectedPost($id: Int!)  {
selectedPost: postsById(id: $id ) {
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

const PostDetailContainer = (props) => {
   const { id } = props.match.params
   console.log(id)
   console.log(props)
 return (
 <Query query={POST_DETAIL} variables={{id: id}} >
    {
        ({ loading, error, data }) => <PostDetailComponent loading={loading} error={error} {...data} />
      }
  </Query>
 )
};

export default PostDetailContainer;
