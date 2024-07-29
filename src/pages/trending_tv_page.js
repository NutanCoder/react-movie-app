import React, { useEffect, useState } from 'react'
import { fetchTrendingTv } from '../services/trending_api';
import TvCard from '../components/tv_card';
import LoadingCard from '../components/loading_card';

function TrendingTvPage() {

  const [tvShows, setTvShows] = useState([]);
  const [isMovieLoading, setisMovieLoading] = useState(true);

  const getTrendingTv = async () => {
    const result = await fetchTrendingTv();
    setisMovieLoading(false);
    setTvShows(result);
  };

  useEffect(() => {
    getTrendingTv();
  }, [])

  return (
    <div className='container'>
      <h1 className='my-4'>Trending TV</h1>
      <div className="row">
        {
          isMovieLoading
            ? [1, 2, 3, 4, 5, 6].map((e) => {
              return <LoadingCard key={e} />
            })
            : tvShows.map((tvshow) => {
              return <TvCard data={tvshow} key={tvshow['id']} />
            })
        }
      </div>
    </div >
  );
}

export default TrendingTvPage;