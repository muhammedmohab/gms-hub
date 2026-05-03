import { NoticeLoader } from './notice-loader.js';
import { GuideManager } from './guide-manager.js';

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
      } else if (tab.type === 'giftcodes') {
        this.loadGiftCodes(panel);
      } else if (tab.type === 'kingdomAge') {
        this.loadKingdomAge(panel);
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
      const response = await fetch(file);
      const html = await response.text();
      panel.innerHTML = html;
    } catch (error) {
      console.error('Error loading HTML page:', error);
      panel.innerHTML = '<div style="padding: 30px; text-align: center;"><p style="font-size: 1.2em; color: #8b4513;">Error loading page</p></div>';
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

  async loadGiftCodes(panel) {
    panel.innerHTML = `
      <div style="padding: 20px; max-width: 800px; margin: 0 auto;">
        <h2 style="color: #8b4513; text-align: center;">🎁 Available Gift Codes</h2>
        <p style="text-align: center; margin-bottom: 20px;">Click the copy button next to any gift code to copy it to your clipboard!</p>
        <div id="giftcodes-list" style="background: #fff8f0; padding: 20px; border-radius: 12px; border: 2px solid #d2691e;">
          <div style="text-align: center; padding: 20px;">
            <div class="loading-spinner" style="display: inline-block; width: 40px; height: 40px; border: 4px solid #f3f3f3; border-top: 4px solid #d2691e; border-radius: 50%; animation: spin 1s linear infinite;"></div>
            <p style="margin-top: 10px; color: #8b4513;">Loading gift codes...</p>
          </div>
        </div>
      </div>
      <style>
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .gift-code-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #f5e6d3;
          padding: 10px 15px;
          margin-bottom: 10px;
          border-radius: 8px;
          border: 1px solid #d2691e;
        }
        .gift-code-text {
          font-family: monospace;
          font-size: 16px;
          font-weight: bold;
          color: #4b2e2e;
        }
        .copy-btn {
          background: #d2691e;
          color: white;
          border: none;
          padding: 8px 12px;
          border-radius: 6px;
          cursor: pointer;
          font-size: 14px;
          transition: background 0.2s;
        }
        .copy-btn:hover {
          background: #b8571f;
        }
        .copy-btn.copied {
          background: #28a745;
        }
        .gift-code-details {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          min-width: 0;
          gap: 6px;
        }
        .gift-code-meta {
          font-size: 0.9em;
          color: #8b4513;
          margin-top: 4px;
        }
      </style>
    `;

    try {
      const response = await fetch('https://kingshot.net/api/gift-codes');
      if (!response.ok) {
        throw new Error('Failed to fetch gift codes');
      }
      const data = await response.json();
      const listContainer = panel.querySelector('#giftcodes-list');
      const codes = data?.data?.giftCodes || [];

      if (codes.length > 0) {
        listContainer.innerHTML = codes
          .map((item) => `
            <div class="gift-code-item">
              <div class="gift-code-details">
                <div class="gift-code-text">${item.code}</div>
                <div class="gift-code-meta">Expires: ${item.expiresAt ? new Date(item.expiresAt).toLocaleDateString() : 'Never'}</div>
              </div>
              <button type="button" class="copy-btn" data-code="${item.code}">Copy</button>
            </div>
          `)
          .join('');

        listContainer.querySelectorAll('.copy-btn').forEach((button) => {
          button.addEventListener('click', () => {
            const code = button.dataset.code;
            copyToClipboard(code, button);
          });
        });
      } else {
        listContainer.innerHTML = '<p style="text-align: center; color: #8b4513;">No gift codes available at the moment.</p>';
      }
    } catch (error) {
      console.error('Error loading gift codes:', error);
      const listContainer = panel.querySelector('#giftcodes-list');
      listContainer.innerHTML = '<p style="text-align: center; color: #ef0006;">Failed to load gift codes. Please try again later.</p>';
    }

    const copyToClipboard = (text, btn) => {
      navigator.clipboard.writeText(text).then(() => {
        btn.textContent = 'Copied!';
        btn.classList.add('copied');
        setTimeout(() => {
          btn.textContent = 'Copy';
          btn.classList.remove('copied');
        }, 2000);
      }).catch((err) => {
        console.error('Failed to copy: ', err);
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        btn.textContent = 'Copied!';
        btn.classList.add('copied');
        setTimeout(() => {
          btn.textContent = 'Copy';
          btn.classList.remove('copied');
        }, 2000);
      });
    };
  }
}
