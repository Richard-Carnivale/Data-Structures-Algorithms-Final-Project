import kyrieData from './kyrie_stats.json';
import larryBirdData from './larrybird_stats.json';
import lebronData from './lebron_stats.json';
import jordanData from './michaeljordan_stats.json';
import kobeData from './kobe_bryant_stats.json';
import shaqData from './shaq_stats.json';
import timDuncanData from './tim_duncan_stats.json';
import dwightHowardData from './dwight_howard_stats.json';
import dwyaneWadeData from './dwyane_wade_stats.json';
import paulPierceData from './paul_pierce_stats.json';
import rayAllenData from './ray_allen_stats.json';
import kevinGarnettData from './kevin_garnet_stats.json';
import chrisPaulData from './chris_paul_stats.json';
import carmeloData from './carmelo_anthony_stats.json';
import tonyParkerData from './tony_parker_stats.json';
import manuGinobiliData from './manu_ginobili_stats.json';
import steveNashData from './steve_nash_stats.json';
import chrisBoshData from './chris_bosh_stats.json';
import pauGasolData from './pau_gasol_stats.json';
import paulGeorgeData from './paul_george_stats.json';
import russellWestbrookData from './westbrook_stats.json';
import jamesHardenData from './harden_stats.json';
import anthonyDavisData from './ad_stats.json';
import giannisData from './giannis_stats.json';
import klayThompsonData from './klay_stats.json';
import damianLillardData from './damian_lillard_stats.json';
import demarDeRozanData from './demar_derozan_stats.json';
import jimmyButlerData from './jimmy_butler_stats.json';
import kyleLowryData from './kyle_lowry_stats.json';
import marcGasolData from './marc_gasol_stats.json';
import alHorfordData from './al_horford_stats.json';
import andreIguodalaData from './iguodala_stats.json';

// Combine all player data into one array
export const loadPlayerData = () => {
  return [
    ...kyrieData.map(player => ({ ...player, name: 'Kyrie Irving' })),
    ...larryBirdData.map(player => ({ ...player, name: 'Larry Bird' })),
    ...lebronData.map(player => ({ ...player, name: 'LeBron James' })),
    ...jordanData.map(player => ({ ...player, name: 'Michael Jordan' })),
    ...kobeData.map(player => ({ ...player, name: 'Kobe Bryant' })),
    ...shaqData.map(player => ({ ...player, name: 'Shaquille O\'Neal' })),
    ...timDuncanData.map(player => ({ ...player, name: 'Tim Duncan' })),
    ...dwightHowardData.map(player => ({ ...player, name: 'Dwight Howard' })),
    ...dwyaneWadeData.map(player => ({ ...player, name: 'Dwyane Wade' })),
    ...paulPierceData.map(player => ({ ...player, name: 'Paul Pierce' })),
    ...rayAllenData.map(player => ({ ...player, name: 'Ray Allen' })),
    ...kevinGarnettData.map(player => ({ ...player, name: 'Kevin Garnett' })),
    ...chrisPaulData.map(player => ({ ...player, name: 'Chris Paul' })),
    //...carmeloData.map(player => ({ ...player, name: 'Carmelo Anthony' })),
    //...tonyParkerData.map(player => ({ ...player, name: 'Tony Parker' })),
    //...manuGinobiliData.map(player => ({ ...player, name: 'Manu Ginóbili' })),
    //...steveNashData.map(player => ({ ...player, name: 'Steve Nash' })),
    //...chrisBoshData.map(player => ({ ...player, name: 'Chris Bosh' })),
    //...pauGasolData.map(player => ({ ...player, name: 'Pau Gasol' })),
    //...paulGeorgeData.map(player => ({ ...player, name: 'Paul George' })),
    //...russellWestbrookData.map(player => ({ ...player, name: 'Russell Westbrook' })),
    //...jamesHardenData.map(player => ({ ...player, name: 'James Harden' })),
    //...anthonyDavisData.map(player => ({ ...player, name: 'Anthony Davis' })),
    //...giannisData.map(player => ({ ...player, name: 'Giannis Antetokounmpo' })),
    //...klayThompsonData.map(player => ({ ...player, name: 'Klay Thompson' })),
    //...damianLillardData.map(player => ({ ...player, name: 'Damian Lillard' })),
    //...demarDeRozanData.map(player => ({ ...player, name: 'DeMar DeRozan' })),
    //...jimmyButlerData.map(player => ({ ...player, name: 'Jimmy Butler' })),
    //...kyleLowryData.map(player => ({ ...player, name: 'Kyle Lowry' })),
    //...marcGasolData.map(player => ({ ...player, name: 'Marc Gasol' })),
    //...alHorfordData.map(player => ({ ...player, name: 'Al Horford' })),
    //...andreIguodalaData.map(player => ({ ...player, name: 'Andre Iguodala' })),
  ];
};
