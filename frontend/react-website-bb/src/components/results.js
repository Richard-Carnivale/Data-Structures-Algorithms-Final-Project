import React from 'react';
import { mergeSort } from '../utils/sorting';
import { filterPlayers } from '../utils/filter';

const Results = ({ players, query, sortKey, onSelectPlayer }) => {
  const filteredPlayers = filterPlayers(players, query); // Filter players based on the query.
  const sortedPlayers = mergeSort(filteredPlayers, sortKey); // Sort filtered players using the chosen sort key.

  return (
    <div>
      <h2>Player Stats</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Season</th>
            <th>Points</th>
            <th>Rebounds</th>
            <th>Assists</th>
            <th>Field Goals Made</th>
            <th>Field Goal Percentage</th>
            {/* Add more headers as needed */}
          </tr>
        </thead>
        <tbody>
          {sortedPlayers.map((player, index) => (
            <tr key={index} onClick={() => onSelectPlayer(player)} className="player-row">
              <td>{player.name}</td>
              <td>{player.SEASON}</td>
              <td>{player.PTS}</td>
              <td>{player.REB}</td>
              <td>{player.AST}</td>
              <td>{player.FGM}</td>
              <td>{(player.FG_PCT * 100).toFixed(2)}%</td>
              {/* Add more columns as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Results;
