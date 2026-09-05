import { useState } from 'react'
import './App.css'

const RESUME_DATA = {
  personal: {
    name: "GAUTAM KUMAR",
    role: "Software Engineer | Full-Stack & Systems Developer",
    phone: "+91 7870645246",
    email: "gautamsinghh31@gmail.com",
    location: "Madhubani, Bihar, India",
    linkedin: "https://linkedin.com/in/gautamkumar78",
    linkedinDisplay: "linkedin.com/in/gautamkumar78",
    github: "https://github.com/Gautam-Desk",
    githubDisplay: "github.com/Gautam-Desk",


    summary:
      "Computer Science undergraduate pursuing a B.Tech at United Institute of Technology and an " +
      "AI & Data Science Minor from IIT Mandi. Skilled in building full-stack applications with " +
      "React.js, Node.js, Express, and MongoDB. Solving coding problems in C,C++,Python on LeetCode and " +
      "GeeksforGeeks. Deployed live projects on Vercel with CI/CD and built machine learning " +
      "pipelines using Python."
  },
  skills: [
    {
      category: "Languages",
      items: "C, C++, Python, JavaScript, HTML, CSS"
    },
    {
      category: "Frontend",
      items: "React.js, Vite"
    },
    {
      category: "Backend & DB",
      items: "Node.js, MongoDB"
    },
    {
      category: "ML & Data Science",
      items: "Python (Pandas, NumPy, Matplotlib, Scikit-Learn), Data Preprocessing"
    },
    {
      category: "Core Computer Science",
      items: "Data Structures & Algorithms (DSA), OOP"
    },
    {
      category: "Developer Tools",
      items: "Git, GitHub, Vercel, VS Code"
    }
  ],
  experience: [
    {
      title: "Skill-Based Developer Portfolio & Resume Engine",
      role: "Lead Full-Stack Developer",
      stack: "React, Vite, Node.js, Express, CSS3",
      period: "2025 – 2026",
      link: "https://github.com/Gautam-Desk/Skill-Based",
      bullets: [
        "Built a fast resume and developer portfolio website that loads in less than one second.",
        "Added one-click PDF printing, font style options, and plain-text copying for easy job applications.",
        "Created reusable components that work well on phones, tablets, and desktop computers."
      ]
    },
    {
      title: "DSproject — Machine Learning & Data Science Pipelines",
      role: "ML Developer",
      stack: "Python, Scikit-Learn, Pandas, NumPy, Matplotlib",
      period: "2025",
      link: "https://github.com/Gautam-Desk/DSproject",
      bullets: [
        "Developed end-to-end data science pipelines in Python for IIT Mandi Minor coursework, executing exploratory data analysis (EDA) and data cleansing.",
        "Trained and evaluated supervised classification and regression models using Scikit-Learn, measuring accuracy, precision, and recall metrics.",
        "Generated automated statistical visualizations with Matplotlib and Pandas to analyze feature correlations and distribution trends."
      ]
    },
    {
      title: "Gautam-Buddha Web Platform",
      role: "Frontend Developer",
      stack: "JavaScript, HTML, CSS, Vercel",
      period: "2025",
      link: "https://gautam-buddha-nine.vercel.app",
      bullets: [
        "Built a modern personal web application featuring modular DOM components and zero external runtime dependencies.",
        "Configured continuous deployment via Vercel with automated asset minification, achieving 95+ Google Lighthouse scores across Performance and Accessibility."
      ]
    },
    {
      title: "Algorithmic Problem Solving & Open Source",
      role: "Competitive Programmer",
      stack: "C, C++, Python, Algorithms, Git",
      period: "2024 – Present",
      link: "https://leetcode.com/u/GautamS31",
      bullets: [
        "practicing algorithmic problems on LeetCode (@GautamS31) and GeeksforGeeks (@gautams31) in C, C++, Python, mastering Arrays, Strings, Trees, and Dynamic Programming.",
        "Maintained public GitHub repositories adhering to semantic commits, clean directory structures, and comprehensive documentation."
      ]
    }
  ],
  certifications: [
    {
      title: "Minor in AI & Data Science",
      issuer: "IIT Mandi CCE & NSDC Verified Credential",
      meta: "Ref: IITMD_DSAI_2503437"
    },
    {
      title: "Competitive Programming (C, C++, Python)",
      issuer: "LeetCode (@GautamS31) & GeeksforGeeks (@gautams31)",
      meta: "Practice Challenges"
    },
    {
      title: "Full-Stack Web Deployments",
      issuer: "Vercel Global Edge Network",
      meta: "Automated CI/CD Pipelines"
    },
    {
      title: "Prompt Engineering & AI Prompting",
      issuer: "Self-directed learning with Outskill's Ultimate 3000+ Prompt Library",
      meta: "Completed Prompting Skills Study"
    }
  ],
  education: [
    {
      institution: "United Institute of Technology (UGI)",
      location: "Allahabad, UP",
      degree: "Bachelor of Technology in Computer Science & Engineering",
      period: "2025 – 2029",
      id: "UGI_CS_51250103 – 2029",
      details:
        "Relevant Coursework: Data Structures & Algorithms, Object-Oriented Programming (OOP), " +
        "Database Management Systems (DBMS), Operating Systems."
    },
    {
      institution: "Centre for Continuing Education (CCE), IIT Mandi",
      location: "Himachal Pradesh",
      degree: "Minor in Artificial Intelligence & Data Science Program",
      period: "2025 – 2026",
      id: "IITMD_DSAI_2503437",
      details:
        "Co-issued with NSDC & Masai. Covers Data Science, Machine " +
        "Learning, and Deep Learning Fundamentals."
    },
    {
      institution: "H.B.J. College & Mount Carmel English School",
      location: "Madhubani, Bihar",
      degree: "Senior Secondary (XII, Science - BSEB) & Secondary (X - CBSE)",
      period: "2021 – 2025",
      details:
        "Solid foundations in Mathematics, Physics, Chemistry, and Computer Applications."
    }
  ]
}

function App() {
  const [fontMode, setFontMode] = useState('sans') // 'sans' | 'serif'
  const [spacingMode, setSpacingMode] = useState('standard') // 'standard' | 'compact'
  const [toastMessage, setToastMessage] = useState('')

  const showToast = (msg) => {
    setToastMessage(msg)
    setTimeout(() => {
      setToastMessage('')
    }, 2800)
  }

  const handlePrint = () => {
    window.print()
  }

  const handleCopyPlainText = () => {
    const { personal, skills, experience, education, certifications } = RESUME_DATA

    let text = `${personal.name}\n`
    text += `${personal.role}\n`
    text += `${personal.phone} | ${personal.email} | ${personal.location}\n`
    text += `Portfolio: ${personal.portfolio} | GitHub: ${personal.github} | LinkedIn: ${personal.linkedin}\n\n`

    text += `SUMMARY\n----------------------------------------\n`
    text += `${personal.summary}\n\n`

    text += `TECHNICAL SKILLS\n----------------------------------------\n`
    skills.forEach(s => {
      text += `${s.category}: ${s.items}\n`
    })
    text += `\n`

    text += `PROJECTS & EXPERIENCE\n----------------------------------------\n`
    experience.forEach(exp => {
      text += `${exp.title} (${exp.period})\n`
      text += `${exp.role} | ${exp.stack}\n`
      exp.bullets.forEach(b => {
        text += `  • ${b}\n`
      })
      text += `\n`
    })

    text += `EDUCATION\n----------------------------------------\n`
    education.forEach(edu => {
      text += `${edu.degree} - ${edu.institution} (${edu.period})\n`
      text += `  ${edu.details}\n\n`
    })

    text += `CERTIFICATIONS & ACHIEVEMENTS\n----------------------------------------\n`
    certifications.forEach(c => {
      text += `• ${c.title} - ${c.issuer} (${c.meta})\n`
    })

    navigator.clipboard.writeText(text).then(() => {
      showToast('Resume copied to clipboard as plain text!')
    }).catch(() => {
      showToast('Unable to copy to clipboard.')
    })
  }

  const {
    personal,
    skills,
    experience,
    education,
    certifications
  } = RESUME_DATA

  return (
    <div className="page-container">
      {/* Interactive Top Toolbar (hidden on print) */}
      <aside className="resume-toolbar" aria-label="Resume control bar">
        <div className="toolbar-info">
          <span className="status-badge">ATS-Friendly</span>
          <span className="toolbar-title">Gautam Kumar &bull; Resume</span>
        </div>

        <div className="toolbar-actions">
          {/* Typography switch */}
          <div className="segmented-control" role="group" aria-label="Font style">
            <button
              type="button"
              className={`control-btn ${fontMode === 'sans' ? 'active' : ''}`}
              onClick={() => setFontMode('sans')}
            >
              Modern Sans
            </button>
            <button
              type="button"
              className={`control-btn ${fontMode === 'serif' ? 'active' : ''}`}
              onClick={() => setFontMode('serif')}
            >
              Classic Serif
            </button>
          </div>

          {/* Density switch */}
          <div className="segmented-control" role="group" aria-label="Layout density">
            <button
              type="button"
              className={`control-btn ${spacingMode === 'standard' ? 'active' : ''}`}
              onClick={() => setSpacingMode('standard')}
            >
              Standard
            </button>
            <button
              type="button"
              className={`control-btn ${spacingMode === 'compact' ? 'active' : ''}`}
              onClick={() => setSpacingMode('compact')}
            >
              Compact (1-Page)
            </button>
          </div>

          {/* Copy plain text */}
          <button
            type="button"
            className="btn-action btn-secondary"
            onClick={handleCopyPlainText}
            title="Copy plain text for job applications"
          >
            <svg
              className="icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
            Copy Text
          </button>

          {/* Print / Save PDF */}
          <button
            type="button"
            className="btn-action btn-primary"
            onClick={handlePrint}
            title="Open browser print dialog to save as PDF"
          >
            <svg
              className="icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 6 2 18 2 18 9"></polyline>
              <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
              <rect x="6" y="14" width="12" height="8"></rect>
            </svg>
            Print / Save PDF
          </button>
        </div>
      </aside>

      {/* Main Resume Sheet */}
      <main
        className={`resume-paper ${fontMode === 'serif' ? 'font-serif-mode' : 'font-sans-mode'} ${spacingMode === 'compact' ? 'spacing-compact' : ''
          }`}
      >

        {/* Header */}
        <header className="resume-header">
          <h1 className="resume-name">{personal.name}</h1>
          <p className="resume-role">{personal.role}</p>

          <div className="contact-row">
            <span className="contact-item">{personal.phone}</span>
            <span className="sep">&bull;</span>
            <a href={`mailto:${personal.email}`} className="contact-item">{personal.email}</a>
            <span className="sep">&bull;</span>
            <span className="contact-item">{personal.location}</span>
            <span className="sep">&bull;</span>
            <a href={personal.portfolio} target="_blank" rel="noreferrer" className="contact-item">
              Portfolio
            </a>
          </div>

          <div className="contact-row links-row">
            <a href={personal.linkedin} target="_blank" rel="noreferrer" className="contact-item">
              {personal.linkedinDisplay}
            </a>
            <span className="sep">&bull;</span>
            <a href={personal.github} target="_blank" rel="noreferrer" className="contact-item">
              {personal.githubDisplay}
            </a>
            <span className="sep">&bull;</span>
            <a href={personal.leetcode} target="_blank" rel="noreferrer" className="contact-item">
              {personal.leetcodeDisplay}
            </a>
            <span className="sep">&bull;</span>
            <a href={personal.gfg} target="_blank" rel="noreferrer" className="contact-item">
              {personal.gfgDisplay}
            </a>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="resume-section">
          <h2 className="section-heading">Professional Summary</h2>
          <div className="section-divider" />
          <p className="summary-paragraph">{personal.summary}</p>
        </section>

        {/* Technical Skills */}
        <section className="resume-section">
          <h2 className="section-heading">Technical Skills</h2>
          <div className="section-divider" />
          <div className="skills-container">
            {skills.map((s, idx) => (
              <div className="skills-row" key={idx}>
                <strong>{s.category}: </strong>
                <span>{s.items}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications & Achievements */}
        <section className="resume-section">
          <h2 className="section-heading">Certifications &amp; Achievements</h2>
          <div className="section-divider" />
          <ul className="resume-bullet-list">
            {certifications.map((c, idx) => (
              <li key={idx}>
                <strong>{c.title}:</strong> {c.issuer} &bull; <span>{c.meta}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Technical Projects & Experience */}
        <section className="resume-section">
          <h2 className="section-heading">Projects &amp; Technical Experience</h2>
          <div className="section-divider" />

          {experience.map((exp, idx) => (
            <article className="timeline-entry" key={idx}>
              <div className="entry-header">
                <strong>{exp.title}</strong>
                <time>{exp.period}</time>
              </div>
              <div className="entry-sub">
                <em>{exp.role} &bull; {exp.stack}</em>
                {exp.link && (
                  <a href={exp.link} target="_blank" rel="noreferrer" className="entry-link">
                    {exp.link.replace('https://', '')}
                  </a>
                )}
              </div>
              <ul className="resume-bullet-list">
                {exp.bullets.map((b, bIdx) => (
                  <li key={bIdx}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        {/* Education */}
        <section className="resume-section">
          <h2 className="section-heading">Education</h2>
          <div className="section-divider" />

          {education.map((edu, idx) => (
            <article className="timeline-entry" key={idx}>
              <div className="entry-header">
                <strong>{edu.institution}</strong>
                <span className="entry-loc">{edu.location}</span>
              </div>
              <div className="entry-sub">
                <em>{edu.degree}</em>
                <time>{edu.period}</time>
              </div>
              {edu.id && <span className="education-id">College ID: {edu.id}</span>}
              <p className="coursework-info">{edu.details}</p>
            </article>
          ))}
        </section>

      </main>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="toast-notice" role="alert">
          {toastMessage}
        </div>
      )}
    </div>
  )
}

export default App
