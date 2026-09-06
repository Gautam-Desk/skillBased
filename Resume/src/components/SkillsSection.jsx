import React from 'react'

export function SkillsSection({ skills }) {
  return (
    <section className="resume-section" aria-labelledby="skills-heading">
      <h2 id="skills-heading" className="section-heading">Technical Skills</h2>
      <div className="section-divider" />
      <div className="skills-container">
        {skills.map((s) => (
          <div className="skills-row" key={s.category}>
            <span className="skills-label">{s.category}:</span>
            <span className="skills-items">{s.items}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
