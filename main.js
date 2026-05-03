import { TabManager } from './js/tab-manager.js';
import { RibbonLoader } from './js/ribbon-loader.js';

const tabs = [
  { id: 'notices', name: '📢 Alliance Notices', type: 'notices', file: 'notices' },
  { id: 'guides', name: '📚 Guides', type: 'guides' },
  { id: 'giftcodes', name: '🎁 Gift Codes', type: 'giftcodes' }
  // Add more tabs here: { id: 'events', name: '🎉 Events', type: 'notices', file: 'events' }
];

const pages = [
  { name: 'bear', title: '🐻 Bear Trap' },
  { name: 'mystic-trial', title: '🏰 Mystic Trial' },
  { name: 'eternitys-reach', title: '🏆 Eternity\'s Reach' },
  { name: 'swordland-showdown', title: '⚔️ Swordland Showdown' },
  { name: 'vikings-vengeance', title: '🛡️ Vikings Vengeance' },
  { name: 'island-guide', title: '🏝️ Island Guide' },
  { name: 'merchant-empire', title: '🏪 Merchant Empire' },
  { name: 'farm-account', title: '🌾 Farm Account' },
  { name: 'hall-of-governers', title: '🏆 Hall of Governors' },
  { name: 'kvk', title: '🏰 KvK / SvS' }
  // Add more pages here as objects: { name: 'filename', title: 'Display Title' }
];

window.addEventListener('load', () => {
  const tabManager = new TabManager(tabs, pages);
  tabManager.generateTabs();

  const ribbonLoader = new RibbonLoader();
  ribbonLoader.loadRibbon();
});
