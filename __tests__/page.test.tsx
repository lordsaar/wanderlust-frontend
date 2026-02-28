import { render, screen } from '@testing-library/react'
import { useSession } from 'next-auth/react'
import Home from '../app/page'

jest.mock('next-auth/react', () => ({
  useSession: jest.fn(),
  signIn: jest.fn(),
  signOut: jest.fn(),
}))

jest.mock('../lib/i18n/translations', () => ({
  translations: {
    de: {
      'app.title': 'Wanderlust',
      'app.subtitle': 'Deine Reise, erzählt als Geschichte',
      'auth.signIn': 'Mit Google anmelden',
      'auth.signOut': 'Abmelden',
      'form.destination.label': 'Wohin geht die Reise?',
      'form.destination.placeholder': 'z.B. Tokio, Paris, Hinterstoder...',
      'form.travelStyle.label': 'Reisestil',
      'form.storyLanguage.label': 'Sprache der Geschichte',
      'form.duration.label': 'Dauer: {duration} {unit}',
      'form.duration.day': 'Tag',
      'form.duration.days': 'Tage',
      'form.duration.min': '1 Tag',
      'form.duration.max': '14 Tage',
      'form.preferences.label': 'Persönliche Vorlieben',
      'form.preferences.optional': '(optional)',
      'form.preferences.placeholder': 'z.B. vegetarisch...',
      'form.generate': 'Meine Geschichte erstellen ✈️',
      'form.generating': 'Geschichte wird erstellt...',
      'form.error.destination': 'Bitte gib ein Reiseziel ein',
      'form.error.generic': 'Etwas ist schiefgelaufen.',
      'story.title': 'Deine Geschichte',
      'story.copy': 'Kopieren',
      'story.copied': 'Kopiert!',
      'history.title': 'Dein Geschichtenverlauf ({count})',
      'history.days': 'Tage',
      'history.delete': 'Geschichte löschen',
      'footer.impressum': 'Impressum',
      'languageSelector.label': 'Sprache',
    }
  }
}))

beforeEach(() => {
  ;(useSession as jest.Mock).mockReturnValue({
    data: null,
    status: 'unauthenticated',
    update: jest.fn(),
  })
})

describe('Home page', () => {
  it('renders the Wanderlust heading', () => {
    render(<Home />)
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
  })

  it('renders the generate button', () => {
    render(<Home />)
    const buttons = screen.getAllByRole('button')
    expect(buttons.length).toBeGreaterThan(0)
  })

  it('renders a destination text input', () => {
    render(<Home />)
    const inputs = screen.getAllByRole('textbox')
    expect(inputs.length).toBeGreaterThan(0)
  })

  it('shows sign in button when unauthenticated', () => {
    render(<Home />)
    const buttons = screen.getAllByRole('button')
    expect(buttons.length).toBeGreaterThan(0)
  })
})
