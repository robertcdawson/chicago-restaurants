import { useState, useEffect } from 'react';
import { Helmet } from "react-helmet";
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';
import './App.scss';

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [apiData, setApiData] = useState([]);
  const [filteredApiData, setFilteredApiData] = useState([]);

  // Fetch API data
  const fetchApiData = async () => {
    const response = await fetch('https://data.cityofchicago.org/resource/cwig-ma7x.json');
    if (!response.ok) {
      throw new Error(response.status);
    }
    const restaurants = await response.json();
    setApiData(restaurants);
    setFilteredApiData([]);
  };

  // Handle search form submission
  const handleSubmit = () => {
    // If search field value is not empty, filter API data by search field value
    if (searchValue !== '') {
      const getFilteredApiData = apiData.filter((item) => {
        return item.dba_name.toLowerCase().includes(searchValue.toLowerCase());
      });
      setFilteredApiData(getFilteredApiData);
    }
    // Else set filtered API data to an empty array
    else {
      setFilteredApiData([]);
    }
  };

  useEffect(() => {
    // Get initial API data for page load
    fetchApiData();
  }, []);

  // Update searchValue state variable per search field change event
  const handleChange = (value) => {
    setSearchValue(value);
  };

  return (
    <div className="app">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Find Food Fast in the Windy City</title>
      </Helmet>
      <header className="app-header">
        <h1>Find Food Fast in the <em>Windy City</em></h1>
      </header>
      <SearchForm searchFieldValue={searchValue} onChange={handleChange} onSubmit={handleSubmit} />
      <SearchResults filteredApiData={filteredApiData} searchValue={searchValue} />
    </div>
  );
}

export default App;
