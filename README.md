# 🍪 Grandma's House Alliance Hub

> **A cozy web hub for gaming guides, notices, and alliance strategy.**

A lightweight community portal built to organize game guides, alliance notices, and strategy tips in a clean, user-friendly format.

## 📖 What This Project Does

This site is designed for gaming communities who want a polished home for their content without a complex backend.

Key benefits:

- ✨ **Clean UI** for guides and notices
- 📄 **Markdown-based content** for easy editing
- 🌍 **Google Translate** built in for global accessibility
- 📱 **Responsive design** with mobile drawer navigation
- 🚀 **Modular JavaScript** for easier maintenance
- 🎮 **Discord quick-link** for community access

## 🎯 Core Features

- **Responsive tab navigation** for desktop users
- **Mobile drawer menu** for smaller screens
- **Accordion guide navigation** for expandable content
- **Markdown content loading** from `content/*.md`
- **Live notices panel** using markdown notice files
- **Google Translate widget** for client-side translation

## 🚀 Getting Started

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/gms-hub.git
   cd gms-hub
   ```

2. Open `index.html` in your browser or use a local server:
   ```bash
   python -m http.server 8000
   # Visit http://localhost:8000
   ```

### Project Structure

```
gms-hub/
├── index.html            # Main HTML page
├── main.js               # App entry point / module loader
├── js/
│   ├── tab-manager.js    # Tab and drawer navigation logic
│   ├── notice-loader.js  # Notice markdown loader
│   ├── guide-manager.js  # Guide accordion loader
│   ├── ribbon-loader.js  # Ribbon text loader
│   └── utils.js          # Shared helpers
├── style.css             # Site styling and responsive rules
├── README.md             # Project documentation
├── ribbon.txt            # Scrolling ribbon content
└── content/              # Markdown guides and notices
    ├── bear.md
    ├── notices.md
    └── ...
```

## 📝 Add New Guides

1. Create a new markdown file in `content/`:
   ```bash
   content/your-guide.md
   ```

2. Add the guide to the `pages` array in `main.js`:
   ```javascript
   const pages = [
     { name: 'bear', title: '🐻 Bear Trap' },
     { name: 'your-guide', title: '📖 Your Guide Title' }
   ];
   ```

3. Reload the page to see the new guide.

## 🛠️ Customize the Site

### Update the mobile drawer menu
The mobile drawer menu is generated automatically from the same tab list in `main.js`. Add or remove tabs there to update both desktop and mobile navigation.

### Change colors
Edit `style.css` to update the visual theme.

### Change the Discord link
Update the button in `index.html`:
```html
<a href="https://discord.gg/YOUR_LINK" target="_blank" class="discord-button">🎮 Join Our Discord</a>
```

## 💡 Development Notes

### Modular JS architecture
The app uses a modular JavaScript structure:

- `main.js` initializes the page and loads modules
- `js/tab-manager.js` handles tabs and drawer menu state
- `js/notice-loader.js` loads content from notice markdown files
- `js/guide-manager.js` builds accordion guide navigation
- `js/ribbon-loader.js` loads the scrolling ribbon message
- `js/utils.js` provides shared helper functions

### Mobile experience
On mobile, the top tab bar is hidden and replaced by a hamburger drawer menu for easy navigation.

## 🌐 Deploying

Use GitHub Pages or any static hosting provider:

1. Push your changes to GitHub:
   ```bash
   git push origin main
   ```

2. Enable GitHub Pages in the repository settings.

## 💬 Contributing

Contributions are welcome!

- Add new guides
- Improve styling
- Expand mobile behavior
- Fix bugs or improve docs

### Contribution workflow
1. Fork the repo
2. Create a branch: `git checkout -b feature/my-change`
3. Commit your work
4. Push the branch
5. Open a pull request

## 📜 License

MIT License

---

**Made for gaming communities who want a warm, simple place to store their best strategies.**
