import React from 'react';

const Search = ({ players, onSelectPlayer, onQueryChange }) => {
  const handleInputChange = (event) => {
    const query = event.target.value;
    onQueryChange(query);
  };

  // Commenting out the dropdown section
  // const handlePlayerSelect = (event) => {
  //   const selectedPlayer = players.find(player => player.name === event.target.value);
  //   onSelectPlayer(selectedPlayer);
  // };

  return (
    <div>
      <label htmlFor="player-search">Search Player:</label>
      <input
        id="player-search"
        type="text"
        placeholder="Type player name..."
        onChange={handleInputChange}
      />
      {/* Commented out dropdown
      <label htmlFor="player-select">Or Select Player:</label>
      <select id="player-select" onChange={handlePlayerSelect}>
        <option value="">--Select a Player--</option>
        {players.map(player => (
          <option key={player.Player_ID} value={player.name}>
            {player.name}
          </option>
        ))}
      </select>
      */}
    </div>
  );
};

export default Search;
