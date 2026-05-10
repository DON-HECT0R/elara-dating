import { useEffect, useState } from 'react'
import { usePageTitle } from '../hooks/usePageTitle'
import RegisterModal from '../components/RegisterModal'
import { APP_STORE_URL, PLAY_STORE_URL } from '../lib/supabase'

function useCountdown(days: number) {
  const [target] = useState(() => {
    const d = new Date()
    d.setDate(d.getDate() + days)
    return d
  })
  const [time, setTime] = useState({ d: '07', h: '00', m: '00', s: '00' })

  useEffect(() => {
    const update = () => {
      const diff = target.getTime() - Date.now()
      if (diff <= 0) return
      setTime({
        d: String(Math.floor(diff / 86400000)).padStart(2, '0'),
        h: String(Math.floor((diff % 86400000) / 3600000)).padStart(2, '0'),
        m: String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0'),
        s: String(Math.floor((diff % 60000) / 1000)).padStart(2, '0'),
      })
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [target])

  return time
}

export default function Home() {
  usePageTitle('')
  const { d, h, m, s } = useCountdown(7)
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <RegisterModal open={modalOpen} onClose={() => setModalOpen(false)} />

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg" aria-hidden="true" />
        <div className="hero-content">
          <div className="hero-eyebrow">Rencontres d'exception</div>
          <h1>
            Révèle<br />
            ton <em>Elara.</em>
          </h1>
          <p>
            La première app de rencontre où chaque connexion est authentique, vérifiée, et méritée.
            Pas d'abonnement — un accès à vie pour ceux qui cherchent vraiment.
          </p>
          <div className="hero-ctas">
            <button className="btn-primary" onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })} aria-label="Créer mon profil — accéder à l'offre">
              Créer mon profil
            </button>
            <button className="btn-ghost" onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })} aria-label="Découvrir les fonctionnalités">
              <span aria-hidden="true" />Découvrir
            </button>
          </div>
        </div>

        {/* Phone Mockup — decorative illustration */}
        <div className="hero-phone" aria-hidden="true">
          <div className="likes-bubble">
            <span className="likes-count">24</span>
            <span className="likes-label">likes</span>
          </div>
          <div className="phone-frame">
            <div className="phone-notch" />
            <div className="phone-screen">
              <div className="phone-profile-img">
                <div className="profile-photo-fake">
                  <div className="silhouette" />
                </div>
                <div className="profile-img-overlay" />
                <div className="verified-badge-phone">ELARA Vérifié</div>
              </div>
              <div className="phone-info">
                <div className="phone-name">
                  Camille <span className="age">27 ans</span>
                </div>
                <div className="phone-location">À 320m de vous</div>
                <div className="compatibility">
                  <span className="compat-label">Compatibilité</span>
                  <span className="compat-score">94%</span>
                </div>
              </div>
              <div className="phone-actions">
                <div className="phone-btn">✕</div>
                <div className="phone-btn like">✦</div>
                <div className="phone-btn">★</div>
              </div>
              <div className="lock-overlay">
                <div className="lock-icon">🔒</div>
                <div className="lock-text">Débloquez l'accès complet<br />pour interagir</div>
                <button className="lock-cta" onClick={() => setModalOpen(true)}>Créer un compte — Gratuit</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section" id="features">
        <div className="section-label">Ce qui nous différencie</div>
        <h2>Conçu pour ceux<br />qui <em>méritent mieux.</em></h2>
        <div className="features-grid">
          <div className="feature-card fade-up">
            <span className="feature-icon" aria-hidden="true">◉</span>
            <span className="feature-number" aria-hidden="true">01</span>
            <h3>Géolocalisation précise</h3>
            <p>Découvrez des profils qui partagent votre quotidien. ELARA détecte les personnes que vous croisez réellement, créant des connexions ancrées dans la réalité.</p>
          </div>
          <div className="feature-card fade-up">
            <span className="feature-icon" aria-hidden="true">✦</span>
            <span className="feature-number" aria-hidden="true">02</span>
            <h3>Score de compatibilité</h3>
            <p>12 questions sur vos valeurs et votre mode de vie génèrent un score de compatibilité transparent. Pas d'algorithme opaque — une affinité sincère et mesurable.</p>
          </div>
          <div className="feature-card fade-up">
            <span className="feature-icon" aria-hidden="true">⬡</span>
            <span className="feature-number" aria-hidden="true">03</span>
            <h3>Identité vérifiée</h3>
            <p>Chaque profil ELARA est vérifié par pièce d'identité et selfie en temps réel. Zéro faux profil, zéro bot. Le badge doré est une garantie, pas une option.</p>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="pricing-section" id="pricing">
        <div style={{ textAlign: 'center' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>Accès à vie</div>
          <h2 style={{ textAlign: 'center' }}>Un seul paiement,<br /><em>pour toujours.</em></h2>
        </div>
        <div className="pricing-card">
          <span className="offer-badge">✦ Offre Fondateur</span>
          <div className="price-old">19,99€</div>
          <div className="price-new"><sup>€</sup>14<sup style={{ fontSize: '2rem' }}>,99</sup></div>
          <span className="price-label">Paiement unique — accès à vie</span>
          <div className="countdown">
            <div className="countdown-unit">
              <span className="countdown-num">{d}</span>
              <span className="countdown-label">Jours</span>
            </div>
            <span className="countdown-sep">:</span>
            <div className="countdown-unit">
              <span className="countdown-num">{h}</span>
              <span className="countdown-label">Heures</span>
            </div>
            <span className="countdown-sep">:</span>
            <div className="countdown-unit">
              <span className="countdown-num">{m}</span>
              <span className="countdown-label">Min</span>
            </div>
            <span className="countdown-sep">:</span>
            <div className="countdown-unit">
              <span className="countdown-num">{s}</span>
              <span className="countdown-label">Sec</span>
            </div>
          </div>
          <ul className="perks">
            <li>Liker, matcher et envoyer des messages</li>
            <li>Voir qui a liké votre profil</li>
            <li>Badge ELARA Vérifié sur votre profil</li>
            <li>Filtres avancés (valeurs, intentions, mode de vie)</li>
            <li>Accès à vie — aucun abonnement, jamais</li>
          </ul>
          <button className="btn-gold-full" onClick={() => setModalOpen(true)}>
            Créer mon compte ELARA — Gratuit
          </button>
          <div className="secure-note">Paiement unique de 14,99€ via Google Play / App Store · Satisfait ou remboursé 7 jours</div>
        </div>
      </section>

      {/* SCREENS */}
      <section className="screens-section">
        <div className="section-label">L'expérience</div>
        <h2>Chaque écran,<br /><em>pensé pour vous.</em></h2>
        <div className="screens-row">
          {/* Screen 1: Discovery */}
          <div className="screen-item">
            <div className="screen-mini screen-discovery">
              <div className="screen-header-mini">
                <span className="screen-logo-mini">ELARA</span>
                <div className="notif-dot" />
              </div>
              <div className="mini-cards-stack">
                <div className="mini-card mini-card-2" />
                <div className="mini-card mini-card-1">
                  <div className="mini-card-gradient">
                    <span className="mini-card-name">Léa, 26</span>
                  </div>
                </div>
              </div>
              <div className="mini-actions">
                <div className="mini-btn">✕</div>
                <div className="mini-btn ctr">✦</div>
                <div className="mini-btn">★</div>
              </div>
            </div>
            <div className="screen-label">Découverte</div>
          </div>

          {/* Screen 2: Match */}
          <div className="screen-item">
            <div className="screen-mini screen-match">
              <div className="match-badge-big">✦ Nouveau Match</div>
              <div className="match-avatars">
                <div className="match-avatar" />
                <span className="match-heart">♥</span>
                <div className="match-avatar" />
              </div>
              <div className="match-title">Connexion<br />établie</div>
              <div className="match-compat">Compatibilité · 91%</div>
              <div className="match-msg-input">
                Envoyer un message…
                <span className="msg-send">→</span>
              </div>
            </div>
            <div className="screen-label">Match</div>
          </div>

          {/* Screen 3: Profile */}
          <div className="screen-item">
            <div className="screen-mini screen-profile">
              <div className="profile-photo-mini" />
              <div className="verified-mini">✦ Vérifié</div>
              <div className="profile-name-mini">Thomas, 31</div>
              <div className="profile-tags">
                <span className="tag">Ambitieux</span>
                <span className="tag">Voyageur</span>
                <span className="tag">Famille</span>
              </div>
              <div className="compat-bar-mini">
                <span className="compat-bar-label">Compatibilité</span>
                <span className="compat-bar-score">88%</span>
              </div>
            </div>
            <div className="screen-label">Profil</div>
          </div>
        </div>
      </section>

      {/* APP STORE DOWNLOAD */}
      <section className="store-section" id="download">
        <div className="section-label" style={{ justifyContent: 'center' }}>Télécharger</div>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 300, lineHeight: 1.1, marginBottom: '16px' }}>
          Disponible sur iOS<br />et <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Android.</em>
        </h2>
        <p style={{ fontSize: '0.78rem', color: 'var(--white-dim)', lineHeight: 1.9, maxWidth: '400px', margin: '0 auto' }}>
          Téléchargez ELARA gratuitement. Le paiement unique de 14,99€ débloque l'accès complet à vie.
        </p>
        <div className="store-buttons">
          {/* App Store */}
          <a
            href={APP_STORE_URL ?? undefined}
            onClick={!APP_STORE_URL ? (e) => { e.preventDefault(); setModalOpen(true) } : undefined}
            className="store-btn"
            aria-label={APP_STORE_URL ? "Télécharger sur l'App Store" : "App Store — rejoindre la liste d'attente"}
            {...(!APP_STORE_URL && { href: '#' })}
          >
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
              <path d="M20.5 14.8c0-2.8 2.3-4.1 2.4-4.2-1.3-1.9-3.3-2.1-4-2.2-1.7-.2-3.3 1-4.2 1s-2.2-1-3.6-1c-1.8 0-3.5 1.1-4.5 2.7-1.9 3.3-.5 8.2 1.4 10.9.9 1.3 2 2.8 3.5 2.7 1.4-.1 1.9-.9 3.6-.9s2.1.9 3.6.9 2.5-1.4 3.4-2.7c1.1-1.5 1.5-3 1.5-3.1-.1 0-2.7-1-2.7-4.1zm-2.5-7.5c.8-.9 1.3-2.2 1.1-3.5-1.1.1-2.5.8-3.3 1.7-.7.8-1.4 2.1-1.2 3.4 1.3.1 2.5-.7 3.4-1.6z" fill="#C9A84C"/>
            </svg>
            <div className="store-btn-text">
              <span className="store-btn-sub">{APP_STORE_URL ? 'Télécharger sur' : 'Bientôt sur'}</span>
              <span className="store-btn-name">App Store</span>
            </div>
          </a>
          {/* Google Play */}
          <a
            href={PLAY_STORE_URL ?? undefined}
            onClick={!PLAY_STORE_URL ? (e) => { e.preventDefault(); setModalOpen(true) } : undefined}
            className="store-btn"
            aria-label={PLAY_STORE_URL ? "Télécharger sur Google Play" : "Google Play — rejoindre la liste d'attente"}
            {...(!PLAY_STORE_URL && { href: '#' })}
          >
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
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
        {!APP_STORE_URL && !PLAY_STORE_URL && (
          <p className="store-note">
            Lancement officiel en 2025 ·{' '}
            <button
              style={{ background: 'none', border: 'none', color: 'var(--gold)', cursor: 'none', fontSize: 'inherit', fontFamily: 'inherit', letterSpacing: 'inherit', textDecoration: 'underline' }}
              onClick={() => setModalOpen(true)}
            >
              Réserver ma place dès maintenant
            </button>
          </p>
        )}
      </section>
    </>
  )
}
