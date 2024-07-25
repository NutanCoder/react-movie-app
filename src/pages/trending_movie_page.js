import React, { useEffect, useState } from 'react'
import { fetchTrendingMovie } from '../services/trending_api';
import { Link } from 'react-router-dom';
import MovieCard from '../components/movie_card';

function TrendingMoviePage() {

  const [movies, setMovies] = useState([]);

  const getTrendingMovies = async () => {
    const result = await fetchTrendingMovie();
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
          movies.map((movie) => {
            return <MovieCard data={movie} key={movie['id']} />
          })
        }
      </div>
    </div>
  )
}

export default TrendingMoviePage;