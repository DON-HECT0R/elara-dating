import { useState, useEffect, useRef, type FormEvent } from 'react'
import { supabase, APP_STORE_URL, PLAY_STORE_URL } from '../lib/supabase'

interface Props {
  open: boolean
  onClose: () => void
}

type Step = 'form' | 'loading' | 'success'

export default function RegisterModal({ open, onClose }: Props) {
  const [step, setStep]     = useState<Step>('form')
  const [email, setEmail]   = useState('')
  const [prenom, setPrenom] = useState('')
  const [pwd, setPwd]       = useState('')
  const [pwd2, setPwd2]     = useState('')
  const [error, setError]   = useState('')
  const [showPwd, setShowPwd] = useState(false)
  const firstInput = useRef<HTMLInputElement>(null)

  // Lock body scroll + focus trap
  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    setTimeout(() => firstInput.current?.focus(), 50)
    return () => { document.body.style.overflow = '' }
  }, [open])

  // Close on Escape
  useEffect(() => {
    if (!open) return
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') handleClose() }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [open])

  const handleClose = () => {
    if (step === 'loading') return
    setStep('form')
    setEmail('')
    setPrenom('')
    setPwd('')
    setPwd2('')
    setError('')
    onClose()
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError('')

    if (!prenom.trim()) return setError('Veuillez entrer votre prénom.')
    if (!email.includes('@')) return setError('Adresse email invalide.')
    if (pwd.length < 8) return setError('Le mot de passe doit contenir au moins 8 caractères.')
    if (pwd !== pwd2) return setError('Les mots de passe ne correspondent pas.')

    setStep('loading')

    try {
      if (supabase) {
        const { error: authError } = await supabase.auth.signUp({
          email,
          password: pwd,
          options: { data: { prenom } },
        })
        if (authError) {
          if (authError.message.includes('already registered')) {
            setError('Cet email est déjà utilisé. Connectez-vous depuis l\'app.')
          } else {
            setError(authError.message)
          }
          setStep('form')
          return
        }
      }
      setStep('success')
    } catch {
      setError('Une erreur est survenue. Réessayez.')
      setStep('form')
    }
  }

  if (!open) return null

  return (
    <div
      className="modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={e => { if (e.target === e.currentTarget) handleClose() }}
    >
      <div className="modal-card">
        {/* Close */}
        <button className="modal-close" onClick={handleClose} aria-label="Fermer">✕</button>

        {/* STEP — FORM */}
        {(step === 'form' || step === 'loading') && (
          <>
            <div className="modal-eyebrow">Créer votre compte — gratuit</div>
            <h2 id="modal-title" className="modal-title">
              Rejoindre <em>AURA.</em>
            </h2>
            <p className="modal-subtitle">
              Créez votre compte ici, puis téléchargez l'app et connectez-vous.
              Le paiement unique s'effectue directement dans l'application.
            </p>

            <form onSubmit={handleSubmit} noValidate>
              <div className="form-field">
                <label htmlFor="prenom">Prénom</label>
                <input
                  id="prenom" ref={firstInput} type="text"
                  value={prenom} onChange={e => setPrenom(e.target.value)}
                  placeholder="Votre prénom" autoComplete="given-name"
                  disabled={step === 'loading'} required
                />
              </div>
              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input
                  id="email" type="email"
                  value={email} onChange={e => setEmail(e.target.value)}
                  placeholder="vous@exemple.com" autoComplete="email"
                  disabled={step === 'loading'} required
                />
              </div>
              <div className="form-field">
                <label htmlFor="pwd">Mot de passe <span className="form-hint">min. 8 caractères</span></label>
                <div className="input-wrapper">
                  <input
                    id="pwd" type={showPwd ? 'text' : 'password'}
                    value={pwd} onChange={e => setPwd(e.target.value)}
                    placeholder="••••••••" autoComplete="new-password"
                    disabled={step === 'loading'} required
                  />
                  <button
                    type="button" className="input-toggle"
                    onClick={() => setShowPwd(v => !v)}
                    aria-label={showPwd ? 'Masquer le mot de passe' : 'Afficher le mot de passe'}
                  >
                    {showPwd ? '◉' : '○'}
                  </button>
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="pwd2">Confirmer le mot de passe</label>
                <input
                  id="pwd2" type={showPwd ? 'text' : 'password'}
                  value={pwd2} onChange={e => setPwd2(e.target.value)}
                  placeholder="••••••••" autoComplete="new-password"
                  disabled={step === 'loading'} required
                />
              </div>

              {error && <p className="form-error" role="alert">⚠ {error}</p>}

              <button
                type="submit"
                className={`btn-gold-full modal-submit${step === 'loading' ? ' loading' : ''}`}
                disabled={step === 'loading'}
              >
                {step === 'loading' ? 'Création du compte…' : 'Créer mon compte AURA'}
              </button>
            </form>

            <p className="modal-legal">
              En créant un compte, vous acceptez nos{' '}
              <a href="/terms" target="_blank" rel="noopener">CGU</a> et notre{' '}
              <a href="/privacy.html" target="_blank" rel="noopener">politique de confidentialité</a>.
              Vous êtes âgé(e) d'au moins 18 ans.
            </p>
          </>
        )}

        {/* STEP — SUCCESS */}
        {step === 'success' && (
          <div className="modal-result">
            <div className="modal-check">✓</div>
            <h2 id="modal-title" className="modal-title">Compte créé !{' '}<em>Bienvenue.</em></h2>
            <p className="modal-subtitle">
              Bonjour <strong style={{ color: 'var(--white)' }}>{prenom}</strong> !
              Un email de confirmation vous a été envoyé à{' '}
              <strong style={{ color: 'var(--white)' }}>{email}</strong>.
            </p>
            <p className="modal-subtitle" style={{ marginTop: '8px' }}>
              Téléchargez l'application, connectez-vous avec cet email, puis débloquez l'accès complet directement depuis l'app.
            </p>

            <div className="store-buttons" style={{ marginTop: '24px', marginBottom: '8px' }}>
              <a
                href={APP_STORE_URL ?? '#'}
                onClick={!APP_STORE_URL ? (e) => e.preventDefault() : undefined}
                className="store-btn"
                aria-label="Télécharger sur l'App Store"
                target="_blank" rel="noopener noreferrer"
              >
                <svg width="24" height="24" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                  <path d="M20.5 14.8c0-2.8 2.3-4.1 2.4-4.2-1.3-1.9-3.3-2.1-4-2.2-1.7-.2-3.3 1-4.2 1s-2.2-1-3.6-1c-1.8 0-3.5 1.1-4.5 2.7-1.9 3.3-.5 8.2 1.4 10.9.9 1.3 2 2.8 3.5 2.7 1.4-.1 1.9-.9 3.6-.9s2.1.9 3.6.9 2.5-1.4 3.4-2.7c1.1-1.5 1.5-3 1.5-3.1-.1 0-2.7-1-2.7-4.1zm-2.5-7.5c.8-.9 1.3-2.2 1.1-3.5-1.1.1-2.5.8-3.3 1.7-.7.8-1.4 2.1-1.2 3.4 1.3.1 2.5-.7 3.4-1.6z" fill="#C9A84C"/>
                </svg>
                <div className="store-btn-text">
                  <span className="store-btn-sub">{APP_STORE_URL ? 'Télécharger sur' : 'Bientôt sur'}</span>
                  <span className="store-btn-name">App Store</span>
                </div>
              </a>
              <a
                href={PLAY_STORE_URL ?? '#'}
                onClick={!PLAY_STORE_URL ? (e) => e.preventDefault() : undefined}
                className="store-btn"
                aria-label="Télécharger sur Google Play"
                target="_blank" rel="noopener noreferrer"
              >
                <svg width="24" height="24" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                  <path d="M5.5 4.2C5.2 4.5 5 5 5 5.7v16.6c0 .7.2 1.2.5 1.5l.1.1 9.3-9.3v-.2L5.6 4.1l-.1.1z" fill="#C9A84C" opacity=".9"/>
                  <path d="M18 17.8l-3.1-3.1v-.2l3.1-3.1.1.1 3.7 2.1c1 .6 1 1.5 0 2.1L18 17.8z" fill="#C9A84C"/>
                  <path d="M18.1 17.7L14.9 14.5 5.5 23.8c.4.4.9.4 1.5.1l11.1-6.2" fill="#C9A84C" opacity=".8"/>
                  <path d="M18.1 11.3L7 5.1C6.4 4.8 5.9 4.8 5.5 5.2l9.4 9.3 3.2-3.2z" fill="#C9A84C" opacity=".7"/>
                </svg>
                <div className="store-btn-text">
                  <span className="store-btn-sub">{PLAY_STORE_URL ? 'Disponible sur' : 'Bientôt sur'}</span>
                  <span className="store-btn-name">Google Play</span>
                </div>
              </a>
            </div>

            <button className="btn-gold-full" style={{ marginTop: '16px' }} onClick={handleClose}>
              Fermer
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
