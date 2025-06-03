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
            Join Hike and S33k
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Welcome to London's friendliest hiking community! Join our WhatsApp group to vote on future trails, 
            RSVP for monthly adventures, and connect with fellow nature lovers across the city.
          </p>
        </div>

        {/* WhatsApp Join Section */}
        <div className="bg-green-600 dark:bg-green-700 text-white rounded-2xl p-8 md:p-12 mb-12 text-center transition-colors duration-200">
          <MessageCircle className="h-16 w-16 mx-auto mb-6 text-green-200 dark:text-green-300" />
          <h2 className="text-3xl font-bold mb-4">
            Join Our WhatsApp Community
          </h2>
          <p className="text-xl text-green-100 dark:text-green-200 mb-8 max-w-2xl mx-auto">
            This is where the magic happens! Vote on future trail destinations, 
            RSVP for hikes, share photos, and connect with your fellow adventurers.
          </p>
          <button
            onClick={handleWhatsAppJoin}
            className="inline-flex items-center space-x-2 bg-white text-green-700 hover:bg-green-50 dark:bg-gray-100 dark:text-green-800 dark:hover:bg-gray-200 font-medium py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl text-lg"
          >
            <MessageCircle className="h-6 w-6" />
            <span>Join WhatsApp Community</span>
          </button>
          <p className="text-sm text-green-200 dark:text-green-300 mt-4">
            Free to join • No spam • Leave anytime
          </p>
        </div>

        {/* What You'll Get */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            What You'll Get
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-nature-100 dark:bg-nature-900/30 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-200">
                <MapPin className="h-10 w-10 text-nature-600 dark:text-nature-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Vote on Destinations</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Help choose where we explore next! Suggest trails and vote on monthly adventures 
                from coastal walks to countryside rambles.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-nature-100 dark:bg-nature-900/30 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-200">
                <Calendar className="h-10 w-10 text-nature-600 dark:text-nature-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Monthly Adventures</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Join our monthly hikes around London and beyond. RSVP easily through WhatsApp 
                and get real-time updates about each adventure.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-nature-100 dark:bg-nature-900/30 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-200">
                <Users className="h-10 w-10 text-nature-600 dark:text-nature-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Meet Like-Minded People</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Connect with fellow adventure lovers, share experiences, and build lasting 
                friendships through our shared love of the outdoors.
              </p>
            </div>
          </div>
        </div>

        {/* Community Guidelines */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 md:p-12 mb-12 transition-colors duration-200">
          <div className="flex items-center justify-center mb-6">
            <Shield className="h-12 w-12 text-trail-600 dark:text-trail-400" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Our Community Guidelines
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">🌱 Be Respectful & Inclusive</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Everyone is welcome regardless of fitness level, experience, or background. 
                We support each other and celebrate everyone's achievements.
              </p>
              
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">🗺️ RSVP & Communicate</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Please RSVP for hikes so we can plan accordingly. If plans change, 
                let the group know - we're here to help!
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">🌿 Leave No Trace</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Respect nature and follow Leave No Trace principles. Take only photos, 
                leave only footprints, and preserve trails for future adventurers.
              </p>
              
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">⚡ Safety First</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Come prepared with proper gear, stay with the group, and speak up 
                if you need help. Your safety is our priority.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 md:p-12 transition-colors duration-200">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Questions? Get in Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
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
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-nature-500 dark:focus:ring-nature-400 focus:border-transparent transition-colors duration-200"
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
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-nature-500 dark:focus:ring-nature-400 focus:border-transparent transition-colors duration-200"
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
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-nature-500 dark:focus:ring-nature-400 focus:border-nature-500 transition-colors duration-200"
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
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-nature-500 dark:focus:ring-nature-400 focus:border-transparent transition-colors duration-200"
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
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-nature-500 dark:focus:ring-nature-400 focus:border-transparent transition-colors duration-200"
                placeholder="Any questions or things you'd like to know about our hiking community?"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="btn-primary"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16 bg-nature-600 dark:bg-nature-700 text-white rounded-2xl p-8 transition-colors duration-200">
          <Heart className="h-12 w-12 mx-auto mb-4 text-nature-200 dark:text-nature-300" />
          <h2 className="text-2xl font-bold mb-4">
            Ready to Join the Adventure?
          </h2>
          <p className="text-nature-100 dark:text-nature-200 mb-6">
            Whether you're a seasoned hiker or just getting started, there's a place for you 
            in our friendly London hiking community.
          </p>
          <button
            onClick={handleWhatsAppJoin}
            className="inline-flex items-center space-x-2 bg-white text-nature-700 hover:bg-nature-50 dark:bg-gray-100 dark:text-nature-800 dark:hover:bg-gray-200 font-medium py-3 px-6 rounded-lg transition-colors duration-200"
          >
            <MessageCircle className="h-5 w-5" />
            <span>Join WhatsApp Community</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Join 