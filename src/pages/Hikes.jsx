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
            Upcoming Hikes 🥾
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            All our planned adventures in one place! Join our WhatsApp group to RSVP,
            get detailed directions, and connect with fellow hikers.
          </p>
          <button
            onClick={openWhatsAppCommunity}
            className="inline-flex items-center space-x-3 bg-emerald-600 hover:bg-emerald-500 dark:bg-emerald-700 dark:hover:bg-emerald-600 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl dark:shadow-emerald-900/30 dark:hover:shadow-emerald-900/50 hover:scale-105"
          >
            <MessageCircle className="h-5 w-5" />
            <span>Join WhatsApp to RSVP 🥾</span>
          </button>
        </div>

        {/* Main Hikes List */}
        <div className="mb-16">
          <UpcomingHikes maxHikes={null} />
        </div>

        {/* Safety Guidelines Section */}
        <div className="bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 border border-yellow-200 dark:border-yellow-700/50 rounded-2xl p-8 mb-12 shadow-lg dark:shadow-gray-900/50 transition-colors duration-200">
          <div className="flex items-start space-x-4">
            <div className="bg-yellow-100 dark:bg-yellow-900/30 p-3 rounded-full shadow-md">
              <Shield className="h-8 w-8 text-yellow-600 dark:text-yellow-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-yellow-900 dark:text-yellow-200 mb-4">Safety & Guidelines</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-yellow-800 dark:text-yellow-300">
                <div className="group p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg dark:shadow-gray-900/30 dark:hover:shadow-gray-900/50 transition-all duration-300 border border-yellow-100 dark:border-gray-700">
                  <p className="text-sm"><span className="text-xl mr-2">🥾</span> <strong className="text-yellow-900 dark:text-yellow-200">Fitness Level:</strong> Please choose hikes appropriate for your fitness level</p>
                </div>
                <div className="group p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg dark:shadow-gray-900/30 dark:hover:shadow-gray-900/50 transition-all duration-300 border border-yellow-100 dark:border-gray-700">
                  <p className="text-sm"><span className="text-xl mr-2">🌦️</span> <strong className="text-yellow-900 dark:text-yellow-200">Weather:</strong> Check weather conditions and dress appropriately</p>
                </div>
                <div className="group p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg dark:shadow-gray-900/30 dark:hover:shadow-gray-900/50 transition-all duration-300 border border-yellow-100 dark:border-gray-700">
                  <p className="text-sm"><span className="text-xl mr-2">📱</span> <strong className="text-yellow-900 dark:text-yellow-200">Contact:</strong> Confirm attendance in our WhatsApp group for safety and planning</p>
                </div>
                <div className="group p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg dark:shadow-gray-900/30 dark:hover:shadow-gray-900/50 transition-all duration-300 border border-yellow-100 dark:border-gray-700">
                  <p className="text-sm"><span className="text-xl mr-2">🎒</span> <strong className="text-yellow-900 dark:text-yellow-200">Essentials:</strong> Always bring water, snacks, and weather protection</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Safety Requirements */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl dark:shadow-gray-900/50 dark:hover:shadow-gray-900/70 transition-all duration-300 border border-gray-100 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center mb-6">
              <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full mr-3 shadow-md">
                <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              Before Every Hike
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <span className="text-green-600 dark:text-green-400 text-lg">•</span>
                <div>
                  <strong className="text-gray-900 dark:text-gray-200">Check Weather:</strong>
                  <span className="text-gray-600 dark:text-gray-400 ml-1">Monitor conditions and plan accordingly</span>
                </div>
              </li>
              <li className="flex items-start space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <span className="text-green-600 dark:text-green-400 text-lg">•</span>
                <div>
                  <strong className="text-gray-900 dark:text-gray-200">RSVP Required:</strong>
                  <span className="text-gray-600 dark:text-gray-400 ml-1">Confirm attendance in WhatsApp group 24 hours before hike</span>
                </div>
              </li>
              <li className="flex items-start space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <span className="text-green-600 dark:text-green-400 text-lg">•</span>
                <div>
                  <strong className="text-gray-900 dark:text-gray-200">Appropriate Gear:</strong>
                  <span className="text-gray-600 dark:text-gray-400 ml-1">Bring items listed in each hike's "What to Bring" section</span>
                </div>
              </li>
              <li className="flex items-start space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <span className="text-green-600 dark:text-green-400 text-lg">•</span>
                <div>
                  <strong className="text-gray-900 dark:text-gray-200">Emergency Contact:</strong>
                  <span className="text-gray-600 dark:text-gray-400 ml-1">Share your details with group leaders</span>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl dark:shadow-gray-900/50 dark:hover:shadow-gray-900/70 transition-all duration-300 border border-gray-100 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center mb-6">
              <div className="bg-yellow-100 dark:bg-yellow-900/30 p-2 rounded-full mr-3 shadow-md">
                <AlertTriangle className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
              </div>
              Difficulty Levels
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-100 dark:border-green-800">
                <div className="flex items-center space-x-3">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">Easy</span>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">Perfect for beginners</span>
                </div>
                <span className="text-green-600 dark:text-green-400 text-sm">Under 5 miles</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-100 dark:border-yellow-800">
                <div className="flex items-center space-x-3">
                  <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">Moderate</span>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">Basic fitness required</span>
                </div>
                <span className="text-yellow-600 dark:text-yellow-400 text-sm">5-10 miles</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-red-50 dark:bg-red-900/20 rounded-xl border border-red-100 dark:border-red-800">
                <div className="flex items-center space-x-3">
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">Challenging</span>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">Good fitness needed</span>
                </div>
                <span className="text-red-600 dark:text-red-400 text-sm">10+ miles</span>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-12 text-center shadow-2xl dark:shadow-gray-900/50 border border-emerald-100 dark:border-gray-700 transition-colors duration-200">
          <div className="max-w-2xl mx-auto">
            <div className="bg-emerald-100 dark:bg-emerald-900/30 p-4 rounded-full w-20 h-20 mx-auto mb-6 shadow-lg">
              <MessageCircle className="h-12 w-12 text-emerald-600 dark:text-emerald-400 mx-auto mt-1" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Join an Adventure?
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Join our WhatsApp group to RSVP for hikes, get real-time updates,
              and connect with fellow outdoor enthusiasts in London.
            </p>
            <button
              onClick={openWhatsAppCommunity}
              className="inline-flex items-center space-x-3 bg-emerald-600 hover:bg-emerald-500 dark:bg-emerald-700 dark:hover:bg-emerald-600 text-white font-bold py-5 px-10 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl dark:shadow-emerald-900/30 dark:hover:shadow-emerald-900/50 hover:scale-105 text-lg"
            >
              <MessageCircle className="h-6 w-6" />
              <span>Join WhatsApp Group 🥾</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hikes 