export class RibbonLoader {
  async loadRibbon() {
    try {
      const response = await fetch('ribbon.txt');
      const text = await response.text();
      const ribbonText = document.querySelector('.ribbon-text');
      if (!ribbonText) return;

      const formattedText = text
        .split('\n')
        .map((line) => line.trim())
        .filter(Boolean)
        .join(' • ');

      ribbonText.textContent = formattedText ? ` • ${formattedText} • ` : 'Loading...';
    } catch (error) {
      console.error('Ribbon text not found, using default', error);
    }
  }
}