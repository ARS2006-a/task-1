# 🎹 Keyboard Piano

> Transform your computer keyboard into a fully playable musical instrument — right in the browser.

---

## 📖 Project Description

**Keyboard Piano** is a browser-based interactive piano that maps your keyboard keys to real piano notes. Using the Web Audio API, it generates authentic piano tones in real time with zero dependencies. Press a key, hear a note, watch the key light up — it's that simple.

---

## ✨ Features

- 🎵 **9 Playable Keys** — A S D F G H J K L mapped to notes C D E F G A B C D
- 🔊 **Real-Time Sound** — Tones generated via the Web Audio API (no audio files needed)
- 🎨 **Visual Feedback** — Keys animate and highlight on press or click
- 🖱️ **Mouse & Keyboard Support** — Play with clicks or keystrokes
- 📊 **Live Stats** — Tracks total notes played and the last note pressed
- 🔄 **Reset Button** — Clears stats with one click
- 📱 **Responsive Design** — Works on desktop, tablet, and mobile

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Page structure and semantics |
| CSS3 | Styling, layout, animations |
| JavaScript (Vanilla) | Piano logic, event handling |
| Web Audio API | Real-time sound synthesis |

No external libraries or frameworks — pure, lightweight code.

---

## ⚙️ Installation Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/ARS2006-a/task-1.git
   cd task-1
   ```

2. No build step or package installation is required.

---

## 🚀 How to Run the Project

### Option 1 — Direct Open (Easiest)
Double-click `index.html` to open it in your browser. Done.

### Option 2 — Python Local Server
```bash
python server.py
```
Then open [http://localhost:8000](http://localhost:8000) in your browser.

### Option 3 — VS Code Live Server
1. Install the **Live Server** extension in VS Code
2. Right-click `index.html` → **Open with Live Server**

---

## 📂 Project Structure

```
keyboard-piano/
├── index.html    # Main HTML structure and layout
├── style.css     # Styling, animations, and responsive design
├── script.js     # Piano logic and Web Audio API sound generation
├── server.py     # Simple Python HTTP server for local development
└── README.md     # Project documentation
```

---

## 🔮 Future Improvements

- [ ] Add black (sharp/flat) keys for a full octave
- [ ] Support multiple octaves
- [ ] Add a recording and playback feature
- [ ] Add different instrument sounds (guitar, xylophone, etc.)
- [ ] Display sheet music or note names as you play
- [ ] Add a song tutorial / guided play mode

---

## 🤝 Contribution Guidelines

Contributions are welcome! To contribute:

1. **Fork** this repository
2. **Create a branch** for your feature: `git checkout -b feature/your-feature-name`
3. **Commit** your changes with a clear message: `git commit -m "Add: description of change"`
4. **Push** to your fork: `git push origin feature/your-feature-name`
5. **Open a Pull Request** describing what you changed and why

Please keep changes beginner-friendly, avoid breaking existing functionality, and follow the existing code style.

---

## 🎵 Try Playing These Songs

| Song | Keys |
|---|---|
| Twinkle Twinkle Little Star | A A G G H H G |
| Mary Had a Little Lamb | D S A S D D D |
| Hot Cross Buns | D S A D S A |

---

Made with 🎵 and creativity
