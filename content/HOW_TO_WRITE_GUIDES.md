# 📝 How to Write Guides for Grandma's Hub

Welcome R4s and R5s! Create guides **directly from GitHub's website** - no coding skills needed! 

---

## 🚀 Super Easy: Create a Guide in 5 Minutes

### Step 1: Open the Content Folder on GitHub

Click the **"Add file"** button → **"Create new file"**

### Step 2: Name Your Guide File
In the filename box, enter:
```
my-guide-name.md
```

**Rules:**
- Use lowercase
- Use hyphens for spaces (e.g., `bear-trap-strategy.md`)
- Must end with `.md`

### Step 3: Write Your Guide
Paste your guide content in the editor below. Use **Markdown** formatting (see examples below).

Example:
```markdown
# 🐻 Bear Trap Strategy

Welcome! This guide teaches the best bear trap tactics.

## What You Need
- Strong rally leaders
- Fast joiners

## How to Do It
1. Gather your troops
2. Rally your team
3. Attack!

> [!TIP]
> Always coordinate with teammates!
```

### Step 4: Commit Your File
At the bottom, click **"Commit new file"**

### Step 5: Edit main.js to Add Your Guide
1. Go back to the repo: `https://github.com/yourusername/gms-hub`
2. Click on **main.js** file
3. Click the **pencil icon** (Edit) in the top right
4. Find the `pages` array (looks like this):

```javascript
const pages = [
  { name: 'bear', title: '🐻 Bear Trap' },
  { name: 'mystic-trial', title: '🏰 Mystic Trial' },
```

5. Add your guide at the end (Copy and paste the line underneth and change the place holder text) before the closing `]`:

```javascript
  { name: 'my-guide-name', title: '🐻 My Guide Title' }
```

**Important:** `name` must match your filename (without `.md`)

6. Click **"Commit changes"**

### Step 6: Done! 🎉
Your guide appears instantly on the hub!

---

## 📖 Markdown Basics

### Headings
```markdown
# Main Title (Biggest)
## Section Title
### Subsection
```

### Text Formatting
```markdown
**bold text** → makes it bold
*italic text* → makes it italic
***bold and italic*** → both!
```

### Lists

**Bullet Points:**
```markdown
- Item one
- Item two
  - Sub-item
- Item three
```

**Numbered Lists:**
```markdown
1. First step
2. Second step
3. Third step
```

### Links
```markdown
[Click here](https://example.com)
```

### Images
```markdown
![Image description](https://image-url.jpg)
```

### Code
```markdown
Inline: `type this command`

Code block:
```
code here
```
```

---

## 🎨 Special: Callouts (Highlighted Boxes)

### 📌 Note
```markdown
> [!NOTE]
> Important information everyone should know
```

### 💡 Tip
```markdown
> [!TIP]
> Helpful pro tip to improve your strategy
```

### ⚠️ Warning
```markdown
> [!WARNING]
> Be careful! This could cause problems
```

### 🔴 Important
```markdown
> [!IMPORTANT]
> Critical - don't miss this!
```

---

## 📋 Full Example Guide

```markdown
# 🐻 Bear Trap Strategy

Welcome! This teaches the best bear trap tactics.

## 🍪 What You'll Need
- Strong rally leaders
- Fast joiners
- Correct heroes with lethality

## 🎯 How It Works

The bear trap is a coordinated rally attack. Here's the strategy:

> [!TIP]
> Always coordinate with your teammates before attacking!

## ⚔️ Step-by-Step

1. Gather 3-5 strong rally leaders
2. Each person gets ready with their troops
3. On signal, everyone attacks together
4. Massive damage to the enemy!

> [!WARNING]
> Never attack alone - you will lose!

## 📊 Best Troops & Heroes

- **Troop Type**: Heavy infantry (strongest)
- **Hero**: One with high Lethality
- **Research**: Lethality + Attack power

## 💬 Need Help?

Ask in Discord or message an R4/R5!
```

---

## ✨ Tips for Great Guides

1. **Use Emojis** - Makes it fun! 🎉
2. **Use Headings** - Break content into sections
3. **Use Lists** - Easier to read than long text
4. **Use Callouts** - Highlight important stuff
5. **Be Clear** - Write like you're explaining to grandma 👵
6. **Add Images** - Screenshots help a lot (if you can link them)

---

## 🔗 Quick Markdown Cheat Sheet

| What | Markdown |
|------|----------|
| Bold | `**text**` |
| Italic | `*text*` |
| Link | `[text](url)` |
| Heading 1 | `# text` |
| Heading 2 | `## text` |
| Bullet | `- item` |
| Number | `1. item` |
| Code | `` `code` `` |
| Tip Box | `> [!TIP]` |
| Warning Box | `> [!WARNING]` |

---

## 🎬 Full Workflow (Pictures in Words)

**1.** Go to GitHub repo → `content/` folder  
**2.** Click "Add file" → "Create new file"  
**3.** Name it: `my-guide.md`  
**4.** Write your guide using Markdown  
**5.** Click "Commit new file"  
**6.** Go back to repo, edit `main.js`  
**7.** Add your guide to the `pages` array  
**8.** Click "Commit changes"  
**9.** Done! Refresh the hub to see your guide 🎉

---

## 💡 Common Questions

**Q: Do I need to code?**  
A: No! Just type Markdown in a text box.

**Q: What if I make a mistake?**  
A: Just edit the file again - no big deal!

**Q: How do I add images?**  
A: Use image URLs (links to hosted images).

**Q: Can I see how others wrote their guides?**  
A: Yes! Check the existing `.md` files in `/content/` folder for examples.

---

## 🚀 Ready?

1. Open GitHub repo
2. Go to `content/` folder
3. Click "Add file" → "Create new file"
4. Start writing! 

**Have fun, and happy guide-writing!** 🍪💛


## 📖 Markdown Basics

### Headings
```markdown
# Main Title (Biggest)
## Section Title
### Subsection
#### Small heading
```

### Text Formatting
```markdown
**bold text** → **bold text**
*italic text* → *italic text*
***bold and italic*** → ***bold and italic***
```

### Lists

**Bullet Points:**
```markdown
- Item one
- Item two
  - Sub-item
  - Another sub-item
- Item three
```

**Numbered Lists:**
```markdown
1. First step
2. Second step
3. Third step
```

### Links
```markdown
[Click here](https://example.com)
```

### Images
```markdown
![Image description](https://image-url.jpg)
```



### Code (for commands, stats, etc.)
```markdown
Inline code: `use this command`

Code block:
```
command line code here
```
```

---

## 🎨 Special Formatting: Callouts

Use these to highlight important information:

### Note
```markdown
> [!NOTE]
> This is important information everyone should know
```

### Tip
```markdown
> [!TIP]
> This is a helpful pro tip to improve your strategy
```

### Warning
```markdown
> [!WARNING]
> Be careful! This could cause problems if done wrong
```

### Important
```markdown
> [!IMPORTANT]
> This is critical - don't miss this!
```

---

## 📋 Example Guide Template

```markdown
# 🐻 Bear Trap Strategy

Welcome! This guide teaches the best bear trap tactics.

## 🍪 What You'll Need
- Strong rally leaders
- Fast joiners
- Correct heroes

## 🎯 Strategy Overview

This is the main strategy explanation.

> [!TIP]
> Pro tip: Always coordinate with your team!

## ⚔️ Step-by-Step Instructions

1. First, gather your troops
2. Rally your teammates
3. Attack at the right time

> [!WARNING]
> Don't attack alone - you'll lose!

## 📊 Stats & Research

Here are important stats to boost:

- Lethality (VERY important)
- Attack Power
- Defense

## 🎓 Common Mistakes

- ❌ Attacking without allies
- ✅ Always use rally teams

## 💬 Questions?

Ask in Discord or message an R4/R5!
```

---

## ✨ Pro Tips

1. **Use Emojis** - They make guides fun! 🎉
2. **Keep it organized** - Use headings to break up sections
3. **Use callouts** - Highlight important info with `[!TIP]`, `[!WARNING]`
4. **Be clear** - Pretend you're explaining to a grandma 👵
5. **Use lists** - Easier to read than long paragraphs
6. **Add images** - Screenshots and diagrams help a lot

---

## 🔗 Markdown Cheat Sheet

| Element | Markdown |
|---------|----------|
| Bold | `**text**` |
| Italic | `*text*` |
| Link | `[text](url)` |
| Image | `![alt](url)` |
| Heading 1 | `# text` |
| Heading 2 | `## text` |
| Bullet | `- item` |
| Number | `1. item` |
| Code | `` `code` `` |
| Quote | `> text` |

---

## 📚 The Full Workflow (Step-by-Step)

```bash
# 1. Clone the repo
git clone https://github.com/yourusername/gms-hub.git
cd gms-hub

# 2. Create your guide
echo "# My Guide" > content/my-new-guide.md

# 3. Edit the file with your content (use a text editor)

# 4. Update main.js - add your guide to the pages array

# 5. Stage your changes
git add content/my-new-guide.md main.js

# 6. Commit with a clear message
git commit -m "Add: My Guide Title guide"

# 7. Push to GitHub
git push

# Done! Your guide is live! 🎉
```

---

## 💡 Need Help?

- Ask in Discord
- Message an R4 or R5
- Check other guides in `/content` for examples

**Happy writing, Grandma's apprentice!** 🍪💛


## 📖 Markdown Basics

### Headings
```markdown
# Main Title (Biggest)
## Section Title
### Subsection
#### Small heading
```

### Text Formatting
```markdown
**bold text** → **bold text**
*italic text* → *italic text*
***bold and italic*** → ***bold and italic***
```

### Lists

**Bullet Points:**
```markdown
- Item one
- Item two
  - Sub-item
  - Another sub-item
- Item three
```

**Numbered Lists:**
```markdown
1. First step
2. Second step
3. Third step
```

### Links
```markdown
[Click here](https://example.com)
```

### Images
```markdown
![Image description](https://image-url.jpg)
```

### Code (for commands, stats, etc.)
```markdown
Inline code: `use this command`

Code block:
```
command line code here
```
```

---

## 🎨 Special Formatting: Callouts

Use these to highlight important information:

### Note
```markdown
> [!NOTE]
> This is important information everyone should know
```

### Tip
```markdown
> [!TIP]
> This is a helpful pro tip to improve your strategy
```

### Warning
```markdown
> [!WARNING]
> Be careful! This could cause problems if done wrong
```

### Important
```markdown
> [!IMPORTANT]
> This is critical - don't miss this!
```

---

## 📋 Example Guide Template

```markdown
# 🐻 Bear Trap Strategy

Welcome! This guide teaches the best bear trap tactics.

## 🍪 What You'll Need
- Strong rally leaders
- Fast joiners
- Correct heroes

## 🎯 Strategy Overview

This is the main strategy explanation.

> [!TIP]
> Pro tip: Always coordinate with your team!

## ⚔️ Step-by-Step Instructions

1. First, gather your troops
2. Rally your teammates
3. Attack at the right time

> [!WARNING]
> Don't attack alone - you'll lose!

## 📊 Stats & Research

Here are important stats to boost:

- Lethality (VERY important)
- Attack Power
- Defense

## 🎓 Common Mistakes

- ❌ Attacking without allies
- ✅ Always use rally teams

## 💬 Questions?

Ask in Discord or message an R4/R5!

---

## ✨ Pro Tips

1. **Use Emojis** - They make guides fun! 🎉
2. **Keep it organized** - Use headings to break up sections
3. **Use callouts** - Highlight important info with [!TIP], [!WARNING]
4. **Be clear** - Pretend you're explaining to a grandma 👵
5. **Use lists** - Easier to read than long paragraphs
6. **Add images** - Screenshots and diagrams help a lot

---

## 🔗 Markdown Cheat Sheet

| Element | Markdown |
|---------|----------|
| Bold | `**text**` |
| Italic | `*text*` |
| Link | `[text](url)` |
| Image | `![alt](url)` |
| Heading 1 | `# text` |
| Heading 2 | `## text` |
| Bullet | `- item` |
| Number | `1. item` |
| Code | `` `code` `` |
| Quote | `> text` |

---

## 💡 Need Help?

- Ask in Discord
- Message Forsaken

**Happy writing, Grandma's apprentice!** 🍪💛
