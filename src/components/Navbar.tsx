import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const SECTION_LINKS = [
  { label: 'Fonctionnalités', sectionId: 'features' },
  { label: 'Tarif',           sectionId: 'pricing'  },
]

const PAGE_LINKS = [
  { label: 'CGU',     to: '/terms'          },
  { label: 'Support', to: '/support'        },
  { label: 'Contact', to: '/contact'        },
]

export default function Navbar() {
  const location = useLocation()
  const navigate  = useNavigate()
  const [open, setOpen] = useState(false)

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  // Close on route change
  useEffect(() => { setOpen(false) }, [location.pathname])

  const scrollTo = (id: string) => {
    setOpen(false)
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 120)
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <nav>
        <Link to="/" className="logo" aria-label="ELARA — retour à l'accueil">
          A<span>u</span>ra
        </Link>

        {/* Desktop links */}
        <ul>
          {SECTION_LINKS.map(({ label, sectionId }) => (
            <li key={sectionId}>
              <button className="nav-link" onClick={() => scrollTo(sectionId)}>
                {label}
              </button>
            </li>
          ))}
          <li>
            <a href="/privacy.html" className={location.pathname === '/privacy' ? 'active' : ''}>
              Confidentialité
            </a>
          </li>
          {PAGE_LINKS.map(({ label, to }) => (
            <li key={to}>
              <Link to={to} className={location.pathname === to ? 'active' : ''}>
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <button className="nav-cta" onClick={() => scrollTo('pricing')} aria-label="Accéder à l'offre">
          Rejoindre
        </button>

        {/* Hamburger — mobile only */}
        <button
          className={`hamburger${open ? ' open' : ''}`}
          onClick={() => setOpen(v => !v)}
          aria-expanded={open}
          aria-controls="mobile-drawer"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        id="mobile-drawer"
        className={`mobile-drawer${open ? ' open' : ''}`}
        aria-hidden={!open}
      >
        <button className="drawer-section-label" onClick={() => scrollTo('features')}>Fonctionnalités</button>
        <button className="drawer-section-label" onClick={() => scrollTo('pricing')}>Tarif</button>
        <a href="/privacy.html" className="drawer-link" onClick={() => setOpen(false)}>Confidentialité</a>
        {PAGE_LINKS.map(({ label, to }) => (
          <Link key={to} to={to} className="drawer-link" onClick={() => setOpen(false)}>
            {label}
          </Link>
        ))}
        <button className="drawer-cta" onClick={() => scrollTo('pricing')}>
          Rejoindre — 14,99€
        </button>
      </div>
    </>
  )
}
