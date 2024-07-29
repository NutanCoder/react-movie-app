import React from 'react'
import SearchResultCard from './search_result_card';

function SearchAnyCard(props) {
  const result = props.result;

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
  } else {
    return (
      <div>
        <h1>{result['id']}</h1>
        <h1>{result['media_type']}</h1>
      </div>
    );
  }
}
export default SearchAnyCard;