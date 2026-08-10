# HTML CSS JS Practice

A personal learning workspace for mastering **JavaScript** — with hands-on practice programs, student-friendly study notes, and a small HTML/CSS setup to run them.

> 🎯 **Purpose:** Learn JavaScript step-by-step by *writing and running code*, supported by clear, beginner-friendly notes.

---

## 📦 What's Inside

| Folder / File      | Purpose                                                                 |
|--------------------|-------------------------------------------------------------------------|
| `index.html`       | The main page that loads a practice script into the browser.            |
| `src/script/`      | JavaScript practice programs (one file per topic).                      |
| `src/styles/`      | CSS files used by the practice page.                                    |
| `notes/`           | Study notes: one complete guide + one file per topic.                   |
| `package.json`     | Project dependencies (Bootstrap, Bootstrap Icons).                      |

---

## 🚀 Getting Started

1. **Clone or open** this folder in any code editor (VS Code recommended).
2. **Open `index.html`** in a browser (or use the Live Server extension).
3. **Pick a topic** — uncomment the matching `<script>` tag in `index.html`:

   ```html
   <script src="src/script/Loop.js"></script>
   ```

4. **Check the result** — open the browser **Console** (`F12` → Console) to see the output of each program.

> 💡 Only one script is active at a time in `index.html`. Comment out the current one and uncomment another to switch topics.

---

## 📚 Practice Programs (`src/script/`)

| File             | Topic                                             |
|------------------|---------------------------------------------------|
| `Loop.js`        | Loops — `for`, `while`, `do-while`                |
| `Array.js`       | Arrays and array methods                          |
| `String.js`      | Strings and string methods                        |
| `Object.js`      | Objects, creation methods, and object methods     |
| `mathObject.js`  | Math object methods                               |
| `DateObject.js`  | Date object methods                               |
| `BOM.js`         | Browser Object Model (`window` properties/methods)|
| `DOM.js`         | Document Object Model — selectors & CRUD          |
| `Promises.js`    | Promises — states, `.then()`, `.catch()`          |
| `ES6.js`         | ES6 features — arrow functions, destructuring, spread, rest, `Map`, `Set`, `for...of` |

---

## 📖 Study Notes (`notes/`)

Two ways to learn:

1. **`notes/JavaScript-Complete-Notes.md`** — the full guide in one file (32+ topics from "What is JavaScript" to Events, Promises, and ES6).
2. **`notes/topics/`** — the same content split into **34 single-topic files** for focused reading:

```
01-what-is-javascript        ...   18-decision-making
02-history-of-javascript     ...   19-loops
03-ecmascript-versions       ...   20-break-and-continue
04-characteristics            ...   21-type-conversion
05-advantages                 ...   22-functions
06-disadvantages              ...   23-types-of-functions
07-java-vs-javascript         ...   24-closure-and-currying
08-js-engine                  ...   25-arrays
09-js-engines-of-browsers     ...   26-strings
10-writing-and-executing      ...   27-objects
11-tokens                     ...   28-math-object
12-variables                  ...   29-date-object
13-scope-of-variables         ...   30-bom
14-hoisting-and-tdz           ...   31-dom
15-var-let-const              ...   32-events
16-data-types                 ...   33-promises
17-operators                  ...   34-es6-features
```

> 📌 **Suggested learning path:** Read a topic's notes first, then run its matching practice file to see the code in action.

---

## 🧠 Suggested Learning Path

1. Variables, Data Types, Operators → `Loop.js`
2. Decision Making & Loops → `Loop.js`
3. Functions & Types of Functions → notes only (practice in console)
4. Arrays → `Array.js`
5. Strings → `String.js`
6. Objects → `Object.js`
7. Math & Date → `mathObject.js`, `DateObject.js`
8. BOM & DOM → `BOM.js`, `DOM.js`
9. Promises → `Promises.js`
10. ES6 Features → `ES6.js`

---

## 🛠️ Dependencies

| Package           | Version  |
|-------------------|----------|
| Bootstrap         | ^5.3.8   |
| Bootstrap Icons   | ^1.13.1  |

Install with:

```bash
npm install
```

---

## 📜 License

ISC — free to use for learning.
