import React, { useEffect, useState } from 'react'
import { fetchTrendingTv } from '../services/trending_api';
import TvCard from '../components/tv_card';

function TrendingTvPage() {

  const [tvShows, setTvShows] = useState([]);

  const getTrendingTv = async () => {
    const result = await fetchTrendingTv();
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
          tvShows.map((tvshow) => {
            return <TvCard data={tvshow} key={tvshow['id']} />
          })
        }
      </div>
    </div>
  )
}

export default TrendingTvPage;