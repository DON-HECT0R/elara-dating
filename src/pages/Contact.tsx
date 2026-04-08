import { usePageTitle } from '../hooks/usePageTitle'

const TOPICS = [
  {
    icon: '◉',
    title: 'Support technique',
    desc: 'Problème de connexion, bug dans l\'app, question sur votre compte ou votre profil.',
    email: 'contact@aura-dating.app',
    subject: 'Support technique',
    delay: '0.1s',
  },
  {
    icon: '⬡',
    title: 'Légal & RGPD',
    desc: 'Exercer vos droits (accès, rectification, suppression), réclamation, demande juridique.',
    email: 'contact@aura-dating.app',
    subject: 'Demande RGPD',
    delay: '0.2s',
  },
  {
    icon: '✦',
    title: 'Presse & Partenariats',
    desc: 'Demande presse, collaboration, partenariat ou toute opportunité professionnelle.',
    email: 'contact@aura-dating.app',
    subject: 'Presse / Partenariat',
    delay: '0.3s',
  },
]

export default function Contact() {
  usePageTitle('Nous contacter')

  return (
    <>
      <div className="page-header">
        <div className="page-eyebrow">Support</div>
        <h1>Nous <em>contacter.</em></h1>
        <p className="meta">Réponse garantie sous 72 heures ouvrées · Du lundi au vendredi</p>
      </div>

      <main className="content-wrapper">
        <div className="intro-block">
          Une question, un problème ou une demande légale ? Choisissez le sujet qui vous correspond.
          Toutes les demandes sont traitées par l'équipe AURA dans un délai de 72 heures ouvrées.
        </div>

        <div className="contact-topics">
          {TOPICS.map(({ icon, title, desc, email, subject, delay }) => (
            <div
              className="contact-topic"
              key={title}
              style={{ animationDelay: delay }}
            >
              <span className="contact-topic-icon" aria-hidden="true">{icon}</span>
              <div className="contact-topic-body">
                <h2>{title}</h2>
                <p>{desc}</p>
                <a
                  href={`mailto:${email}?subject=${encodeURIComponent(subject)}`}
                  className="contact-topic-link"
                >
                  {email}
                  <span aria-hidden="true"> →</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="policy-section" style={{ marginTop: '64px' }}>
          <div className="section-num">Note</div>
          <h2>Délais & <em>engagement.</em></h2>
          <p>
            Toutes les demandes reçues entre le lundi et le vendredi sont traitées
            sous <strong style={{ color: 'var(--white)' }}>72 heures ouvrées</strong>.
            Les demandes RGPD (accès, rectification, suppression) sont traitées
            dans un délai maximum de <strong style={{ color: 'var(--white)' }}>30 jours</strong>,
            conformément à l'article 12 du RGPD.
          </p>
          <p>
            Pour la suppression de compte, une procédure directe est disponible
            depuis <a href="/delete-account" style={{ color: 'var(--gold)' }}>cette page</a> —
            aucun email requis si vous avez accès à l'application.
          </p>
        </div>

        <div className="gold-sep"><span>✦</span></div>
      </main>
    </>
  )
}
