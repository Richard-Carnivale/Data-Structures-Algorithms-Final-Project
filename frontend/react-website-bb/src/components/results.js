import React from 'react';
import { quickSort } from '../utils/sorting';
import { filterPlayers } from '../utils/filter';

const Results = ({ players, query, sortKey, onSelectPlayer }) => {
  const filteredPlayers = filterPlayers(players, query);
  const sortedPlayers = quickSort(filteredPlayers, sortKey);

  return (
    <div>
      <h2>Player Stats</h2>
      {sortedPlayers.map((player, index) => (
        <div key={index} onClick={() => onSelectPlayer(player)}>
          <h3>{player.name}</h3>
          <p>Season: {player.SEASON}</p>
          <p>Points: {player.PTS}</p>
          <p>Rebounds: {player.REB}</p>
          <p>Assists: {player.AST}</p>
          {/* Add more stats as needed */}
        </div>
      ))}
    </div>
  );
};

export default Results;
