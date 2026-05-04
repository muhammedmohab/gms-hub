
async function loadGiftCodes() {
  const listContainer = document.getElementById('giftcodes-list');

  try {
    const response = await fetch("https://gms-hub.netlify.app/.netlify/functions/gift-codes");

    const data = await response.json();
    listContainer.innerHTML = '';
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
    const listContainer = document.getElementById('giftcodes-list');
    listContainer.innerHTML = '<p style="text-align: center; color: #ef0006;">Failed to load gift codes. Please try again later.</p>';
  }
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

export { loadGiftCodes };