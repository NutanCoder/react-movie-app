import React, { useEffect, useState } from 'react'
import { fetchCastDetailById, fetchCastMovies, fetchCastTvShows } from '../services/cast_api';
import { useParams } from 'react-router-dom';
import MovieCard from '../components/movie_card';
import TvCard from '../components/tv_card';

function CastDetailPage() {

  const [castDetail, setCastDetail] = useState({});
  const [castMovies, setCastMovies] = useState([]);
  const [castTvShows, setCastTvShows] = useState([]);

  const params = useParams();
  const id = params.cId;

  const getCastDetail = async () => {
    const result = await fetchCastDetailById(id);
    setCastDetail(result);
  }

  const getCastMovies = async () => {
    const result = await fetchCastMovies(id);
    setCastMovies(result);
  }

  const getCastTvShows = async () => {
    const result = await fetchCastTvShows(id);
    setCastTvShows(result);
  }

  useEffect(() => {
    getCastDetail();
    getCastMovies();
    getCastTvShows();
  }, [id]);

  const name = castDetail['name'];
  const popularity = castDetail['popularity'];
  const profile = castDetail['profile_path'];
  const department = castDetail['known_for_department']

  return (
    <>
      <div className="container">
        <div>
          <div
            style={{
              position: 'relative',
              top: 10,
              bottom: 0,
              left: 0
            }}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${profile}`}
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
            bottom: 350,
            left: 300,
          }}>
            <h2 className='fs-4 fw-bold'>{name}</h2>
            <p className='fs-4 fw-lightest'>
              <span className='fw-bold'>Popularity:</span> {popularity}
            </p>
            <span className='fw-bold'>Department:</span> {department}
          </div>
        </div>
      </div>
      <div className='container my-4'>
        <h1>Movies</h1>
        <div className="row">
          {
            castMovies.map((castMovie) => {
              return <MovieCard data={castMovie} key={castMovie['id']} />
            })
          }
        </div>
      </div>
      <div className="container">
        <h1>Tv Shows</h1>
        <div className="row">
          {
            castTvShows.map((castTvShow) => {
              return <TvCard data={castTvShow} key={castTvShow['id']} />
            })
          }
        </div>
      </div>
    </>
  );
}

export default CastDetailPage;