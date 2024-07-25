import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { fetchCastById, fetchMovieById, fetchSimilarMovieById } from '../services/movie_api';
import MovieCard from '../components/movie_card';
import MovieDetailImage from '../components/movie_detail_image';
import CastCard from '../components/cast_card';

function MovieDetailPage() {

  const [movie, setMovie] = useState({});
  const [similarMovies, setSimilarMovies] = useState([]);
  const [castMembers, setcastMembers] = useState([]);

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

  const getMovieCastMembers = async () => {
    const result = await fetchCastById(movieId);
    setcastMembers(result);
  }

  useEffect(() => {
    getMovie();
    getSimilarMovie();
    getMovieCastMembers();
  }, [movieId]);

  const poster = movie['poster_path'];
  const banner = movie['backdrop_path'];
  const title = movie['title'];
  const overview = movie['overview'];
  const genres = movie['genres'] ?? [];

  return (
    <>
      <div className="container">
        <div className="border">
          <MovieDetailImage
            banner={banner}
            poster={poster}
            title={title}
          />
          <div className='my-4 p-4'>
            <p className='fs-4 fw-light'>
              <span className='fw-bold'>Overview:</span> {overview}
            </p>
            <div>
              <span className='fw-bold'>Genres: </span>
              {
                genres.map((e) => {
                  return (
                    <span key={e.id} className='badge text-bg-secondary me-2'>
                      {e.name}
                    </span>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h2 className='my-4'>Casting Members</h2>
        <div className="row">
          {
            castMembers.map((castmember) => {
              return <CastCard data={castmember} key={castMembers['cast_id']} />
            })
          }
        </div>
      </div>
      <div className="container">
        <h2 className='my-4'>Similar Movies</h2>
        <div className="row">
          {
            similarMovies.map((similarMovie) => {
              return <MovieCard data={similarMovie} key={similarMovie['id']} />
            })
          }
        </div>
      </div>
    </>
  );
}

export default MovieDetailPage;