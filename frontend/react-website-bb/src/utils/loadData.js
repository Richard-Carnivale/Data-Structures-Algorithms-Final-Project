import kyrieData from './kyrie_stats.json';
import larryBirdData from './larrybird_stats.json';
import lebronData from './lebron_stats.json';
import jordanData from './michaeljordan_stats.json';

// Combine all player data into one array
export const loadPlayerData = () => {
  return [
    ...kyrieData.map(player => ({ ...player, name: 'Kyrie Irving' })),
    ...larryBirdData.map(player => ({ ...player, name: 'Larry Bird' })),
    ...lebronData.map(player => ({ ...player, name: 'LeBron James' })),
    ...jordanData.map(player => ({ ...player, name: 'Michael Jordan' })),
  ];
};
