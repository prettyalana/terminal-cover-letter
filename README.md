# Alana OS: A Terminal Cover Letter

My cover letter for the **Associate GTM Engineer** role at LeanTaaS, built as a website. It is a pink, macOS-style desktop with a working terminal window.

**Live site:** https://prettyalana.github.io/terminal-cover-letter/

Built with plain HTML, CSS, and vanilla JavaScript.

## How to use it

Open the live site in a desktop browser. A terminal window is already open.

| Action | What happens |
| --- | --- |
| Type `cover-letter` and press Enter | Opens my cover letter (PDF) in a new tab |
| Click the "Associate GTM Engineer Cover Letter" desktop icon | Opens the same PDF |
| Type anything else and press Enter | Prints `command not found: <what you typed>` |
| Press Enter on an empty line | Starts a new prompt line, like a real terminal |
| Type `clear` and press Enter | Clears the terminal output |
| Click the red button in the title bar | Closes the terminal window |
| Click the Terminal icon on the desktop | Reopens the terminal window |

## Features

- Terminal prompt with a blinking block cursor that follows the text as you type
- Command history that stacks above the live prompt, scrolling inside the window
- Desktop icons that open the cover letter and reopen the terminal
- A live clock in the menu bar that shortens itself on small screens
- Responsive menu bar that hides decorative items on narrow viewports

## How it works

**Typing and the cursor.** A real `<input>` sits on the page but is visually hidden (`opacity: 0`, 1px size, `pointer-events: none`). The browser handles all the typing, so editing, backspace, and pasting work normally. An `input` event copies the value into a visible `<code>` element, and a small blinking `<span>` sits right after it as the cursor. Clicking anywhere in the terminal calls `focus()` on the hidden input.

**Running commands.** The prompt line is a `<form>`. Pressing Enter fires a `submit` event, where I call `preventDefault()`, trim the text, and add a line to the output area showing the prompt plus what was typed. Then the input and the display text are cleared, and the command is checked:

- `cover-letter` calls `window.open` on the PDF path
- `clear` empties the output area
- anything else appends a `command not found` line

Output lines are added with `createElement`, `textContent`, and `append`, never `innerHTML`, so whatever a visitor types is treated as plain text.

**Closing and reopening.** The close button adds a `hidden` class to the window and the Terminal icon removes it. The class is written as `#terminal-window.hidden { display: none; }` so it overrides the window's `display: flex`.

**Responsive clock.** `window.matchMedia("(max-width: 600px)")` is checked inside the clock function, which runs every second, so the shorter date format applies as soon as the window is resized.

## Project structure

```
.
├── index.html     # Page structure: menu bar, desktop icons, terminal window
├── style.css      # All styling
├── script.js      # Clock, typing mirror, command handling, window open/close
├── documents/     # The cover letter PDF
└── assets/        # Icons and window button images
```

## Run it locally

No install is required beyond a static file server. From the project folder, either:

```bash
npx live-server
```

or use the Live Server extension in VS Code. Opening `index.html` directly also works for most things, but a server avoids path and caching surprises.

## Deployment

The site is hosted with GitHub Pages from the `main` branch. File paths are case-sensitive there, so `documents/Alana_Edwards_LeanTaaS_Cover_Letter.pdf` must match the real filename exactly. Paths in the HTML are relative (no leading `/`), since the site lives at `/terminal-cover-letter/` and not at the domain root.

## Accessibility

- The hidden input has an `aria-label`, and autocomplete, autocorrect, autocapitalize, and spellcheck are turned off so the browser does not interfere with commands.
- The window controls are real `<button>` elements with `aria-label`s, so they work with a keyboard.

## Known limitations and next steps

- The yellow (minimize) and green (maximize) buttons are decorative for now.
- The terminal window is not draggable yet.
- Icons from Font Awesome load from a CDN, so the heart in the menu bar needs a network connection.
- More commands such as `help` and `whoami` are planned.
