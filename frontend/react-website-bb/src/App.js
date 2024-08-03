import React, { useState } from 'react';
import Search from './components/search';
import Results from './components/results';

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [sortKey, setSortKey] = useState('points'); // Default sort key

  const handleSearch = (query) => {
    // Mock search result for demonstration purposes
    const results = [
      { id: 1, name: 'Player One', points: 5000 },
      { id: 2, name: 'Player Two', points: 4000 },
      // Add more mock data here
    ];
    setSearchResults(results);
  };

  return (
    <div>
      <Search onSearch={handleSearch} />
      <Results results={searchResults} sortKey={sortKey} />
      {/* Other components */}
    </div>
  );
};

export default App;