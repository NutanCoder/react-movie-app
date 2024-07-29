import React, { useEffect, useState } from 'react'
import { fetchTrendingMovie } from '../services/trending_api';
import MovieCard from '../components/movie_card';
import LoadingCard from '../components/loading_card';

function TrendingMoviePage() {

  const [movies, setMovies] = useState([]);
  const [isMovieLoading, setisMovieLoading] = useState(true);

  const getTrendingMovies = async () => {
    const result = await fetchTrendingMovie();
    setisMovieLoading(false);
    setMovies(result);
  };

  useEffect(() => {
    getTrendingMovies();
  }, [])

  return (
    <div className='container'>
      <h1 className='my-4'>Trending Movies</h1>
      <div className="row">
        {
          isMovieLoading
            ? [1, 2, 3, 4, 5, 6].map((e) => {
              return <LoadingCard key={e} />
            })
            : movies.map((movie) => {
              return <MovieCard data={movie} key={movie['id']} />
            })
        }
      </div>
    </div>
  )
}

export default TrendingMoviePage;