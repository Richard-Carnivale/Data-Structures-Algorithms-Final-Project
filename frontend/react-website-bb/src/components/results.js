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
  const [highlightedIndices, setHighlightedIndices] = useState([]); // Store indices of swapped elements
  const [sortSpeed, setSortSpeed] = useState(1); // Speed factor for sorting
  const [speedText, setSpeedText] = useState('Normal'); // Current speed label

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
      setSortedPlayers(sortingSteps[0].array); // Initialize with the first step
      setCurrentStep(0);
      setHighlightedIndices(sortingSteps[0].swappedIndices); // Initialize with first swapped indices
      setButtonText('Sorting...'); // Change button text to "Sorting..."
    }
  }, [isSorting, sortAlgorithm, sortKey, query, players]);

  useEffect(() => {
    let interval;
    const delay = (500 / 30) / sortSpeed; // Adjust delay based on speed factor

    if (isSorting && steps.length > 0) {
      interval = setInterval(() => {
        if (currentStep < steps.length - 1) {
          setCurrentStep((prevStep) => prevStep + 1);
          setSortedPlayers(steps[currentStep + 1].array);
          setHighlightedIndices(steps[currentStep + 1].swappedIndices); // Update highlighted indices
        } else {
          clearInterval(interval);
          setIsSorting(false); // Stop sorting after the last step
          setButtonText('Start Sorting'); // Change button text to "Start Sorting"
          setHighlightedIndices([]); // Clear highlights after sorting
        }
      }, delay); // Adjust the speed of animation
    }
    return () => clearInterval(interval);
  }, [currentStep, isSorting, steps, sortSpeed]);

  const startSorting = () => {
    setIsSorting(true);
  };

  const filterPlayers = (players, query) => {
    if (!query) return players;
    return players.filter(player =>
      player.name.toLowerCase().includes(query.toLowerCase())
    );
  };

  // Handle speed change
  const handleSpeedChange = (event) => {
    const selectedSpeed = event.target.value;
    setSortSpeed(Number(selectedSpeed));
    
    // Update the speed text
    switch (selectedSpeed) {
      case '0.5':
        setSpeedText('Slow');
        break;
      case '1':
        setSpeedText('Normal');
        break;
      case '3':
        setSpeedText('Fast');
        break;
      case '5':
        setSpeedText('Very Fast');
        break;
      default:
        setSpeedText('Normal');
        break;
    }
  };

  return (
    <div>
      {/* Speed control at the top */}
      <div className="speed-control">
        <label htmlFor="sortSpeed">Sort Speed:</label>
        <select id="sortSpeed" value={sortSpeed} onChange={handleSpeedChange}>
          <option value={0.5}>Slow</option>
          <option value={1}>Normal</option>
          <option value={3}>Fast</option>
          <option value={5}>Very Fast</option>
        </select>
        <p>Current Speed: {speedText}</p>
      </div>

      {/* Start Sorting button */}
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
              <tr
                key={index}
                className={highlightedIndices.includes(index) ? 'highlight' : 'dehighlight'} // Apply highlight class
                onClick={() => onSelectPlayer(player)}
              >
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
