import './App.scss';

function SearchField() {
  return (
    <div className="search-container">
      <input type="search" className="site-search-field" name="q" aria-label="Search Chicago restaurants" placeholder="Type to search ..." />
      <input type="image" className="site-search-button" alt="Search" src="images/search-button.png" />
    </div>
  );
}

export default SearchField;