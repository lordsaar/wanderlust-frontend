export default function Impressum() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-8 text-white">Impressum</h1>
        <p className="text-slate-300 text-lg leading-relaxed">
          Hello world,{' '}
          
            <a href="https://www.linkedin.com/in/rolandschaar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 underline transition-colors"
          >
            Roland
          </a>{' '}
          for president.
        </p>
        
          <a href="/"
          className="inline-block mt-8 text-slate-400 hover:text-white transition-colors text-sm"
        >
          ← Back to Wanderlust
        </a>
      </div>
    </main>
  );
}