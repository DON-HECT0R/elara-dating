import { useEffect, useState } from 'react'

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
  const { d, h, m, s } = useCountdown(7)

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-content">
          <div className="hero-eyebrow">Rencontres d'exception</div>
          <h1>
            Révèle<br />
            ton <em>Aura.</em>
          </h1>
          <p>
            La première app de rencontre où chaque connexion est authentique, vérifiée, et méritée.
            Pas d'abonnement — un accès à vie pour ceux qui cherchent vraiment.
          </p>
          <div className="hero-ctas">
            <button className="btn-primary" onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}>
              Créer mon profil
            </button>
            <button className="btn-ghost" onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}>
              <span />Découvrir
            </button>
          </div>
        </div>

        {/* Phone Mockup */}
        <div className="hero-phone">
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
                <div className="verified-badge-phone">AURA Vérifié</div>
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
                <button className="lock-cta">Accès complet — 14,99€</button>
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
            <span className="feature-icon">◉</span>
            <span className="feature-number">01</span>
            <h3>Géolocalisation précise</h3>
            <p>Découvrez des profils qui partagent votre quotidien. AURA détecte les personnes que vous croisez réellement, créant des connexions ancrées dans la réalité.</p>
          </div>
          <div className="feature-card fade-up">
            <span className="feature-icon">✦</span>
            <span className="feature-number">02</span>
            <h3>Score de compatibilité</h3>
            <p>12 questions sur vos valeurs et votre mode de vie génèrent un score de compatibilité transparent. Pas d'algorithme opaque — une affinité sincère et mesurable.</p>
          </div>
          <div className="feature-card fade-up">
            <span className="feature-icon">⬡</span>
            <span className="feature-number">03</span>
            <h3>Identité vérifiée</h3>
            <p>Chaque profil AURA est vérifié par pièce d'identité et selfie en temps réel. Zéro faux profil, zéro bot. Le badge doré est une garantie, pas une option.</p>
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
            <li>Badge AURA Vérifié sur votre profil</li>
            <li>Filtres avancés (valeurs, intentions, mode de vie)</li>
            <li>Accès à vie — aucun abonnement, jamais</li>
          </ul>
          <button className="btn-gold-full">Débloquer AURA — 14,99€</button>
          <div className="secure-note">Paiement sécurisé · Satisfait ou remboursé 7 jours</div>
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
                <span className="screen-logo-mini">AURA</span>
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
    </>
  )
}
