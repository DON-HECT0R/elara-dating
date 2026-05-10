import { useState, useEffect } from 'react'

const STORAGE_KEY = 'elara_cookie_consent'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) setVisible(true)
  }, [])

  const dismiss = () => {
    localStorage.setItem(STORAGE_KEY, '1')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="cookie-banner" role="region" aria-label="Avis cookies">
      <div className="cookie-content">
        <p className="cookie-text">
          Ce site utilise <strong>Google Fonts</strong> pour l'affichage des polices.
          Aucun cookie publicitaire, aucun tracking, aucune revente de données.{' '}
          <a href="/privacy.html">Politique de confidentialité</a>
        </p>
        <button className="cookie-btn" onClick={dismiss} aria-label="Fermer l'avis cookies">
          Compris
        </button>
      </div>
    </div>
  )
}
