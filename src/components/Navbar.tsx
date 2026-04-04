import { Link, useLocation, useNavigate } from 'react-router-dom'

const NAV_LINKS = [
  { label: 'Fonctionnalités', sectionId: 'features' },
  { label: 'Tarif', sectionId: 'pricing' },
]

const PAGE_LINKS = [
  { label: 'Confidentialité', to: '/privacy.html', external: true },
  { label: 'CGU', to: '/terms', external: false },
  { label: 'Support', to: '/support', external: false },
]

export default function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/')
      // Give React Router time to render the home page before scrolling
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav>
      <Link to="/" className="logo">
        A<span>u</span>ra
      </Link>
      <ul>
        {NAV_LINKS.map(({ label, sectionId }) => (
          <li key={sectionId}>
            <button className="nav-link" onClick={() => scrollToSection(sectionId)}>
              {label}
            </button>
          </li>
        ))}
        {PAGE_LINKS.map(({ label, to, external }) => (
          <li key={to}>
            {external
              ? <a href={to}>{label}</a>
              : <Link to={to} className={location.pathname === to ? 'active' : ''}>{label}</Link>
            }
          </li>
        ))}
      </ul>
      <button className="nav-cta" onClick={() => scrollToSection('pricing')}>
        Rejoindre
      </button>
    </nav>
  )
}
