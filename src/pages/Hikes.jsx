import { Link } from 'react-router-dom'
import { MessageCircle, Shield, Clock, Users, AlertTriangle, CheckCircle } from 'lucide-react'
import UpcomingHikes from '../components/UpcomingHikes'
import { openWhatsAppCommunity } from '../constants/links'

function Hikes() {
  return (
    <div className="py-12 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Upcoming Hikes
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            All our planned adventures in one place! Join our WhatsApp group to RSVP,
            get detailed directions, and connect with fellow hikers.
          </p>
          <button
            onClick={openWhatsAppCommunity}
            className="inline-flex items-center space-x-2 btn-primary"
          >
            <MessageCircle className="h-5 w-5" />
            <span>Join WhatsApp to RSVP</span>
          </button>
        </div>

        {/* Main Hikes List */}
        <div className="mb-16">
          <UpcomingHikes maxHikes={null} />
        </div>

        {/* Safety Guidelines Section */}
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700/50 rounded-lg p-6 mb-12 transition-colors duration-200">
          <div className="flex items-start space-x-3">
            <Shield className="h-6 w-6 text-yellow-600 dark:text-yellow-400 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-yellow-900 dark:text-yellow-200 mb-3">Safety & Guidelines</h3>
              <div className="text-sm text-yellow-800 dark:text-yellow-300 space-y-2">
                <p>🥾 <strong className="text-yellow-900 dark:text-yellow-200">Fitness Level:</strong> Please choose hikes appropriate for your fitness level</p>
                <p>🌦️ <strong className="text-yellow-900 dark:text-yellow-200">Weather:</strong> Check weather conditions and dress appropriately</p>
                <p>📱 <strong className="text-yellow-900 dark:text-yellow-200">Contact:</strong> Confirm attendance in our WhatsApp group for safety and planning</p>
                <p>🎒 <strong className="text-yellow-900 dark:text-yellow-200">Essentials:</strong> Always bring water, snacks, and weather protection</p>
              </div>
            </div>
          </div>
        </div>

        {/* Safety Requirements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center">
              <CheckCircle className="h-5 w-5 text-green-500 dark:text-green-400 mr-2" />
              Before Every Hike
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
              <li>• <strong className="text-gray-900 dark:text-gray-200">Check Weather:</strong> Monitor conditions and plan accordingly</li>
              <li>• <strong className="text-gray-900 dark:text-gray-200">RSVP Required:</strong> Confirm attendance in WhatsApp group 24 hours before hike</li>
              <li>• <strong className="text-gray-900 dark:text-gray-200">Appropriate Gear:</strong> Bring items listed in each hike's "What to Bring" section</li>
              <li>• <strong className="text-gray-900 dark:text-gray-200">Emergency Contact:</strong> Share your details with group leaders</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center">
              <AlertTriangle className="h-5 w-5 text-yellow-500 dark:text-yellow-400 mr-2" />
              Difficulty Levels
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <span className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 px-2 py-1 rounded text-xs font-medium">Easy</span>
                <span className="text-gray-600 dark:text-gray-400">Under 5 miles, minimal elevation, good for beginners</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400 px-2 py-1 rounded text-xs font-medium">Moderate</span>
                <span className="text-gray-600 dark:text-gray-400">5-10 miles, some elevation, requires basic fitness</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400 px-2 py-1 rounded text-xs font-medium">Challenging</span>
                <span className="text-gray-600 dark:text-gray-400">10+ miles, significant elevation, requires good fitness</span>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-nature-50 dark:bg-gray-800 rounded-xl p-8 text-center transition-colors duration-200">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Join an Adventure?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            Join our WhatsApp group to RSVP for hikes, get real-time updates,
            and connect with fellow outdoor enthusiasts in London.
          </p>
          <button
            onClick={openWhatsAppCommunity}
            className="inline-flex items-center space-x-2 btn-primary"
          >
            <MessageCircle className="h-5 w-5" />
            <span>Join WhatsApp Group</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hikes 