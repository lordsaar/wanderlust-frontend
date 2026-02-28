export type UILanguage = "de" | "en" | "fr"

export const translations: Record<UILanguage, Record<string, string>> = {
  de: {
    // Header
    subtitle: "Deine Reise, erzählt als Geschichte",
    signOut: "Abmelden",
    signIn: "Mit Google anmelden",

    // Form
    destinationLabel: "Wohin geht die Reise?",
    destinationPlaceholder: "z.B. Tokio, Paris, Hinterstoder...",
    travelStyleLabel: "Reisestil",
    storyLanguageLabel: "Sprache der Geschichte",
    durationLabel: "Dauer",
    day: "Tag",
    days: "Tage",
    preferencesLabel: "Persönliche Vorlieben",
    preferencesOptional: "(optional)",
    preferencesPlaceholder: "z.B. vegetarisch, Budget-Reisender, liebe Museen...",
    generateButton: "Meine Geschichte generieren ✈️",
    generatingButton: "Geschichte wird generiert...",

    // Story output
    yourStory: "Deine Geschichte",
    copy: "Kopieren",
    copied: "Kopiert!",

    // History
    yourStoryHistory: "Deine bisherigen Geschichten",

    // Error
    destinationError: "Bitte gib ein Reiseziel ein",
    genericError: "Etwas ist schiefgelaufen. Läuft das Backend?",

    // Footer
    impressum: "Impressum",

    // Language selector
    uiLanguage: "Sprache",
  },
  en: {
    // Header
    subtitle: "Your journey, told as a story",
    signOut: "Sign out",
    signIn: "Sign in with Google",

    // Form
    destinationLabel: "Where are you going?",
    destinationPlaceholder: "e.g. Tokyo, Paris, Hinterstoder...",
    travelStyleLabel: "Travel style",
    storyLanguageLabel: "Story language",
    durationLabel: "Duration",
    day: "day",
    days: "days",
    preferencesLabel: "Personal preferences",
    preferencesOptional: "(optional)",
    preferencesPlaceholder: "e.g. vegetarian, budget traveler, love museums...",
    generateButton: "Generate My Story ✈️",
    generatingButton: "Generating your story...",

    // Story output
    yourStory: "Your Story",
    copy: "Copy",
    copied: "Copied!",

    // History
    yourStoryHistory: "Your Story History",

    // Error
    destinationError: "Please enter a destination",
    genericError: "Something went wrong. Is the backend running?",

    // Footer
    impressum: "Impressum",

    // Language selector
    uiLanguage: "Language",
  },
  fr: {
    // Header
    subtitle: "Votre voyage, raconté comme une histoire",
    signOut: "Se déconnecter",
    signIn: "Se connecter avec Google",

    // Form
    destinationLabel: "Où allez-vous ?",
    destinationPlaceholder: "ex. Tokyo, Paris, Hinterstoder...",
    travelStyleLabel: "Style de voyage",
    storyLanguageLabel: "Langue de l'histoire",
    durationLabel: "Durée",
    day: "jour",
    days: "jours",
    preferencesLabel: "Préférences personnelles",
    preferencesOptional: "(facultatif)",
    preferencesPlaceholder: "ex. végétarien, voyageur à petit budget, j'adore les musées...",
    generateButton: "Générer mon histoire ✈️",
    generatingButton: "Génération de votre histoire...",

    // Story output
    yourStory: "Votre histoire",
    copy: "Copier",
    copied: "Copié !",

    // History
    yourStoryHistory: "Historique de vos histoires",

    // Error
    destinationError: "Veuillez entrer une destination",
    genericError: "Quelque chose s'est mal passé. Le backend fonctionne-t-il ?",

    // Footer
    impressum: "Mentions légales",

    // Language selector
    uiLanguage: "Langue",
  },
}