import './App.scss';

function SearchField(props) {
  const handleChange = (event) => {
    props.onChange(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit();
  }

  return (
    <form className="search-container" onSubmit={handleSubmit}>
      <input type="search" className="site-search-field" name="q" aria-label="Search Chicago restaurants" placeholder="Type to search ..." onChange={handleChange} />
      <input type="image" className="site-search-button" alt="Search" src="images/search-button.png" />
    </form>
  );
}

export default SearchField;