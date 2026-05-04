import { NoticeLoader } from './notice-loader.js';
import { GuideManager } from './guide-manager.js';
import { loadGiftCodes } from './pages/gift-codes.js';

export class TabManager {
  constructor(tabs, pages) {
    this.tabs = tabs;
    this.pages = pages;
    this.tabBar = document.querySelector('.tab-bar');
    this.tabContent = document.querySelector('.tab-content');
    this.drawerToggle = document.querySelector('.drawer-toggle');
    this.drawer = document.querySelector('.drawer');
    this.drawerBackdrop = document.querySelector('.drawer-backdrop');
    this.drawerItems = document.querySelector('.drawer-items');
    this.drawerClose = document.querySelector('.drawer-close');
    this.noticeLoader = new NoticeLoader();
    this.guideManager = new GuideManager(pages);
  }

  generateTabs() {
    this.tabs.forEach((tab, index) => {
      const button = this.createTabButton(tab, index === 0);
      this.tabBar.appendChild(button);

      if (this.drawerItems) {
        const drawerButton = this.createDrawerButton(tab, index === 0);
        this.drawerItems.appendChild(drawerButton);
      }

      const panel = document.createElement('div');
      panel.className = 'tab-panel' + (index === 0 ? ' active' : '');
      panel.id = `tab-${tab.id}`;

      if (tab.type === 'guides') {
        const nav = document.createElement('div');
        nav.className = 'nav';
        panel.appendChild(nav);
      } else if (tab.type === 'notices' && tab.file) {
        this.noticeLoader.loadNotices(tab.file, panel);
      } else if (tab.type === 'html' && tab.file) {
        this.loadHTMLPage(tab.file, panel);
      } else {
        panel.innerHTML = '<div style="padding: 30px; text-align: center;"><p style="font-size: 1.2em; color: #8b4513;">Content coming soon!</p></div>';
      }

      this.tabContent.appendChild(panel);
    });

    this.guideManager.generateNav();
    this.bindDrawerEvents();
  }

  createTabButton(tab, isActive) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'tab-button' + (isActive ? ' active' : '');
    button.textContent = tab.name;
    button.addEventListener('click', (event) => this.switchTab(tab.id, event.currentTarget));
    return button;
  }

  createDrawerButton(tab, isActive) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'drawer-button' + (isActive ? ' active' : '');
    button.textContent = tab.name;
    button.addEventListener('click', (event) => {
      this.switchTab(tab.id, event.currentTarget);
      this.closeDrawer();
    });
    return button;
  }

  bindDrawerEvents() {
    if (this.drawerToggle) {
      this.drawerToggle.addEventListener('click', () => this.openDrawer());
    }

    if (this.drawerClose) {
      this.drawerClose.addEventListener('click', () => this.closeDrawer());
    }

    if (this.drawerBackdrop) {
      this.drawerBackdrop.addEventListener('click', () => this.closeDrawer());
    }

    window.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && this.drawer && this.drawer.classList.contains('open')) {
        this.closeDrawer();
      }
    });
  }

  async loadHTMLPage(file, panel) {
    try {
      const response = await fetch(`./pages/${file}.html`);
      const html = await response.text();
      panel.innerHTML = html;
      await this.loadJavaScriptPage(file);
    } catch (error) {
      console.error('Error loading HTML page:', error);
      panel.innerHTML = '<div style="padding: 30px; text-align: center;"><p style="font-size: 1.2em; color: #8b4513;">Error loading page</p></div>';
    }
  }

  async loadJavaScriptPage(file) {
    try {
      if (file === 'gift-codes') {
        await loadGiftCodes();
      }
      // Add more cases here for other JavaScript-based pages if needed
    } catch (error) {
      console.error('Error loading JavaScript page:', error);
    }
  }

  switchTab(tabId, button) {
    this.tabBar.querySelectorAll('.tab-button').forEach((btn) => btn.classList.remove('active'));
    this.drawerItems?.querySelectorAll('.drawer-button').forEach((btn) => btn.classList.remove('active'));

    if (button) {
      button.classList.add('active');
    }

    const targetPanel = document.getElementById(`tab-${tabId}`);
    if (targetPanel) {
      this.tabContent.querySelectorAll('.tab-panel').forEach((panel) => panel.classList.remove('active'));
      targetPanel.classList.add('active');
    }
  }

  openDrawer() {
    if (!this.drawer || !this.drawerBackdrop || !this.drawerToggle) return;
    this.drawer.classList.add('open');
    this.drawerBackdrop.classList.add('visible');
    this.drawerBackdrop.hidden = false;
    this.drawer.setAttribute('aria-hidden', 'false');
    this.drawerToggle.setAttribute('aria-expanded', 'true');
    document.body.classList.add('drawer-open');
  }

  closeDrawer() {
    if (!this.drawer || !this.drawerBackdrop || !this.drawerToggle) return;
    this.drawer.classList.remove('open');
    this.drawerBackdrop.classList.remove('visible');
    this.drawerBackdrop.hidden = true;
    this.drawer.setAttribute('aria-hidden', 'true');
    this.drawerToggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('drawer-open');
  }

}
