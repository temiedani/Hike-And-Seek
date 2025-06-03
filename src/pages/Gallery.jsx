import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import Gallery from '../components/Gallery'
import { Calendar, MapPin, Clock, TrendingUp } from 'lucide-react'

function GalleryPage() {
  const [searchParams] = useSearchParams()
  const [selectedGallery, setSelectedGallery] = useState('ramsgate-to-margate')
  const [galleries, setGalleries] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check if there's a collection parameter in URL
    const collectionParam = searchParams.get('collection')
    if (collectionParam) {
      setSelectedGallery(collectionParam)
    }
  }, [searchParams])

  useEffect(() => {
    const loadGalleries = async () => {
      try {
        const response = await fetch('/galleries/index.json')
        if (response.ok) {
          const data = await response.json()
          setGalleries(data.collections || [])
        } else {
          // Fallback to hardcoded data if index.json fails
          setGalleries([
            {
              id: 'ramsgate-to-margate',
              name: 'Ramsgate to Margate',
              description: 'Epic 10-mile coastal walk along Kent\'s Viking Coast Path',
              photoCount: 8,
              lastUpdated: '2025-05-31'
            },
            {
              id: 'folkestone-dover',
              name: 'Folkestone to Dover',
              description: '10-mile coastal hike along white cliffs and dramatic coastline',
              photoCount: 6,
              lastUpdated: '2024-12-14'
            },
            {
              id: 'balcombe-viaduct',
              name: 'Balcombe and the Viaduct',
              description: '10 miles through Sussex countryside with Victorian railway views',
              photoCount: 6,
              lastUpdated: '2024-12-07'
            },
            {
              id: 'amersham-trail',
              name: 'Amersham Trail',
              description: 'Winter walking through Chiltern Hills woods and riverside paths',
              photoCount: 6,
              lastUpdated: '2024-11-30'
            },
            {
              id: 'box-hill-circular',
              name: 'Box Hill Circular',
              description: 'Our very first hike - misty Surrey Hills adventure where it all began',
              photoCount: 7,
              lastUpdated: '2024-11-16'
            }
          ])
        }
      } catch (error) {
        console.log('Loading fallback gallery data...')
        setGalleries([
          {
            id: 'ramsgate-to-margate',
            name: 'Ramsgate to Margate',
            description: 'Epic 10-mile coastal walk along Kent\'s Viking Coast Path',
            photoCount: 8,
            lastUpdated: '2025-05-31'
          },
          {
            id: 'folkestone-dover',
            name: 'Folkestone to Dover',
            description: '10-mile coastal hike along white cliffs and dramatic coastline',
            photoCount: 6,
            lastUpdated: '2024-12-14'
          },
          {
            id: 'balcombe-viaduct',
            name: 'Balcombe and the Viaduct',
            description: '10 miles through Sussex countryside with Victorian railway views',
            photoCount: 6,
            lastUpdated: '2024-12-07'
          },
          {
            id: 'amersham-trail',
            name: 'Amersham Trail',
            description: 'Winter walking through Chiltern Hills woods and riverside paths',
            photoCount: 6,
            lastUpdated: '2024-11-30'
          },
          {
            id: 'box-hill-circular',
            name: 'Box Hill Circular',
            description: 'Our very first hike - misty Surrey Hills adventure where it all began',
            photoCount: 7,
            lastUpdated: '2024-11-16'
          }
        ])
      } finally {
        setLoading(false)
      }
    }

    loadGalleries()
  }, [])

  if (loading) {
    return (
      <div className="py-12 bg-white dark:bg-gray-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center py-16">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-4 border-emerald-200 border-t-emerald-600 dark:border-emerald-800 dark:border-t-emerald-400 mx-auto mb-4"></div>
              <p className="text-gray-600 dark:text-gray-400">Loading galleries...</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const selectedGalleryData = galleries.find(g => g.id === selectedGallery)

  return (
    <div className="py-12 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Photo Gallery
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Relive the magic of our hiking adventures through our curated photo collections. 
            Each gallery tells the story of our shared experiences on the trails.
          </p>
        </div>

        {/* Gallery Selection */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Choose a Collection</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleries.map((gallery) => (
              <button
                key={gallery.id}
                onClick={() => setSelectedGallery(gallery.id)}
                className={`group text-left p-6 rounded-2xl border-2 transition-all duration-300 ${
                  selectedGallery === gallery.id
                    ? 'border-emerald-500 bg-gradient-to-br from-emerald-50 to-teal-50 dark:border-emerald-400 dark:from-emerald-900/30 dark:to-teal-900/30 shadow-lg transform scale-105'
                    : 'border-gray-200 hover:border-emerald-300 hover:bg-gradient-to-br hover:from-emerald-25 hover:to-teal-25 dark:border-gray-600 dark:hover:border-emerald-500 dark:hover:from-emerald-900/20 dark:hover:to-teal-900/20 hover:shadow-lg hover:-translate-y-1'
                } bg-white dark:bg-gray-800 shadow-md dark:shadow-gray-900/50`}
              >
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-xl mb-4 overflow-hidden group-hover:scale-105 transition-transform duration-300">
                  <img 
                    src={gallery.thumbnail} 
                    alt={gallery.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-200">{gallery.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">{gallery.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center text-xs text-gray-500 dark:text-gray-500 bg-gray-50 dark:bg-gray-700 px-2 py-1 rounded-full w-fit">
                    <Calendar className="h-3 w-3 mr-1" />
                    {new Date(gallery.lastUpdated).toLocaleDateString('en-GB', { 
                      day: 'numeric', 
                      month: 'short', 
                      year: 'numeric' 
                    })}
                  </div>
                  <div className="flex items-center text-xs text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 px-2 py-1 rounded-full w-fit font-medium">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    {gallery.photoCount} photos
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Current Gallery Info */}
        {selectedGalleryData && (
          <div className="mb-8">
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-lg dark:shadow-gray-900/50 border border-gray-200 dark:border-gray-700 transition-colors duration-200">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
                    {selectedGalleryData.name}
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">{selectedGalleryData.description}</p>
                  <div className="flex flex-wrap items-center gap-4 text-sm">
                    <div className="flex items-center text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800 px-3 py-2 rounded-full shadow-sm border border-gray-200 dark:border-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      {new Date(selectedGalleryData.lastUpdated).toLocaleDateString('en-GB', { 
                        day: 'numeric', 
                        month: 'long', 
                        year: 'numeric' 
                      })}
                    </div>
                    <div className="flex items-center text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/30 px-3 py-2 rounded-full shadow-sm border border-emerald-200 dark:border-emerald-800 font-medium">
                      <TrendingUp className="h-4 w-4 mr-2" />
                      {selectedGalleryData.photoCount} photos
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Gallery Component */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg dark:shadow-gray-900/50 border border-gray-200 dark:border-gray-700 transition-colors duration-200">
          <Gallery collectionName={selectedGallery} />
        </div>
      </div>
    </div>
  )
}

export default GalleryPage 