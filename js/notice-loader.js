import { getRelativeTime } from './utils.js';

export class NoticeLoader {
  async loadNotices(file, panel) {
    try {
      const response = await fetch(`content/${file}.md`);
      const text = await response.text();

      const noticeBlocks = text
        .split('================')
        .map((block) => block.trim())
        .filter((block) => block.length > 0);

      let noticesHTML = '<div style="padding: 20px 0;">';

      noticeBlocks.forEach((block) => {
        const lines = block.split('\n');
        let title = '';
        let date = '';
        let contentStart = 0;

        for (let i = 0; i < lines.length; i += 1) {
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
      console.error('Error loading notices:', error);
      panel.innerHTML = '<div style="padding: 30px; text-align: center;"><p style="font-size: 1.2em; color: #8b4513;">Error loading notices</p></div>';
    }
  }
}
