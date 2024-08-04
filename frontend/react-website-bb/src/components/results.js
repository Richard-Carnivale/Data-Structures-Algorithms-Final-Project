import React, { useState, useEffect } from 'react';
import { getQuickSortSteps, getHeapSortSteps } from '../utils/sorting'; // Import sorting steps functions
import './results.css'; // Import custom CSS for animation, if necessary

const Results = ({ players, query, sortKey, sortAlgorithm, onSelectPlayer }) => {
  const [sortedPlayers, setSortedPlayers] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [steps, setSteps] = useState([]);
  const [isSorting, setIsSorting] = useState(false);
  const [rowsToShow, setRowsToShow] = useState(100000); // Default number of rows to show
  const [buttonText, setButtonText] = useState('Start Sorting'); // Default button text

  // Filter and sort players when the sort button is clicked
  useEffect(() => {
    if (isSorting) {
      const filteredPlayers = filterPlayers(players, query);
      let sortingSteps = [];

      if (sortAlgorithm === 'quick') {
        sortingSteps = getQuickSortSteps(filteredPlayers, sortKey);
      } else if (sortAlgorithm === 'heap') {
        sortingSteps = getHeapSortSteps(filteredPlayers, sortKey);
      }

      setSteps(sortingSteps);
      setSortedPlayers(sortingSteps[0]); // Initialize with the first step
      setCurrentStep(0);
      setButtonText('Sorting...'); // Change button text to "Sorting..."
    }
  }, [isSorting, sortAlgorithm, sortKey, query, players]);

  useEffect(() => {
    let interval;
    const delay = 500 / 30; // Reduce delay to make sorting 30 times faster

    if (isSorting && steps.length > 0) {
      interval = setInterval(() => {
        if (currentStep < steps.length - 1) {
          setCurrentStep(currentStep + 1);
          setSortedPlayers(steps[currentStep + 1]);
        } else {
          clearInterval(interval);
          setIsSorting(false); // Stop sorting after the last step
          setButtonText('Start Sorting'); // Change button text to "Start Sorting"
        }
      }, delay); // Adjust the speed of animation
    }
    return () => clearInterval(interval);
  }, [currentStep, isSorting, steps]);

  const startSorting = () => {
    setIsSorting(true);
  };

  const filterPlayers = (players, query) => {
    if (!query) return players;
    return players.filter(player =>
      player.name.toLowerCase().includes(query.toLowerCase())
    );
  };

  return (
    <div>
      <button onClick={startSorting} disabled={isSorting}>
        {buttonText}
      </button>
      <label htmlFor="rowsToShow">Rows to Show:</label>
      <select
        id="rowsToShow"
        value={rowsToShow}
        onChange={(e) => setRowsToShow(Number(e.target.value))}
      >
        <option value={10}>10</option>
        <option value={100}>100</option>
        <option value={1000}>1000</option>
        <option value={10000}>10000</option>
        <option value={100000}>100000</option>
      </select>
      <h2>Player Stats</h2>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Season</th>
              <th>Points</th>
              <th>Rebounds</th>
              <th>Assists</th>
              {/* Add more columns as needed */}
            </tr>
          </thead>
          <tbody>
            {sortedPlayers.slice(0, rowsToShow).map((player, index) => (
              <tr key={index} className={isSorting && steps[currentStep].includes(player) ? 'highlight' : ''} onClick={() => onSelectPlayer(player)}>
                <td>{player.name}</td>
                <td>{player.SEASON}</td>
                <td>{player.PTS}</td>
                <td>{player.REB}</td>
                <td>{player.AST}</td>
                {/* Add more stats as needed */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Results;
