import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import MovieDetailImage from '../components/movie_detail_image';
import { fetchSimilarTvById, fetchTvById } from '../services/tv_api';

function TvDetailPage() {

  const [tvShow, setTvShow] = useState({});
  const [similarTvShows, setsimilarTvShows] = useState([]);

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

  useEffect(() => {
    getTvShow();
    getSimilarTvShows();
  }, [TvId])

  const poster = tvShow['poster_path'];
  const banner = tvShow['backdrop_path'];
  const title = tvShow['title'];
  const overview = tvShow['overview'];
  const genres = tvShow['genres'] ?? [];

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
        <h2 className='my-4'>Similar TV Shows</h2>
        <div className="row">
          {
            similarTvShows.map((similarTvShow) => {
              return <MovieCard data={similarTvShow} key={similarTvShow['id']} />
            })
          }
        </div>
      </div>
    </>
  );
}

export default TvDetailPage;