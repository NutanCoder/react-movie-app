import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { fetchMovieById, fetchSimilarMovieById } from '../services/movie_api';
import MovieCard from '../components/movie_card';

function MovieDetailPage() {

  const [movie, setMovie] = useState({});
  const [similarMovies, setSimilarMovies] = useState([]);

  const params = useParams();
  const movieId = params.mId;

  const getMovie = async () => {
    const result = await fetchMovieById(movieId);
    setMovie(result);
  };

  const getSimilarMovie = async () => {
    const result = await fetchSimilarMovieById(movieId);
    setSimilarMovies(result);
  };

  useEffect(() => {
    getMovie();
    getSimilarMovie();
  }, []);

  return (
    <>
      <center>
        <p>{movie['title']}</p>
        <p>{movie['tagline']}</p>
      </center>
      <h1 className='my-4'>Similar Movies</h1>
      <div className="row">
        {
          similarMovies.map((similarMovie) => {
            return <MovieCard data={similarMovie} key={similarMovie['id']} />
          })
        }
      </div>
    </>
  );
}

export default MovieDetailPage;