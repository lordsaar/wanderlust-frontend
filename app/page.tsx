'use client';

import { useState } from 'react';

const TRAVEL_STYLES = [
  'Foodie', 'Adventure', 'Cultural', 'Luxury', 'Backpacker', 'Family', 'Romantic'
];

const LANGUAGES = ['English', 'Deutsch', 'Français'];


export default function Home() {
  const [destination, setDestination] = useState('');
  const [travelStyle, setTravelStyle] = useState('Foodie');
  const [durationDays, setDurationDays] = useState(3);
  const [preferences, setPreferences] = useState('');
  const [story, setStory] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [language, setLanguage] = useState('English');

  const generateStory = async () => {
    if (!destination.trim()) return;
    setLoading(true);
    setStory('');
    setError('');
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/stories/generate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          destination,
          travel_style: travelStyle.toLowerCase(),
          duration_days: durationDays,
          preferences,
          language
        })
      });
      if (!response.ok) throw new Error('Failed to generate story');
      const data = await response.json();
      setStory(data.content);
    } catch (err) {
      setError('Something went wrong. Is the backend running?');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
      <div className="max-w-3xl mx-auto px-6 py-16">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-3 bg-gradient-to-r from-blue-300 to-emerald-300 bg-clip-text text-transparent">
            Wanderlust
          </h1>
          <p className="text-slate-400 text-lg">Your journey, told as a story</p>
        </div>

        {/* Form */}
        <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 mb-8 space-y-6">

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Where are you going?</label>
            <input
              type="text"
              value={destination}
              onChange={e => setDestination(e.target.value)}
              placeholder="Tokyo, Patagonia, Vienna..."
              className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Travel style</label>
            <div className="flex flex-wrap gap-2">
              {TRAVEL_STYLES.map(style => (
                <button
                  key={style}
                  onClick={() => setTravelStyle(style)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    travelStyle === style
                      ? 'bg-blue-500 text-white'
                      : 'bg-white/10 text-slate-300 hover:bg-white/20'
                  }`}
                >
                  {style}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Story language</label>
            <div className="flex gap-2">
              {LANGUAGES.map(lang => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    language === lang
                      ? 'bg-emerald-500 text-white'
                      : 'bg-white/10 text-slate-300 hover:bg-white/20'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Duration: {durationDays} {durationDays === 1 ? 'day' : 'days'}
            </label>
            <input
              type="range"
              min={1}
              max={14}
              value={durationDays}
              onChange={e => setDurationDays(Number(e.target.value))}
              className="w-full accent-blue-400"
            />
            <div className="flex justify-between text-xs text-slate-500 mt-1">
              <span>1 day</span>
              <span>14 days</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Personal preferences <span className="text-slate-500">(optional)</span>
            </label>
            <input
              type="text"
              value={preferences}
              onChange={e => setPreferences(e.target.value)}
              placeholder="I love local markets, hate tourist traps, traveling with kids..."
              className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            onClick={generateStory}
            disabled={loading || !destination.trim()}
            className="w-full py-4 rounded-xl font-semibold text-lg transition-all bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-400 hover:to-emerald-400 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {loading ? 'Writing your story...' : 'Generate My Story ✈️'}
          </button>
        </div>

        {/* Error */}
        {error && (
          <div className="bg-red-500/20 border border-red-500/30 rounded-xl p-4 mb-8 text-red-300">
            {error}
          </div>
        )}

        {/* Story Output */}
        {story && (
          <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8">
            
            {/* Copy button */}
            <div className="flex justify-end mb-4">
              <button
                onClick={() => navigator.clipboard.writeText(story)}
                className="px-4 py-2 rounded-lg text-sm font-medium bg-white/10 text-slate-300 hover:bg-white/20 transition-all"
              >
                Copy story ✂️
              </button>
            </div>
            <div className="prose prose-invert prose-lg max-w-none">
              {story.split('\n').map((line, i) => {
                if (line.startsWith('## ')) return <h2 key={i} className="text-xl font-bold text-blue-300 mt-6 mb-2">{line.replace('## ', '')}</h2>;
                if (line.startsWith('# ')) return <h1 key={i} className="text-2xl font-bold text-white mb-4">{line.replace('# ', '')}</h1>;
                if (line.trim() === '') return <br key={i} />;
                return <p key={i} className="text-slate-300 leading-relaxed mb-3">{line}</p>;
              })}
            </div>
          </div>
        )}

      </div>
     {/* Footer */}
      <footer className="text-center mt-12 mb-8 text-slate-500 text-sm">
        <a href="/impressum" className="hover:text-slate-300 transition-colors">
          Impressum
        </a>
      </footer>
    </main>
  );
}