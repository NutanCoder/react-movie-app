import React, { useEffect, useState } from 'react'
import { fetchCastDetailById, fetchCastMovies } from '../services/cast_api';
import { useParams } from 'react-router-dom';
import MovieCard from '../components/movie_card';

function CastDetailPage() {

  const [castDetail, setcastDetail] = useState({});
  const [castMovies, setCastMovies] = useState([]);
  const params = useParams();
  const id = params.cId;

  const getCastDetail = async () => {
    const result = await fetchCastDetailById(id);
    setcastDetail(result);
  }

  const getCastMovies = async () => {
    const result = await fetchCastMovies(id);
    setCastMovies(result);
  }

  useEffect(() => {
    getCastDetail();
    getCastMovies();
  }, [id]);

  return (
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
  )
}

export default CastDetailPage;