export type Locale = "de" | "en" | "fr"

export const defaultLocale: Locale = "de"

export interface Translations {
  // Header
  appName: string
  tagline: string
  signOut: string
  signInWithGoogle: string

  // Form
  whereAreYouGoing: string
  destinationPlaceholder: string
  travelStyle: string
  storyLanguage: string
  durationLabel: (days: number) => string
  daysSingular: string
  daysPlural: string
  durationMin: string
  durationMax: string
  personalPreferences: string
  optional: string
  preferencesPlaceholder: string
  generateButton: string
  generatingButton: string

  // Travel styles
  styleFoodie: string
  styleAdventure: string
  styleCultural: string
  styleLuxury: string
  styleBackpacker: string
  styleFamily: string
  styleRomantic: string

  // Story output
  yourStory: string
  copy: string
  copied: string

  // History
  yourStoryHistory: (count: number) => string
  deleteStory: string

  // Errors
  errorNoDestination: string
  errorGeneric: string

  // Footer
  impressum: string

  // Language selector
  uiLanguage: string
}

const translations: Record<Locale, Translations> = {
  de: {
    appName: "Wanderlust",
    tagline: "Deine Reise, erzählt als Geschichte",
    signOut: "Abmelden",
    signInWithGoogle: "Mit Google anmelden",

    whereAreYouGoing: "Wohin geht die Reise?",
    destinationPlaceholder: "z.B. Tokio, Paris, Hinterstoder...",
    travelStyle: "Reisestil",
    storyLanguage: "Sprache der Geschichte",
    durationLabel: (days: number) => `Dauer: ${days} ${days === 1 ? "Tag" : "Tage"}`,
    daysSingular: "Tag",
    daysPlural: "Tage",
    durationMin: "1 Tag",
    durationMax: "14 Tage",
    personalPreferences: "Persönliche Vorlieben",
    optional: "optional",
    preferencesPlaceholder: "z.B. vegetarisch, Budget-Reisender, liebe Museen...",
    generateButton: "Meine Geschichte erstellen ✈️",
    generatingButton: "Geschichte wird erstellt...",

    styleFoodie: "Feinschmecker",
    styleAdventure: "Abenteuer",
    styleCultural: "Kultur",
    styleLuxury: "Luxus",
    styleBackpacker: "Backpacker",
    styleFamily: "Familie",
    styleRomantic: "Romantisch",

    yourStory: "Deine Geschichte",
    copy: "Kopieren",
    copied: "Kopiert!",

    yourStoryHistory: (count: number) => `Deine Geschichten (${count})`,
    deleteStory: "Geschichte löschen",

    errorNoDestination: "Bitte gib ein Reiseziel ein",
    errorGeneric: "Etwas ist schiefgelaufen. Läuft das Backend?",

    impressum: "Impressum",
    uiLanguage: "Sprache der Oberfläche",
  },
  en: {
    appName: "Wanderlust",
    tagline: "Your journey, told as a story",
    signOut: "Sign out",
    signInWithGoogle: "Sign in with Google",

    whereAreYouGoing: "Where are you going?",
    destinationPlaceholder: "e.g. Tokyo, Paris, Hinterstoder...",
    travelStyle: "Travel style",
    storyLanguage: "Story language",
    durationLabel: (days: number) => `Duration: ${days} ${days === 1 ? "day" : "days"}`,
    daysSingular: "day",
    daysPlural: "days",
    durationMin: "1 day",
    durationMax: "14 days",
    personalPreferences: "Personal preferences",
    optional: "optional",
    preferencesPlaceholder: "e.g. vegetarian, budget traveler, love museums...",
    generateButton: "Generate My Story ✈️",
    generatingButton: "Generating your story...",

    styleFoodie: "Foodie",
    styleAdventure: "Adventure",
    styleCultural: "Cultural",
    styleLuxury: "Luxury",
    styleBackpacker: "Backpacker",
    styleFamily: "Family",
    styleRomantic: "Romantic",

    yourStory: "Your Story",
    copy: "Copy",
    copied: "Copied!",

    yourStoryHistory: (count: number) => `Your Story History (${count})`,
    deleteStory: "Delete story",

    errorNoDestination: "Please enter a destination",
    errorGeneric: "Something went wrong. Is the backend running?",

    impressum: "Impressum",
    uiLanguage: "Interface language",
  },
  fr: {
    appName: "Wanderlust",
    tagline: "Votre voyage, raconté comme une histoire",
    signOut: "Se déconnecter",
    signInWithGoogle: "Se connecter avec Google",

    whereAreYouGoing: "Où allez-vous ?",
    destinationPlaceholder: "ex. Tokyo, Paris, Hinterstoder...",
    travelStyle: "Style de voyage",
    storyLanguage: "Langue de l'histoire",
    durationLabel: (days: number) => `Durée : ${days} ${days === 1 ? "jour" : "jours"}`,
    daysSingular: "jour",
    daysPlural: "jours",
    durationMin: "1 jour",
    durationMax: "14 jours",
    personalPreferences: "Préférences personnelles",
    optional: "facultatif",
    preferencesPlaceholder: "ex. végétarien, voyageur à petit budget, amateur de musées...",
    generateButton: "Générer mon histoire ✈️",
    generatingButton: "Génération de votre histoire...",

    styleFoodie: "Gastronomie",
    styleAdventure: "Aventure",
    styleCultural: "Culturel",
    styleLuxury: "Luxe",
    styleBackpacker: "Routard",
    styleFamily: "Famille",
    styleRomantic: "Romantique",

    yourStory: "Votre histoire",
    copy: "Copier",
    copied: "Copié !",

    yourStoryHistory: (count: number) => `Historique de vos histoires (${count})`,
    deleteStory: "Supprimer l'histoire",

    errorNoDestination: "Veuillez entrer une destination",
    errorGeneric: "Une erreur s'est produite. Le backend est-il en cours d'exécution ?",

    impressum: "Mentions légales",
    uiLanguage: "Langue de l'interface",
  },
}

export function getTranslations(locale: Locale): Translations {
  return translations[locale]
}

// Map travel style keys to their internal API values (always English for the backend)
export const travelStyleKeys = [
  "Foodie",
  "Adventure",
  "Cultural",
  "Luxury",
  "Backpacker",
  "Family",
  "Romantic",
] as const

export type TravelStyleKey = (typeof travelStyleKeys)[number]

export function getLocalizedTravelStyle(key: TravelStyleKey, t: Translations): string {
  const map: Record<TravelStyleKey, string> = {
    Foodie: t.styleFoodie,
    Adventure: t.styleAdventure,
    Cultural: t.styleCultural,
    Luxury: t.styleLuxury,
    Backpacker: t.styleBackpacker,
    Family: t.styleFamily,
    Romantic: t.styleRomantic,
  }
  return map[key]
}

export const localeLabels: Record<Locale, string> = {
  de: "Deutsch",
  en: "English",
  fr: "Français",
}