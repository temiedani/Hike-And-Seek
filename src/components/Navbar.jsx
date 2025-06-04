import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import DarkModeToggle from './DarkModeToggle'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Hikes', href: '/hikes' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Instagram', href: '/instagram' },
    { name: 'Join', href: '/join' },
  ]

  const isActiveLink = (href) => {
    return location.pathname === href
  }

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg sticky top-0 z-40 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="./logo.png" 
                alt="Hike and S33k" 
                className="h-10 w-10 object-contain"
              />
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                Hike and S33k
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActiveLink(item.href)
                    ? 'text-nature-600 bg-nature-50 dark:text-nature-400 dark:bg-nature-900/20'
                    : 'text-gray-700 hover:text-nature-600 hover:bg-nature-50 dark:text-gray-300 dark:hover:text-nature-400 dark:hover:bg-nature-900/20'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <DarkModeToggle />
          </div>

          {/* Mobile menu button and dark mode toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <DarkModeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-nature-600 dark:text-gray-300 dark:hover:text-nature-400 p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-800 border-t dark:border-gray-700">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    isActiveLink(item.href)
                      ? 'text-nature-600 bg-nature-50 dark:text-nature-400 dark:bg-nature-900/20'
                      : 'text-gray-700 hover:text-nature-600 hover:bg-nature-50 dark:text-gray-300 dark:hover:text-nature-400 dark:hover:bg-nature-900/20'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar 