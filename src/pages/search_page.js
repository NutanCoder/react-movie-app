import { useState } from "react";
import { multiSearch } from "../services/search_api";
import SearchResultCard from "../components/search_result_card";

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
              return (
                <SearchResultCard
                  key={result['id']}
                  description={result['overview']}
                  image={result['poster_path']}
                  link={`/tv/${result['id']}`}
                />
              );
            } else if (result['media_type'] == 'movie') {
              return (
                <SearchResultCard
                  key={result['id']}
                  title={result['title']}
                  description={result['overview']}
                  image={result['poster_path']}
                  link={`/movie/${result['id']}`}
                />
              );
            } else if (result['media_type'] == 'person') {
              return (
                <SearchResultCard
                  key={result['id']}
                  title={result['name']}
                  description='No Overviw'
                  image={result['poster_path']}
                  link={`/cast/${result['id']}`}
                />
              );
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