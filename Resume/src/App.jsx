import { useState, useCallback } from 'react'
import './App.css'
import { RESUME_DATA } from './data/resumeData'
import { Toolbar } from './components/Toolbar'
import { ResumeHeader } from './components/ResumeHeader'
import { SkillsSection } from './components/SkillsSection'
import { ExperienceSection } from './components/ExperienceSection'
import { EducationSection } from './components/EducationSection'
import { CertificationsSection } from './components/CertificationsSection'
import { Toast } from './components/Toast'

function App() {
  const [settings, setSettings] = useState({
    font: 'sans', // 'sans' | 'serif'
    spacing: 'standard', // 'standard' | 'compact'
    accent: 'teal', // 'teal' | 'navy' | 'indigo' | 'slate'
    paperTheme: 'light' // 'light' | 'dark'
  })

  const [toastMessage, setToastMessage] = useState('')

  const showToast = useCallback((msg) => {
    setToastMessage(msg)
    setTimeout(() => {
      setToastMessage('')
    }, 3200)
  }, [])

  const handleDismissToast = useCallback(() => {
    setToastMessage('')
  }, [])

  const handleUpdateSetting = useCallback((key, value) => {
    setSettings((prev) => ({ ...prev, [key]: value }))
  }, [])

  const handlePrint = useCallback(() => {
    window.print()
  }, [])

  const handleCopyPlainText = useCallback(() => {
    const { personal, skills, experience, education, certifications } = RESUME_DATA

    let text = `${personal.name}\n`
    text += `${personal.role}\n`
    text += `${personal.phone} | ${personal.email} | ${personal.location}\n`
    text += `Portfolio: ${personal.portfolio || ''} | GitHub: ${personal.github} | LinkedIn: ${personal.linkedin}\n`
    if (personal.leetcode || personal.gfg) {
      text += `LeetCode: ${personal.leetcode || ''} | GeeksforGeeks: ${personal.gfg || ''}\n`
    }
    text += `\n`

    text += `SUMMARY\n----------------------------------------\n`
    text += `${personal.summary}\n\n`

    text += `TECHNICAL SKILLS\n----------------------------------------\n`
    skills.forEach((s) => {
      text += `${s.category}: ${s.items}\n`
    })
    text += `\n`

    text += `PROJECTS & EXPERIENCE\n----------------------------------------\n`
    experience.forEach((exp) => {
      text += `${exp.title} (${exp.period})\n`
      text += `${exp.role} | ${exp.stack}\n`
      if (exp.link) {
        text += `Link: ${exp.link}\n`
      }
      exp.bullets.forEach((b) => {
        text += `  • ${b}\n`
      })
      text += `\n`
    })

    text += `EDUCATION\n----------------------------------------\n`
    education.forEach((edu) => {
      text += `${edu.degree} - ${edu.institution} (${edu.period})\n`
      if (edu.id) text += `  ID: ${edu.id}\n`
      text += `  ${edu.details}\n\n`
    })

    text += `CERTIFICATIONS & ACHIEVEMENTS\n----------------------------------------\n`
    certifications.forEach((c) => {
      text += `• ${c.title} - ${c.issuer} (${c.meta})\n`
    })

    navigator.clipboard
      .writeText(text)
      .then(() => {
        showToast('Resume copied to clipboard as plain text!')
      })
      .catch(() => {
        showToast('Unable to copy to clipboard.')
      })
  }, [showToast])

  const handleDownloadJson = useCallback(() => {
    try {
      const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(RESUME_DATA, null, 2))
      const downloadAnchor = document.createElement('a')
      downloadAnchor.setAttribute('href', dataStr)
      downloadAnchor.setAttribute('download', 'gautam_kumar_resume.json')
      document.body.appendChild(downloadAnchor)
      downloadAnchor.click()
      downloadAnchor.remove()
      showToast('Resume downloaded as structured JSON!')
    } catch {
      showToast('Failed to export JSON.')
    }
  }, [showToast])

  const { personal, skills, experience, education, certifications } = RESUME_DATA

  return (
    <div className={`page-container theme-${settings.paperTheme}`}>
      {/* Interactive Top Toolbar (hidden on print) */}
      <Toolbar
        settings={settings}
        onUpdateSetting={handleUpdateSetting}
        onCopyText={handleCopyPlainText}
        onDownloadJson={handleDownloadJson}
        onPrint={handlePrint}
      />

      {/* Main Resume Sheet */}
      <main
        className={`resume-paper font-${settings.font}-mode spacing-${settings.spacing} accent-${settings.accent} paper-${settings.paperTheme}`}
        id="resume-document"
      >
        {/* Header */}
        <ResumeHeader personal={personal} />

        {/* Professional Summary */}
        <section className="resume-section" aria-labelledby="summary-heading">
          <h2 id="summary-heading" className="section-heading">Professional Summary</h2>
          <div className="section-divider" />
          <p className="summary-paragraph">{personal.summary}</p>
        </section>

        {/* Technical Skills */}
        <SkillsSection skills={skills} />

        {/* Certifications & Achievements */}
        <CertificationsSection certifications={certifications} />

        {/* Technical Projects & Experience */}
        <ExperienceSection experience={experience} />

        {/* Education */}
        <EducationSection education={education} />
      </main>

      {/* Toast Notification */}
      <Toast message={toastMessage} onDismiss={handleDismissToast} />
    </div>
  )
}

export default App
