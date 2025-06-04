import { useState, useEffect } from 'react'
import { MapPin, Clock, Users, Calendar, CheckCircle, AlertTriangle, TrendingUp, MessageCircle } from 'lucide-react'
import { openWhatsAppCommunity } from '../constants/links'

function UpcomingHikes({ maxHikes = null }) {
  const [hikes, setHikes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadHikes = async () => {
      try {
        const response = await fetch('/hikes/upcoming.json')
        if (response.ok) {
          const data = await response.json()
          setHikes(data.hikes || [])
        } else {
          // Fallback to sample data
          setSampleData()
        }
      } catch (error) {
        console.log('Loading sample hiking data...')
        setSampleData()
      } finally {
        setLoading(false)
      }
    }

    loadHikes()
  }, [])

  const setSampleData = () => {
    setHikes([
      {
        id: 1,
        title: "Beachy Head Coastal Walk",
        date: "2025-01-18",
        location: "East Sussex",
        distance: "8 miles",
        duration: "4-5 hours",
        difficulty: "Moderate",
        description: "Spectacular clifftop walk along England's highest chalk cliffs with stunning views over the English Channel.",
        attendees: 12,
        maxAttendees: 20,
        meetingPoint: "Eastbourne Station",
        meetingTime: "09:00",
        transport: "Train from London Victoria (1h 30m)",
        highlights: ["Dramatic cliff views", "Lighthouse", "Peaceful countryside"],
        whatToBring: [
          "Waterproof jacket",
          "Hiking boots",
          "Lunch and snacks",
          "Water (2L minimum)",
          "Camera for stunning views"
        ],
        isThisWeek: true,
        visible: false
      },
      {
        id: 2,
        title: "Windsor Great Park Circuit",
        date: "2025-02-08",
        location: "Berkshire",
        distance: "6 miles",
        duration: "3-4 hours",
        difficulty: "Easy",
        description: "Gentle walk through historic parkland with views of Windsor Castle and the Long Walk.",
        attendees: 8,
        maxAttendees: 15,
        meetingPoint: "Windsor Central Station",
        meetingTime: "10:00",
        transport: "Train from London Paddington (1h)",
        highlights: ["Windsor Castle views", "Ancient trees", "Royal parkland"],
        whatToBring: [
          "Comfortable walking shoes",
          "Light jacket",
          "Snacks and water",
          "Camera"
        ],
        isThisWeek: false,
        visible: false
      },
      {
        id: 3,
        title: "Chiltern Hills Explorer",
        date: "2025-02-22",
        location: "Buckinghamshire",
        distance: "10 miles",
        duration: "5-6 hours",
        difficulty: "Challenging",
        description: "Challenging hike through beech woods and rolling hills in the Chilterns AONB.",
        attendees: 6,
        maxAttendees: 12,
        meetingPoint: "Great Missenden Station",
        meetingTime: "08:30",
        transport: "Train from London Marylebone (45m)",
        highlights: ["Ancient beech forests", "Panoramic views", "Historic villages"],
        whatToBring: [
          "Sturdy hiking boots",
          "Waterproof gear",
          "Packed lunch",
          "Water (2L minimum)",
          "Energy snacks",
          "First aid basics"
        ],
        isThisWeek: false,
        visible: false
      },
      {
        id: 4,
        title: "Thames Path: Richmond to Hampton Court",
        date: "2025-03-08",
        location: "London/Surrey",
        distance: "7 miles",
        duration: "4 hours",
        difficulty: "Easy",
        description: "Riverside walk along the Thames Path with historic palaces and beautiful gardens.",
        attendees: 15,
        maxAttendees: 25,
        meetingPoint: "Richmond Station",
        meetingTime: "10:30",
        transport: "Tube/Train from central London (30m)",
        highlights: ["Thames riverside", "Hampton Court Palace", "Historic bridges"],
        whatToBring: [
          "Comfortable shoes",
          "Light jacket",
          "Snacks and drinks",
          "Camera for palace views"
        ],
        isThisWeek: false,
        visible: false
      },
      {
        id: 5,
        title: "South Downs: Devil's Dyke",
        date: "2025-03-22",
        location: "West Sussex",
        distance: "9 miles",
        duration: "5 hours",
        difficulty: "Moderate",
        description: "Classic South Downs walk with panoramic views from Devil's Dyke, one of Sussex's most famous landmarks.",
        attendees: 10,
        maxAttendees: 18,
        meetingPoint: "Brighton Station",
        meetingTime: "09:15",
        transport: "Train from London Victoria/St Pancras (1h)",
        highlights: ["Devil's Dyke views", "Rolling downland", "Historic pub lunch"],
        whatToBring: [
          "Hiking boots",
          "Layers for changing weather",
          "Lunch and snacks",
          "Water bottle",
          "Camera"
        ],
        isThisWeek: false,
        visible: false
      }
    ])
  }

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
      case 'Moderate': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
      case 'Challenging': return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400'
    }
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-GB', { 
      weekday: 'long',
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    })
  }

  const getProgressPercentage = (rsvp, max) => {
    return Math.min((rsvp / max) * 100, 100)
  }

  const getProgressColor = (percentage) => {
    if (percentage >= 80) return 'bg-red-500 dark:bg-red-600'
    if (percentage >= 60) return 'bg-yellow-500 dark:bg-yellow-600'
    return 'bg-green-500 dark:bg-green-600'
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-nature-600 dark:border-nature-400"></div>
      </div>
    )
  }

  const displayHikes = (() => {
    // Filter hikes by visibility (show if visible is true or undefined for backwards compatibility)
    const visibleHikes = hikes.filter(hike => hike.visible !== false)
    // Then apply maxHikes limit if specified
    return maxHikes ? visibleHikes.slice(0, maxHikes) : visibleHikes
  })()

  if (displayHikes.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500 dark:text-gray-400">No upcoming hikes scheduled. Check back soon!</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {displayHikes.map((hike) => (
        <div key={hike.id} className="card overflow-hidden">
          <div className="p-6">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{hike.title}</h3>
                  {hike.isThisWeek && (
                    <span className="bg-nature-100 text-nature-800 dark:bg-nature-900/30 dark:text-nature-400 px-2 py-1 rounded-full text-xs font-medium">
                      This Week!
                    </span>
                  )}
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-nature-600 dark:text-nature-400" />
                    {formatDate(hike.date)}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-nature-600 dark:text-nature-400" />
                    {hike.location}
                  </div>
                  <div className="flex items-center">
                    <TrendingUp className="h-4 w-4 mr-2 text-nature-600 dark:text-nature-400" />
                    {hike.distance}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-nature-600 dark:text-nature-400" />
                    {hike.duration}
                  </div>
                </div>

                <div className="flex items-center gap-3 mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(hike.difficulty)}`}>
                    {hike.difficulty}
                  </span>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <Users className="h-4 w-4 mr-1" />
                    {hike.attendees || 0}/{hike.maxAttendees || 0} signed up
                  </div>
                </div>

                {/* RSVP Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-xs text-gray-500 dark:text-gray-500 mb-1">
                    <span>RSVP Progress</span>
                    <span>{Math.round(getProgressPercentage(hike.attendees || 0, hike.maxAttendees || 1))}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-300 ${getProgressColor(getProgressPercentage(hike.attendees || 0, hike.maxAttendees || 1))}`}
                      style={{ width: `${getProgressPercentage(hike.attendees || 0, hike.maxAttendees || 1)}%` }}
                    ></div>
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4">{hike.description}</p>
              </div>

              <div className="lg:ml-6 lg:flex-shrink-0">
                <button
                  onClick={openWhatsAppCommunity}
                  className="w-full lg:w-auto inline-flex items-center space-x-2 btn-primary"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>RSVP in WhatsApp</span>
                </button>
              </div>
            </div>

            {/* Expandable Details */}
            <details className="group">
              <summary className="cursor-pointer text-nature-600 dark:text-nature-400 hover:text-nature-700 dark:hover:text-nature-300 font-medium flex items-center">
                <span>View hike details</span>
                <svg className="w-4 h-4 ml-1 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              
              <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Meeting Details</h4>
                    <div className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                      <p><strong>Meeting Point:</strong> {hike.meetingPoint}</p>
                      <p><strong>Meeting Time:</strong> {hike.meetingTime}</p>
                      <p><strong>Transport:</strong> {hike.transport}</p>
                    </div>
                    
                    <h4 className="font-semibold text-gray-900 dark:text-white mt-4 mb-2">Highlights</h4>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      {hike.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle className="h-3 w-3 text-green-500 dark:text-green-400 mr-2 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">What to Bring</h4>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      {hike.whatToBring.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <AlertTriangle className="h-3 w-3 text-yellow-500 dark:text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </details>
          </div>
        </div>
      ))}
    </div>
  )
}

export default UpcomingHikes 