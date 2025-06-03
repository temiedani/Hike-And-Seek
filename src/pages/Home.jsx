import { Link } from 'react-router-dom'
import { MessageCircle, MapPin, Users, Camera, ArrowRight, Mountain, Calendar, Heart } from 'lucide-react'
import GalleryCollections from '../components/GalleryCollections'
import InstagramEmbed from '../components/InstagramEmbed'
import UpcomingHikes from '../components/UpcomingHikes'
import { openWhatsAppCommunity } from '../constants/links'

function Home() {
  return (
    <div className="space-y-0">
      {/* Hero Section with Full-Width Background */}
      <section className="relative h-[75vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&h=1080&fit=crop&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Much darker overlay for dramatic effect */}
          <div className="absolute inset-0 bg-black/60 dark:bg-black/75"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="space-y-6">
            {/* Main Heading */}
            <div className="space-y-3">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white drop-shadow-lg">
                Hike & <span className="text-emerald-400 dark:text-emerald-300">S33k</span> 🥾
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl font-light max-w-3xl mx-auto leading-relaxed text-white drop-shadow-md">
                London-based hiking community.<br />
                <span className="text-emerald-300 dark:text-emerald-200">Bringing people together one trail at a time.</span>
              </p>
            </div>
            
            {/* Tagline */}
            <div className="max-w-2xl mx-auto">
              <p className="text-base md:text-lg text-gray-200 dark:text-gray-100 leading-relaxed drop-shadow-sm">
                From coastal walks to countryside views, we explore together. 
                Join our monthly adventures and help choose where we go next.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <button 
                onClick={openWhatsAppCommunity}
                className="group inline-flex items-center space-x-3 bg-emerald-600 hover:bg-emerald-500 dark:bg-emerald-700 dark:hover:bg-emerald-600 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 shadow-2xl hover:shadow-emerald-500/25 dark:hover:shadow-emerald-400/25 hover:scale-105 text-base"
              >
                <MessageCircle className="h-5 w-5 group-hover:animate-pulse" />
                <span>Join Our Community</span>
              </button>
              <Link 
                to="/gallery" 
                className="group inline-flex items-center space-x-3 border-2 border-white/80 dark:border-white/70 text-white hover:bg-white hover:text-gray-900 dark:hover:bg-gray-100 dark:hover:text-gray-900 font-semibold py-4 px-8 rounded-full transition-all duration-300 backdrop-blur-sm bg-white/10 dark:bg-white/5 hover:scale-105 text-base"
              >
                <Camera className="h-5 w-5" />
                <span>View Adventures</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Enhanced Dark Mode */}
      <section className="py-24 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Our Journey So Far 
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Building London's most welcoming hiking community, one adventure at a time
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group text-center p-8 bg-white dark:bg-gray-800 rounded-3xl shadow-lg hover:shadow-2xl dark:shadow-gray-900/50 dark:hover:shadow-gray-900/70 transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 dark:from-emerald-600 dark:to-teal-700 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">50+</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 font-medium">Community Members</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Adventure-loving Londoners</p>
            </div>
            
            <div className="group text-center p-8 bg-white dark:bg-gray-800 rounded-3xl shadow-lg hover:shadow-2xl dark:shadow-gray-900/50 dark:hover:shadow-gray-900/70 transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
              <div className="bg-gradient-to-br from-amber-500 to-orange-600 dark:from-amber-600 dark:to-orange-700 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Mountain className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">5+</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 font-medium">Trails Explored</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">From coast to countryside</p>
            </div>
            
            <div className="group text-center p-8 bg-white dark:bg-gray-800 rounded-3xl shadow-lg hover:shadow-2xl dark:shadow-gray-900/50 dark:hover:shadow-gray-900/70 transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
              <div className="bg-gradient-to-br from-purple-500 to-pink-600 dark:from-purple-600 dark:to-pink-700 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Camera className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">100+</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 font-medium">Memories Captured</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Photos and moments shared</p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Hikes Section - Enhanced */}
      <section className="py-24 bg-white dark:bg-gray-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-3 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-400 px-6 py-3 rounded-full font-semibold mb-6 border border-emerald-200 dark:border-emerald-800">
              <Calendar className="h-5 w-5" />
              <span>Next Adventure</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Join Our Monthly Hike 
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Ready to explore? Here's our next planned adventure. Join our WhatsApp community 
              to RSVP and help vote on future trail destinations!
            </p>
          </div>
          
          <div className="mb-12">
            <UpcomingHikes maxHikes={2} />
          </div>
          
          <div className="text-center">
            <Link 
              to="/hikes"
              className="group inline-flex items-center space-x-3 bg-emerald-600 hover:bg-emerald-500 dark:bg-emerald-700 dark:hover:bg-emerald-600 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl dark:shadow-emerald-900/30 dark:hover:shadow-emerald-900/50 hover:scale-105"
            >
              <span>View All Upcoming Hikes 🥾</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Instagram Posts - Enhanced Dark Mode */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Latest Adventures
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Follow along with our recent hikes and adventures on Instagram
            </p>
          </div>
          
          <div className="mb-12">
            <InstagramEmbed useJsonFeed={true} />
          </div>
          
          <div className="text-center">
            <Link 
              to="/instagram"
              className="group inline-flex items-center space-x-3 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-semibold text-lg transition-colors duration-200"
            >
              <span>View all Instagram posts</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Collections Preview - Enhanced */}
      <section className="py-24 bg-white dark:bg-gray-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Photo Gallery
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Relive the magic of our hiking adventures through our curated photo collections
            </p>
          </div>
          
          <div className="mb-12">
            <GalleryCollections maxCollections={3} />
          </div>
          
          <div className="text-center">
            <Link 
              to="/gallery"
              className="group inline-flex items-center space-x-3 bg-emerald-600 hover:bg-emerald-500 dark:bg-emerald-700 dark:hover:bg-emerald-600 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl dark:shadow-emerald-900/30 dark:hover:shadow-emerald-900/50 hover:scale-105"
            >
              <span>Explore Full Gallery</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final Call to Action - Enhanced Dark Mode */}
      <section className="relative py-24 overflow-hidden">
        {/* Background with enhanced overlay for dark mode */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=800&fit=crop&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 to-teal-900/90 dark:from-emerald-950/95 dark:to-teal-950/95"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-3 bg-white/20 dark:bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30 dark:border-white/20">
              <Heart className="h-5 w-5 text-emerald-300 dark:text-emerald-200" />
              <span className="font-semibold text-white">Join the Adventure</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold leading-tight text-white drop-shadow-lg">
              Ready for Your<br />
              <span className="text-emerald-300 dark:text-emerald-200">Next Adventure?</span>
            </h2>
            
            <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed text-gray-200 dark:text-gray-100 drop-shadow-sm">
              Join our WhatsApp community to vote on future trails, RSVP for hikes, 
              and connect with fellow adventure lovers across London.
            </p>
            
            <div className="pt-8">
              <button 
                onClick={openWhatsAppCommunity}
                className="group inline-flex items-center space-x-4 bg-white text-emerald-800 hover:bg-emerald-50 dark:bg-gray-100 dark:text-emerald-900 dark:hover:bg-white font-bold py-6 px-12 rounded-full transition-all duration-300 shadow-2xl hover:shadow-white/25 dark:hover:shadow-gray-100/25 hover:scale-105 text-xl"
              >
                <MessageCircle className="h-7 w-7 group-hover:animate-pulse" />
                <span>Join the Community</span>
              </button>
            </div>
            
            <p className="text-sm text-gray-300 dark:text-gray-200 max-w-md mx-auto drop-shadow-sm">
              Free to join • No spam • Leave anytime<br />
              Connect with 100+ London adventurers
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home 