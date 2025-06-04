import { Component } from 'react'
import { Home, AlertTriangle, RefreshCw } from 'lucide-react'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null, errorInfo: null }
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    // Log the error to console (you could also send to a logging service)
    console.error('Error caught by boundary:', error, errorInfo)
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
  }

  render() {
    if (this.state.hasError) {
      // Error UI
      return (
        <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 px-4">
          <div className="text-center max-w-md mx-auto">
            <div className="bg-red-100 dark:bg-red-900/20 p-6 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
              <AlertTriangle className="h-12 w-12 text-red-500 dark:text-red-400" />
            </div>
            
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Oops! Something went wrong
            </h1>
            
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              We encountered an unexpected error. Don't worry, let's get you back on the trail!
            </p>
            
            <div className="space-y-4">
              <button
                onClick={() => window.location.href = '/'}
                className="w-full bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-700 dark:hover:bg-emerald-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Home className="h-5 w-5" />
                <span>Go to Home Page</span>
              </button>
              
              <button
                onClick={() => window.location.reload()}
                className="w-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <RefreshCw className="h-5 w-5" />
                <span>Try Again</span>
              </button>
            </div>
            
            {/* Development error details (only show in development) */}
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-8 text-left bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <summary className="cursor-pointer text-sm font-medium text-gray-900 dark:text-white mb-2">
                  Error Details (Development)
                </summary>
                <pre className="text-xs text-red-600 dark:text-red-400 whitespace-pre-wrap overflow-auto">
                  {this.state.error && this.state.error.toString()}
                  <br />
                  {this.state.errorInfo.componentStack}
                </pre>
              </details>
            )}
          </div>
        </div>
      )
    }

    // No error, render children
    return this.props.children
  }
}

export default ErrorBoundary 