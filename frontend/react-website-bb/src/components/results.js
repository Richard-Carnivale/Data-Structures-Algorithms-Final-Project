import React from 'react';
import { quickSort } from '../utils/sorting';
import { mergeSort } from '../utils/sorting';
import { filterPlayers } from '../utils/filter';

const Results = ({ players, query, sortKey, onSelectPlayer }) => {
  const filteredPlayers = filterPlayers(players, query); // First, filter players based on the query.
  const sortedPlayers = mergeSort(filteredPlayers, sortKey); // Then, sort the filtered players using the chosen sort key.

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
