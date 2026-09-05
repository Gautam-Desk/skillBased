# Skill-Based Resume

An ATS-friendly, responsive resume and developer portfolio interface built with React and Vite. The page is designed for browser viewing and clean PDF or plain-text export.

## Features

- Responsive resume layout for mobile, tablet, and desktop screens
- Print-optimized styling for PDF export
- Plain-text copy for job applications and ATS workflows
- Modern Sans and Classic Serif typography modes
- Standard and Compact layout density modes
- Project, skills, education, certifications, and contact sections
- Vite-powered development with ESLint checks

## Tech Stack

- React 19
- Vite 8
- JavaScript (ES modules)
- CSS3
- ESLint

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Vite will print the local development URL in the terminal, usually `http://localhost:5173`.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the project |

## Customizing Resume Content

Resume content is defined in the `RESUME_DATA` object near the top of `src/App.jsx`. Update the personal details, skills, experience, certifications, and education there. Styling and print behavior are maintained in `src/App.css` and `src/index.css`.

Do not place passwords, API keys, tokens, or other private credentials in the source code. Local environment files and common credential formats are excluded by the repository `.gitignore`.

## Project Structure

```text
src/
├── App.jsx       # Resume data and application UI
├── App.css       # Resume layout and component styles
├── index.css     # Global styles and print rules
└── main.jsx      # React entry point
public/           # Static public assets
```

## Production Build

Create the deployable files with:

```bash
npm run build
```

The generated `dist/` directory can be deployed to any static hosting provider, including Vercel, Netlify, GitHub Pages, or a standard web server.
