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

  return (
    <>
      <div className='container'>
        <p>{castDetail['name']}</p>
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
  )
}

export default CastDetailPage;