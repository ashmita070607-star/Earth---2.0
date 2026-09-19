# 🌍 Earth 2.0 — Planet Simulator

> Design a world where humanity could survive.

**Earth 2.0** is an interactive, browser-based planet simulator. Tune a planet's size, distance from its star, atmosphere, water coverage, temperature, and gravity, then generate a **habitability score** to find out whether humans could actually live there.

Built with plain **HTML, CSS, and JavaScript** — no frameworks, no build step, no dependencies.

---

## ✨ Features

- 🪐 **Live planet preview** — the planet changes size, color, and atmospheric glow as you adjust the controls
- 🎚️ **Six configurable parameters** — size, distance from star, atmosphere, water coverage, temperature, and gravity
- 🧬 **Habitability analysis** — a score out of 100 with an animated progress bar and a written verdict
- ✏️ **Custom planet naming** — name your world and see it update in real time
- 📱 **Responsive design** — works on desktop and mobile
- 🌌 **Space-themed UI** — starfield background, glassmorphism panels, and gradient styling

---

## 🚀 Getting Started

No installation required.

1. **Clone the repository**
   ```bash
   git clone https://github.com/ashmita070607-star/Earth---2.0/tree/main
   cd <Earth---2.0>
   ```

2. **Open the app**

   Open `earth2.html` in any modern web browser (double-click it, or right-click → *Open with* → your browser).

Optionally, serve it locally:

```bash
# Python 3
python -m http.server 8000
# then visit http://localhost:8000/earth2.html
```

---

## 🎮 How to Use

1. Enter a **planet name** (or keep the default, *Nova Terra*).
2. Adjust the sliders and dropdown to design your world.
3. Watch the **planet preview** update as you go.
4. Click **🚀 Generate My Planet**.
5. Scroll down to the **Planetary Analysis** to see your habitability score, stats, and verdict.

### Configuration Parameters

| Parameter | Control | Range / Options | Default |
|---|---|---|---|
| Planet Name | Text input | Any text | Nova Terra |
| Planet Size | Slider | 0.5 – 2.0 Earth | 1.0 Earth |
| Distance from Star | Slider | 0.5 – 2.0 AU | 1.0 AU |
| Atmosphere | Dropdown | Earth-like, Thin, Thick, Toxic | Earth-like |
| Water Coverage | Slider | 0 – 100% | 70% |
| Average Temperature | Slider | -80 – 80 °C | 15 °C |
| Gravity | Slider | 0.2 – 2.0 G | 1.0 G |

---

## 🧮 How the Habitability Score Works

The final score is the sum of four factors, each worth up to **25 points** (100 total).

### 🌡 Temperature

| Range | Points |
|---|---|
| 5 °C to 25 °C (ideal) | 25 |
| -10 °C to 5 °C, or 25 °C to 40 °C | 18 |
| -30 °C to -10 °C, or 40 °C to 60 °C | 8 |
| Anything more extreme | 2 |

### 💧 Water Coverage

| Range | Points |
|---|---|
| 50% – 80% (ideal) | 25 |
| 30% – 50%, or 80% – 90% | 18 |
| Anything else | 8 |

### 🌫 Atmosphere

| Type | Points |
|---|---|
| Earth-like | 25 |
| Thin | 15 |
| Thick | 10 |
| Toxic | 0 |

### 🪐 Gravity

| Range | Points |
|---|---|
| 0.8 G – 1.2 G (ideal) | 25 |
| 0.6 G – 0.8 G, or 1.2 G – 1.4 G | 18 |
| Anything else | 8 |

### 📋 Verdicts

| Score | Verdict |
|---|---|
| 85 – 100 | 🌱 Highly suitable for human life |
| 65 – 84 | 🛰️ Potentially habitable, with adaptation or technology |
| 40 – 64 | ⚠️ Harsh environment; long-term survival would be difficult |
| 0 – 39 | ☠️ Extremely hostile; life-support systems required |

---

## 🎨 Visual Effects

- **Size** — the planet's on-screen diameter scales with the size slider.
- **Water** — the planet's color shifts with water coverage:
  - **70%+** → deep blue ocean world
  - **40–69%** → teal/green mixed world
  - **Below 40%** → brown, desert world
- **Atmosphere** — the glow around the planet changes: purple for toxic, bright blue for thick, and a soft blue for Earth-like/thin.

---

## 📁 Project Structure

```
├── earth2.html   # Page structure and markup
├── earth2.css    # Styling, layout, planet visuals, animations
├── earth2.js     # Interaction logic and habitability calculation
└── README.md     # Project documentation
```

---

## 🛠️ Built With

- **HTML5** — semantic page structure
- **CSS3** — gradients, grid, flexbox, `backdrop-filter`, keyframe animations, responsive media queries
- **Vanilla JavaScript (ES6)** — DOM manipulation and event handling

---

## 🔧 Customization

Want to tweak the simulation? Here's where to look:

- **Scoring thresholds and point values** — `calculateHabitability()` in `earth2.js`
- **Verdict messages** — the verdict section inside the `generateBtn` click handler in `earth2.js`
- **Planet colors and glow** — `updatePlanetWater()` and the atmosphere `change` listener in `earth2.js`
- **Theme colors and layout** — `earth2.css`

---

## 🗺️ Roadmap / Ideas

Currently, **planet size** and **distance from star** affect the visuals or display only — they don't yet influence the habitability score. Possible future improvements:

- [ ] Factor distance from star into temperature (habitable zone logic)
- [ ] Derive gravity automatically from planet size
- [ ] Add more atmosphere types (e.g., oxygen-rich, methane, carbon dioxide)
- [ ] Add a rotating planet animation and moons
- [ ] Save and share planet configurations
- [ ] Compare multiple planets side by side
- [ ] Random planet generator

---

## ⚠️ Disclaimer

This is an educational and entertainment project. The scoring model is a simplified approximation and is **not** a scientifically accurate assessment of real-world habitability.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to fork the repo and open a pull request.

---

## 📄 License

MIT license

---

<p align="center">EARTH 2.0 • Planetary Simulation Project</p>
