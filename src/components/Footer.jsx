import { Link } from 'react-router-dom'
import { Instagram, MessageCircle } from 'lucide-react'
import { openWhatsAppCommunity, LINKS } from '../constants/links'

function Footer() {
  return (
    <footer className="bg-nature-800 dark:bg-gray-900 text-white py-12 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/logo.png" 
                alt="Hike and S33k" 
                className="h-8 w-8 object-contain filter brightness-0 invert"
              />
              <h3 className="text-xl font-bold">Hike and S33k</h3>
            </div>
            <p className="text-nature-200 dark:text-gray-400 text-sm">
              London's friendliest hiking community. One trail at a time.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <Link to="/about" className="block text-nature-200 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 transition-colors">About Us</Link>
              <Link to="/hikes" className="block text-nature-200 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 transition-colors">Upcoming Hikes</Link>
              <Link to="/gallery" className="block text-nature-200 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 transition-colors">Photo Gallery</Link>
              <Link to="/instagram" className="block text-nature-200 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 transition-colors">Instagram</Link>
            </div>
          </div>
          
          {/* Community */}
          <div className="space-y-4">
            <h4 className="font-semibold">Join Us</h4>
            <button
              onClick={openWhatsAppCommunity}
              className="inline-flex items-center space-x-2 text-nature-200 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 transition-colors text-sm"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Join WhatsApp Community</span>
            </button>
            <a
              href={LINKS.INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-nature-200 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 transition-colors text-sm"
            >
              <Instagram className="h-4 w-4" />
              <span>@hikeands33k</span>
            </a>
          </div>
          
          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold">Contact</h4>
            <div className="text-sm text-nature-200 dark:text-gray-400">
              <p>Email: {LINKS.EMAIL}</p>
              <p>London, UK</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-nature-700 dark:border-gray-700 mt-8 pt-8 text-center text-sm text-nature-200 dark:text-gray-400">
          <p>&copy; 2025 Hike and S33k. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 