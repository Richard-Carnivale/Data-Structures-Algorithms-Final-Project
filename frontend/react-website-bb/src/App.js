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
    const [sortAlgorithm, setSortAlgorithm] = useState('quick'); // Default sorting algorithm
    const [rowsToShow, setRowsToShow] = useState(100000); // Default number of rows to show

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

    const handleRowsChange = (event) => {
        setRowsToShow(Number(event.target.value)); // Update rows to show based on user selection
    };

    return (
        <div className="app">
            <h1>NBA Player Stats</h1>
            {/* New control container */}
            <div className="controls">
                {/* Search Component */}
                <Search
                    players={players}
                    onQueryChange={handleQueryChange}
                />

                {/* Sort By dropdown */}
                <div className="sort-control">
                    <label htmlFor="sortKey">Sort By:</label>
                    <select id="sortKey" value={sortKey} onChange={handleSortChange}>
                        <option value="PTS">Points</option>
                        <option value="REB">Rebounds</option>
                        <option value="AST">Assists</option>
                        <option value="STL">Steals</option>
                        <option value="BLK">Blocks</option>
                        <option value="TOV">Turnovers</option>
                        <option value="FGM">Field Goals Made</option>
                        <option value="FG_PCT">Field Goal Percentage</option>
                    </select>
                </div>

                {/* Sorting Algorithm dropdown */}
                <div className="sort-control">
                    <label htmlFor="sortAlgorithm">Sorting Algorithm:</label>
                    <select id="sortAlgorithm" value={sortAlgorithm} onChange={handleAlgorithmChange}>
                        <option value="quick">Quick Sort</option>
                        <option value="heap">Heap Sort</option>
                    </select>
                </div>

                {/* Start Sorting button */}
                <button className="button" onClick={() => document.getElementById('start-sort').click()}>
                    Start Sorting
                </button>

                {/* Rows to Show dropdown */}
                <div className="sort-control">
                    <label htmlFor="rowsToShow">Rows to Show:</label>
                    <select
                        id="rowsToShow"
                        value={rowsToShow}
                        onChange={handleRowsChange}
                    >
                        <option value={10}>10</option>
                        <option value={100}>100</option>
                        <option value={1000}>1000</option>
                        <option value={10000}>10000</option>
                        <option value={100000}>100000</option>
                    </select>
                </div>
            </div>

            <Results
                players={players}
                query={query}
                sortKey={sortKey}
                sortAlgorithm={sortAlgorithm}
                onSelectPlayer={handlePlayerSelect}
                rowsToShow={rowsToShow} // Pass the rowsToShow to Results
            />

            {selectedPlayers.length === 2 && (
                <Comparison player1={selectedPlayers[0]} player2={selectedPlayers[1]} />
            )}
        </div>
    );
};

export default App;
