import React from 'react'
import { Link } from 'react-router-dom';

function SearchResultCard(props) {
  const image = props.image;
  const title = props.title;
  const description = props.description;
  const link = props.link;

  return (
    <div className="row my-4 bg-light rounded">
      <div className="col-md-4">
        <div
          style={{
            width: '100%',
            background: 'grey',
            height: '400px',

          }}>
          <img
            src={`https://image.tmdb.org/t/p/w500${image}`}
            className='w-100'
            style={{
              height: '400px',
              objectFit: 'cover',
            }}
            alt={`Image of ${title}`}
          />
        </div>
      </div>
      <div className="col-md-8 p-4">
        <h3>{title}</h3>
        <p>{description.substring(0, 128)}...</p>
        <Link className='btn btn-primary' to={link}>
          See More
        </Link>
      </div>
    </div>
  )
}

export default SearchResultCard