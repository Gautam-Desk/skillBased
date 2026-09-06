import React from 'react'

export function Toolbar({
  settings,
  onUpdateSetting,
  onCopyText,
  onDownloadJson,
  onPrint
}) {
  const accentColors = [
    { id: 'teal', label: 'Teal', hex: '#176b68' },
    { id: 'navy', label: 'Navy', hex: '#1e3a8a' },
    { id: 'indigo', label: 'Indigo', hex: '#4338ca' },
    { id: 'slate', label: 'Slate', hex: '#334155' }
  ]

  return (
    <nav className="resume-toolbar" role="toolbar" aria-label="Resume controls and actions">
      <div className="toolbar-info">
        <span className="toolbar-title">Gautam Kumar &bull; Resume</span>
      </div>

      <div className="toolbar-actions">
        {/* Typography switch */}
        <div className="segmented-control" role="group" aria-label="Font style">
          <button
            type="button"
            className={`control-btn ${settings.font === 'sans' ? 'active' : ''}`}
            onClick={() => onUpdateSetting('font', 'sans')}
            aria-pressed={settings.font === 'sans'}
          >
            Inter (Sans)
          </button>
          <button
            type="button"
            className={`control-btn ${settings.font === 'serif' ? 'active' : ''}`}
            onClick={() => onUpdateSetting('font', 'serif')}
            aria-pressed={settings.font === 'serif'}
          >
            Merriweather (Serif)
          </button>
        </div>

        {/* Density switch */}
        <div className="segmented-control" role="group" aria-label="Layout density">
          <button
            type="button"
            className={`control-btn ${settings.spacing === 'standard' ? 'active' : ''}`}
            onClick={() => onUpdateSetting('spacing', 'standard')}
            aria-pressed={settings.spacing === 'standard'}
          >
            Standard
          </button>
          <button
            type="button"
            className={`control-btn ${settings.spacing === 'compact' ? 'active' : ''}`}
            onClick={() => onUpdateSetting('spacing', 'compact')}
            aria-pressed={settings.spacing === 'compact'}
          >
            Compact (1-Page)
          </button>
        </div>

        {/* Accent Color picker */}
        <div className="color-palette-group" role="group" aria-label="Color accent picker">
          {accentColors.map((color) => (
            <button
              key={color.id}
              type="button"
              className={`color-dot-btn ${settings.accent === color.id ? 'active' : ''}`}
              style={{ backgroundColor: color.hex }}
              onClick={() => onUpdateSetting('accent', color.id)}
              aria-label={`Set accent color to ${color.label}`}
              title={`Accent color: ${color.label}`}
              aria-pressed={settings.accent === color.id}
            />
          ))}
        </div>

        {/* Theme (Light / Dark Paper) */}
        <button
          type="button"
          className="btn-action btn-secondary btn-icon-only"
          onClick={() => onUpdateSetting('paperTheme', settings.paperTheme === 'dark' ? 'light' : 'dark')}
          title={`Switch to ${settings.paperTheme === 'dark' ? 'Light' : 'Dark'} paper preview`}
          aria-label="Toggle paper light or dark theme"
        >
          {settings.paperTheme === 'dark' ? (
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5"/>
              <line x1="12" y1="1" x2="12" y2="3"/>
              <line x1="12" y1="21" x2="12" y2="23"/>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
              <line x1="1" y1="12" x2="3" y2="12"/>
              <line x1="21" y1="12" x2="23" y2="12"/>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </svg>
          ) : (
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
          )}
        </button>

        {/* Copy plain text */}
        <button
          type="button"
          className="btn-action btn-secondary"
          onClick={onCopyText}
          title="Copy formatted plain text for job applications"
        >
          <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>
          Copy Text
        </button>

        {/* Download JSON */}
        <button
          type="button"
          className="btn-action btn-secondary"
          onClick={onDownloadJson}
          title="Download resume as structured JSON"
        >
          <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          JSON
        </button>

        {/* Print / Save PDF */}
        <button
          type="button"
          className="btn-action btn-primary"
          onClick={onPrint}
          title="Open browser print dialog to save as PDF"
        >
          <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 6 2 18 2 18 9" />
            <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
            <rect x="6" y="14" width="12" height="8" />
          </svg>
          Print / Save PDF
        </button>
      </div>
    </nav>
  )
}
