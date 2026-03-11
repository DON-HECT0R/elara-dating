import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
      <div className="footer-logo">AURA</div>
      <div className="footer-links">
        <Link to="/privacy">Confidentialité</Link>
        <Link to="/terms">CGU</Link>
        <Link to="/support">Support</Link>
        <Link to="/delete-account">Supprimer mon compte</Link>
      </div>
      <div className="footer-tagline">« Révèle ton Aura. »</div>
      <div className="footer-copy">© 2025 AURA — Tous droits réservés</div>
    </footer>
  )
}
