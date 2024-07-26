import React from 'react'
import { Link } from 'react-router-dom';

function CastCard(props) {
  const cast = props.data;

  const name = cast['name'];
  const profile = cast['profile_path'];

  return (
    <div className="col-md-6 col-lg-4 my-2">
      <div className='card'>

        <img
          src={`https://image.tmdb.org/t/p/w500${profile}`}
          className='w-100'
          style={{
            height: '300px',
            objectFit: 'cover',
          }}
          alt="Image"
        />
        <div className="card-body">
          <h3>{name}</h3>

          <Link className='btn btn-primary' to={`/cast/${cast['id']}`}>
            See More Details
          </Link>
        </div>

      </div>
    </div>
  );
}

export default CastCard;