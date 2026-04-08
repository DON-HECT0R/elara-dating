import { useState, useEffect, useRef, type FormEvent } from 'react'
import { supabase, STRIPE_LINK } from '../lib/supabase'

interface Props {
  open: boolean
  onClose: () => void
}

type Step = 'form' | 'loading' | 'success' | 'payment'

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
      setStep(STRIPE_LINK ? 'payment' : 'success')
    } catch {
      setError('Une erreur est survenue. Réessayez.')
      setStep('form')
    }
  }

  const goToPayment = () => {
    if (STRIPE_LINK) {
      window.location.href = STRIPE_LINK + `?prefilled_email=${encodeURIComponent(email)}`
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
            <div className="modal-eyebrow">Offre Fondateur · 14,99€</div>
            <h2 id="modal-title" className="modal-title">
              Créer votre <em>compte AURA.</em>
            </h2>
            <p className="modal-subtitle">
              Votre compte est créé sur le web. Téléchargez ensuite l'app et connectez-vous —
              votre profil sera prêt à configurer.
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
                {step === 'loading'
                  ? 'Création du compte…'
                  : STRIPE_LINK
                    ? 'Continuer vers le paiement →'
                    : 'Créer mon compte AURA'
                }
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

        {/* STEP — PAYMENT */}
        {step === 'payment' && (
          <div className="modal-result">
            <div className="modal-check">✓</div>
            <h2 id="modal-title" className="modal-title">Compte créé,{' '}<em>Bienvenue !</em></h2>
            <p className="modal-subtitle">
              Bonjour <strong style={{ color: 'var(--white)' }}>{prenom}</strong> ! Votre compte AURA est prêt.
              Il reste l'étape du paiement unique pour débloquer l'accès complet.
            </p>
            <div className="payment-summary">
              <div className="payment-line">
                <span>Offre Fondateur — accès à vie</span>
                <span className="payment-price">14,99€</span>
              </div>
              <div className="payment-line payment-sub">
                <span>Aucun abonnement · Paiement unique · Stripe sécurisé</span>
              </div>
            </div>
            <button className="btn-gold-full" onClick={goToPayment}>
              Payer 14,99€ — Accès à vie
            </button>
            <p className="modal-legal">
              Satisfait ou remboursé 7 jours · PCI DSS Level 1 · 🔒 Stripe
            </p>
          </div>
        )}

        {/* STEP — SUCCESS (no Stripe configured) */}
        {step === 'success' && (
          <div className="modal-result">
            <div className="modal-check">✓</div>
            <h2 id="modal-title" className="modal-title">Compte créé !{' '}<em>Bienvenue.</em></h2>
            <p className="modal-subtitle">
              Bonjour <strong style={{ color: 'var(--white)' }}>{prenom}</strong> !
              Un email de confirmation vous a été envoyé à <strong style={{ color: 'var(--white)' }}>{email}</strong>.
            </p>
            <p className="modal-subtitle" style={{ marginTop: '8px' }}>
              Téléchargez l'application, connectez-vous avec cet email, et configurez votre profil.
            </p>
            <button className="btn-gold-full" style={{ marginTop: '24px' }} onClick={handleClose}>
              Fermer
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
