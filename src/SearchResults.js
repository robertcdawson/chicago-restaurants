import './App.scss';

function SearchResults(props) {
  return (
    <div className="search-results">
      {props.filteredApiData.map((item, index) => {
        return (
          <div key={index} className="search-result">
            <p>{item.aka_name}</p>
            <p>{item.address}</p>
          </div>
        );
      })}
    </div>
  );
}

export default SearchResults;