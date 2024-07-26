import { useState } from "react";
import { multiSearch } from "../services/search_api";
import MovieCard from "../components/movie_card";
import TvCard from "../components/tv_card";
import CastCard from "../components/cast_card";

function SearchPage() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const onChangeHandler = (event) => {
    const element = event.target;
    const value = element.value;
    setQuery(value);
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const result = await multiSearch(query);
    setResults(result);
  }

  return (
    <div className="container my-4">
      <form onSubmit={onSubmitHandler}>
        <div className="row">
          <div className="col-md-8">
            <input type="search" name="search" className="form-control" placeholder="search" onChange={onChangeHandler} />
          </div>
          <div className="col-md-4 d-grid">
            <button type="submit" className="btn btn-primary">Search</button>
          </div>
        </div>
      </form>
      <div className="row">
        {
          results.map((result) => {
            if (result['media_type'] == 'tv') {
              return <TvCard data={result} key={result['id']} />
            } else if (result['media_type'] == 'movie') {
              return <MovieCard data={result} key={result['id']} />
            } else if (result['media_type'] == 'person') {
              return <CastCard data={result} key={result['id']} />
            }
            return (
              <div>
                <h1>{result['id']}</h1>
                <h1>{result['media_type']}</h1>
              </div>
            )
          })
        }
      </div>
    </div >
  );
}

export default SearchPage;