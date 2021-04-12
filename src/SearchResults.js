import SearchResult from './SearchResult';
import './App.scss';

function SearchResults(props) {
  return (
    <div className="search-results">
      {props.filteredApiData.map((item, index) => {
        return (
          <SearchResult key={index} item={item} index={index} />
        );
      })}
    </div>
  );
}

export default SearchResults;