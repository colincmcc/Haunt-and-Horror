import React from 'react';
import styled from 'styled-components';
import AutoSizer from 'react-virtualized-auto-sizer';
import { Header } from '../components';
import MovieCard from '../components/movie/MovieCard';

function MovieListComponent(props) {
  const { movies, index } = props;

  const items = [];


  return (
    <div>
      <Header title="Movies" small />
      <MovieWrapper>
        <MovieCard />
        <MovieCard />

        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />

        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />

        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />

        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </MovieWrapper>
    </div>
  );
}

export default MovieListComponent;
const MovieWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 4px 8px

`;
