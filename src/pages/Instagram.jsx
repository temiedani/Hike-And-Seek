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
              className="inline-flex items-center space-x-2 btn-primary"
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
            <div className="bg-gray-100 dark:bg-gray-800 p-1 rounded-lg transition-colors duration-200">
              <button
                onClick={() => setViewMode('feed')}
                className={`px-4 py-2 rounded-md transition-colors duration-200 ${
                  viewMode === 'feed'
                    ? 'bg-white text-gray-900 shadow-sm dark:bg-gray-700 dark:text-white'
                    : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200'
                }`}
              >
                Recent Posts
              </button>
              <button
                onClick={() => setViewMode('embeds')}
                className={`px-4 py-2 rounded-md transition-colors duration-200 ${
                  viewMode === 'embeds'
                    ? 'bg-white text-gray-900 shadow-sm dark:bg-gray-700 dark:text-white'
                    : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200'
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
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 transition-colors duration-200">
                  <Instagram className="h-16 w-16 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Featured Posts Coming Soon
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    We're setting up direct Instagram post embeds. In the meantime, 
                    check out our recent posts above or follow us on Instagram!
                  </p>
                  <a 
                    href="https://instagram.com/hikeands33k" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-nature-600 dark:text-nature-400 hover:text-nature-700 dark:hover:text-nature-300 font-medium transition-colors duration-200"
                  >
                    <Instagram className="h-4 w-4" />
                    <span>View on Instagram</span>
                    <ExternalLink className="h-3 w-3" />
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
        <div className="mt-16 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-8 md:p-12 transition-colors duration-200">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Tag Us in Your Adventures!
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Been on a hike with us? Share your photos and experiences! 
              Tag us <span className="font-semibold">@hikeands33k</span> and use 
              <span className="font-semibold"> #HikeAndS33k</span> to be featured on our page.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="bg-white dark:bg-gray-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 transition-colors duration-200">
                  <Instagram className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Tag Us</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">@hikeands33k</p>
              </div>
              <div>
                <div className="bg-white dark:bg-gray-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 transition-colors duration-200">
                  <span className="text-2xl text-purple-600 dark:text-purple-400">#</span>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Use Our Hashtag</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">#HikeAndS33k</p>
              </div>
              <div>
                <div className="bg-white dark:bg-gray-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 transition-colors duration-200">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Get Featured</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">On our stories & feed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InstagramPage 