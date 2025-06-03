import { Link } from 'react-router-dom'
import { MessageCircle, MapPin, Users, Camera, ArrowRight } from 'lucide-react'
import GalleryCollections from '../components/GalleryCollections'
import InstagramEmbed from '../components/InstagramEmbed'
import UpcomingHikes from '../components/UpcomingHikes'
import { openWhatsAppCommunity } from '../constants/links'

function Home() {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="hero-gradient dark:from-gray-800 dark:via-gray-900 dark:to-black text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hike and S33k
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-nature-100 dark:text-gray-300 max-w-3xl mx-auto">
              We're a London-based hiking group bringing people together one trail at a time. 
              From coastal walks to countryside views, we explore a new hike every month – and you help choose the spot!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={openWhatsAppCommunity}
                className="inline-flex items-center space-x-2 bg-white text-nature-700 hover:bg-nature-50 dark:bg-gray-800 dark:text-nature-400 dark:hover:bg-gray-700 font-medium py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Join WhatsApp Community</span>
              </button>
              <Link 
                to="/gallery" 
                className="inline-flex items-center space-x-2 border-2 border-white text-white hover:bg-white hover:text-nature-600 dark:border-gray-400 dark:hover:bg-gray-400 dark:hover:text-gray-900 font-medium py-4 px-8 rounded-lg transition-colors duration-200"
              >
                <Camera className="h-5 w-5" />
                <span>View Gallery</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-nature-50 dark:bg-gray-800 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-3">
              <div className="bg-nature-100 dark:bg-nature-900/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Users className="h-8 w-8 text-nature-600 dark:text-nature-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Growing Community</h3>
              <p className="text-gray-600 dark:text-gray-400">Adventure-loving Londoners</p>
            </div>
            <div className="space-y-3">
              <div className="bg-nature-100 dark:bg-nature-900/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <MapPin className="h-8 w-8 text-nature-600 dark:text-nature-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">5+ Trails</h3>
              <p className="text-gray-600 dark:text-gray-400">Explored together</p>
            </div>
            <div className="space-y-3">
              <div className="bg-nature-100 dark:bg-nature-900/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Camera className="h-8 w-8 text-nature-600 dark:text-nature-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">100+ Photos</h3>
              <p className="text-gray-600 dark:text-gray-400">Memories captured</p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Hikes Section */}
      <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Next Monthly Adventure
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Ready to explore? Here's our next planned hike. Join our WhatsApp community 
              to RSVP and help vote on future trail destinations!
            </p>
          </div>
          
          <UpcomingHikes maxHikes={2} />
          
          <div className="text-center mt-8">
            <Link 
              to="/hikes"
              className="inline-flex items-center space-x-2 btn-primary"
            >
              <span>View All Upcoming Hikes</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Instagram Posts */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Latest Adventures
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Follow along with our recent hikes and adventures on Instagram
            </p>
          </div>
          
          <InstagramEmbed useJsonFeed={true} />
          
          <div className="text-center mt-8">
            <Link 
              to="/instagram"
              className="inline-flex items-center space-x-2 text-nature-600 dark:text-nature-400 hover:text-nature-700 dark:hover:text-nature-300 font-medium"
            >
              <span>View all Instagram posts</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Collections Preview */}
      <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Photo Gallery
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Relive the magic of our hiking adventures through our photo collections
            </p>
          </div>
          
          <GalleryCollections maxCollections={3} />
          
          <div className="text-center mt-8">
            <Link 
              to="/gallery"
              className="inline-flex items-center space-x-2 btn-primary"
            >
              <span>Explore Full Gallery</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-trail-600 dark:bg-gray-700 text-white transition-colors duration-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-xl mb-8 text-trail-100 dark:text-gray-300">
            Join our WhatsApp community to vote on future trails, RSVP for hikes, 
            and connect with fellow adventure lovers across London.
          </p>
          <button 
            onClick={openWhatsAppCommunity}
            className="inline-flex items-center space-x-2 bg-white text-trail-700 hover:bg-trail-50 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-600 font-medium py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            <MessageCircle className="h-5 w-5" />
            <span>Join the Community</span>
          </button>
        </div>
      </section>
    </div>
  )
}

export default Home 