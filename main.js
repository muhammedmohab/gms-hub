const pages = [
  { name: 'bear', title: '🐻 Bear Trap' },
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
  panel.innerHTML = marked.parse(text);
}

window.onload = generateNav;