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
          <div className="flex justify-center items-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-nature-600 dark:border-nature-400"></div>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleries.map((gallery) => (
              <button
                key={gallery.id}
                onClick={() => setSelectedGallery(gallery.id)}
                className={`text-left p-5 rounded-lg border-2 transition-all duration-200 ${
                  selectedGallery === gallery.id
                    ? 'border-nature-500 bg-nature-50 dark:border-nature-400 dark:bg-nature-900/30'
                    : 'border-gray-200 hover:border-nature-300 hover:bg-nature-25 dark:border-gray-600 dark:hover:border-nature-500 dark:hover:bg-nature-900/20'
                }`}
              >
                <div className="aspect-video bg-gradient-to-br from-nature-100 to-nature-200 dark:from-gray-700 dark:to-gray-600 rounded-lg mb-4 overflow-hidden">
                  <img 
                    src={gallery.thumbnail} 
                    alt={gallery.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{gallery.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{gallery.description}</p>
                <div className="space-y-1">
                  <div className="flex items-center text-xs text-gray-500 dark:text-gray-500">
                    <Calendar className="h-3 w-3 mr-1" />
                    {new Date(gallery.lastUpdated).toLocaleDateString('en-GB', { 
                      day: 'numeric', 
                      month: 'long', 
                      year: 'numeric' 
                    })}
                  </div>
                  <div className="flex items-center text-xs text-gray-500 dark:text-gray-500">
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
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 transition-colors duration-200">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {selectedGalleryData.name}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">{selectedGalleryData.description}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(selectedGalleryData.lastUpdated).toLocaleDateString('en-GB', { 
                        day: 'numeric', 
                        month: 'long', 
                        year: 'numeric' 
                      })}
                    </div>
                    <div className="flex items-center">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      {selectedGalleryData.photoCount} photos
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Gallery Component */}
        <Gallery galleryName={selectedGallery} />
      </div>
    </div>
  )
}

export default GalleryPage 