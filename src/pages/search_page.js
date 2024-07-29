import { useState } from "react";
import { multiSearch } from "../services/search_api";
import SearchAnyCard from "../components/search_any_card";
import SearchLoadingCard from "../components/search_loading_card";

function SearchPage() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isResultLoading, setIsResultLoading] = useState(false);

  const onChangeHandler = (event) => {
    const element = event.target;
    const value = element.value;
    setQuery(value);
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setIsResultLoading(true);
    const result = await multiSearch(query);
    setIsResultLoading(false);
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
          isResultLoading
            ? [1, 2, 3].map((e) => {
              return <SearchLoadingCard key={e} />
            })
            : results.map((result) => {
              return <SearchAnyCard result={result} key={result['id']} />
            })
        }
      </div>
    </div >
  );
}

export default SearchPage;