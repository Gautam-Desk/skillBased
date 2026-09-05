import React from 'react'

export function CertificationsSection({ certifications }) {
  return (
    <section className="resume-section" aria-labelledby="cert-heading">
      <h2 id="cert-heading" className="section-heading">Certifications &amp; Achievements</h2>
      <div className="section-divider" />
      <ul className="resume-bullet-list">
        {certifications.map((c) => (
          <li key={c.title}>
            <strong>{c.title}:</strong> {c.issuer} &bull; <span>{c.meta}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
