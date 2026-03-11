export default function Terms() {
  return (
    <>
      <div className="page-header">
        <div className="page-eyebrow">Légal</div>
        <h1>Conditions générales<br /><em>d'utilisation.</em></h1>
        <p className="meta">Dernière mise à jour : mars 2025 &nbsp;·&nbsp; Application : AURA Dating</p>
      </div>

      <main className="content-wrapper">
        <div className="intro-block">
          En accédant à l'application AURA ou en créant un compte, vous acceptez sans réserve les présentes Conditions Générales d'Utilisation (CGU). Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser le service.
        </div>

        <div className="policy-section">
          <div className="section-num">01</div>
          <h2>Description du service</h2>
          <p>AURA est une application de rencontre premium qui met en relation des personnes majeures sur la base de leur localisation géographique et d'un score de compatibilité calculé à partir de 12 questions sur leurs valeurs et leur mode de vie.</p>
          <p>L'accès complet au service est conditionné au paiement unique de <strong style={{ color: 'var(--white)' }}>14,99 €</strong> (offre fondateur), donnant droit à un accès à vie sans abonnement récurrent.</p>
        </div>

        <div className="policy-section">
          <div className="section-num">02</div>
          <h2>Conditions d'inscription</h2>
          <ul className="partner-list">
            <li><span>Vous devez être âgé d'au moins <strong>18 ans</strong>. AURA se réserve le droit de supprimer tout compte appartenant à un mineur.</span></li>
            <li><span>Vous devez fournir des informations exactes et à jour lors de votre inscription.</span></li>
            <li><span>Un seul compte par personne est autorisé.</span></li>
            <li><span>Vous êtes seul responsable de la confidentialité de vos identifiants de connexion.</span></li>
          </ul>
        </div>

        <div className="policy-section">
          <div className="section-num">03</div>
          <h2>Comportement des utilisateurs</h2>
          <p>En utilisant AURA, vous vous engagez à :</p>
          <ul className="partner-list">
            <li><span>Ne pas créer de faux profil, usurper l'identité d'autrui ou utiliser des photos qui ne vous appartiennent pas.</span></li>
            <li><span>Ne pas harceler, menacer, insulter ou intimider d'autres utilisateurs.</span></li>
            <li><span>Ne pas publier de contenu illégal, obscène, discriminatoire ou portant atteinte aux droits de tiers.</span></li>
            <li><span>Ne pas utiliser le service à des fins commerciales non autorisées (démarchage, escroquerie, spam).</span></li>
            <li><span>Ne pas tenter de contourner les systèmes de vérification d'identité.</span></li>
          </ul>
          <div className="highlight-box">
            <span className="highlight-icon">⚠</span>
            <p>Tout manquement à ces règles peut entraîner la suspension ou la suppression définitive du compte, sans remboursement.</p>
          </div>
        </div>

        <div className="policy-section">
          <div className="section-num">04</div>
          <h2>Paiement et remboursement</h2>
          <p>Le paiement de 14,99 € est <strong style={{ color: 'var(--white)' }}>unique et donne accès à vie</strong> aux fonctionnalités complètes d'AURA. Il n'y a aucun abonnement récurrent.</p>
          <ul className="partner-list">
            <li><span><strong>Garantie satisfait ou remboursé</strong> : vous disposez de 7 jours calendaires à compter de votre paiement pour demander un remboursement complet, sans justification.</span></li>
            <li><span>Passé ce délai, le paiement est définitif et non remboursable, sauf défaut technique imputable à AURA.</span></li>
            <li><span>Les paiements sont traités par <strong>Stripe</strong>. AURA ne stocke jamais vos données bancaires.</span></li>
          </ul>
        </div>

        <div className="policy-section">
          <div className="section-num">05</div>
          <h2>Propriété intellectuelle</h2>
          <p>L'ensemble des éléments de l'application AURA (logo, design, algorithmes, textes, interface) sont la propriété exclusive d'AURA et sont protégés par le droit de la propriété intellectuelle.</p>
          <p>En téléchargeant des photos sur AURA, vous accordez à AURA une licence non exclusive et limitée pour afficher ces contenus dans le cadre du service. Vous conservez tous vos droits sur vos contenus.</p>
        </div>

        <div className="policy-section">
          <div className="section-num">06</div>
          <h2>Limitation de responsabilité</h2>
          <p>AURA est une plateforme de mise en relation. AURA ne peut être tenu responsable des comportements des utilisateurs entre eux, des rencontres physiques organisées via l'application, ni des dommages indirects liés à l'utilisation du service.</p>
          <p>AURA s'engage à maintenir le service disponible avec un niveau de qualité raisonnable, mais ne garantit pas une disponibilité 100% continue.</p>
        </div>

        <div className="policy-section">
          <div className="section-num">07</div>
          <h2>Résiliation et suspension</h2>
          <p>AURA se réserve le droit de suspendre ou résilier tout compte en cas de violation des présentes CGU, sans préavis et sans remboursement.</p>
          <p>Vous pouvez supprimer votre compte à tout moment depuis les paramètres de l'application. Voir la procédure de suppression dans la section dédiée.</p>
        </div>

        <div className="policy-section">
          <div className="section-num">08</div>
          <h2>Droit applicable</h2>
          <p>Les présentes CGU sont régies par le <strong style={{ color: 'var(--white)' }}>droit français</strong>. En cas de litige, les tribunaux compétents sont ceux du ressort du siège social d'AURA, sauf disposition légale contraire.</p>
          <p>Pour tout litige relatif à ces CGU, nous vous invitons à nous contacter préalablement à toute action judiciaire.</p>
        </div>

        <div className="policy-section">
          <div className="section-num">09</div>
          <h2>Contact</h2>
          <div className="contact-card">
            <span className="contact-label">✦ Pour toute question légale</span>
            <a href="mailto:contact@aura-dating.app">contact@aura-dating.app</a>
            <p>Réponse sous 72 heures ouvrées.</p>
          </div>
        </div>

        <div className="gold-sep"><span>✦</span></div>
      </main>
    </>
  )
}
