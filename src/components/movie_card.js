import React from 'react'
import { Link } from 'react-router-dom';

function MovieCard(props) {
  const movie = props.data;

  const title = movie['title'];
  const overview = movie['overview'];
  const poster_path = movie['poster_path'];

  return (
    <div className="col-md-6 col-lg-4 my-2">
      <div className='card'>

        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          className='w-100'
          style={{
            height: '300px',
            objectFit: 'cover',
          }}
          alt="Image"
        />
        <div className="card-body">
          <h3>{title}</h3>
          <p style={{
            minHeight: '70px'
          }}>
            {overview.substring(0, 128)}...
          </p>
          <Link className='btn btn-primary' to={`/movies/${movie['id']}`}>
            See More
          </Link>
        </div>

      </div>
    </div>
  );
}

export default MovieCard;