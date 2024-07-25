import React from 'react'
import { Link } from 'react-router-dom';

function TvCard(props) {
  const tvshow = props.data;

  const name = tvshow['name'];
  const overview = tvshow['overview'];
  const poster_path = tvshow['poster_path'];

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
          <h3>{name}</h3>
          <p style={{
            minHeight: '70px'
          }}>
            {overview.substring(0, 128)}...
          </p>
          <Link className='btn btn-primary' to={`/tv/${tvshow['id']}`}>
            See More
          </Link>
        </div>

      </div>
    </div>
  );
}

export default TvCard;