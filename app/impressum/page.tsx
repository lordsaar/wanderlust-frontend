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
                  width={120}
                  height={120}
                  className="rounded-full border-2 border-slate-600 hover:border-blue-400 transition-colors object-cover w-[120px] h-[120px]"
                  style={{ objectPosition: 'top center' }}
                />
              </a>
            </div>
            <div className="text-slate-300 leading-relaxed space-y-2">
              <p className="font-medium text-white">Roland Schaar</p>
              <p>Rudolf Heigl Gasse 7</p>
              <p>3031 Rekawinkel</p>
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
          </div>
        </section>

        {/* Medieninhaber gemäß § 25 MedienG */}
        <section className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 mb-6">
          <h2 className="text-xl font-semibold mb-4 text-white">
            Medieninhaber und Herausgeber (§ 25 MedienG)
          </h2>
          <div className="text-slate-300 leading-relaxed space-y-2">
            <p className="font-medium text-white">Roland Schaar</p>
            <p>Rudolf Heigl Gasse 7, 3031 Rekawinkel, Austria</p>
            <p>
              <span className="font-medium text-white">Unternehmensgegenstand:</span>{' '}
              Privates, nicht-kommerzielles Webprojekt
            </p>
            <p>
              <span className="font-medium text-white">Blattlinie / Grundlegende Richtung:</span>{' '}
              Wanderlust ist eine Webanwendung zur KI-gestützten Generierung von
              Reisegeschichten. Die Plattform dient der Unterhaltung und
              kreativen Inspiration rund um das Thema Reisen.
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
            experimentellen Zwecken. Es besteht keine Gewerbeberechtigung und
            keine UID-Nummer, da keine wirtschaftliche Tätigkeit ausgeübt wird.
          </p>
        </section>

        {/* AI-Generated Content Disclaimer */}
        <section className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 mb-6">
          <h2 className="text-xl font-semibold mb-4 text-white">
            ⚠️ Hinweis zu KI-generierten Inhalten
          </h2>
          <div className="bg-amber-900/20 border border-amber-700/30 rounded-xl p-4 mb-4">
            <p className="text-amber-200/90 leading-relaxed text-sm font-medium">
              Alle auf dieser Plattform generierten Reisegeschichten, Texte,
              Empfehlungen und Beschreibungen werden vollständig durch künstliche
              Intelligenz (KI / AI) erstellt. Diese Inhalte sind weder
              redaktionell geprüft noch manuell verifiziert.
            </p>
          </div>
          <div className="text-slate-300 leading-relaxed space-y-3">
            <p>
              Die KI-generierten Inhalte dienen ausschließlich der Unterhaltung
              und Inspiration. Sie stellen <span className="font-medium text-white">keine</span> professionelle
              Reiseberatung, Gesundheitsberatung oder sonstige Fachberatung dar.
              Die Inhalte können unter anderem enthalten:
            </p>
            <ul className="list-disc list-inside ml-2 space-y-1 text-slate-400">
              <li>Sachliche Fehler und ungenaue Angaben</li>
              <li>Veraltete oder nicht mehr gültige Informationen</li>
              <li>Fiktive Orte, Namen, Ereignisse oder Beschreibungen</li>
              <li>Unvollständige oder irreführende Darstellungen</li>
            </ul>
            <p>
              Überprüfen Sie <span className="font-medium text-white">alle</span> Informationen
              eigenständig und bei offiziellen Quellen, bevor Sie
              Reiseentscheidungen treffen. Der Betreiber übernimmt keinerlei
              Haftung für die Richtigkeit, Vollständigkeit, Aktualität oder
              Zuverlässigkeit der KI-generierten Inhalte.
            </p>
          </div>
          <div className="mt-4 pt-4 border-t border-slate-700/50">
            <p className="text-slate-400 text-sm italic">
              All travel stories, texts, recommendations, and descriptions
              generated on this platform are created entirely by artificial
              intelligence (AI). They are not editorially reviewed or manually
              verified. These contents are for entertainment and inspiration only
              and do not constitute professional travel advice or any other form
              of expert guidance. They may contain factual errors, outdated
              information, fictional elements, or misleading descriptions. Always
              verify all information independently using official sources before
              making any travel decisions. The operator assumes no liability for
              the accuracy, completeness, timeliness, or reliability of
              AI-generated content.
            </p>
          </div>
        </section>

        {/* Google OAuth & Privacy */}
        <section className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 mb-6">
          <h2 className="text-xl font-semibold mb-4 text-white">
            🔒 Datenschutz & Google OAuth
          </h2>
          <div className="text-slate-300 leading-relaxed space-y-3">
            <p>
              Diese Anwendung bietet die Möglichkeit, sich über{' '}
              <span className="font-medium text-white">Google OAuth 2.0</span>{' '}
              (Google-Anmeldung) zu authentifizieren. Dabei werden folgende Daten
              von Google übermittelt und verarbeitet:
            </p>
            <ul className="list-disc list-inside ml-2 space-y-1 text-slate-400">
              <li>Name (Anzeigename des Google-Kontos)</li>
              <li>E-Mail-Adresse</li>
              <li>Profilbild-URL</li>
            </ul>

            <div className="bg-slate-700/30 rounded-xl p-4 my-2">
              <p className="text-sm font-medium text-white mb-2">
                Zweck der Datenverarbeitung:
              </p>
              <ul className="list-disc list-inside ml-2 space-y-1 text-slate-400 text-sm">
                <li>Authentifizierung und Identifikation des Nutzers</li>
                <li>Bereitstellung personalisierter Anwendungsfunktionen (z.B. gespeicherte Geschichten)</li>
                <li>Anzeige des Profilnamens und -bildes in der Anwendung</li>
              </ul>
            </div>

            <p>
              Es erfolgt <span className="font-medium text-white">keine</span> Weitergabe
              Ihrer Daten an Dritte, kein Einsatz zu Werbezwecken, kein Tracking
              und kein Profiling. Es werden keine Cookies zu Marketingzwecken
              gesetzt.
            </p>
            <p>
              <span className="font-medium text-white">Rechtsgrundlage:</span>{' '}
              Die Verarbeitung erfolgt auf Grundlage Ihrer Einwilligung (Art. 6
              Abs. 1 lit. a DSGVO), die Sie durch die Nutzung der
              Google-Anmeldung erteilen.
            </p>
            <p>
              <span className="font-medium text-white">Widerruf und Löschung:</span>{' '}
              Sie können Ihre Einwilligung jederzeit widerrufen, indem Sie:
            </p>
            <ul className="list-disc list-inside ml-2 space-y-1 text-slate-400">
              <li>
                Den Zugriff über Ihre{' '}
                <a
                  href="https://myaccount.google.com/permissions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline transition-colors"
                >
                  Google-Kontoeinstellungen
                </a>{' '}
                entziehen
              </li>
              <li>
                Die Löschung Ihres Kontos und aller zugehörigen Daten per E-Mail
                beantragen
              </li>
            </ul>
            <p>
              <span className="font-medium text-white">Ihre Rechte nach DSGVO:</span>{' '}
              Sie haben das Recht auf Auskunft (Art. 15), Berichtigung (Art. 16),
              Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18),
              Datenübertragbarkeit (Art. 20) und Widerspruch (Art. 21). Zur
              Ausübung Ihrer Rechte wenden Sie sich bitte an:{' '}
              <a
                href="mailto:roland.schaar.at@gmail.com"
                className="text-blue-400 hover:text-blue-300 underline transition-colors"
              >
                roland.schaar.at@gmail.com
              </a>
            </p>
            <p>
              <span className="font-medium text-white">Beschwerderecht:</span>{' '}
              Sie haben das Recht, eine Beschwerde bei der zuständigen
              Aufsichtsbehörde einzureichen:{' '}
              <a
                href="https://www.dsb.gv.at"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline transition-colors"
              >
                Österreichische Datenschutzbehörde (dsb.gv.at)
              </a>
            </p>
          </div>
        </section>

        {/* Haftungsausschluss / Disclaimer */}
        <section className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 mb-6">
          <h2 className="text-xl font-semibold mb-4 text-white">
            Haftungsausschluss / Disclaimer
          </h2>
          <div className="text-slate-300 leading-relaxed space-y-3">
            <p>
              <span className="font-medium text-white">Haftung für Inhalte:</span>{' '}
              Die Inhalte dieser Seite wurden mit größtmöglicher Sorgfalt
              erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der
              Inhalte wird jedoch keine Gewähr übernommen. Insbesondere wird
              keine Haftung für KI-generierte Inhalte übernommen (siehe Hinweis
              oben).
            </p>
            <p>
              <span className="font-medium text-white">Haftung für Links:</span>{' '}
              Diese Seite enthält möglicherweise Links zu externen Websites
              Dritter, auf deren Inhalte der Betreiber keinen Einfluss hat. Für
              die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
              verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
              Verlinkung auf mögliche Rechtsverstöße überprüft. Bei
              Bekanntwerden von Rechtsverletzungen werden betroffene Links
              umgehend entfernt.
            </p>
            <p>
              <span className="font-medium text-white">Urheberrecht:</span>{' '}
              Die durch den Betreiber erstellten Inhalte und Werke auf dieser
              Seite unterliegen dem österreichischen Urheberrecht. KI-generierte
              Inhalte werden dem Nutzer zur persönlichen, nicht-kommerziellen
              Nutzung bereitgestellt.
            </p>
          </div>
        </section>

        {/* Streitbeilegung */}
        <section className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 mb-6">
          <h2 className="text-xl font-semibold mb-4 text-white">
            Streitbeilegung
          </h2>
          <p className="text-slate-300 leading-relaxed">
            Der Betreiber ist nicht bereit und nicht verpflichtet, an einem
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen, da es sich um ein nicht-kommerzielles Projekt handelt.
          </p>
        </section>

        <footer className="mt-12 pt-6 border-t border-slate-700/50 text-center">
          <p className="text-slate-500 text-sm">
            Stand: {new Date().toLocaleDateString('de-AT', { year: 'numeric', month: 'long' })}
          </p>
        </footer>
      </div>
    </main>
  );
}