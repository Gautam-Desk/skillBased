import React from 'react'

export function Toast({ message, onDismiss }) {
  if (!message) return null

  return (
    <div className="toast-notice" role="status" aria-live="polite">
      <span className="toast-text">{message}</span>
      <button
        type="button"
        className="toast-close-btn"
        onClick={onDismiss}
        aria-label="Dismiss notification"
      >
        &times;
      </button>
    </div>
  )
}
