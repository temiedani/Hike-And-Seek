import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Calendar, Camera, MapPin } from 'lucide-react'

function GalleryCollections({ maxCollections = 3 }) {
  const [collections, setCollections] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadCollections = async () => {
      try {
        const response = await fetch('/galleries/index.json')
        if (response.ok) {
          const data = await response.json()
          setCollections(data.collections || [])
        } else {
          // Fallback to hardcoded data
          setFallbackData()
        }
      } catch (error) {
        console.log('Loading fallback gallery collections...')
        setFallbackData()
      } finally {
        setLoading(false)
      }
    }

    loadCollections()
  }, [])

  const setFallbackData = () => {
    setCollections([
      {
        id: 'ramsgate-to-margate',
        name: 'Ramsgate to Margate',
        description: 'Epic 10-mile coastal walk along Kent\'s Viking Coast Path',
        thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
        photoCount: 8,
        lastUpdated: '2025-05-31'
      },
      {
        id: 'folkestone-dover',
        name: 'Folkestone to Dover',
        description: '10-mile coastal hike along white cliffs and dramatic coastline',
        thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
        photoCount: 6,
        lastUpdated: '2024-12-14'
      },
      {
        id: 'balcombe-viaduct',
        name: 'Balcombe and the Viaduct',
        description: '10 miles through Sussex countryside with Victorian railway views',
        thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
        photoCount: 6,
        lastUpdated: '2024-12-07'
      },
      {
        id: 'amersham-trail',
        name: 'Amersham Trail',
        description: 'Winter walking through Chiltern Hills woods and riverside paths',
        thumbnail: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop',
        photoCount: 6,
        lastUpdated: '2024-11-30'
      },
      {
        id: 'box-hill-circular',
        name: 'Box Hill Circular',
        description: 'Our very first hike - misty Surrey Hills adventure where it all began',
        thumbnail: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=300&fit=crop',
        photoCount: 7,
        lastUpdated: '2024-11-16'
      }
    ])
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-nature-600 dark:border-nature-400"></div>
      </div>
    )
  }

  const displayCollections = collections.slice(0, maxCollections)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {displayCollections.map((collection) => (
        <Link
          key={collection.id}
          to={`/gallery?collection=${collection.id}`}
          className="group card overflow-hidden hover:shadow-lg dark:hover:shadow-dark-xl transition-all duration-300"
        >
          <div className="relative overflow-hidden">
            <img
              src={collection.thumbnail}
              alt={collection.name}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
            <div className="absolute top-3 right-3 bg-black bg-opacity-50 dark:bg-gray-900 dark:bg-opacity-70 text-white px-2 py-1 rounded text-sm flex items-center">
              <Camera className="h-3 w-3 mr-1" />
              {collection.photoCount}
            </div>
          </div>
          <div className="p-5">
            <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2 group-hover:text-nature-700 dark:group-hover:text-nature-400 transition-colors">
              {collection.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
              {collection.description}
            </p>
            <div className="flex items-center text-xs text-gray-500 dark:text-gray-500">
              <Calendar className="h-3 w-3 mr-1" />
              {new Date(collection.lastUpdated).toLocaleDateString('en-GB', { 
                day: 'numeric', 
                month: 'long', 
                year: 'numeric' 
              })}
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default GalleryCollections 