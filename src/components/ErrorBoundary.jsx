import React from 'react'

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null, info: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, info) {
    this.setState({ info })
    // eslint-disable-next-line no-console
    console.error('App error:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen p-6 bg-red-50 text-red-900">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-2xl font-bold">Something went wrong.</h1>
            <p className="mt-2 text-sm">An error occurred while rendering the page.</p>
            {this.state.error && (
              <pre className="mt-4 whitespace-pre-wrap rounded bg-white p-3 text-xs text-red-700 border border-red-200 overflow-auto">
                {String(this.state.error?.message || this.state.error)}
              </pre>
            )}
            {this.state.info && (
              <details className="mt-2 text-xs">
                <summary>Stack trace</summary>
                <pre className="mt-2 whitespace-pre-wrap">
                  {this.state.info?.componentStack}
                </pre>
              </details>
            )}
          </div>
        </div>
      )
    }
    return this.props.children
  }
}
