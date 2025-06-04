import { useState, useEffect, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import Gallery from '../components/Gallery'
import { Calendar, MapPin, Clock, TrendingUp } from 'lucide-react'

function GalleryPage() {
  const [searchParams] = useSearchParams()
  const [selectedGallery, setSelectedGallery] = useState('ramsgate-to-margate')
  const [galleries, setGalleries] = useState([])
  const [galleryDetails, setGalleryDetails] = useState(null)
  const [loading, setLoading] = useState(true)
  const galleryDetailsRef = useRef(null)

  // Function to scroll to gallery details
  const scrollToGalleryDetails = () => {
    if (galleryDetailsRef.current) {
      // Get the element's position relative to the viewport
      const rect = galleryDetailsRef.current.getBoundingClientRect()
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      
      // Calculate position with proper offset
      const navbarHeight = 80
      const desiredPadding = 32 // Space above the section
      const targetPosition = rect.top + scrollTop - navbarHeight - desiredPadding
      
      window.scrollTo({
        top: Math.max(0, targetPosition),
        behavior: 'smooth'
      })
    }
  }

  // Handle gallery selection with smooth scroll
  const handleGallerySelection = (galleryId) => {
    setSelectedGallery(galleryId)
    // Longer delay to ensure content updates and then scroll
    setTimeout(() => {
      scrollToGalleryDetails()
    }, 200)
  }

  // Load gallery details from JSON file
  const loadGalleryDetails = async (galleryId) => {
    try {
      const response = await fetch(`/galleries/${galleryId}.json`)
      if (response.ok) {
        const data = await response.json()
        setGalleryDetails(data)
      } else {
        setGalleryDetails(null)
      }
    } catch (error) {
      console.log('Could not load gallery details')
      setGalleryDetails(null)
    }
  }

  useEffect(() => {
    // Check if there's a collection parameter in URL
    const collectionParam = searchParams.get('collection')
    if (collectionParam) {
      setSelectedGallery(collectionParam)
      // Scroll to details when coming from external link (like home page)
      setTimeout(() => {
        scrollToGalleryDetails()
      }, 500) // Longer delay for external navigation
    }
  }, [searchParams])

  useEffect(() => {
    // Load gallery details when selected gallery changes
    if (selectedGallery) {
      loadGalleryDetails(selectedGallery)
    }
  }, [selectedGallery])

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
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Choose a Collection</h2>
          <div className="overflow-x-auto">
            <div className="flex gap-4 pt-2 pb-4 min-w-max">
              {galleries.map((gallery) => (
                <button
                  key={gallery.id}
                  onClick={() => handleGallerySelection(gallery.id)}
                  className={`group flex-shrink-0 w-80 text-left p-4 rounded-xl border-2 transition-all duration-300 ${
                    selectedGallery === gallery.id
                      ? 'border-emerald-500 bg-gradient-to-br from-emerald-50 to-teal-50 dark:border-emerald-400 dark:from-emerald-900/30 dark:to-teal-900/30 shadow-lg transform scale-105'
                      : 'border-gray-200 hover:border-emerald-300 hover:bg-gradient-to-br hover:from-emerald-25 hover:to-teal-25 dark:border-gray-600 dark:hover:border-emerald-500 dark:hover:from-emerald-900/20 dark:hover:to-teal-900/20 hover:shadow-md hover:-translate-y-0.5'
                  } bg-white dark:bg-gray-800 shadow-sm dark:shadow-gray-900/30`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-16 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-lg overflow-hidden group-hover:scale-105 transition-transform duration-300 flex-shrink-0">
                      <img 
                        src={gallery.thumbnail} 
                        alt={gallery.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-200 truncate">{gallery.name}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 line-clamp-2">{gallery.description}</p>
                      <div className="flex items-center gap-3 text-xs">
                        <div className="flex items-center text-gray-500 dark:text-gray-500">
                          <Calendar className="h-3 w-3 mr-1" />
                          {new Date(gallery.lastUpdated).toLocaleDateString('en-GB', { 
                            day: 'numeric', 
                            month: 'short'
                          })}
                        </div>
                        <div className="flex items-center text-emerald-600 dark:text-emerald-400 font-medium">
                          <TrendingUp className="h-3 w-3 mr-1" />
                          {gallery.photoCount} photos
                        </div>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      {selectedGallery === gallery.id ? (
                        <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      ) : (
                        <div className="w-8 h-8 border-2 border-gray-300 dark:border-gray-600 rounded-full group-hover:border-emerald-400 transition-colors duration-200"></div>
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400 mt-2 flex items-center">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Scroll horizontally to see all collections
          </div>
        </div>

        {/* Current Gallery Info */}
        {selectedGalleryData && (
          <div className="mb-8 scroll-mt-24" ref={galleryDetailsRef} id="gallery-details" style={{ scrollMarginTop: '120px' }}>
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-lg dark:shadow-gray-900/50 border border-gray-200 dark:border-gray-700 transition-colors duration-200">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
                    {selectedGalleryData.name}
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">{selectedGalleryData.description}</p>
                  
                  {/* Hike Details */}
                  {galleryDetails && (galleryDetails.distance || galleryDetails.duration || galleryDetails.difficulty) && (
                    <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
                      {galleryDetails.distance && (
                        <div className="flex items-center text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800 px-3 py-2 rounded-full shadow-sm border border-gray-200 dark:border-gray-600">
                          <MapPin className="h-4 w-4 mr-2" />
                          {galleryDetails.distance}
                        </div>
                      )}
                      {galleryDetails.duration && (
                        <div className="flex items-center text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800 px-3 py-2 rounded-full shadow-sm border border-gray-200 dark:border-gray-600">
                          <Clock className="h-4 w-4 mr-2" />
                          {galleryDetails.duration}
                        </div>
                      )}
                      {galleryDetails.difficulty && (
                        <div className={`px-3 py-2 rounded-full text-sm font-medium shadow-sm border ${
                          galleryDetails.difficulty === 'Easy' ? 'bg-green-100 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800' :
                          galleryDetails.difficulty === 'Moderate' ? 'bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-400 dark:border-yellow-800' :
                          'bg-red-100 text-red-800 border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-800'
                        }`}>
                          {galleryDetails.difficulty}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Highlights */}
                  {galleryDetails && galleryDetails.highlights && (
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Highlights:</h4>
                      <div className="flex flex-wrap gap-2">
                        {galleryDetails.highlights.map((highlight, index) => (
                          <span key={index} className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-400 px-3 py-1 rounded-full text-sm border border-emerald-200 dark:border-emerald-800">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

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
          {selectedGalleryData ? (
            <>
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Photo Collection
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Click on any photo to view it in full size
                </p>
              </div>
              <Gallery galleryName={selectedGallery} />
            </>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500 dark:text-gray-400">Select a collection above to view photos</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default GalleryPage 