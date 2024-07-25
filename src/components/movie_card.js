import React from 'react'
import { Link } from 'react-router-dom';

function MovieCard(props) {
  const movie = props.data;
  return (
    <div className="col-md-6 col-lg-4 my-2">
      <div className='card'>
        <div className="card-header">
          <h3>{movie['title']}</h3>
        </div>
        <img src={`https://image.tmdb.org/t/p/w500${movie['poster_path']}`} alt="" className='w-100 p-4' />
        <div className="card-body">
          <p>{movie['overview']}</p>
        </div>
        <div className="card-footer">
          <Link className='btn btn-primary' to={`/movies/${movie['id']}`}>
            See More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;