import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Home, MapPin, ArrowRight } from 'lucide-react'

function NotFound() {
  const navigate = useNavigate()

  useEffect(() => {
    // Redirect to home after 3 seconds
    const timer = setTimeout(() => {
      navigate('/', { replace: true })
    }, 3000)

    return () => clearTimeout(timer)
  }, [navigate])

  const handleGoHome = () => {
    navigate('/', { replace: true })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 px-4">
      <div className="text-center max-w-lg mx-auto">
        {/* Hiking Icon */}
        <div className="bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/20 dark:to-teal-900/20 p-8 rounded-full w-32 h-32 mx-auto mb-8 flex items-center justify-center">
          <MapPin className="h-16 w-16 text-emerald-600 dark:text-emerald-400" />
        </div>
        
        {/* Error Message */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          404
        </h1>
        
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
          Trail Not Found 🥾
        </h2>
        
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
          Looks like you've wandered off the beaten path! This trail doesn't exist, 
          but don't worry - we'll get you back to base camp.
        </p>
        
        {/* Action Buttons */}
        <div className="space-y-4">
          <button
            onClick={handleGoHome}
            className="w-full bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-700 dark:hover:bg-emerald-600 text-white font-medium py-4 px-8 rounded-lg transition-all duration-200 flex items-center justify-center space-x-3 group"
          >
            <Home className="h-5 w-5" />
            <span>Return to Home Base</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
          
          {/* Auto-redirect notice */}
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Automatically redirecting in 3 seconds...
          </p>
        </div>
        
        {/* Fun hiking-themed message */}
        <div className="mt-12 p-6 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/10 dark:to-teal-900/10 rounded-xl border border-emerald-200 dark:border-emerald-800">
          <p className="text-sm text-emerald-700 dark:text-emerald-300 font-medium">
            💡 Pro Tip: Use the navigation menu above to find your way to our upcoming hikes, 
            photo galleries, or join our WhatsApp community!
          </p>
        </div>
      </div>
    </div>
  )
}

export default NotFound 