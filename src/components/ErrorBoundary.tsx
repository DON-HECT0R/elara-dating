import { Component, type ErrorInfo, type ReactNode } from 'react'

interface Props { children: ReactNode }
interface State { hasError: boolean; message: string }

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false, message: '' }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, message: error.message }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('[ELARA ErrorBoundary]', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <main style={{
          minHeight: '100vh', display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          textAlign: 'center', padding: '0 24px',
        }}>
          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, marginBottom: '16px',
          }}>
            Une erreur <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>inattendue.</em>
          </h1>
          <p style={{
            fontSize: '0.75rem', color: 'var(--white-dim)', marginBottom: '32px',
            maxWidth: '400px', lineHeight: 1.8,
          }}>
            Un problème est survenu. Veuillez rafraîchir la page ou nous contacter.
          </p>
          <button
            onClick={() => window.location.reload()}
            style={{
              background: 'var(--gold)', color: 'var(--black)',
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '0.65rem', fontWeight: 600,
              letterSpacing: '0.2em', textTransform: 'uppercase',
              padding: '14px 32px', border: 'none', cursor: 'pointer',
            }}
          >
            Rafraîchir
          </button>
        </main>
      )
    }
    return this.props.children
  }
}
