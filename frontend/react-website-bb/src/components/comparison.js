import React from 'react';

const Comparison = ({ player1, player2 }) => {
  return (
    <div>
      <h2>Comparison</h2>
      <div>
        <h3>{player1.name}</h3>
        <p>Points: {player1.points}</p>
        {/* Add other stats here */}
      </div>
      <div>
        <h3>{player2.name}</h3>
        <p>Points: {player2.points}</p>
        {/* Add other stats here */}
      </div>
    </div>
  );
};

export default Comparison;