import React from 'react';
import styled from 'styled-components';
import { Header } from '../components';
import PostDetailComponent from '../postDetail/PostDetailComponent';

function MovieListComponent() {
  return (
    <div>
      <Header small />
      <PostDetailComponent />
    </div>
  );
}

export default MovieListComponent;
