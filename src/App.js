import { useState, useEffect } from 'react';
import SearchField from './SearchField';
import SearchResults from './SearchResults';
import './App.scss';

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [apiData, setApiData] = useState([]);
  const [filteredApiData, setFilteredApiData] = useState([]);

  const fetchApiData = async () => {
    const response = await fetch('https://data.cityofchicago.org/resource/cwig-ma7x.json');
    if (!response.ok) {
      throw new Error(response.status);
    }
    const restaurants = await response.json();
    setApiData(restaurants);
    setFilteredApiData([]);
  };

  const handleSubmit = () => {
    if (searchValue !== '') {
      const getFilteredApiData = apiData.filter((item) => {
        return item.dba_name.toLowerCase().includes(searchValue.toLowerCase());
      });
      setFilteredApiData(getFilteredApiData);
    }
    else {
      setFilteredApiData([]);
    }
  };

  useEffect(() => {
    // Get initial API data for page load
    fetchApiData();
  }, []);

  const handleChange = (value) => {
    setSearchValue(value);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Find Food Fast in the <em>Windy City</em></h1>
      </header>
      <SearchField searchFieldValue={searchValue} onChange={handleChange} onSubmit={handleSubmit} />
      <SearchResults filteredApiData={filteredApiData} />
    </div>
  );
}

export default App;
