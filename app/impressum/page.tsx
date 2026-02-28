'use client';

import { useState } from 'react';

type Language = 'de' | 'en' | 'fr';

const translations = {
  de: {
    backLink: '← Zurück zu Wanderlust',
    title: 'Impressum',
    sectionLegal: 'Angaben gemäß § 25 MedienG / § 5 ECG',
    country: 'Österreich',
    sectionPublisher: 'Medieninhaber und Herausgeber (§ 25 MedienG)',
    businessPurposeLabel: 'Unternehmensgegenstand:',
    businessPurpose: 'Privates, nicht-kommerzielles Webprojekt',
    editorialLineLabel: 'Blattlinie / Grundlegende Richtung:',
    editorialLine:
      'Wanderlust ist eine Webanwendung zur KI-gestützten Generierung von Reisegeschichten. Die Plattform dient der Unterhaltung und kreativen Inspiration rund um das Thema Reisen.',
    sectionAbout: 'Über dieses Projekt',
    aboutText:
      'Wanderlust ist ein privates, nicht-kommerzielles Hobbyprojekt. Es werden keine Waren oder Dienstleistungen angeboten und keine Einnahmen erzielt. Dieses Projekt dient ausschließlich persönlichen und experimentellen Zwecken. Es besteht keine Gewerbeberechtigung und keine UID-Nummer, da keine wirtschaftliche Tätigkeit ausgeübt wird.',
    sectionAI: '⚠️ Hinweis zu KI-generierten Inhalten',
    aiWarning:
      'Alle auf dieser Plattform generierten Reisegeschichten, Texte, Empfehlungen und Beschreibungen werden vollständig durch künstliche Intelligenz (KI / AI) erstellt. Diese Inhalte sind weder redaktionell geprüft noch manuell verifiziert.',
    aiPurpose:
      'Die KI-generierten Inhalte dienen ausschließlich der Unterhaltung und Inspiration. Sie stellen',
    aiNo: 'keine',
    aiAdvice:
      'professionelle Reiseberatung, Gesundheitsberatung oder sonstige Fachberatung dar. Die Inhalte können unter anderem enthalten:',
    aiBullet1: 'Sachliche Fehler und ungenaue Angaben',
    aiBullet2: 'Veraltete oder nicht mehr gültige Informationen',
    aiBullet3: 'Fiktive Orte, Namen, Ereignisse oder Beschreibungen',
    aiBullet4: 'Unvollständige oder irreführende Darstellungen',
    aiVerify: 'Überprüfen Sie',
    aiAll: 'alle',
    aiVerifyText:
      'Informationen eigenständig und bei offiziellen Quellen, bevor Sie Reiseentscheidungen treffen. Der Betreiber übernimmt keinerlei Haftung für die Richtigkeit, Vollständigkeit, Aktualität oder Zuverlässigkeit der KI-generierten Inhalte.',
    aiEnglishNote:
      'All travel stories, texts, recommendations, and descriptions generated on this platform are created entirely by artificial intelligence (AI). They are not editorially reviewed or manually verified. These contents are for entertainment and inspiration only and do not constitute professional travel advice or any other form of expert guidance. They may contain factual errors, outdated information, fictional elements, or misleading descriptions. Always verify all information independently using official sources before making any travel decisions. The operator assumes no liability for the accuracy, completeness, timeliness, or reliability of AI-generated content.',
    sectionPrivacy: '🔒 Datenschutz & Google OAuth',
    privacyIntro:
      'Diese Anwendung bietet die Möglichkeit, sich über',
    privacyGoogleOAuth: 'Google OAuth 2.0',
    privacyIntro2:
      '(Google-Anmeldung) zu authentifizieren. Dabei werden folgende Daten von Google übermittelt und verarbeitet:',
    privacyBullet1: 'Name (Anzeigename des Google-Kontos)',
    privacyBullet2: 'E-Mail-Adresse',
    privacyBullet3: 'Profilbild-URL',
    privacyPurposeTitle: 'Zweck der Datenverarbeitung:',
    privacyPurpose1: 'Authentifizierung und Identifikation des Nutzers',
    privacyPurpose2:
      'Bereitstellung personalisierter Anwendungsfunktionen (z.B. gespeicherte Geschichten)',
    privacyPurpose3: 'Anzeige des Profilnamens und -bildes in der Anwendung',
    privacyNoSharing: 'Es erfolgt',
    privacyNone: 'keine',
    privacyNoSharingText:
      'Weitergabe Ihrer Daten an Dritte, kein Einsatz zu Werbezwecken, kein Tracking und kein Profiling. Es werden keine Cookies zu Marketingzwecken gesetzt.',
    privacyLegalBasisLabel: 'Rechtsgrundlage:',
    privacyLegalBasis:
      'Die Verarbeitung erfolgt auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), die Sie durch die Nutzung der Google-Anmeldung erteilen.',
    privacyRevokeLabel: 'Widerruf und Löschung:',
    privacyRevoke:
      'Sie können Ihre Einwilligung jederzeit widerrufen, indem Sie:',
    privacyRevoke1: 'Den Zugriff über Ihre',
    privacyGoogleSettings: 'Google-Kontoeinstellungen',
    privacyRevoke1b: 'entziehen',
    privacyRevoke2:
      'Die Löschung Ihres Kontos und aller zugehörigen Daten per E-Mail beantragen',
    privacyRightsLabel: 'Ihre Rechte nach DSGVO:',
    privacyRights:
      'Sie haben das Recht auf Auskunft (Art. 15), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) und Widerspruch (Art. 21). Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:',
    privacyComplaintLabel: 'Beschwerderecht:',
    privacyComplaint:
      'Sie haben das Recht, eine Beschwerde bei der zuständigen Aufsichtsbehörde einzureichen:',
    privacyComplaintAuthority: 'Österreichische Datenschutzbehörde (dsb.gv.at)',
    sectionDisclaimer: 'Haftungsausschluss / Disclaimer',
    disclaimerContentLabel: 'Haftung für Inhalte:',
    disclaimerContent:
      'Die Inhalte dieser Seite wurden mit größtmöglicher Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte wird jedoch keine Gewähr übernommen. Insbesondere wird keine Haftung für KI-generierte Inhalte übernommen (siehe Hinweis oben).',
    disclaimerLinksLabel: 'Haftung für Links:',
    disclaimerLinks:
      'Diese Seite enthält möglicherweise Links zu externen Websites Dritter, auf deren Inhalte der Betreiber keinen Einfluss hat. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Bei Bekanntwerden von Rechtsverletzungen werden betroffene Links umgehend entfernt.',
    disclaimerCopyrightLabel: 'Urheberrecht:',
    disclaimerCopyright:
      'Die durch den Betreiber erstellten Inhalte und Werke auf dieser Seite unterliegen dem österreichischen Urheberrecht. KI-generierte Inhalte werden dem Nutzer zur persönlichen, nicht-kommerziellen Nutzung bereitgestellt.',
    sectionDispute: 'Streitbeilegung',
    disputeText:
      'Der Betreiber ist nicht bereit und nicht verpflichtet, an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen, da es sich um ein nicht-kommerzielles Projekt handelt.',
    footerDate: 'Stand:',
  },
  en: {
    backLink: '← Back to Wanderlust',
    title: 'Legal Notice (Impressum)',
    sectionLegal: 'Information according to § 25 MedienG / § 5 ECG',
    country: 'Austria',
    sectionPublisher: 'Media Owner and Publisher (§ 25 MedienG)',
    businessPurposeLabel: 'Business purpose:',
    businessPurpose: 'Private, non-commercial web project',
    editorialLineLabel: 'Editorial line / Fundamental direction:',
    editorialLine:
      'Wanderlust is a web application for AI-powered generation of travel stories. The platform serves entertainment and creative inspiration related to the topic of travel.',
    sectionAbout: 'About this Project',
    aboutText:
      'Wanderlust is a private, non-commercial hobby project. No goods or services are offered and no revenue is generated. This project serves exclusively personal and experimental purposes. There is no trade license and no VAT number, as no commercial activity is conducted.',
    sectionAI: '⚠️ Notice on AI-Generated Content',
    aiWarning:
      'All travel stories, texts, recommendations, and descriptions generated on this platform are created entirely by artificial intelligence (AI). These contents are neither editorially reviewed nor manually verified.',
    aiPurpose:
      'The AI-generated content is intended solely for entertainment and inspiration. It does',
    aiNo: 'not',
    aiAdvice:
      'constitute professional travel advice, health advice, or any other form of expert guidance. The content may include, among other things:',
    aiBullet1: 'Factual errors and inaccurate information',
    aiBullet2: 'Outdated or no longer valid information',
    aiBullet3: 'Fictional places, names, events, or descriptions',
    aiBullet4: 'Incomplete or misleading representations',
    aiVerify: 'Verify',
    aiAll: 'all',
    aiVerifyText:
      'information independently and through official sources before making any travel decisions. The operator assumes no liability for the accuracy, completeness, timeliness, or reliability of AI-generated content.',
    aiEnglishNote:
      'All travel stories, texts, recommendations, and descriptions generated on this platform are created entirely by artificial intelligence (AI). They are not editorially reviewed or manually verified. These contents are for entertainment and inspiration only and do not constitute professional travel advice or any other form of expert guidance. They may contain factual errors, outdated information, fictional elements, or misleading descriptions. Always verify all information independently using official sources before making any travel decisions. The operator assumes no liability for the accuracy, completeness, timeliness, or reliability of AI-generated content.',
    sectionPrivacy: '🔒 Privacy & Google OAuth',
    privacyIntro:
      'This application offers the option to authenticate via',
    privacyGoogleOAuth: 'Google OAuth 2.0',
    privacyIntro2:
      '(Google Sign-In). The following data is transmitted and processed from Google:',
    privacyBullet1: 'Name (display name of the Google account)',
    privacyBullet2: 'Email address',
    privacyBullet3: 'Profile picture URL',
    privacyPurposeTitle: 'Purpose of data processing:',
    privacyPurpose1: 'Authentication and identification of the user',
    privacyPurpose2:
      'Provision of personalized application features (e.g., saved stories)',
    privacyPurpose3: 'Display of profile name and picture in the application',
    privacyNoSharing: 'There is',
    privacyNone: 'no',
    privacyNoSharingText:
      'sharing of your data with third parties, no use for advertising purposes, no tracking, and no profiling. No cookies are set for marketing purposes.',
    privacyLegalBasisLabel: 'Legal basis:',
    privacyLegalBasis:
      'Processing is based on your consent (Art. 6(1)(a) GDPR), which you grant by using the Google Sign-In.',
    privacyRevokeLabel: 'Revocation and deletion:',
    privacyRevoke:
      'You can revoke your consent at any time by:',
    privacyRevoke1: 'Revoking access via your',
    privacyGoogleSettings: 'Google account settings',
    privacyRevoke1b: '',
    privacyRevoke2:
      'Requesting deletion of your account and all associated data by email',
    privacyRightsLabel: 'Your rights under GDPR:',
    privacyRights:
      'You have the right to information (Art. 15), rectification (Art. 16), erasure (Art. 17), restriction of processing (Art. 18), data portability (Art. 20), and objection (Art. 21). To exercise your rights, please contact:',
    privacyComplaintLabel: 'Right to complain:',
    privacyComplaint:
      'You have the right to file a complaint with the competent supervisory authority:',
    privacyComplaintAuthority: 'Austrian Data Protection Authority (dsb.gv.at)',
    sectionDisclaimer: 'Disclaimer',
    disclaimerContentLabel: 'Liability for content:',
    disclaimerContent:
      'The contents of this website have been created with the utmost care. However, no guarantee is given for the accuracy, completeness, and timeliness of the content. In particular, no liability is assumed for AI-generated content (see notice above).',
    disclaimerLinksLabel: 'Liability for links:',
    disclaimerLinks:
      'This website may contain links to external third-party websites over whose content the operator has no influence. The respective provider is always responsible for the content of the linked pages. The linked pages were checked for possible legal violations at the time of linking. If any legal violations become known, affected links will be removed immediately.',
    disclaimerCopyrightLabel: 'Copyright:',
    disclaimerCopyright:
      'The content and works created by the operator on this website are subject to Austrian copyright law. AI-generated content is provided to users for personal, non-commercial use.',
    sectionDispute: 'Dispute Resolution',
    disputeText:
      'The operator is not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board, as this is a non-commercial project.',
    footerDate: 'Last updated:',
  },
  fr: {
    backLink: '← Retour à Wanderlust',
    title: 'Mentions légales (Impressum)',
    sectionLegal: 'Informations conformément au § 25 MedienG / § 5 ECG',
    country: 'Autriche',
    sectionPublisher: 'Propriétaire et éditeur du média (§ 25 MedienG)',
    businessPurposeLabel: "Objet de l'entreprise :",
    businessPurpose: 'Projet web privé et non commercial',
    editorialLineLabel: 'Ligne éditoriale / Orientation fondamentale :',
    editorialLine:
      "Wanderlust est une application web de génération d'histoires de voyage assistée par intelligence artificielle. La plateforme sert au divertissement et à l'inspiration créative autour du thème du voyage.",
    sectionAbout: 'À propos de ce projet',
    aboutText:
      "Wanderlust est un projet privé et non commercial réalisé par passion. Aucun bien ni service n'est proposé et aucun revenu n'est généré. Ce projet sert exclusivement à des fins personnelles et expérimentales. Il n'existe ni autorisation commerciale ni numéro de TVA, car aucune activité économique n'est exercée.",
    sectionAI: "⚠️ Avis concernant les contenus générés par l'IA",
    aiWarning:
      "Toutes les histoires de voyage, textes, recommandations et descriptions générés sur cette plateforme sont entièrement créés par intelligence artificielle (IA). Ces contenus ne sont ni vérifiés éditorialement ni contrôlés manuellement.",
    aiPurpose:
      "Les contenus générés par l'IA sont destinés exclusivement au divertissement et à l'inspiration. Ils ne constituent",
    aiNo: 'pas',
    aiAdvice:
      'de conseil professionnel en matière de voyage, de santé ou tout autre conseil spécialisé. Les contenus peuvent notamment contenir :',
    aiBullet1: 'Des erreurs factuelles et des informations inexactes',
    aiBullet2: 'Des informations obsolètes ou périmées',
    aiBullet3: 'Des lieux, noms, événements ou descriptions fictifs',
    aiBullet4: 'Des représentations incomplètes ou trompeuses',
    aiVerify: 'Vérifiez',
    aiAll: 'toutes',
    aiVerifyText:
      "les informations de manière indépendante et auprès de sources officielles avant de prendre des décisions de voyage. L'exploitant n'assume aucune responsabilité quant à l'exactitude, l'exhaustivité, l'actualité ou la fiabilité des contenus générés par l'IA.",
    aiEnglishNote:
      'All travel stories, texts, recommendations, and descriptions generated on this platform are created entirely by artificial intelligence (AI). They are not editorially reviewed or manually verified. These contents are for entertainment and inspiration only and do not constitute professional travel advice or any other form of expert guidance. They may contain factual errors, outdated information, fictional elements, or misleading descriptions. Always verify all information independently using official sources before making any travel decisions. The operator assumes no liability for the accuracy, completeness, timeliness, or reliability of AI-generated content.',
    sectionPrivacy: '🔒 Protection des données & Google OAuth',
    privacyIntro:
      "Cette application offre la possibilité de s'authentifier via",
    privacyGoogleOAuth: 'Google OAuth 2.0',
    privacyIntro2:
      '(connexion Google). Les données suivantes sont transmises et traitées par Google :',
    privacyBullet1: 'Nom (nom affiché du compte Google)',
    privacyBullet2: 'Adresse e-mail',
    privacyBullet3: "URL de la photo de profil",
    privacyPurposeTitle: 'Finalité du traitement des données :',
    privacyPurpose1: "Authentification et identification de l'utilisateur",
    privacyPurpose2:
      "Mise à disposition de fonctionnalités personnalisées de l'application (par ex. histoires sauvegardées)",
    privacyPurpose3: "Affichage du nom et de la photo de profil dans l'application",
    privacyNoSharing: "Il n'y a",
    privacyNone: 'aucune',
    privacyNoSharingText:
      "transmission de vos données à des tiers, aucune utilisation à des fins publicitaires, aucun suivi et aucun profilage. Aucun cookie n'est placé à des fins marketing.",
    privacyLegalBasisLabel: 'Base juridique :',
    privacyLegalBasis:
      "Le traitement est effectué sur la base de votre consentement (art. 6, par. 1, point a du RGPD), que vous accordez en utilisant la connexion Google.",
    privacyRevokeLabel: 'Révocation et suppression :',
    privacyRevoke:
      'Vous pouvez révoquer votre consentement à tout moment en :',
    privacyRevoke1: "Retirant l'accès via vos",
    privacyGoogleSettings: 'paramètres de compte Google',
    privacyRevoke1b: '',
    privacyRevoke2:
      'Demandant la suppression de votre compte et de toutes les données associées par e-mail',
    privacyRightsLabel: 'Vos droits selon le RGPD :',
    privacyRights:
      "Vous avez le droit d'accès (art. 15), de rectification (art. 16), d'effacement (art. 17), de limitation du traitement (art. 18), de portabilité des données (art. 20) et d'opposition (art. 21). Pour exercer vos droits, veuillez contacter :",
    privacyComplaintLabel: 'Droit de réclamation :',
    privacyComplaint:
      "Vous avez le droit de déposer une plainte auprès de l'autorité de contrôle compétente :",
    privacyComplaintAuthority: 'Autorité autrichienne de protection des données (dsb.gv.at)',
    sectionDisclaimer: 'Clause de non-responsabilité',
    disclaimerContentLabel: 'Responsabilité pour les contenus :',
    disclaimerContent:
      "Les contenus de ce site ont été créés avec le plus grand soin. Cependant, aucune garantie n'est donnée quant à l'exactitude, l'exhaustivité et l'actualité des contenus. En particulier, aucune responsabilité n'est assumée pour les contenus générés par l'IA (voir avis ci-dessus).",
    disclaimerLinksLabel: 'Responsabilité pour les liens :',
    disclaimerLinks:
      "Ce site peut contenir des liens vers des sites web externes de tiers sur le contenu desquels l'exploitant n'a aucune influence. Le fournisseur respectif est toujours responsable du contenu des pages liées. Les pages liées ont été vérifiées pour d'éventuelles violations légales au moment de la création du lien. Si des violations légales deviennent connues, les liens concernés seront immédiatement supprimés.",
    disclaimerCopyrightLabel: "Droit d'auteur :",
    disclaimerCopyright:
      "Les contenus et œuvres créés par l'exploitant sur ce site sont soumis au droit d'auteur autrichien. Les contenus générés par l'IA sont mis à disposition des utilisateurs pour un usage personnel et non commercial.",
    sectionDispute: 'Règlement des litiges',
    disputeText:
      "L'exploitant n'est ni disposé ni obligé de participer à une procédure de règlement des litiges devant un organisme de médiation des consommateurs, car il s'agit d'un projet non commercial.",
    footerDate: 'Dernière mise à jour :',
  },
};

const languageLabels: Record<Language, string> = {
  de: 'Deutsch',
  en: 'English',
  fr: 'Français',
};

export default function Impressum() {
  const [lang, setLang] = useState<Language>('de');
  const t = translations[lang];

  const dateLocale = lang === 'de' ? 'de-AT' : lang === 'fr' ? 'fr-FR' : 'en-GB';

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-8">
          <a
            href="/"
            className="inline-block text-slate-400 hover:text-white transition-colors text-sm"
          >
            {t.backLink}
          </a>

          {/* Language Selector */}
          <div className="flex items-center gap-1 bg-slate-800/70 rounded-xl p-1 border border-slate-700/50">
            {(Object.keys(languageLabels) as Language[]).map((code) => (
              <button
                key={code}
                onClick={() => setLang(code)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  lang === code
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
                }`}
              >
                {languageLabels[code]}
              </button>
            ))}
          </div>
        </div>

        <h1 className="text-3xl font-bold mb-10 text-white">{t.title}</h1>

        {/* Information according to § 25 MedienG and § 5 ECG */}
        <section className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 mb-6">
          <h2 className="text-xl font-semibold mb-4 text-white">
            {t.sectionLegal}
          </h2>
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex-shrink-0 flex justify-center sm:justify-start">
              <a
                href="https://www.linkedin.com/in/rolandschaar"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/roland-schaar.jpg"
                  alt="Roland Schaar"
                  width={200}
                  height={200}
                  className="rounded-full border-2 border-slate-600 hover:border-blue-400 transition-colors object-cover w-[200px] h-[200px]"
                  style={{ objectPosition: '50% 15%' }}
                />
              </a>
            </div>
            <div className="text-slate-300 leading-relaxed space-y-2">
              <p className="font-medium text-white">Roland Schaar</p>
              <p>Rudolf Heigl Gasse 7</p>
              <p>3031 Rekawinkel</p>
              <p>{t.country}</p>
              <p>
                E-Mail:{' '}
                <a
                  href="mailto:roland.schaar.at@gmail.com"
                  className="text-blue-400 hover:text-blue-300 underline transition-colors"
                >
                  roland.schaar.at@gmail.com
                </a>
              </p>
              <p className="mt-3">
                LinkedIn:{' '}
                <a
                  href="https://www.linkedin.com/in/rolandschaar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline transition-colors"
                >
                  linkedin.com/in/rolandschaar
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Medieninhaber gemäß § 25 MedienG */}
        <section className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 mb-6">
          <h2 className="text-xl font-semibold mb-4 text-white">
            {t.sectionPublisher}
          </h2>
          <div className="text-slate-300 leading-relaxed space-y-2">
            <p className="font-medium text-white">Roland Schaar</p>
            <p>Rudolf Heigl Gasse 7, 3031 Rekawinkel, {t.country}</p>
            <p>
              <span className="font-medium text-white">{t.businessPurposeLabel}</span>{' '}
              {t.businessPurpose}
            </p>
            <p>
              <span className="font-medium text-white">{t.editorialLineLabel}</span>{' '}
              {t.editorialLine}
            </p>
          </div>
        </section>

        {/* Nature of the project */}
        <section className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 mb-6">
          <h2 className="text-xl font-semibold mb-4 text-white">
            {t.sectionAbout}
          </h2>
          <p className="text-slate-300 leading-relaxed">
            {t.aboutText}
          </p>
        </section>

        {/* AI-Generated Content Disclaimer */}
        <section className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 mb-6">
          <h2 className="text-xl font-semibold mb-4 text-white">
            {t.sectionAI}
          </h2>
          <div className="bg-amber-900/20 border border-amber-700/30 rounded-xl p-4 mb-4">
            <p className="text-amber-200/90 leading-relaxed text-sm font-medium">
              {t.aiWarning}
            </p>
          </div>
          <div className="text-slate-300 leading-relaxed space-y-3">
            <p>
              {t.aiPurpose} <span className="font-medium text-white">{t.aiNo}</span>{' '}
              {t.aiAdvice}
            </p>
            <ul className="list-disc list-inside ml-2 space-y-1 text-slate-400">
              <li>{t.aiBullet1}</li>
              <li>{t.aiBullet2}</li>
              <li>{t.aiBullet3}</li>
              <li>{t.aiBullet4}</li>
            </ul>
            <p>
              {t.aiVerify} <span className="font-medium text-white">{t.aiAll}</span>{' '}
              {t.aiVerifyText}
            </p>
                    </div>
        </section>
      </div>
    </main>
  )
}
