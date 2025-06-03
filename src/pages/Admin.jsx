import { useState } from 'react'
import { Plus, Edit, Trash, Save } from 'lucide-react'

function Admin() {
  const [newHike, setNewHike] = useState({
    title: '',
    date: '',
    location: '',
    distance: '',
    difficulty: 'Easy',
    description: '',
    meetingPoint: '',
    meetingTime: '',
    transport: '',
    maxParticipants: 15,
    highlights: [],
    whatToBring: []
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // In a real implementation, this would:
    // 1. Validate the data
    // 2. Send to an API endpoint
    // 3. Update the JSON file
    // 4. Redeploy the site
    
    const hikeData = {
      ...newHike,
      id: Date.now(), // Simple ID generation
      rsvpCount: 0,
      isThisWeek: false
    }
    
    console.log('New hike data:', hikeData)
    alert('Hike data ready! In production, this would update the upcoming.json file.')
  }

  const addHighlight = () => {
    setNewHike(prev => ({
      ...prev,
      highlights: [...prev.highlights, '']
    }))
  }

  const addWhatToBring = () => {
    setNewHike(prev => ({
      ...prev,
      whatToBring: [...prev.whatToBring, '']
    }))
  }

  const updateHighlight = (index, value) => {
    setNewHike(prev => ({
      ...prev,
      highlights: prev.highlights.map((item, i) => i === index ? value : item)
    }))
  }

  const updateWhatToBring = (index, value) => {
    setNewHike(prev => ({
      ...prev,
      whatToBring: prev.whatToBring.map((item, i) => i === index ? value : item)
    }))
  }

  return (
    <div className="py-12 bg-white dark:bg-gray-900 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Admin Panel
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Manage hikes, gallery, and content
          </p>
        </div>

        {/* Add New Hike Form */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <Plus className="h-6 w-6 mr-2 text-nature-600 dark:text-nature-400" />
            Add New Hike
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Hike Title
                </label>
                <input
                  type="text"
                  value={newHike.title}
                  onChange={(e) => setNewHike(prev => ({ ...prev, title: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-nature-500 dark:focus:ring-nature-400"
                  placeholder="e.g., Seven Sisters Coastal Walk"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Date
                </label>
                <input
                  type="date"
                  value={newHike.date}
                  onChange={(e) => setNewHike(prev => ({ ...prev, date: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-nature-500 dark:focus:ring-nature-400"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Location
                </label>
                <input
                  type="text"
                  value={newHike.location}
                  onChange={(e) => setNewHike(prev => ({ ...prev, location: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-nature-500 dark:focus:ring-nature-400"
                  placeholder="e.g., East Sussex"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Distance
                </label>
                <input
                  type="text"
                  value={newHike.distance}
                  onChange={(e) => setNewHike(prev => ({ ...prev, distance: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-nature-500 dark:focus:ring-nature-400"
                  placeholder="e.g., 8 miles"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Difficulty
                </label>
                <select
                  value={newHike.difficulty}
                  onChange={(e) => setNewHike(prev => ({ ...prev, difficulty: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-nature-500 dark:focus:ring-nature-400"
                >
                  <option value="Easy">Easy</option>
                  <option value="Moderate">Moderate</option>
                  <option value="Challenging">Challenging</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Max Participants
                </label>
                <input
                  type="number"
                  value={newHike.maxParticipants}
                  onChange={(e) => setNewHike(prev => ({ ...prev, maxParticipants: parseInt(e.target.value) }))}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-nature-500 dark:focus:ring-nature-400"
                  min="1"
                  max="50"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Description
              </label>
              <textarea
                value={newHike.description}
                onChange={(e) => setNewHike(prev => ({ ...prev, description: e.target.value }))}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-nature-500 dark:focus:ring-nature-400"
                placeholder="Describe the hike, what makes it special..."
                required
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Meeting Point
                </label>
                <input
                  type="text"
                  value={newHike.meetingPoint}
                  onChange={(e) => setNewHike(prev => ({ ...prev, meetingPoint: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-nature-500 dark:focus:ring-nature-400"
                  placeholder="e.g., Seaford Railway Station"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Meeting Time
                </label>
                <input
                  type="time"
                  value={newHike.meetingTime}
                  onChange={(e) => setNewHike(prev => ({ ...prev, meetingTime: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-nature-500 dark:focus:ring-nature-400"
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Transport Instructions
              </label>
              <input
                type="text"
                value={newHike.transport}
                onChange={(e) => setNewHike(prev => ({ ...prev, transport: e.target.value }))}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-nature-500 dark:focus:ring-nature-400"
                placeholder="e.g., Train from London Victoria (1h 30m)"
              />
            </div>
            
            {/* Highlights */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Highlights
              </label>
              {newHike.highlights.map((highlight, index) => (
                <div key={index} className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={highlight}
                    onChange={(e) => updateHighlight(index, e.target.value)}
                    className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-nature-500 dark:focus:ring-nature-400"
                    placeholder="e.g., Dramatic cliff views"
                  />
                </div>
              ))}
              <button
                type="button"
                onClick={addHighlight}
                className="text-nature-600 dark:text-nature-400 hover:text-nature-700 dark:hover:text-nature-300 text-sm font-medium"
              >
                + Add Highlight
              </button>
            </div>
            
            {/* What to Bring */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                What to Bring
              </label>
              {newHike.whatToBring.map((item, index) => (
                <div key={index} className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={item}
                    onChange={(e) => updateWhatToBring(index, e.target.value)}
                    className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-nature-500 dark:focus:ring-nature-400"
                    placeholder="e.g., Hiking boots"
                  />
                </div>
              ))}
              <button
                type="button"
                onClick={addWhatToBring}
                className="text-nature-600 dark:text-nature-400 hover:text-nature-700 dark:hover:text-nature-300 text-sm font-medium"
              >
                + Add Item
              </button>
            </div>
            
            <div className="flex justify-end">
              <button
                type="submit"
                className="inline-flex items-center space-x-2 bg-nature-600 hover:bg-nature-700 dark:bg-nature-700 dark:hover:bg-nature-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
              >
                <Save className="h-5 w-5" />
                <span>Save Hike</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Admin 