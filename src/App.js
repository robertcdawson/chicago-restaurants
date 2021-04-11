import SearchField from './SearchField';
import SearchResults from './SearchResults';
import './App.scss';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Find Food Fast in the <em>Windy City</em></h1>
      </header>
      <SearchField />
      <SearchResults />
    </div>
  );
}

export default App;
