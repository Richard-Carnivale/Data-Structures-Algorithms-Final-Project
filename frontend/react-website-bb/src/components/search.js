import React from 'react';

const Search = ({ players, onSelectPlayer }) => {
  const handleChange = (event) => {
    const selectedPlayer = players.find(player => player.name === event.target.value);
    onSelectPlayer(selectedPlayer);
  };

  return (
    <div>
      <label htmlFor="player-select">Select Player:</label>
      <select id="player-select" onChange={handleChange}>
        <option value="">--Select a Player--</option>
        {players.map(player => (
          <option key={player.id} value={player.name}>
            {player.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Search;
