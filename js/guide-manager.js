import { processCallouts } from './utils.js';

export class GuideManager {
  constructor(pages) {
    this.pages = pages;
  }

  generateNav() {
    const navContainer = document.querySelector('#tab-guides .nav');
    if (!navContainer) return;

    this.pages.forEach((page) => {
      const accordion = document.createElement('div');
      accordion.className = 'accordion';

      const button = document.createElement('button');
      button.className = 'accordion-btn';
      button.textContent = page.title;
      button.addEventListener('click', () => this.toggleAccordion(button, page.name));

      const panel = document.createElement('div');
      panel.className = 'panel';

      accordion.appendChild(button);
      accordion.appendChild(panel);
      navContainer.appendChild(accordion);
    });
  }

  toggleAccordion(button, page) {
    const panel = button.nextElementSibling;
    panel.classList.toggle('active');

    if (panel.classList.contains('active') && panel.innerHTML === '') {
      this.loadPage(page, panel);
    }
  }

  async loadPage(page, panel) {
    try {
      const response = await fetch(`content/${page}.md`);
      const text = await response.text();
      let html = marked.parse(text);
      html = processCallouts(html);
      const disclaimer = '<div class="disclaimer"><strong>Disclaimer:</strong> This guide has been created by experienced players from GMS leadership. It represents their conclusions and is not intended to be the definitive or only way to play.</div>';
      html = disclaimer + html;
      panel.innerHTML = html;
    } catch (error) {
      console.error('Error loading guide page:', error);
      panel.innerHTML = '<div style="padding: 30px; text-align: center;"><p style="font-size: 1.2em; color: #8b4513;">Error loading guide</p></div>';
    }
  }
}
