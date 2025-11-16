import React from 'react'

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, info) {
    // You could also log to an external service here
    console.error('UI ErrorBoundary caught an error:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center p-8">
          <div className="max-w-lg text-center">
            <h1 className="text-2xl font-semibold">Noe gikk galt i visningen</h1>
            <p className="mt-3 text-zinc-400">Siden forsøker å laste interaktive elementer. Prøv å laste siden på nytt, eller besøk testsiden under.</p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <a href="/" className="px-4 py-2 rounded bg-cyan-500/90 text-black font-medium">Last siden på nytt</a>
              <a href="/test" className="px-4 py-2 rounded border border-white/20 text-white">Gå til testside</a>
            </div>
            {process.env.NODE_ENV !== 'production' && (
              <pre className="mt-6 text-left text-xs text-zinc-400 whitespace-pre-wrap break-words">
                {String(this.state.error)}
              </pre>
            )}
          </div>
        </div>
      )
    }
    return this.props.children
  }
}
