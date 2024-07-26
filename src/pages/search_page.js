import { useState } from "react";

function SearchPage() {
  const [query, setQuery] = useState();

  const onChangeHandler = (event) => {
    const element = event.target;
    const value = element.value;
    setQuery(value);
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const url = `https://api.themoviedb.org/3/search/multi?query=${query}&include_adult=false&language=en-US&page=1`

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

  return (
    <div className="container my-4">
      <input type="search" name="search" className="my-2" placeholder="search" onChange={onChangeHandler} />
      <span className="mx-2">
        <button type="submit" className="btn btn-primary" onClick={onSubmitHandler}>Search</button>
      </span>
    </div >
  );
}

export default SearchPage;