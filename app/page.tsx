"use client"

import { useState, useEffect } from "react"
import { useSession, signIn, signOut } from "next-auth/react"
import { translations, UILanguage } from "@/lib/i18n/translations"

interface Story {
  id: string
  destination: string
  travel_style: string
  duration_days: number
  language: string
  content: string
  created_at: string
}

const UI_LANG_STORAGE_KEY = "wanderlust-ui-language"

export default function Home() {
  const { data: session, status } = useSession()
  const [uiLang, setUiLang] = useState<UILanguage>("de")
  const [destination, setDestination] = useState("")
  const [travelStyle, setTravelStyle] = useState("Cultural")
  const [language, setLanguage] = useState("English")
  const [duration, setDuration] = useState(3)
  const [preferences, setPreferences] = useState("")
  const [story, setStory] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [copied, setCopied] = useState(false)
  const [pastStories, setPastStories] = useState<Story[]>([])
  const [showHistory, setShowHistory] = useState(false)

  const t = translations[uiLang]
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"

  useEffect(() => {
    try {
      const stored = localStorage.getItem(UI_LANG_STORAGE_KEY)
      if (stored && (stored === "de" || stored === "en" || stored === "fr")) {
        setUiLang(stored as UILanguage)
      }
    } catch {
      // localStorage unavailable
    }
  }, [])

  const changeUiLang = (lang: UILanguage) => {
    setUiLang(lang)
    try {
      localStorage.setItem(UI_LANG_STORAGE_KEY, lang)
    } catch {
      // localStorage unavailable
    }
  }

  useEffect(() => {
    if (session) {
      fetchPastStories()
    }
  }, [session])

  const fetchPastStories = async () => {
    try {
      const res = await fetch(`${API_URL}/api/stories/`)
      if (res.ok) {
        const data = await res.json()
        setPastStories(data)
      }
    } catch {
      console.error("Failed to fetch past stories")
    }
  }

  const handleGenerate = async () => {
    if (!destination.trim()) {
      setError(t.destinationError)
      return
    }
    setLoading(true)
    setError("")
    setStory("")
    try {
      const res = await fetch(`${API_URL}/api/stories/generate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          destination,
          travel_style: travelStyle,
          duration_days: duration,
          language,
          preferences,
        }),
      })
      if (!res.ok) throw new Error("Failed to generate story")
      const data = await res.json()
      setStory(data.content)
      fetchPastStories()
    } catch {
      setError(t.genericError)
    } finally {
      setLoading(false)
    }
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(story)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const travelStyles = ["Foodie", "Adventure", "Cultural", "Luxury", "Backpacker", "Family", "Romantic"]
  const languages = ["English", "Deutsch", "Français"]
  const uiLanguages: { code: UILanguage; label: string }[] = [
    { code: "de", label: "DE" },
    { code: "en", label: "EN" },
    { code: "fr", label: "FR" },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 to-blue-950 p-4 md:p-8">
      <div className="max-w-3xl mx-auto">

        {/* UI Language selector */}
        <div className="flex justify-end mb-2">
          <div className="flex gap-1">
            {uiLanguages.map(({ code, label }) => (
              <button
                key={code}
                onClick={() => changeUiLang(code)}
                className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                  uiLang === code
                    ? "bg-blue-600 text-white"
                    : "bg-slate-700/50 text-slate-400 hover:bg-slate-600/50 hover:text-slate-200"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Header with auth */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Wanderlust
            </h1>
            <p className="text-slate-400 mt-1">{t.subtitle}</p>
          </div>
          <div>
            {status === "loading" ? null : session ? (
              <div className="flex items-center gap-3">
                <span className="text-slate-300 text-sm">{session.user?.email}</span>
                <button
                  onClick={() => signOut()}
                  className="px-4 py-2 text-sm bg-slate-700 text-slate-200 rounded-lg hover:bg-slate-600 transition-colors"
                >
                  {t.signOut}
                </button>
              </div>
            ) : (
              <button
                onClick={() => signIn("google")}
                className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors"
              >
                {t.signIn}
              </button>
            )}
          </div>
        </div>

        {/* Main form */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 shadow-xl mb-6">
          <div className="mb-4">
            <label className="block text-slate-300 text-sm font-medium mb-2">{t.destinationLabel}</label>
            <input
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder={t.destinationPlaceholder}
              className="w-full bg-slate-700/50 text-white rounded-xl px-4 py-3 border border-slate-600/50 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-slate-300 text-sm font-medium mb-2">{t.travelStyleLabel}</label>
            <div className="flex flex-wrap gap-2">
              {travelStyles.map((style) => (
                <button
                  key={style}
                  onClick={() => setTravelStyle(style)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    travelStyle === style
                      ? "bg-blue-600 text-white"
                      : "bg-slate-700/50 text-slate-300 hover:bg-slate-600/50"
                  }`}
                >
                  {style}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-slate-300 text-sm font-medium mb-2">{t.storyLanguageLabel}</label>
            <div className="flex gap-2">
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    language === lang
                      ? "bg-green-600 text-white"
                      : "bg-slate-700/50 text-slate-300 hover:bg-slate-600/50"
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-slate-300 text-sm font-medium mb-2">
              {t.durationLabel}: {duration} {duration === 1 ? t.day : t.days}
            </label>
            <input
              type="range"
              min="1"
              max="14"
              value={duration}
              onChange={(e) => setDuration(Number(e.target.value))}
              className="w-full accent-blue-500"
            />
            <div className="flex justify-between text-slate-500 text-xs mt-1">
              <span>1 {t.day}</span>
              <span>14 {t.days}</span>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-slate-300 text-sm font-medium mb-2">
              {t.preferencesLabel} <span className="text-slate-500">{t.preferencesOptional}</span>
            </label>
            <input
              type="text"
              value={preferences}
              onChange={(e) => setPreferences(e.target.value)}
              placeholder={t.preferencesPlaceholder}
              className="w-full bg-slate-700/50 text-white rounded-xl px-4 py-3 border border-slate-600/50 focus:outline-none focus:border-blue-500"
            />
          </div>

          <button
            onClick={handleGenerate}
            disabled={loading}
            className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl hover:from-blue-500 hover:to-cyan-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? t.generatingButton : t.generateButton}
          </button>
        </div>

        {/* Error */}
        {error && (
          <div className="bg-red-900/30 border border-red-700/50 text-red-300 rounded-xl p-4 mb-6">
            {error}
          </div>
        )}

        {/* Story output */}
        {story && (
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 shadow-xl mb-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-white">{t.yourStory}</h2>
              <button
                onClick={handleCopy}
                className="px-4 py-2 text-sm bg-slate-700 text-slate-200 rounded-lg hover:bg-slate-600 transition-colors"
              >
                {copied ? t.copied : t.copy}
              </button>
            </div>
            <div className="text-slate-300 leading-relaxed whitespace-pre-wrap">{story}</div>
          </div>
        )}

        {/* Past stories */}
        {session && pastStories.length > 0 && (
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 shadow-xl mb-6">
            <button
              onClick={() => setShowHistory(!showHistory)}
              className="flex justify-between items-center w-full"
            >
              <h2 className="text-xl font-semibold text-white">{t.yourStoryHistory} ({pastStories.length})</h2>
              <span className="text-slate-400">{showHistory ? "▲" : "▼"}</span>
            </button>
            {showHistory && (
              <div className="mt-4 space-y-3">
                {pastStories.map((s) => (
                  <div
                    key={s.id}
                    className="bg-slate-700/50 rounded-xl p-4 hover:bg-slate-600/50 transition-colors"
                  >
                    <div className="flex justify-between items-center">
                      <span
                        className="text-white font-medium cursor-pointer"
                        onClick={() => setStory(s.content)}
                      >
                        {s.destination}
                      </span>
                      <div className="flex items-center gap-3">
                        <span className="text-slate-400 text-sm">{new Date(s.created_at).toLocaleDateString()}</span>
                        <button
                          onClick={async (e) => {
                            e.stopPropagation()
                            await fetch(`${API_URL}/api/stories/${s.id}`, { method: "DELETE" })
                            fetchPastStories()
                          }}
                          className="text-red-400 hover:text-red-300 transition-colors"
                          title="Delete story"
                        >
                          🗑️
                        </button>
                      </div>
                    </div>
                    <div className="text-slate-400 text-sm mt-1">{s.travel_style} · {s.duration_days} {s.duration_days === 1 ? t.day : t.days} · {s.language}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Footer */}
        <footer className="text-center text-slate-600 text-sm">
          <a href="/impressum" className="hover:text-slate-400 transition-colors">{t.impressum}</a>
        </footer>
      </div>
    </main>
  )
}