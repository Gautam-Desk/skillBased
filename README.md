# SkillBased — ATS-Friendly Dynamic Resume & Portfolio

An ATS-optimized, modern, single-column resume application and developer portfolio built with React and Vite. Designed for clean on-screen presentation, sub-second interactive page loads, 1-click clipboard export, and strict 1-page A4 / Letter Print-to-PDF export.

---

## Live Features

- **ATS Gold Standard Single-Column Layout**: Structured to pass Applicant Tracking Systems (ATS) with clean typography, clear section hierarchies, and high-contrast readability.
- **Strict 1-Page Print-to-PDF**: Print CSS rules (`@media print`) that automatically hide navigation controls, remove page shadows, and format margins cleanly for standard A4 and Letter documents.
- **1-Click Plain-Text Clipboard Export**: Instant markdown/text export of the entire resume for quick copy-pasting into job application forms and candidate portals.
- **Typography Switching**: Toggle on the fly between **Modern Sans** (`Inter`) and **Classic Serif** (`Merriweather`).
- **Layout Density Switching**: Toggle between **Standard** and **Compact (1-Page Fit)** layout density.
- **Verified Credentials & Links**: Direct interactive links to GitHub, LinkedIn, LeetCode, GeeksforGeeks, and production web deployments.

---

## Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite 8
- **Language**: JavaScript (ES Modules)
- **Styling**: Modern CSS3 (CSS Variables, Flexbox, Responsive Grid, Print Media Queries)
- **Fonts**: Google Fonts (`Inter`, `Merriweather`, `JetBrains Mono`)
- **Code Quality**: ESLint 10

---

## Project Structure

```text
skillBased/
├── Resume/
│   ├── public/              # Static assets and icons
│   ├── src/
│   │   ├── App.jsx          # Resume data structure and UI components
│   │   ├── App.css          # Core stylesheet, print styles, and responsive layout
│   │   ├── index.css        # Global CSS rules
│   │   └── main.jsx         # React application entry point
│   ├── eslint.config.js     # ESLint configuration
│   ├── index.html           # HTML template with Google Fonts
│   ├── package.json         # Project metadata and dependencies
│   └── vite.config.js       # Vite build configuration
├── .gitignore
└── README.md
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or higher recommended)
- `npm`

### Installation

```bash
cd Resume
npm install
```

### Running Locally

```bash
npm run dev
```

The application will start on `http://localhost:5173`.

### Production Build

```bash
npm run build
```

This compiles optimized production assets into `Resume/dist/`, ready to deploy on [Vercel](https://vercel.com/), [Netlify](https://www.netlify.com/), or [GitHub Pages](https://pages.github.com/).

---

## Author

**Gautam Kumar**  
- **GitHub**: [@Gautam-Desk](https://github.com/Gautam-Desk)  
- **LinkedIn**: [gautamkumar78](https://linkedin.com/in/gautamkumar78)  
- **LeetCode**: [GautamS31](https://leetcode.com/u/GautamS31)  
- **GeeksforGeeks**: [gautams31](https://geeksforgeeks.org/user/gautams31)  
- **Portfolio**: [gautam-buddha-nine.vercel.app](https://gautam-buddha-nine.vercel.app)
