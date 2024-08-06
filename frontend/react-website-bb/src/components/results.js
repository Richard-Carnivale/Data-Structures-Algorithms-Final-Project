import React, { useState, useEffect } from 'react';
import { getQuickSortSteps, getHeapSortSteps } from '../utils/sorting'; // Import sorting steps functions
import './results.css';

const Results = ({ players, query, sortKey, sortAlgorithm, onSelectPlayer, rowsToShow }) => {
    const [sortedPlayers, setSortedPlayers] = useState([]);
    const [currentStep, setCurrentStep] = useState(0);
    const [steps, setSteps] = useState([]);
    const [isSorting, setIsSorting] = useState(false);
    const [buttonText, setButtonText] = useState('Start Sorting'); // Default button text
    const [highlightedIndices, setHighlightedIndices] = useState([]); // Store indices of swapped elements
    const [sortSpeed, setSortSpeed] = useState(1); // Speed factor for sorting
    const [speedText, setSpeedText] = useState('Normal'); // Current speed label
    const [startTime, setStartTime] = useState(null); // Track start time
    const [elapsedTime, setElapsedTime] = useState(0); // Elapsed time

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
            setStartTime(Date.now()); // Record start time
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
                    setElapsedTime(Date.now() - startTime); // Calculate elapsed time
                }
            }, delay); // Adjust the speed of animation
        }
        return () => clearInterval(interval);
    }, [currentStep, isSorting, steps, sortSpeed, startTime]);

    const startSorting = () => {
        setIsSorting(true);
        setElapsedTime(0); // Reset elapsed time when sorting starts
        setStartTime(Date.now()); // Record new start time
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
            case '0.1':
                setSpeedText('Really Slow');
                break;
            case '0.5':
                setSpeedText('Slow');
                break;
            case '1':
                setSpeedText('Normal');
                break;
            case '3':
                setSpeedText('Fast');
                break;
            case '10':
                setSpeedText('Really Fast');
                break;
            default:
                setSpeedText('Normal');
                break;
        }
    };

    return (
        <div className="results">
            <div className="results-header">
                <div className="animation-controls">
                    <label htmlFor="speed">Speed:</label>
                    <select id="speed" onChange={handleSpeedChange}>
                        <option value="0.1">Really Slow</option>
                        <option value="0.5">Slow</option>
                        <option value="1" selected>Normal</option>
                        <option value="3">Fast</option>
                        <option value="10">Really Fast</option>
                    </select>
                    <span>{speedText}</span>
                    <button id="start-sort" onClick={startSorting}>
                        {buttonText}
                    </button>
                </div>
                <div className="elapsed-time">
                    <span>Elapsed Time: {Math.floor(elapsedTime / 1000)}s</span>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>PTS</th>
                        <th>REB</th>
                        <th>AST</th>
                        <th>STL</th>
                        <th>BLK</th>
                        <th>TOV</th>
                        <th>FGM</th>
                        <th>FG%</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedPlayers.slice(0, rowsToShow).map((player, index) => (
                        <tr
                            key={player.id}
                            className={highlightedIndices.includes(index) ? 'highlight' : ''}
                            onClick={() => onSelectPlayer(player)}
                        >
                            <td>{player.name}</td>
                            <td>{player.PTS}</td>
                            <td>{player.REB}</td>
                            <td>{player.AST}</td>
                            <td>{player.STL}</td>
                            <td>{player.BLK}</td>
                            <td>{player.TOV}</td>
                            <td>{player.FGM}</td>
                            <td>{player.FG_PCT}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Results;
