async function fetchTrendingMovie() {
  const url = "https://api.themoviedb.org/3/discover/movie?with_original_language=hi";

  const options = {
    method: 'GET',
    headers: {
      "accept": "application/json",
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYjYzM2RhYjlmY2YyZDhmOWUzMjU2M2JmY2FkZTYwMiIsIm5iZiI6MTcyMTU4MzcxNi44MjEyNDQsInN1YiI6IjY2OTkyMDkyN2E1NTc0OGFlMjViZDcxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Yv6eWKel4CVvPkXoNxkpnwQuTerXVDnIMD9yvE0mukw"
    }
  };
  const response = await fetch(url, options);
  const body = await response.json();
  const result = body['results'];
  return result;
}

//url = "https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc"

async function fetchTrendingTv() {
  const url = "https://api.themoviedb.org/3/discover/tv?with_original_language=hi";

  const options = {
    method: 'GET',
    headers: {
      "accept": "application/json",
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYjYzM2RhYjlmY2YyZDhmOWUzMjU2M2JmY2FkZTYwMiIsIm5iZiI6MTcyMTU4MzcxNi44MjEyNDQsInN1YiI6IjY2OTkyMDkyN2E1NTc0OGFlMjViZDcxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Yv6eWKel4CVvPkXoNxkpnwQuTerXVDnIMD9yvE0mukw"
    }
  };
  const response = await fetch(url, options);
  const body = await response.json();
  const result = body['results'];
  return result;

}
export { fetchTrendingMovie, fetchTrendingTv };