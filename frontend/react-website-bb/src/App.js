import React, { useState, useEffect } from 'react';
import { loadPlayerData } from './utils/loadData';
import Results from './components/results';
import Search from './components/search';
import Comparison from './components/comparison';
import './app.css';

const App = () => {
  const [players, setPlayers] = useState([]);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [query, setQuery] = useState('');
  const [sortKey, setSortKey] = useState('PTS'); // Default sort by points

  useEffect(() => {
    // Load player data on component mount
    const data = loadPlayerData();
    setPlayers(data);
  }, []);

  const handleSearch = (query) => {
    setQuery(query);
  };

  const handleSortChange = (event) => {
    setSortKey(event.target.value);
  };

  const handlePlayerSelect = (player) => {
    if (selectedPlayers.length < 2) {
      setSelectedPlayers([...selectedPlayers, player]);
    } else {
      setSelectedPlayers([selectedPlayers[1], player]); // Replace oldest selection
    }
  };

  return (
    <div>
      <h1>NBA Player Stats</h1>
      <Search onSearch={handleSearch} />
      <label htmlFor="sortKey">Sort By:</label>
      <select id="sortKey" value={sortKey} onChange={handleSortChange}>
        <option value="PTS">Points</option>
        <option value="REB">Rebounds</option>
        <option value="AST">Assists</option>
        {/* Add more options as needed */}
      </select>
      <Results
        players={players}
        query={query}
        sortKey={sortKey}
        onSelectPlayer={handlePlayerSelect}
      />
      {selectedPlayers.length === 2 && (
        <Comparison player1={selectedPlayers[0]} player2={selectedPlayers[1]} />
      )}
    </div>
  );
};

export default App;
