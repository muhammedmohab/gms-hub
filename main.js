// Define tabs - easy to add more later
const tabs = [
  { id: 'notices', name: '📢 Alliance Notices', type: 'notices', file: 'notices' },
  { id: 'guides', name: '📚 Guides', type: 'guides' }
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

function generateTabs() {
  const tabBar = document.querySelector('.tab-bar');
  const tabContent = document.querySelector('.tab-content');
  
  tabs.forEach((tab, index) => {
    // Create tab button
    const button = document.createElement('button');
    button.className = 'tab-button' + (index === 0 ? ' active' : '');
    button.textContent = tab.name;
    button.onclick = () => switchTab(tab.id);
    tabBar.appendChild(button);
    
    // Create tab panel
    const panel = document.createElement('div');
    panel.className = 'tab-panel' + (index === 0 ? ' active' : '');
    panel.id = `tab-${tab.id}`;
    
    if (tab.type === 'guides') {
      const nav = document.createElement('div');
      nav.className = 'nav';
      panel.appendChild(nav);
    } else if (tab.type === 'notices' && tab.file) {
      loadNotices(tab.file, panel);
    } else if (tab.type === 'html' && tab.file) {
      loadHTMLPage(tab.file, panel);
    }
    
    tabContent.appendChild(panel);
  });
  
  // Load guides after tab generation
  generateNav();
}

async function loadHTMLPage(file, panel) {
  try {
    const res = await fetch(file);
    const html = await res.text();
    panel.innerHTML = html;
  } catch (error) {
    console.log('Error loading HTML page:', error);
    panel.innerHTML = '<div style="padding: 30px; text-align: center;"><p style="font-size: 1.2em; color: #8b4513;">Error loading page</p></div>';
  }
}



function getRelativeTime(dateString) {
  const publishDate = new Date(dateString);
  const now = new Date();
  const diffMs = now - publishDate;
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffMins = Math.floor(diffMs / (1000 * 60));
  
  if (diffDays > 30) {
    return publishDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  } else if (diffDays > 0) {
    return diffDays === 1 ? '1 day ago' : `${diffDays} days ago`;
  } else if (diffHours > 0) {
    return diffHours === 1 ? '1 hour ago' : `${diffHours} hours ago`;
  } else if (diffMins > 0) {
    return diffMins === 1 ? '1 minute ago' : `${diffMins} minutes ago`;
  } else {
    return 'just now';
  }
}

async function loadNotices(file, panel) {
  try {
    const res = await fetch(`content/${file}.md`);
    const text = await res.text();
    
    // Split notices by the separator (===============)
    const noticeBlocks = text.split('================').map(block => block.trim()).filter(block => block.length > 0);
    
    let noticesHTML = '<div style="padding: 20px 0;">';
    
    noticeBlocks.forEach(block => {
      const lines = block.split('\n');
      let title = '';
      let date = '';
      let contentStart = 0;
      
      // Extract title and date from the first lines
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].startsWith('title:')) {
          title = lines[i].replace('title:', '').trim();
        } else if (lines[i].startsWith('date:')) {
          date = lines[i].replace('date:', '').trim();
        } else if (lines[i] === '---') {
          contentStart = i + 1;
          break;
        }
      }
      
      if (title) {
        // Get content after the --- separator
        const contentLines = lines.slice(contentStart).join('\n').trim();
        const contentHTML = marked.parse(contentLines);
        const relativeTime = getRelativeTime(date || new Date().toISOString());
        
        noticesHTML += `
          <div style="max-width: 700px; margin: 0 auto 20px auto;">
            <div style="background: white; padding: 20px; border-left: 4px solid #d2691e; border-radius: 4px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <h2 style="color: #8b4513; margin-top: 0; margin-bottom: 8px;">${title}</h2>
              <p style="color: #999; font-size: 0.9em; margin: 0 0 15px 0;">📅 ${relativeTime}</p>
              <div style="color: #4b2e2e; line-height: 1.6;">${contentHTML}</div>
            </div>
          </div>
        `;
      }
    });
    
    noticesHTML += '</div>';
    panel.innerHTML = noticesHTML;
  } catch (error) {
    console.log('Error loading notices:', error);
    panel.innerHTML = '<div style="padding: 30px; text-align: center;"><p style="font-size: 1.2em; color: #8b4513;">Error loading notices</p></div>';
  }
}

function switchTab(tabId) {
  // Update buttons
  document.querySelectorAll('.tab-button').forEach(btn => {
    btn.classList.remove('active');
  });
  event.target.classList.add('active');
  
  // Update panels
  document.querySelectorAll('.tab-panel').forEach(panel => {
    panel.classList.remove('active');
  });
  document.getElementById(`tab-${tabId}`).classList.add('active');
}

function generateNav() {
  const navContainer = document.querySelector('#tab-guides .nav');
  if (!navContainer) return;
  
  pages.forEach(page => {
    const accordion = document.createElement('div');
    accordion.className = 'accordion';

    const button = document.createElement('button');
    button.className = 'accordion-btn';
    button.textContent = page.title;
    button.onclick = () => toggleAccordion(button, page.name);

    const panel = document.createElement('div');
    panel.className = 'panel';

    accordion.appendChild(button);
    accordion.appendChild(panel);
    navContainer.appendChild(accordion);
  });
}

function toggleAccordion(button, page) {
  var panel = button.nextElementSibling;
  panel.classList.toggle("active");
  if (panel.classList.contains("active") && panel.innerHTML === "") {
    loadPage(page, panel);
  }
}

async function loadPage(page, panel) {
  const res = await fetch(`content/${page}.md`);
  const text = await res.text();
  let html = marked.parse(text);
  html = processCallouts(html);
  panel.innerHTML = html;
}

function processCallouts(html) {
  // Create a temporary div to parse the HTML
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = html;

  // Find all blockquotes
  const blockquotes = tempDiv.querySelectorAll('blockquote');

  blockquotes.forEach(blockquote => {
    const firstP = blockquote.querySelector('p:first-child');
    if (firstP) {
      const text = firstP.textContent.trim();

      // Check for callout patterns
      const noteMatch = text.match(/^\[!(\w+)\]/);
      if (noteMatch) {
        const type = noteMatch[1].toLowerCase();
        blockquote.classList.add('callout', `callout-${type}`);
        blockquote.setAttribute('data-type', noteMatch[1]);

        // Remove the [!TYPE] from the content
        firstP.innerHTML = firstP.innerHTML.replace(/^\[!(\w+)\]\s*/, '');
      }
    }
  });

  return tempDiv.innerHTML;
}

async function loadRibbon() {
  try {
    const res = await fetch('ribbon.txt');
    const text = await res.text();
    const ribbonText = document.querySelector('.ribbon-text');
    if (ribbonText) {
      ribbonText.textContent = ' • ' + text.split('\n').filter(line => line.trim()).join(' • ') + ' • ';
    }
  } catch (error) {
    console.log('Ribbon text not found, using default');
  }
}

window.onload = function() {
  generateTabs();
  loadRibbon();
};