import React from 'react'

function MovieDetailImage(props) {
  const title = props.title;
  const banner = props.banner;
  const poster = props.poster;
  return (
    <div style={{
      position: 'relative',
      height: '380px',
    }}>
      <img
        src={`https://image.tmdb.org/t/p/w500${banner}`}
        className='w-100'
        style={{
          height: '300px',
          objectFit: 'cover',
        }}
        alt="Image"
      />
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 50
        }}
      >
        <img
          src={`https://image.tmdb.org/t/p/w500${poster}`}
          style={{
            height: '200px',
            width: '200px',
            borderRadius: '100px',
            objectFit: 'cover',
          }}
          alt="Image"
        />
      </div>
      <div style={{
        position: 'absolute',
        bottom: 30,
        left: 260
      }}>
        <h2 className='fs-4 fw-bold'>{title}</h2>
      </div>
    </div>
  )
}

export default MovieDetailImage