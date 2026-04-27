const pages = [
  { name: 'bear', title: '🐻 Bear Trap' },
  { name: 'mystic-trial', title: '🏰 Mystic Trial' },
  { name: 'eternitys-reach', title: '🏆 Eternity\'s Reach' },
  { name: 'swordland-showdown', title: '⚔️ Swordland Showdown' },
  { name: 'vikings-vengeance', title: '🛡️ Vikings Vengeance' },
  { name: 'island-guide', title: '🏝️ Island Guide' },
  { name: 'merchant-empire', title: '🏪 Merchant Empire' },
  { name: 'hall-of-governers', title: '🏆 Hall of Governors' }
  { name: 'kvk', title: '🏰 KvK / SvS' }
  // Add more pages here as objects: { name: 'filename', title: 'Display Title' }
];

function generateNav() {
  const nav = document.querySelector('.nav');
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
    nav.appendChild(accordion);
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
      ribbonText.textContent = ' • ' + text.trim('//') + ' • ';
    }
  } catch (error) {
    console.log('Ribbon text not found, using default');
  }
}

window.onload = function() {
  generateNav();
  loadRibbon();
};