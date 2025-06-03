import { useState } from 'react'
import { MessageCircle, Users, Calendar, MapPin, Mail, Phone, Heart, Shield } from 'lucide-react'

function Join() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    message: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, this would send an email or save to a database
    alert('Thanks for your interest! We\'ll get back to you soon. For immediate access, join our WhatsApp group!')
  }

  const handleWhatsAppJoin = () => {
    // Replace with actual WhatsApp group link
    window.open('https://chat.whatsapp.com/GXFlF6FWqwv4sMscVLs5ZN', '_blank')
  }

  return (
    <div className="py-12 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Join Hike and S33k 🥾
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Welcome to London's friendliest hiking community! Join our WhatsApp group to vote on future trails, 
            RSVP for monthly adventures, and connect with fellow nature lovers across the city.
          </p>
        </div>

        {/* WhatsApp Join Section */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-700 dark:to-emerald-700 text-white rounded-2xl p-8 md:p-12 mb-12 text-center shadow-2xl dark:shadow-gray-900/50 border border-green-500 dark:border-green-600 transition-colors duration-200">
          <div className="bg-white/20 dark:bg-white/10 p-4 rounded-full w-20 h-20 mx-auto mb-6 shadow-lg">
            <MessageCircle className="h-12 w-12 text-white mx-auto mt-1" />
          </div>
          <h2 className="text-3xl font-bold mb-4 drop-shadow-sm">
            Join Our WhatsApp Community
          </h2>
          <p className="text-xl text-green-100 dark:text-green-200 mb-8 max-w-2xl mx-auto drop-shadow-sm">
            This is where the magic happens! Vote on future trail destinations, 
            RSVP for hikes, share photos, and connect with your fellow adventurers. 🥾
          </p>
          <button
            onClick={handleWhatsAppJoin}
            className="inline-flex items-center space-x-3 bg-white text-green-700 hover:bg-green-50 dark:bg-gray-100 dark:text-green-800 dark:hover:bg-white font-semibold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-lg"
          >
            <MessageCircle className="h-6 w-6" />
            <span>Join WhatsApp Community 🥾</span>
          </button>
          <p className="text-sm text-green-200 dark:text-green-300 mt-4 drop-shadow-sm">
            Free to join • No spam • Leave anytime
          </p>
        </div>

        {/* What You'll Get */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            What You'll Get
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl dark:shadow-gray-900/50 dark:hover:shadow-gray-900/70 transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-700 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <MapPin className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Vote on Destinations </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Help choose where we explore next! Suggest trails and vote on monthly adventures 
                from coastal walks to countryside rambles.
              </p>
            </div>
            <div className="group text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl dark:shadow-gray-900/50 dark:hover:shadow-gray-900/70 transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 dark:from-emerald-600 dark:to-teal-700 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Calendar className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Monthly Adventures </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Join our monthly hikes around London and beyond. RSVP easily through WhatsApp 
                and get real-time updates about each adventure.
              </p>
            </div>
            <div className="group text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl dark:shadow-gray-900/50 dark:hover:shadow-gray-900/70 transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
              <div className="bg-gradient-to-br from-amber-500 to-orange-600 dark:from-amber-600 dark:to-orange-700 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Meet Like-Minded People</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Connect with fellow adventure lovers, share experiences, and build lasting 
                friendships through our shared love of the outdoors.
              </p>
            </div>
          </div>
        </div>

        {/* Community Guidelines */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 md:p-12 mb-12 shadow-lg dark:shadow-gray-900/50 border border-gray-200 dark:border-gray-700 transition-colors duration-200">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-emerald-100 dark:bg-emerald-900/30 p-4 rounded-full shadow-lg">
              <Shield className="h-12 w-12 text-emerald-600 dark:text-emerald-400" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Our Community Guidelines
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="group p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg dark:shadow-gray-900/30 dark:hover:shadow-gray-900/50 transition-all duration-300 border border-gray-100 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-200">🌱 Be Respectful & Inclusive</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Everyone is welcome regardless of fitness level, experience, or background. 
                  We support each other and celebrate everyone's achievements.
                </p>
              </div>
              
              <div className="group p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg dark:shadow-gray-900/30 dark:hover:shadow-gray-900/50 transition-all duration-300 border border-gray-100 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-200">🗺️ RSVP & Communicate</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Please RSVP for hikes so we can plan accordingly. If plans change, 
                  let the group know - we're here to help!
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="group p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg dark:shadow-gray-900/30 dark:hover:shadow-gray-900/50 transition-all duration-300 border border-gray-100 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-200">🌿 Leave No Trace</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Respect nature and follow Leave No Trace principles. Take only photos, 
                  leave only footprints, and preserve trails for future adventurers.
                </p>
              </div>
              
              <div className="group p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg dark:shadow-gray-900/30 dark:hover:shadow-gray-900/50 transition-all duration-300 border border-gray-100 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-200">⚡ Safety First</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Come prepared with proper gear, stay with the group, and speak up 
                  if you need help. Your safety is our priority.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 md:p-12 shadow-lg dark:shadow-gray-900/50 transition-colors duration-200">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Questions? Get in Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 text-center max-w-2xl mx-auto">
            Have questions before joining? Fill out this form and we'll get back to you!
          </p>
          <form className="max-w-2xl mx-auto space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 focus:border-transparent transition-all duration-200 shadow-sm hover:shadow-md dark:shadow-gray-900/30"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 focus:border-transparent transition-all duration-200 shadow-sm hover:shadow-md dark:shadow-gray-900/30"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Phone (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 focus:border-emerald-500 transition-all duration-200 shadow-sm hover:shadow-md dark:shadow-gray-900/30"
                  placeholder="Your phone number"
                />
              </div>
            </div>
            <div>
              <label htmlFor="experience" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Hiking Experience
              </label>
              <select
                id="experience"
                name="experience"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 focus:border-transparent transition-all duration-200 shadow-sm hover:shadow-md dark:shadow-gray-900/30"
              >
                <option value="">Select your experience level</option>
                <option value="beginner">Beginner - New to hiking</option>
                <option value="intermediate">Intermediate - Some hiking experience</option>
                <option value="experienced">Experienced - Regular hiker</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Message (Optional)
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 focus:border-transparent transition-all duration-200 shadow-sm hover:shadow-md dark:shadow-gray-900/30"
                placeholder="Any questions or things you'd like to know about our hiking community?"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="inline-flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-500 dark:bg-emerald-700 dark:hover:bg-emerald-600 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl dark:shadow-emerald-900/30 dark:hover:shadow-emerald-900/50 hover:scale-105"
              >
                <Mail className="h-5 w-5" />
                <span>Send Message</span>
              </button>
            </div>
          </form>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16 bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-700 dark:to-teal-700 text-white rounded-2xl p-12 shadow-2xl dark:shadow-gray-900/50 border border-emerald-500 dark:border-emerald-600 transition-colors duration-200">
          <div className="bg-white/20 dark:bg-white/10 p-3 rounded-full w-16 h-16 mx-auto mb-6 shadow-lg">
            <Heart className="h-10 w-10 text-white mx-auto mt-1" />
          </div>
          <h2 className="text-3xl font-bold mb-4 drop-shadow-sm">
            Ready to Join the Adventure?
          </h2>
          <p className="text-xl text-emerald-100 dark:text-emerald-200 mb-8 max-w-2xl mx-auto drop-shadow-sm">
            Whether you're a seasoned hiker or just getting started, there's a place for you 
            in our friendly London hiking community.
          </p>
          <button
            onClick={handleWhatsAppJoin}
            className="inline-flex items-center space-x-3 bg-white text-emerald-700 hover:bg-emerald-50 dark:bg-gray-100 dark:text-emerald-800 dark:hover:bg-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <MessageCircle className="h-6 w-6" />
            <span>Join WhatsApp Community 🥾</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Join 