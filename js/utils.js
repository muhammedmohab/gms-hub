export function getRelativeTime(dateString) {
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
  }

  return 'just now';
}

export function processCallouts(html) {
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = html;

  const blockquotes = tempDiv.querySelectorAll('blockquote');
  blockquotes.forEach((blockquote) => {
    const firstP = blockquote.querySelector('p:first-child');
    if (!firstP) return;

    const text = firstP.textContent.trim();
    const noteMatch = text.match(/^\[!(\w+)\]/);
    if (!noteMatch) return;

    const type = noteMatch[1].toLowerCase();
    blockquote.classList.add('callout', `callout-${type}`);
    blockquote.setAttribute('data-type', noteMatch[1]);
    firstP.innerHTML = firstP.innerHTML.replace(/^\[!(\w+)\]\s*/, '');
  });

  return tempDiv.innerHTML;
}
