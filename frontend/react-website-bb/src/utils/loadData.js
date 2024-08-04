import kyrieData from './kyrie_irving_stats.json';
import larryBirdData from './larry_bird.json';
import lebronData from './lebron_stats.json';
import jordanData from './michael_jordan.json';

// Combine all player data into one array
export const loadPlayerData = () => {
  return [
    ...kyrieData.map(player => ({ ...player, name: 'Kyrie Irving' })),
    ...larryBirdData.map(player => ({ ...player, name: 'Larry Bird' })),
    ...lebronData.map(player => ({ ...player, name: 'LeBron James' })),
    ...jordanData.map(player => ({ ...player, name: 'Michael Jordan' })),
  ];
};
