import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

jest.mock('next-auth/react', () => ({
  useSession: jest.fn().mockReturnValue({ data: null, status: 'unauthenticated' }),
  signIn: jest.fn(),
  signOut: jest.fn(),
}))

global.fetch = jest.fn()

describe('Home page', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders the Wanderlust heading', () => {
    render(<Home />)
    expect(screen.getByText('Wanderlust')).toBeInTheDocument()
  })

  it('renders the generate button', () => {
    render(<Home />)
    expect(screen.getByRole('button', { name: /generate my story/i })).toBeInTheDocument()
  })

  it('renders the destination input', () => {
    render(<Home />)
    expect(screen.getByPlaceholderText(/tokyo/i)).toBeInTheDocument()
  })

  it('shows sign in button when unauthenticated', () => {
    render(<Home />)
    expect(screen.getByText('Sign in with Google')).toBeInTheDocument()
  })
})
