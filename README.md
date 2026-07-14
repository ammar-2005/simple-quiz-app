# 🧠 Simple Quiz App

## 💡 The Idea

Most people learning front-end development read about HTML, CSS, and JavaScript — but rarely test what actually stuck. **Simple Quiz App** turns that passive learning into an active check: a lightweight, single-page quiz that fires 20 multiple-choice questions covering core web fundamentals, gives instant right/wrong feedback, and tallies a final score.

The goal behind the project wasn't just "build a quiz" — it was to prove that a genuinely polished, interactive experience doesn't need a framework, a build step, or a single external dependency. Everything here — the logic, the state, the animations — is hand-written in plain HTML, CSS, and JavaScript.

## 🛠️ Tools & Technologies

| Tool | Role |
|---|---|
| **HTML5** | Semantic structure — a single static page, no templating engine |
| **CSS3** | All visual design: custom properties (`:root` variables), `@counter-style` for auto-labeling answers (A/B/C/D), `@keyframes` for entrance/feedback animations, responsive layout with media queries |
| **JavaScript (ES6+, Vanilla)** | App logic — DOM manipulation, event delegation, state tracking (current question, score) — zero libraries, zero frameworks |
| **Google Fonts** | Poppins (body/UI) & Fraunces (display heading) |
| **Git & GitHub** | Version control and hosting |

No React, no build tools, no `npm install`. Just three files doing exactly what they need to do — which is the whole point of the project: a clean demonstration of what vanilla web tools are capable of on their own.

## ✨ Features

- **20 multiple-choice questions** covering HTML, CSS, and JavaScript fundamentals
- Instant visual feedback — correct answers highlighted in green, incorrect in red
- Auto-generated answer labels (A, B, C, D) via pure CSS, no extra markup
- Score tracking with a summary screen at the end
- "Play Again" to restart the quiz from question 1
- Smooth entrance animations and interactive hover states
- Fully responsive — works cleanly on mobile and desktop

## 📂 Project Structure

```
quiz-app/
├── index.html
├── CSS/
│   └── style.css
├── js/
│   └── index.js
└── images/
    └── quiz.png
```


## ⚙️ How It Works

- Questions and answers live as a plain array of objects in `index.js`
- Clicking an answer disables all buttons, reveals the correct one, and updates the score
- Clicking "Next" advances to the next question — or shows the final score once all 20 are answered
- Clicking "Play Again" resets the quiz from question 1



## 📄 License

This project is open source and available under the [MIT License](LICENSE).
