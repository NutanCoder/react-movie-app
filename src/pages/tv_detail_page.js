import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import MovieDetailImage from '../components/movie_detail_image';
import { fetchCastMembersOfTv, fetchSimilarTvById, fetchTvById } from '../services/tv_api';
import TvCard from '../components/tv_card';
import CastCard from '../components/cast_card';

function TvDetailPage() {

  const [tvShow, setTvShow] = useState({});
  const [similarTvShows, setsimilarTvShows] = useState([]);
  const [castMembers, setCastMembers] = useState([]);

  const params = useParams();
  const TvId = params.tId;

  const getTvShow = async () => {
    const result = await fetchTvById(TvId);
    setTvShow(result);
  };

  const getSimilarTvShows = async () => {
    const result = await fetchSimilarTvById(TvId);
    setsimilarTvShows(result);
  };

  const getCastMembersOfTv = async () => {
    const result = await fetchCastMembersOfTv(TvId);
    setCastMembers(result);
  }

  useEffect(() => {
    getTvShow();
    getSimilarTvShows();
    getCastMembersOfTv();
  }, [TvId])

  const poster = tvShow['poster_path'];
  const banner = tvShow['backdrop_path'];
  const name = tvShow['name'];
  const overview = tvShow['overview'];
  const genres = tvShow['genres'] ?? [];

  return (
    <>
      <div className="container">
        <div className="border">
          <MovieDetailImage
            banner={banner}
            poster={poster}
            title={name}
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
      <div className='container'>
        <h2 className='my-4'>Casting Members</h2>
        <div className="row">
          {
            castMembers.map((castMember) => {
              return <CastCard data={castMember} key={tvShow['id']} />
            })
          }
        </div>
      </div>
      <div className="container">
        <h2 className='my-4'>Similar TV Shows</h2>
        <div className="row">
          {
            similarTvShows.map((similarTvShow) => {
              return <TvCard data={similarTvShow} key={similarTvShow['id']} />
            })
          }
        </div>
      </div>
    </>
  );
}

export default TvDetailPage;