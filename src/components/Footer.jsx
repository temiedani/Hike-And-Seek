import { Link } from 'react-router-dom'
import { Instagram, MessageCircle, Mail, MapPin } from 'lucide-react'
import { openWhatsAppCommunity, LINKS } from '../constants/links'

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white py-16 transition-colors duration-200 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-2 rounded-lg shadow-lg">
                <img 
                  src="/logo.png" 
                  alt="Hike and S33k" 
                  className="h-8 w-8 object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Hike and S33k 🥾</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed max-w-sm">
              London's friendliest hiking community. Bringing people together one trail at a time.
            </p>
            
            {/* Social Links - Mobile First */}
            <div className="flex flex-wrap gap-4 sm:hidden">
              <button
                onClick={openWhatsAppCommunity}
                className="group inline-flex items-center space-x-2 bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <MessageCircle className="h-4 w-4 group-hover:animate-pulse" />
                <span className="text-sm font-medium">WhatsApp</span>
              </button>
              <a
                href={LINKS.INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-4 py-2 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <Instagram className="h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                <span className="text-sm font-medium">Instagram</span>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-gray-900 dark:text-white border-b border-gray-300 dark:border-gray-600 pb-2">Quick Links</h4>
            <div className="space-y-3">
              <Link 
                to="/about" 
                className="group flex items-center text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-200 text-sm"
              >
                <span className="group-hover:translate-x-1 transition-transform duration-200">About Us</span>
              </Link>
              <Link 
                to="/hikes" 
                className="group flex items-center text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-200 text-sm"
              >
                <span className="group-hover:translate-x-1 transition-transform duration-200">Upcoming Hikes</span>
              </Link>
              <Link 
                to="/gallery" 
                className="group flex items-center text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-200 text-sm"
              >
                <span className="group-hover:translate-x-1 transition-transform duration-200">Photo Gallery</span>
              </Link>
              <Link 
                to="/instagram" 
                className="group flex items-center text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-200 text-sm"
              >
                <span className="group-hover:translate-x-1 transition-transform duration-200">Instagram</span>
              </Link>
              <Link 
                to="/join" 
                className="group flex items-center text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-200 text-sm"
              >
                <span className="group-hover:translate-x-1 transition-transform duration-200">Join Us</span>
              </Link>
            </div>
          </div>
          
          {/* Community Section */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-gray-900 dark:text-white border-b border-gray-300 dark:border-gray-600 pb-2">Community</h4>
            <div className="space-y-4">
              {/* Desktop Social Links */}
              <div className="hidden sm:block space-y-3">
                <button
                  onClick={openWhatsAppCommunity}
                  className="group flex items-center space-x-3 text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-all duration-200 text-sm"
                >
                  <div className="bg-green-600 p-1.5 rounded-lg group-hover:scale-110 transition-transform duration-200">
                    <MessageCircle className="h-3 w-3 text-white" />
                  </div>
                  <span>Join WhatsApp Community</span>
                </button>
                <a
                  href={LINKS.INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center space-x-3 text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-200 text-sm"
                >
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-1.5 rounded-lg group-hover:scale-110 transition-transform duration-200">
                    <Instagram className="h-3 w-3 text-white" />
                  </div>
                  <span>@hikeands33k</span>
                </a>
              </div>
              
              {/* Community Stats */}
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-600 shadow-sm dark:shadow-gray-900/50">
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">100+</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Active Members</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Section */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-gray-900 dark:text-white border-b border-gray-300 dark:border-gray-600 pb-2">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
                <div className="bg-gray-200 dark:bg-gray-700 p-1.5 rounded-lg">
                  <Mail className="h-3 w-3 text-gray-600 dark:text-gray-300" />
                </div>
                <a 
                  href={`mailto:${LINKS.EMAIL}`}
                  className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200 break-all"
                >
                  {LINKS.EMAIL}
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
                <div className="bg-gray-200 dark:bg-gray-700 p-1.5 rounded-lg">
                  <MapPin className="h-3 w-3 text-gray-600 dark:text-gray-300" />
                </div>
                <span>London, UK</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-300 dark:border-gray-600 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center sm:text-left">
              &copy; 2025 Hike and S33k. All rights reserved.
            </p>
            <div className="flex items-center space-x-1 text-xs text-gray-400 dark:text-gray-500">
              <span>Made with</span>
              <span className="text-red-500 animate-pulse">❤️</span>
              <span>for Hike and S33k</span>
              <span>by Temi</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 