import React from 'react';
import { quickSort } from '../utils/sorting';

const Results = ({ results, onSelectPlayer, sortKey }) => {
  const sortedResults = quickSort(results, sortKey);

  return (
    <div>
      {sortedResults.map(player => (
        <div key={player.id} onClick={() => onSelectPlayer(player.id)}>
          <h3>{player.name}</h3>
          <p>Points: {player.points}</p>
          {/* Add other stats here */}
        </div>
      ))}
    </div>
  );
};

export default Results;