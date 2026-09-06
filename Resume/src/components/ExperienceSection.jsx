import React from 'react'

export function ExperienceSection({ experience }) {
  return (
    <section className="resume-section" aria-labelledby="exp-heading">
      <h2 id="exp-heading" className="section-heading">Projects &amp; Technical Experience</h2>
      <div className="section-divider" />

      {experience.map((exp) => (
        <article className="timeline-entry" key={exp.title}>
          <div className="entry-header">
            <h3 className="entry-title">{exp.title}</h3>
            <time className="entry-time" dateTime={exp.dateTime || exp.period}>{exp.period}</time>
          </div>
          <div className="entry-sub">
            <span className="entry-role-stack">
              <span className="entry-role">{exp.role}</span>
              <span className="entry-sep">&bull;</span>
              <span className="entry-tech">{exp.stack}</span>
            </span>
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
  )
}
