import { useState } from 'react'

const FAQ = [
  {
    q: 'Comment fonctionne AURA ?',
    a: "AURA vous propose des profils de personnes à proximité géographique de vous. En répondant à 12 questions sur vos valeurs et votre mode de vie, AURA calcule un score de compatibilité avec chaque profil. Tous les profils sont vérifiés par pièce d'identité et selfie en temps réel pour garantir leur authenticité.",
  },
  {
    q: 'Comment est calculé le score de compatibilité ?',
    a: "Le score de compatibilité est calculé à partir de vos réponses à 12 questions portant sur vos valeurs (famille, ambition, spiritualité…), votre mode de vie (voyages, sport, alimentation…) et vos intentions (relation sérieuse, amitié, mariage…). L'algorithme est transparent : vous pouvez voir les critères sur lesquels vous êtes compatibles.",
  },
  {
    q: 'Comment fonctionne la vérification d\'identité ?',
    a: "Lors de l'inscription, vous devez photographier une pièce d'identité officielle (passeport, carte d'identité, permis de conduire) et prendre un selfie en temps réel. Notre système vérifie que la photo correspond à la pièce d'identité. Ce processus prend généralement moins de 5 minutes. Le badge doré « AURA Vérifié » est ensuite affiché sur votre profil.",
  },
  {
    q: "Qu'est-ce que l'offre Fondateur à 14,99€ ?",
    a: "L'offre Fondateur est un accès à vie à toutes les fonctionnalités d'AURA pour un paiement unique de 14,99€. Aucun abonnement, aucun frais récurrent. Les premiers utilisateurs bénéficient de ce tarif réduit (au lieu de 19,99€). Vous bénéficiez d'une garantie satisfait ou remboursé pendant 7 jours.",
  },
  {
    q: 'Puis-je tester AURA avant de payer ?',
    a: "Oui. Vous pouvez créer un profil, voir les profils à proximité et consulter les scores de compatibilité gratuitement. Le paiement est requis pour liker, matcher et envoyer des messages. C'est seulement à partir du moment où vous souhaitez interagir avec un profil que l'accès complet est nécessaire.",
  },
  {
    q: 'Comment puis-je désactiver les notifications push ?',
    a: "Dans l'application : Paramètres → Notifications → Désactiver. Vous pouvez aussi gérer les notifications depuis les paramètres système de votre téléphone (iOS : Réglages → AURA → Notifications / Android : Paramètres → Applications → AURA → Notifications). La désactivation n'affecte pas l'accès aux fonctionnalités.",
  },
  {
    q: 'Comment supprimer mon compte ?',
    a: "Depuis l'app : Paramètres → Mon compte → Supprimer mon compte. Toutes vos données (profil, photos, messages, likes) sont supprimées définitivement et irréversiblement sous 30 jours. Vous pouvez aussi envoyer une demande par email à contact@aura-dating.app.",
  },
  {
    q: 'Mes données sont-elles partagées avec des tiers ?',
    a: "Non. AURA ne vend jamais vos données. Vos données sont uniquement partagées avec Supabase (hébergement, serveurs UE) et Stripe (paiement sécurisé). Les notifications push utilisent Expo Push Notifications — seul votre token de notification est transmis, aucun contenu de message n'est partagé.",
  },
  {
    q: "L'application est-elle disponible sur iOS et Android ?",
    a: "Oui, AURA est disponible sur l'App Store (iOS) et le Google Play Store (Android). La landing page web vous permet de rejoindre la liste d'attente et d'accéder à l'offre fondateur avant le lancement officiel.",
  },
]

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="faq-item">
      <button className={`faq-question${open ? ' open' : ''}`} onClick={() => setOpen(v => !v)}>
        {q}
        <span className={`faq-chevron${open ? ' open' : ''}`}>▼</span>
      </button>
      <div className={`faq-answer${open ? ' open' : ''}`}>{a}</div>
    </div>
  )
}

export default function Support() {
  return (
    <>
      <div className="page-header">
        <div className="page-eyebrow">Aide</div>
        <h1>Support &<br /><em>FAQ.</em></h1>
        <p className="meta">Nous répondons à vos questions les plus fréquentes</p>
      </div>

      <main className="content-wrapper">
        <div className="intro-block">
          Vous avez une question sur AURA ? Consultez notre FAQ ci-dessous. Si vous ne trouvez pas la réponse, contactez-nous directement — nous répondons sous 72 heures ouvrées.
        </div>

        <div className="policy-section">
          <div className="section-num">FAQ</div>
          <h2>Questions<br /><em>fréquentes.</em></h2>
          <div className="faq-list">
            {FAQ.map((item, i) => (
              <FaqItem key={i} q={item.q} a={item.a} />
            ))}
          </div>
        </div>

        <div className="policy-section">
          <div className="section-num">Contact</div>
          <h2>Une autre<br /><em>question ?</em></h2>
          <p>Notre équipe est disponible pour répondre à toutes vos demandes : questions techniques, problèmes de compte, demandes RGPD ou feedback sur l'application.</p>
          <div className="contact-card">
            <span className="contact-label">✦ Écrire à l'équipe AURA</span>
            <a href="mailto:contact@aura-dating.app">contact@aura-dating.app</a>
            <p>Réponse garantie sous 72 heures ouvrées · Du lundi au vendredi</p>
          </div>
        </div>

        <div className="gold-sep"><span>✦</span></div>
      </main>
    </>
  )
}
