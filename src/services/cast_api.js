async function fetchCastDetailById(id) {
  const url = `https://api.themoviedb.org/3/person/${id}`

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

async function fetchCastMovies(id) {
  const url = `https://api.themoviedb.org/3/person/${id}/movie_credits`

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
async function fetchCastTvShows(id) {
  const url = `https://api.themoviedb.org/3/person/${id}/tv_credits`

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

export { fetchCastDetailById, fetchCastMovies, fetchCastTvShows }