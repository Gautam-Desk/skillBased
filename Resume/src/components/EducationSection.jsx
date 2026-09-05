import React from 'react'

export function EducationSection({ education }) {
  return (
    <section className="resume-section" aria-labelledby="edu-heading">
      <h2 id="edu-heading" className="section-heading">Education</h2>
      <div className="section-divider" />

      {education.map((edu) => (
        <article className="timeline-entry" key={edu.institution + edu.degree}>
          <div className="entry-header">
            <strong>{edu.institution}</strong>
            <span className="entry-loc">{edu.location}</span>
          </div>
          <div className="entry-sub">
            <em>{edu.degree}</em>
            <time dateTime={edu.dateTime || edu.period}>{edu.period}</time>
          </div>
          {edu.id && <span className="education-id">College ID: {edu.id}</span>}
          <p className="coursework-info">{edu.details}</p>
        </article>
      ))}
    </section>
  )
}
