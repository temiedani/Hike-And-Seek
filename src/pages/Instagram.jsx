import { useState } from 'react'
import InstagramEmbed from '../components/InstagramEmbed'
import { Instagram, ExternalLink } from 'lucide-react'

function InstagramPage() {
  const [viewMode, setViewMode] = useState('feed') // 'feed' or 'embeds'

  return (
    <div className="py-12 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Instagram Adventures
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Follow our journey in real-time! Check out our latest hiking posts, 
            trail discoveries, and behind-the-scenes moments from our adventures.
          </p>
          <div className="mt-8">
            <a 
              href="https://instagram.com/hikeands33k" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-700 dark:to-pink-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl dark:shadow-purple-900/30 dark:hover:shadow-purple-900/50 hover:scale-105"
            >
              <Instagram className="h-5 w-5" />
              <span>Follow @hikeands33k</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* View Mode Toggle */}
        <div className="mb-8">
          <div className="flex justify-center">
            <div className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 p-1 rounded-2xl shadow-lg dark:shadow-gray-900/50 border border-gray-200 dark:border-gray-600 transition-colors duration-200">
              <button
                onClick={() => setViewMode('feed')}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  viewMode === 'feed'
                    ? 'bg-white text-gray-900 shadow-lg dark:bg-gray-700 dark:text-white dark:shadow-gray-900/50 transform scale-105'
                    : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-white/50 dark:hover:bg-gray-700/50'
                }`}
              >
                Recent Posts
              </button>
              <button
                onClick={() => setViewMode('embeds')}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  viewMode === 'embeds'
                    ? 'bg-white text-gray-900 shadow-lg dark:bg-gray-700 dark:text-white dark:shadow-gray-900/50 transform scale-105'
                    : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-white/50 dark:hover:bg-gray-700/50'
                }`}
              >
                Featured Posts
              </button>
            </div>
          </div>
        </div>

        {/* Content based on view mode */}
        {viewMode === 'feed' ? (
          <div>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Latest Adventures
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Our most recent hiking posts and trail discoveries
              </p>
            </div>
            <InstagramEmbed useJsonFeed={true} />
          </div>
        ) : (
          <div>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Featured Posts
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Embedded Instagram posts showcasing our best adventures
              </p>
            </div>
            
            <div className="space-y-12">
              {/* You can add specific post IDs here for embedding */}
              <div className="text-center">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-12 shadow-lg dark:shadow-gray-900/50 border border-gray-200 dark:border-gray-700 transition-colors duration-200">
                  <div className="bg-gradient-to-br from-purple-500 to-pink-600 dark:from-purple-600 dark:to-pink-700 p-4 rounded-full w-20 h-20 mx-auto mb-6 shadow-lg">
                    <Instagram className="h-12 w-12 text-white mx-auto mt-1" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Featured Posts Coming Soon
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto">
                    We're setting up direct Instagram post embeds. In the meantime, 
                    check out our recent posts above or follow us on Instagram!
                  </p>
                  <a 
                    href="https://instagram.com/hikeands33k" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-semibold transition-all duration-300 bg-purple-50 dark:bg-purple-900/30 px-6 py-3 rounded-full hover:bg-purple-100 dark:hover:bg-purple-900/50"
                  >
                    <Instagram className="h-5 w-5" />
                    <span>View on Instagram</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
              
              {/* Example of how to add specific embedded posts */}
              {/* 
              <InstagramEmbed postId="INSTAGRAM_POST_ID_HERE" />
              <InstagramEmbed postId="ANOTHER_POST_ID_HERE" />
              */}
            </div>
          </div>
        )}

        {/* Instagram Tips Section */}
        <div className="mt-16 bg-gradient-to-r from-purple-50 via-pink-50 to-purple-50 dark:from-purple-900/20 dark:via-pink-900/20 dark:to-purple-900/20 rounded-2xl p-8 md:p-12 shadow-2xl dark:shadow-gray-900/50 border border-purple-100 dark:border-purple-800 transition-colors duration-200">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Tag Us in Your Adventures!
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Been on a hike with us? Share your photos and experiences! 
              Tag us <span className="font-bold text-purple-600 dark:text-purple-400">@hikeands33k</span> and use 
              <span className="font-bold text-purple-600 dark:text-purple-400"> #HikeAndS33k</span> to be featured on our page.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="group p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl dark:shadow-gray-900/30 dark:hover:shadow-gray-900/50 transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
                <div className="bg-gradient-to-br from-purple-500 to-pink-600 dark:from-purple-600 dark:to-pink-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Instagram className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Tag Us</h3>
                <p className="text-purple-600 dark:text-purple-400 font-medium">@hikeands33k</p>
              </div>
              <div className="group p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl dark:shadow-gray-900/30 dark:hover:shadow-gray-900/50 transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-3xl text-white font-bold">#</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Use Our Hashtag</h3>
                <p className="text-purple-600 dark:text-purple-400 font-medium">#HikeAndS33k</p>
              </div>
              <div className="group p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl dark:shadow-gray-900/30 dark:hover:shadow-gray-900/50 transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
                <div className="bg-gradient-to-br from-amber-500 to-orange-600 dark:from-amber-600 dark:to-orange-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-3xl">✨</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Get Featured</h3>
                <p className="text-purple-600 dark:text-purple-400 font-medium">On our stories & feed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InstagramPage 