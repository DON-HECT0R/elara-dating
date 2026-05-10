import { Link } from 'react-router-dom'
import { usePageTitle } from '../hooks/usePageTitle'

export default function DeleteAccount() {
  usePageTitle('Supprimer mon compte')
  return (
    <>
      <div className="page-header">
        <div className="page-eyebrow">Gestion du compte</div>
        <h1>Supprimer<br /><em>mon compte.</em></h1>
        <p className="meta">Procédure de suppression définitive · ELARA Dating</p>
      </div>

      <main className="content-wrapper">
        <div className="intro-block">
          La suppression de votre compte ELARA est définitive et irréversible. Toutes vos données personnelles, photos, messages et historique seront effacés de nos serveurs dans un délai de 30 jours. Cette procédure est conforme à votre droit à l'effacement (RGPD, article 17).
        </div>

        <div className="policy-section">
          <div className="section-num">01</div>
          <h2>Avant de<br /><em>supprimer.</em></h2>
          <p>Avez-vous envisagé les alternatives suivantes ?</p>
          <ul className="partner-list">
            <li><span><strong>Masquer votre profil</strong> — votre profil n'apparaît plus dans les recherches, mais vos données sont conservées. Vous pouvez réactiver votre compte à tout moment. (Paramètres → Visibilité → Masquer le profil)</span></li>
            <li><span><strong>Désactiver les notifications</strong> — si vous êtes gêné par les notifications, vous pouvez les désactiver sans supprimer votre compte. (Paramètres → Notifications)</span></li>
            <li><span><strong>Contacter le support</strong> — si vous rencontrez un problème technique ou si vous avez une question, notre équipe peut vous aider avant que vous preniez une décision définitive.</span></li>
          </ul>
          <div className="warning-box">
            <span className="highlight-icon">⚠</span>
            <p>
              <strong style={{ color: 'var(--white)' }}>Attention : la suppression est irréversible.</strong> Vos matchs, messages et accès à vie ne pourront pas être restaurés. Si vous avez payé l'offre Fondateur et que vous êtes dans les 7 jours suivant votre paiement, vous pouvez demander un remboursement avant de supprimer votre compte.
            </p>
          </div>
        </div>

        <div className="policy-section">
          <div className="section-num">02</div>
          <h2>Procédure depuis<br /><em>l'application.</em></h2>
          <p>La méthode la plus rapide pour supprimer votre compte :</p>
          <ol className="steps-list">
            <li><span>Ouvrez l'application ELARA sur votre appareil.</span></li>
            <li><span>Appuyez sur votre <strong>photo de profil</strong> en haut à gauche pour accéder à votre profil.</span></li>
            <li><span>Appuyez sur <strong>Paramètres</strong> (icône ⚙ en haut à droite).</span></li>
            <li><span>Faites défiler jusqu'à la section <strong>Mon compte</strong>.</span></li>
            <li><span>Appuyez sur <strong>Supprimer mon compte</strong> (en rouge, en bas de la page).</span></li>
            <li><span>Lisez les informations affichées et appuyez sur <strong>Confirmer la suppression</strong>.</span></li>
            <li><span>Un email de confirmation vous sera envoyé. Votre compte sera supprimé sous <strong>30 jours</strong>.</span></li>
          </ol>
        </div>

        <div className="policy-section">
          <div className="section-num">03</div>
          <h2>Procédure par<br /><em>email.</em></h2>
          <p>Si vous n'avez plus accès à l'application, vous pouvez envoyer une demande de suppression par email :</p>
          <ol className="steps-list">
            <li><span>Envoyez un email à <strong>contact@elara-dating.app</strong> depuis l'adresse email associée à votre compte ELARA.</span></li>
            <li><span>Indiquez en objet : <strong>« Demande de suppression de compte »</strong></span></li>
            <li><span>Dans le corps du message, précisez votre nom d'utilisateur ou l'email de votre compte.</span></li>
            <li><span>Notre équipe vous confirmera la réception de votre demande sous 72 heures ouvrées.</span></li>
            <li><span>La suppression effective interviendra dans un délai maximum de <strong>30 jours</strong>.</span></li>
          </ol>
          <div className="contact-card">
            <span className="contact-label">✦ Email de suppression</span>
            <a href="mailto:contact@elara-dating.app?subject=Demande%20de%20suppression%20de%20compte">
              contact@elara-dating.app
            </a>
            <p>Mentionnez « Demande de suppression de compte » en objet</p>
          </div>
        </div>

        <div className="policy-section">
          <div className="section-num">04</div>
          <h2>Ce qui est<br /><em>supprimé.</em></h2>
          <p>Lors de la suppression de votre compte, les données suivantes sont effacées définitivement :</p>
          <ul className="partner-list">
            <li><span>Votre <strong>profil</strong> : nom, date de naissance, genre, biographie.</span></li>
            <li><span>Vos <strong>photos</strong> de profil.</span></li>
            <li><span>Votre <strong>historique de localisation</strong> GPS.</span></li>
            <li><span>L'ensemble de vos <strong>conversations et messages</strong>.</span></li>
            <li><span>Vos <strong>likes, matchs</strong> et données d'interaction.</span></li>
            <li><span>Votre <strong>token de notification push</strong>.</span></li>
            <li><span>Vos <strong>réponses aux questions</strong> de compatibilité.</span></li>
          </ul>
          <div className="highlight-box">
            <span className="highlight-icon">ℹ</span>
            <p>Certaines données peuvent être conservées sous forme <strong style={{ color: 'var(--white)' }}>anonymisée et agrégée</strong> à des fins statistiques internes, sans aucun lien possible avec votre identité. Les données de paiement sont conservées par Stripe selon leurs obligations légales (5 ans).</p>
          </div>
        </div>

        <div className="policy-section">
          <div className="section-num">05</div>
          <h2>Besoin<br /><em>d'aide ?</em></h2>
          <p>Si vous avez des questions sur la procédure de suppression ou si vous souhaitez exercer d'autres droits RGPD (accès, rectification, portabilité…), consultez notre <Link to="/privacy" style={{ color: 'var(--gold)', textDecoration: 'none' }}>politique de confidentialité</Link> ou contactez-nous.</p>
          <div className="contact-card">
            <span className="contact-label">✦ Support ELARA</span>
            <a href="mailto:contact@elara-dating.app">contact@elara-dating.app</a>
            <p>Notre équipe répond sous 72 heures ouvrées</p>
          </div>
        </div>

        <div className="gold-sep"><span>✦</span></div>
      </main>
    </>
  )
}
