import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
      <div className="footer-logo">ELARA</div>
      <div className="footer-links">
        <a href="/privacy.html">Confidentialité</a>
        <Link to="/terms">CGU</Link>
        <Link to="/support">Support</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/delete-account">Supprimer mon compte</Link>
      </div>
      <div className="footer-tagline">« Révèle ton Elara. »</div>
      <div className="footer-copy">© {new Date().getFullYear()} ELARA — Tous droits réservés</div>
    </footer>
  )
}
