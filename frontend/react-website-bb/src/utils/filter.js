export const filterPlayers = (players, query) => {
    if (!query) return players;
  
    return players.filter(player =>
      player.name.toLowerCase().includes(query.toLowerCase()) ||
      player.SEASON.toLowerCase().includes(query.toLowerCase())
    );
  };
  