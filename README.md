# 🍪 Grandma's House Alliance Hub

> **Making game guides accessible, readable, and beautiful for everyone.**

A simple yet powerful web application designed to help gaming communities organize and share strategies, guides, and event information in an easy-to-read format. Perfect for alliance leaders, content creators, and communities who want to make their knowledge accessible to all players—regardless of language.

## 📖 Why This Project Exists

In gaming communities, sharing knowledge can be chaotic. Discord threads get buried, guides get lost, and important strategies become hard to find. We created **Grandma's House Alliance Hub** to solve this problem.

This project provides:

- ✨ **Clean, Organized Interface** - No clutter, everything you need in one place
- 📄 **Easy Content Management** - Just add Markdown files, no complex setup required
- 🌍 **Built-in Translation** - Google Translate integration so everyone can read in their preferred language
- 📱 **Fully Responsive** - Works perfectly on mobile, tablet, and desktop
- 🎨 **Beautiful Styling** - A comfortable, welcoming design inspired by a grandmother's cozy kitchen
- 🚀 **Lightning Fast** - Lightweight and quick to load

Whether you're managing an alliance or just want to share gaming tips with friends, this hub makes it simple.

## 🎯 Features

### Accordion Navigation
Click any button to expand/collapse game guides and strategies. Only one section at a time to keep things clean and organized.

### Multi-Language Support
Thanks to Google Translate, players worldwide can read your content in their native language. No language barriers, just gaming knowledge.

### Image Support
Add screenshots, diagrams, and images to your guides. They're automatically styled with rounded corners, shadows, and smooth hover effects.

### Responsive Design
Perfect on any device. Mobile players get a clean, readable experience just like desktop users.

### Discord Integration
Direct link to your Discord community right in the header, making it easy for players to join and discuss strategies.

### Dynamic Navigation
Add new guides by simply:
1. Creating a `.md` file in the `content/` folder
2. Adding an entry to the `pages` array in `main.js`

That's it! No rebuilding, no complex config files.

## 🚀 Quick Start

### Installation

1. **Clone this repository**
   ```bash
   git clone https://github.com/yourusername/gms-hub.git
   cd gms-hub
   ```

2. **Open in your browser**
   - Simply open `index.html` in your web browser
   - Or serve with a local server:
     ```bash
     python -m http.server 8000
     # Then visit http://localhost:8000
     ```

### Adding New Content

1. **Create a new Markdown file** in the `content/` folder
   ```bash
   content/your-guide.md
   ```

2. **Write your guide** in Markdown format
   ```markdown
   # Your Guide Title
   
   Your content here...
   
   ![Image Alt](image-url.jpg)
   ```

3. **Add to navigation** in `main.js`
   ```javascript
   const pages = [
     { name: 'bear', title: '🐻 Bear Trap' },
     { name: 'your-guide', title: '📖 Your Guide Title' }  // Add this line
   ];
   ```

4. **Refresh your browser** - Your new guide is live!

## 📁 Project Structure

```
gms-hub/
├── index.html          # Main HTML file
├── main.js             # JavaScript logic & page configuration
├── style.css           # All styling (desktop & mobile responsive)
├── README.md           # This file
└── content/
    ├── bear.md         # Example game strategy
    └── your-guide.md   # Add your guides here
```

## 🛠️ Customization

### Change the Theme
Edit the color variables in `style.css`:
- `#d2691e` - Primary color (brown)
- `#f5e6d3` - Background color (cream)
- `#4b2e2e` - Text color (dark brown)

### Modify the Discord Link
In `index.html`, find the Discord button and update the URL:
```html
<a href="https://your-discord-link.gg" target="_blank" class="discord-button">🎮 Join Our Discord</a>
```

### Change the Title
Update both the browser tab and header text in `index.html`:
```html
<title>Your Title 🍪</title>
<h1>🍪 Your Hub Name</h1>
```

## 🌐 Deploy to GitHub Pages

Make your hub live for free using GitHub Pages:

1. **Push to GitHub**
   ```bash
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to Settings → Pages
   - Set source to `main` branch
   - Your hub will be live at `https://yourusername.github.io/gms-hub`

## 💡 Best Practices

### Content Tips
- **Keep guides focused** - One topic per guide
- **Use headings** - Structure your content with H2 and H3 headings
- **Add visuals** - Screenshots and diagrams improve understanding
- **Be conversational** - Guides are easier to follow when friendly and relaxed

### Navigation Tips
- **Use emojis** - Makes buttons visually distinct and fun (🐻 🔥 💡 etc.)
- **Keep titles short** - Works better on mobile devices
- **Logical order** - Put foundational guides first

### File Naming
- Use lowercase letters
- Use hyphens instead of spaces: `my-guide.md` ✅ not `my guide.md` ❌

## 🤝 Contributing

We welcome contributions! Whether it's:
- New guides or strategies
- Bug fixes
- Design improvements
- Translation suggestions
- Documentation improvements

**To contribute:**
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-guide`)
3. Commit your changes (`git commit -m 'Add amazing guide'`)
4. Push to the branch (`git push origin feature/amazing-guide`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - feel free to use it for your gaming community!

## 🎮 Used By

- Gaming Alliances
- Knowledge Bases

## 📞 Support

Have questions or need help? 
- 🐛 Found a bug? Open an issue
- 💬 Have a suggestion? Let's discuss it
- 🤔 Need help? Check existing issues or documentation

---

**Made with ❤️ for the gaming community**

*"Grandma's House Alliance Hub - Where Kingshot's game knowledge lives, and everyone's welcome."*
