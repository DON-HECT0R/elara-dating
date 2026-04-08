import { Link } from 'react-router-dom'
import { usePageTitle } from '../hooks/usePageTitle'

export default function NotFound() {
  usePageTitle('Page introuvable')

  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '0 24px',
      position: 'relative',
    }}>
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 50% 60% at 50% 50%, rgba(139,26,74,0.1) 0%, transparent 70%)',
      }} aria-hidden="true" />

      <p style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: 'clamp(6rem, 20vw, 12rem)',
        fontWeight: 300, lineHeight: 1,
        color: 'rgba(201,168,76,0.15)',
        position: 'relative',
      }}>404</p>

      <h1 style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: 'clamp(2rem, 4vw, 3rem)',
        fontWeight: 300, marginTop: '-1rem', marginBottom: '16px',
      }}>
        Page <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>introuvable.</em>
      </h1>

      <p style={{
        fontSize: '0.78rem', lineHeight: 1.9, letterSpacing: '0.04em',
        color: 'var(--white-dim)', maxWidth: '380px', marginBottom: '40px',
      }}>
        La page que vous cherchez n'existe pas ou a été déplacée.
      </p>

      <Link to="/" style={{
        background: 'var(--gold)', color: 'var(--black)',
        fontFamily: "'Montserrat', sans-serif",
        fontSize: '0.65rem', fontWeight: 600,
        letterSpacing: '0.2em', textTransform: 'uppercase',
        padding: '14px 32px', textDecoration: 'none',
        display: 'inline-block', transition: 'background 0.3s',
      }}>
        Retour à l'accueil
      </Link>
    </main>
  )
}
