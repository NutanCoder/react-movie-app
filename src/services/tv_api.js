async function fetchTvById(TvId) {
  const url = `https://api.themoviedb.org/3/tv/${TvId}?language=en-US`

  const options = {
    method: 'GET',
    headers: {
      "accept": "application/json",
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYjYzM2RhYjlmY2YyZDhmOWUzMjU2M2JmY2FkZTYwMiIsIm5iZiI6MTcyMTU4MzcxNi44MjEyNDQsInN1YiI6IjY2OTkyMDkyN2E1NTc0OGFlMjViZDcxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Yv6eWKel4CVvPkXoNxkpnwQuTerXVDnIMD9yvE0mukw"
    }
  };
  const response = await fetch(url, options);
  const body = await response.json();
  const result = body;
  return result;
}

async function fetchSimilarTvById(TvId) {
  const url = `https://api.themoviedb.org/3/tv/${TvId}/similar?language=en-US&page=1`

  const options = {
    method: 'GET',
    headers: {
      "accept": "application/json",
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYjYzM2RhYjlmY2YyZDhmOWUzMjU2M2JmY2FkZTYwMiIsIm5iZiI6MTcyMTU4MzcxNi44MjEyNDQsInN1YiI6IjY2OTkyMDkyN2E1NTc0OGFlMjViZDcxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Yv6eWKel4CVvPkXoNxkpnwQuTerXVDnIMD9yvE0mukw"
    },
  };
  const response = await fetch(url, options);
  const body = await response.json();
  const result = body['results'];
  return result;
}

async function fetchCastMembersOfTv(TvId) {
  const url = `https://api.themoviedb.org/3/tv/${TvId}/credits?language=en-US`

  const options = {
    method: 'GET',
    headers: {
      "accept": "application/json",
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYjYzM2RhYjlmY2YyZDhmOWUzMjU2M2JmY2FkZTYwMiIsIm5iZiI6MTcyMTU4MzcxNi44MjEyNDQsInN1YiI6IjY2OTkyMDkyN2E1NTc0OGFlMjViZDcxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Yv6eWKel4CVvPkXoNxkpnwQuTerXVDnIMD9yvE0mukw"
    }
  };
  const response = await fetch(url, options);
  const body = await response.json();
  const result = body['cast'];
  return result;
}

export { fetchTvById, fetchSimilarTvById, fetchCastMembersOfTv }


