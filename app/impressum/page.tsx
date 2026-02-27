export default function Impressum() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <a
          href="/"
          className="inline-block mb-8 text-slate-400 hover:text-white transition-colors text-sm"
        >
          ← Back to Wanderlust
        </a>

        <h1 className="text-3xl font-bold mb-10 text-white">Impressum</h1>

        {/* Information according to § 25 MedienG and § 5 ECG */}
        <section className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 mb-6">
          <h2 className="text-xl font-semibold mb-4 text-white">
            Angaben gemäß § 25 MedienG / § 5 ECG
          </h2>
          <div className="text-slate-300 leading-relaxed space-y-2">
            <p className="font-medium text-white">Roland Schaar</p>
            <p>Österreich / Austria</p>
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
        </section>

        {/* Nature of the project */}
        <section className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 mb-6">
          <h2 className="text-xl font-semibold mb-4 text-white">
            Über dieses Projekt
          </h2>
          <p className="text-slate-300 leading-relaxed">
            Wanderlust ist ein privates, nicht-kommerzielles Hobbyprojekt. Es
            werden keine Waren oder Dienstleistungen angeboten und keine Einnahmen
            erzielt. Dieses Projekt dient ausschließlich persönlichen und
            experimentellen Zwecken.
          </p>
        </section>

        {/* AI-Generated Content Disclaimer */}
        <section className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 mb-6">
          <h2 className="text-xl font-semibold mb-4 text-white">
            Hinweis zu KI-generierten Inhalten
          </h2>
          <p className="text-slate-300 leading-relaxed">
            Die auf dieser Plattform generierten Reisegeschichten, Texte und
            Empfehlungen werden mithilfe von künstlicher Intelligenz (KI / AI)
            erstellt. Diese Inhalte dienen ausschließlich der Unterhaltung und
            Inspiration. Sie stellen keine professionelle Reiseberatung dar und
            können sachliche Fehler, veraltete Informationen oder fiktive
            Elemente enthalten. Überprüfen Sie alle Informationen eigenständig,
            bevor Sie Reiseentscheidungen treffen. Der Betreiber übernimmt keine
            Haftung für die Richtigkeit, Vollständigkeit oder Aktualität der
            KI-generierten Inhalte.
          </p>
          <p className="text-slate-400 text-sm mt-3 italic">
            Travel stories, texts, and recommendations generated on this platform
            are created using artificial intelligence (AI). They are for
            entertainment and inspiration only, do not constitute professional
            travel advice, and may contain inaccuracies, outdated information, or
            fictional elements. Always verify information independently before
            making travel decisions.
          </p>
        </section>

        {/* Google OAuth & Privacy */}
        <section className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 mb-6">
          <h2 className="text-xl font-semibold mb-4 text-white">
            Datenschutz & Google OAuth
          </h2>
          <div className="text-slate-300 leading-relaxed space-y-3">
            <p>
              Diese Anwendung bietet die Möglichkeit, sich über Google OAuth
              (Google-Anmeldung) zu authentifizieren. Dabei werden folgende Daten
              von Google übermittelt und verarbeitet:
            </p>
            <ul className="list-disc list-inside ml-2 space-y-1 text-slate-400">
              <li>Name (Anzeigename des Google-Kontos)</li>
              <li>E-Mail-Adresse</li>
              <li>Profilbild-URL</li>
            </ul>
            <p>
              Diese Daten werden ausschließlich zur Authentifizierung und zur
              Bereitstellung der Anwendungsfunktionen verwendet. Es erfolgt keine
              Weitergabe an Dritte und kein Einsatz zu Werbezwecken.
            </p>
            <p>
              Die Verarbeitung erfolgt auf Grundlage Ihrer Einwilligung (Art. 6
              Abs. 1 lit. a DSGVO), die Sie durch die Nutzung der
              Google-Anmeldung erteilen. Sie können Ihre Einwilligung jederzeit
              widerrufen, indem Sie Ihr Konto löschen lassen oder den Zugriff
              über Ihre{' '}
              <a
                href="https://myaccount.google.com/permissions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline transition-colors"
              >
                Google-Kontoeinstellungen
              </a>{' '}
              entziehen.
            </p>
            <p>
              Bei Fragen oder zur Löschung Ihrer Daten wenden Sie sich bitte an:{' '}
              <a
                href="mailto:roland.schaar.at@gmail.com"
                className="text-blue-400 hover:text-blue-300 underline transition-colors"
              >
                roland.schaar.at@gmail.com
              </a>
            </p>
          </div>
        </section>

        {/* Haftungsausschluss / Disclaimer */}
        <section className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 mb-6">
          <h2 className="text-xl font-semibold mb-4 text-white">
            Haftungsausschluss
          </h2>
          <div className="text-slate-300 leading-relaxed space-y-3">
            <p>
              <span className="font-medium text-white">Haftung für Inhalte:</span>{' '}
              Die Inhalte dieser Seite wurden mit größtmöglicher Sorgfalt
              erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der
              Inhalte wird jedoch keine Gewähr übernommen.
            </p>
            <p>
              <span className="font-medium text-white">Haftung für Links:</span>{' '}
              Diese Seite enthält möglicherweise Links zu externen Websites
              Dritter, auf deren Inhalte der Betreiber keinen Einfluss hat. Für
              die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
              verantwortlich.
            </p>
          </div>
        </section>

        <div className="text-center mt-10">
          <a
            href="/"
            className="inline-block text-slate-400 hover:text-white transition-colors text-sm"
          >
            ← Back to Wanderlust
          </a>
        </div>
      </div>
    </main>
  );
}