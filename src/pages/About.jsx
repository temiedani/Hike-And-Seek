import { Link } from 'react-router-dom'
import { Heart, Mountain, Users, Compass } from 'lucide-react'

function About() {
  return (
    <div className="py-12 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Hike and S33k 🥾
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            We're a London-based hiking group bringing people together one trail at a time. 
            From coastal walks to countryside views, we explore, connect, and enjoy the views together.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                Hike and S33k started as a simple idea: bringing London's adventure lovers 
                together to explore the incredible hiking opportunities around our city and beyond. 
                What began as a small group has grown into a vibrant community of explorers.
              </p>
              <p>
                Our name reflects our dual mission: we love to <strong className="text-gray-900 dark:text-white">hike</strong> beautiful 
                trails, and we love to <strong className="text-gray-900 dark:text-white">s33k</strong> out hidden gems, new perspectives, 
                and meaningful connections along the way. The "33" represents the 
                endless possibilities that await when we step outside our comfort zones.
              </p>
              <p>
                We believe hiking isn't just about the destination – it's about the connections 
                we make along the way. From dramatic coastal walks along the English coastline 
                to peaceful countryside rambles through ancient woodlands, every month brings 
                a new adventure chosen by our community.
              </p>
              <p>
                What makes us special? <strong className="text-gray-900 dark:text-white">You help choose where we go!</strong> Our WhatsApp 
                community votes on future trails, ensuring every hike reflects what our members 
                want to explore. Whether you're a seasoned hiker or just getting started, 
                you're welcome here.
              </p>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&h=400&fit=crop" 
              alt="Group hiking with London countryside views"
              className="rounded-xl shadow-lg hover:shadow-2xl dark:shadow-gray-900/50 dark:hover:shadow-gray-900/70 transition-all duration-300 border border-gray-200 dark:border-gray-700"
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            What We Believe In
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl dark:shadow-gray-900/50 dark:hover:shadow-gray-900/70 transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 dark:from-emerald-600 dark:to-teal-700 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Mountain className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Explore Together</h3>
              <p className="text-gray-600 dark:text-gray-400">
                From coastal paths to countryside trails, we discover the natural beauty 
                around London and beyond.
              </p>
            </div>
            <div className="group text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl dark:shadow-gray-900/50 dark:hover:shadow-gray-900/70 transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-700 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Community Choice</h3>
              <p className="text-gray-600 dark:text-gray-400">
                You help choose our destinations! Join our WhatsApp group to vote on 
                future trails and adventures.
              </p>
            </div>
            <div className="group text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl dark:shadow-gray-900/50 dark:hover:shadow-gray-900/70 transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
              <div className="bg-gradient-to-br from-rose-500 to-pink-600 dark:from-rose-600 dark:to-pink-700 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Heart className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Everyone Welcome</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Whether you're a seasoned hiker or just getting started with your first 
                walking boots, there's a place for you.
              </p>
            </div>
            <div className="group text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl dark:shadow-gray-900/50 dark:hover:shadow-gray-900/70 transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
              <div className="bg-gradient-to-br from-amber-500 to-orange-600 dark:from-amber-600 dark:to-orange-700 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Compass className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Monthly Adventures</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We explore a new trail every month, giving everyone time to plan and 
                join our outdoor adventures.
              </p>
            </div>
          </div>
        </div>

        {/* What We Do Section */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 md:p-12 mb-20 shadow-lg dark:shadow-gray-900/50 border border-gray-200 dark:border-gray-700 transition-colors duration-200">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
            What We Do Together
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg dark:shadow-gray-900/30 dark:hover:shadow-gray-900/50 transition-all duration-300 border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-200">🌊 Coastal Walks</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Discover stunning seaside paths along England's dramatic coastlines, from 
                cliff-top walks to peaceful beach strolls.
              </p>
            </div>
            <div className="group p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg dark:shadow-gray-900/30 dark:hover:shadow-gray-900/50 transition-all duration-300 border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-200">🌳 Countryside Views</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Explore rolling hills, ancient woodlands, and picture-perfect villages 
                within easy reach of London.
              </p>
            </div>
            <div className="group p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg dark:shadow-gray-900/30 dark:hover:shadow-gray-900/50 transition-all duration-300 border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-200">🗺️ Community Voting</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Help choose our next adventure! Share suggestions and vote on upcoming 
                trails in our friendly WhatsApp community.
              </p>
            </div>
            <div className="group p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg dark:shadow-gray-900/30 dark:hover:shadow-gray-900/50 transition-all duration-300 border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-200">📸 Memory Making</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Capture beautiful moments together, share photos, and build lasting 
                friendships with fellow nature lovers.
              </p>
            </div>
          </div>
        </div>

        {/* Join CTA */}
        <div className="text-center bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-700 dark:to-teal-700 text-white rounded-2xl p-8 md:p-12 shadow-2xl dark:shadow-gray-900/50 border border-emerald-500 dark:border-emerald-600 transition-colors duration-200">
          <h2 className="text-3xl font-bold mb-4 drop-shadow-sm">
            Ready to Join Our Adventure?
          </h2>
          <p className="text-xl text-emerald-100 dark:text-emerald-200 mb-8 max-w-2xl mx-auto drop-shadow-sm">
            Whether you're looking for weekend adventures, want to meet like-minded people, 
            or simply love exploring the great outdoors, we'd love to have you join us!
          </p>
          <Link 
            to="/join"
            className="inline-flex items-center space-x-2 bg-white text-emerald-700 hover:bg-emerald-50 dark:bg-gray-100 dark:text-emerald-800 dark:hover:bg-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <Users className="h-5 w-5" />
            <span>Join Hike and S33k 🥾</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default About 