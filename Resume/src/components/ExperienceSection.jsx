import React from 'react'

export function ExperienceSection({ experience }) {
  return (
    <section className="resume-section" aria-labelledby="exp-heading">
      <h2 id="exp-heading" className="section-heading">Projects &amp; Technical Experience</h2>
      <div className="section-divider" />

      {experience.map((exp) => (
        <article className="timeline-entry" key={exp.title}>
          <div className="entry-header">
            <strong>{exp.title}</strong>
            <time dateTime={exp.dateTime || exp.period}>{exp.period}</time>
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
  )
}
