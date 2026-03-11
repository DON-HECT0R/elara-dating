export default function Privacy() {
  return (
    <>
      <div className="page-header">
        <div className="page-eyebrow">Légal & Transparence</div>
        <h1>Politique de<br /><em>confidentialité.</em></h1>
        <p className="meta">Dernière mise à jour : mars 2025 &nbsp;·&nbsp; Application : AURA Dating</p>
      </div>

      <main className="content-wrapper">
        <div className="intro-block">
          Chez AURA, votre vie privée est une priorité absolue. Cette politique de confidentialité explique quelles données nous collectons, pourquoi, comment elles sont stockées et protégées, et quels droits vous exercez à tout moment. AURA est conforme au Règlement Général sur la Protection des Données (RGPD — UE 2016/679).
        </div>

        {/* 01 */}
        <div className="policy-section">
          <div className="section-num">01</div>
          <h2>Données collectées</h2>
          <p>Lors de votre inscription et de l'utilisation de l'application AURA, nous collectons les catégories de données suivantes :</p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Catégorie</th><th>Données</th><th>Obligatoire</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Identité</td><td>Nom, date de naissance, genre</td><td>Oui</td></tr>
              <tr><td>Photos</td><td>Photos de profil téléchargées par l'utilisateur</td><td>Oui (min. 1)</td></tr>
              <tr><td>Localisation</td><td>Position GPS en temps réel ou approximative</td><td>Oui</td></tr>
              <tr><td>Messages</td><td>Contenu des conversations entre utilisateurs matchés</td><td>Fonctionnel</td></tr>
              <tr><td>Paiement</td><td>Données de paiement traitées par Stripe (jamais stockées par AURA)</td><td>Oui (accès)</td></tr>
              <tr><td>Utilisation</td><td>Interactions dans l'app (likes, vues, sessions), logs techniques</td><td>Automatique</td></tr>
              <tr><td>Notifications</td><td>Token Expo Push Notifications (si activées)</td><td>Optionnel</td></tr>
            </tbody>
          </table>
          <div className="highlight-box">
            <span className="highlight-icon">🔞</span>
            <p><strong style={{ color: 'var(--white)' }}>Âge minimum requis : 18 ans.</strong> En vous inscrivant sur AURA, vous certifiez être majeur. Tout compte d'une personne mineure sera supprimé immédiatement.</p>
          </div>
        </div>

        {/* 02 */}
        <div className="policy-section">
          <div className="section-num">02</div>
          <h2>Finalité du traitement</h2>
          <p>Vos données sont traitées exclusivement pour les finalités suivantes :</p>
          <ul className="partner-list">
            <li><span><strong>Mise en relation entre utilisateurs</strong> — afficher des profils compatibles selon votre localisation GPS et votre score de compatibilité.</span></li>
            <li><span><strong>Vérification d'identité</strong> — s'assurer de l'authenticité des profils via la vérification par pièce d'identité et selfie en temps réel.</span></li>
            <li><span><strong>Traitement du paiement unique</strong> — encaisser le paiement de 14,99 € (offre fondateur, accès à vie) via Stripe.</span></li>
            <li><span><strong>Fonctionnement du service</strong> — permettre les échanges de messages, envoyer des notifications push et assurer la sécurité de la plateforme.</span></li>
          </ul>
          <p>Aucune donnée n'est utilisée à des fins publicitaires, de profilage commercial ou de revente.</p>
        </div>

        {/* 03 */}
        <div className="policy-section">
          <div className="section-num">03</div>
          <h2>Stockage & sécurité</h2>
          <p>Vos données sont hébergées sur des serveurs situés dans l'Union Européenne :</p>
          <ul className="partner-list">
            <li><span><strong>Supabase (UE)</strong> — base de données principale. Conforme au RGPD et certifié SOC 2 Type II.</span></li>
            <li><span><strong>Stripe</strong> — traitement des paiements. AURA ne stocke jamais vos données bancaires. Stripe est certifié PCI DSS Level 1.</span></li>
          </ul>
          <p>Les données sont chiffrées en transit (TLS 1.3) et au repos. L'accès est restreint selon le principe du moindre privilège.</p>
        </div>

        {/* 04 */}
        <div className="policy-section">
          <div className="section-num">04</div>
          <h2>Partage des données</h2>
          <div className="highlight-box">
            <span className="highlight-icon">✦</span>
            <p>AURA ne vend, ne loue et ne partage jamais vos données personnelles avec des tiers à des fins commerciales ou publicitaires.</p>
          </div>
          <ul className="partner-list">
            <li><span><strong>Supabase Inc.</strong> — hébergement et base de données (DPA conforme RGPD).</span></li>
            <li><span><strong>Stripe Inc.</strong> — traitement sécurisé du paiement unique de 14,99 €.</span></li>
            <li><span><strong>Expo (Notifications Push)</strong> — envoi de notifications. Seul le token est transmis ; aucun contenu de message n'est partagé.</span></li>
          </ul>
        </div>

        {/* 05 */}
        <div className="policy-section">
          <div className="section-num">05</div>
          <h2>Notifications push</h2>
          <p>AURA utilise <strong style={{ color: 'var(--white)' }}>Expo Push Notifications</strong> pour vous envoyer des alertes (nouveau match, message reçu, etc.). Ces notifications sont entièrement optionnelles.</p>
          <ul className="partner-list">
            <li><span>Depuis les <strong>paramètres de l'app</strong> → Notifications → Désactiver.</span></li>
            <li><span>Depuis les <strong>paramètres système</strong> de votre appareil iOS ou Android.</span></li>
          </ul>
        </div>

        {/* 06 */}
        <div className="policy-section">
          <div className="section-num">06</div>
          <h2>Vos droits RGPD</h2>
          <p>Conformément au RGPD, vous disposez des droits suivants, exerçables depuis l'application ou par email :</p>
          <div className="rights-grid">
            <div className="right-card"><span className="right-card-icon">◉</span><h3>Droit d'accès</h3><p>Obtenir une copie de toutes les données que nous détenons sur vous.</p></div>
            <div className="right-card"><span className="right-card-icon">✎</span><h3>Droit de rectification</h3><p>Corriger ou mettre à jour vos informations inexactes.</p></div>
            <div className="right-card"><span className="right-card-icon">✕</span><h3>Droit à l'effacement</h3><p>Demander la suppression définitive de toutes vos données.</p></div>
            <div className="right-card"><span className="right-card-icon">⬡</span><h3>Droit à la portabilité</h3><p>Recevoir vos données dans un format structuré et lisible par machine.</p></div>
            <div className="right-card"><span className="right-card-icon">◈</span><h3>Droit d'opposition</h3><p>Vous opposer à un traitement spécifique dans les cas prévus par la loi.</p></div>
            <div className="right-card"><span className="right-card-icon">⏸</span><h3>Droit à la limitation</h3><p>Demander la suspension temporaire du traitement pendant un litige.</p></div>
          </div>
          <p>Via <strong style={{ color: 'var(--white)' }}>Paramètres → Mes données → Exercer mes droits</strong> ou par email. Réclamation possible auprès de la CNIL (cnil.fr).</p>
        </div>

        {/* 07 */}
        <div className="policy-section">
          <div className="section-num">07</div>
          <h2>Suppression de compte</h2>
          <div className="highlight-box">
            <span className="highlight-icon">🗑</span>
            <p>Sur simple demande, <strong style={{ color: 'var(--white)' }}>toutes vos données sont supprimées définitivement</strong> de nos serveurs dans un délai de 30 jours.</p>
          </div>
          <ul className="partner-list">
            <li><span>Votre profil, photos, informations d'identité et de localisation.</span></li>
            <li><span>L'ensemble de vos conversations et messages.</span></li>
            <li><span>Vos likes, matchs et données d'utilisation.</span></li>
            <li><span>Votre token de notification push.</span></li>
          </ul>
          <p>Via <strong style={{ color: 'var(--white)' }}>Paramètres → Mon compte → Supprimer mon compte</strong>, ou par email.</p>
        </div>

        {/* 08 */}
        <div className="policy-section">
          <div className="section-num">08</div>
          <h2>Durée de conservation</h2>
          <p>Vos données sont conservées pendant toute la durée de votre compte actif. En cas d'inactivité supérieure à 24 mois, nous vous contacterons avant toute suppression automatique.</p>
          <p>Les données de paiement sont conservées par Stripe pendant la durée légale requise (5 ans).</p>
        </div>

        {/* 09 */}
        <div className="policy-section">
          <div className="section-num">09</div>
          <h2>Nous contacter</h2>
          <p>Pour toute question, pour exercer vos droits RGPD ou pour toute réclamation :</p>
          <div className="contact-card">
            <span className="contact-label">✦ Adresse de contact</span>
            <a href="mailto:contact@aura-dating.app">contact@aura-dating.app</a>
            <p>Réponse sous 72 heures ouvrées.</p>
          </div>
        </div>

        <div className="gold-sep"><span>✦</span></div>
      </main>
    </>
  )
}
