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
  const [sortAlgorithm, setSortAlgorithm] = useState('quick'); // Default sorting algorithm (change from 'merge' to 'quick' if needed)

  useEffect(() => {
    // Load player data on component mount
    const data = loadPlayerData();
    setPlayers(data);
  }, []);

  const handlePlayerSelect = (player) => {
    if (player) {
      if (selectedPlayers.length < 2) {
        setSelectedPlayers([...selectedPlayers, player]);
      } else {
        setSelectedPlayers([selectedPlayers[1], player]); // Replace oldest selection
      }
    }
  };

  const handleSortChange = (event) => {
    setSortKey(event.target.value); // Update sort key based on user selection
  };

  const handleAlgorithmChange = (event) => {
    setSortAlgorithm(event.target.value); // Update sorting algorithm
  };

  const handleQueryChange = (newQuery) => {
    setQuery(newQuery);
  };

  return (
    <div>
      <h1>NBA Player Stats</h1>
      <Search
        players={players}
        onSelectPlayer={handlePlayerSelect}
        onQueryChange={handleQueryChange}
      />
      <label htmlFor="sortKey">   Sort By:</label>
      <select id="sortKey" value={sortKey} onChange={handleSortChange}>
        <option value="PTS">Points</option>
        <option value="REB">Rebounds</option>
        <option value="AST">Assists</option>
        <option value="FGM">Field Goals Made</option>
        <option value="FG_PCT">Field Goal Percentage</option>
        {/* Add more options as needed */}
      </select>
      <label htmlFor="sortAlgorithm">Sorting Algorithm:</label>
      <select id="sortAlgorithm" value={sortAlgorithm} onChange={handleAlgorithmChange}>
        <option value="quick">Quick Sort</option>
        <option value="heap">Heap Sort</option>
      </select>
      <Results
        players={players}
        query={query}
        sortKey={sortKey}
        sortAlgorithm={sortAlgorithm}
        onSelectPlayer={handlePlayerSelect}
      />
      {selectedPlayers.length === 2 && (
        <Comparison player1={selectedPlayers[0]} player2={selectedPlayers[1]} />
      )}
    </div>
  );
};

export default App;
