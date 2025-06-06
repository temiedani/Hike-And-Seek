import { useState, useEffect } from 'react'
import { X, ChevronLeft, ChevronRight, Camera, MapPin } from 'lucide-react'

function Gallery({ galleryName = 'recent' }) {
  const [images, setImages] = useState([])
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [loading, setLoading] = useState(true)
  const [galleryInfo, setGalleryInfo] = useState(null)

  useEffect(() => {
    const loadGallery = async () => {
      try {
        const response = await fetch(`./galleries/${galleryName}.json`)
        if (response.ok) {
          const galleryData = await response.json()
          // Handle both old 'images' and new 'photos' structure
          const photos = galleryData.photos || galleryData.images || []
          setImages(photos)
          setGalleryInfo(galleryData)
        } else {
          // Fallback to sample data if file doesn't exist
          setSampleData()
        }
      } catch (error) {
        console.log('Loading sample data...')
        setSampleData()
      } finally {
        setLoading(false)
      }
    }

    loadGallery()
  }, [galleryName])

  const setSampleData = () => {
    setImages([
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800',
        thumbnail: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=300&fit=crop',
        title: 'Sunrise Peak Adventure',
        description: 'Mountain peak at sunrise with dramatic views',
        date: '2024-03-15',
        location: 'Sample Location',
        photographer: 'Sample Photographer'
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1464822759844-d150baec93c5?w=800',
        thumbnail: 'https://images.unsplash.com/photo-1464822759844-d150baec93c5?w=400&h=300&fit=crop',
        title: 'Forest Trail Exploration',
        description: 'Forest trail with hikers exploring nature',
        date: '2024-03-10',
        location: 'Sample Forest',
        photographer: 'Sample Photographer'
      },
      {
        id: 3,
        url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
        thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
        title: 'Valley Vista Hike',
        description: 'Valley view from mountain top',
        date: '2024-03-05',
        location: 'Sample Valley',
        photographer: 'Sample Photographer'
      },
      {
        id: 4,
        url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800',
        thumbnail: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop',
        title: 'Coastal Cliff Walk',
        description: 'Dramatic coastal cliffs with ocean views',
        date: '2024-03-20',
        location: 'Sample Coast',
        photographer: 'Sample Photographer'
      },
      {
        id: 5,
        url: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800',
        thumbnail: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=400&h=300&fit=crop',
        title: 'Mountain Lake Reflection',
        description: 'Pristine mountain lake with perfect reflections',
        date: '2024-03-18',
        location: 'Sample Lake',
        photographer: 'Sample Photographer'
      },
      {
        id: 6,
        url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800',
        thumbnail: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop',
        title: 'Dense Forest Path',
        description: 'Winding path through ancient woodland',
        date: '2024-03-12',
        location: 'Sample Woods',
        photographer: 'Sample Photographer'
      },
      {
        id: 7,
        url: 'https://images.unsplash.com/photo-1506379429636-c31a01d19b5b?w=800',
        thumbnail: 'https://images.unsplash.com/photo-1506379429636-c31a01d19b5b?w=400&h=300&fit=crop',
        title: 'Rocky Summit',
        description: 'Reaching the rocky summit after challenging climb',
        date: '2024-03-08',
        location: 'Sample Peak',
        photographer: 'Sample Photographer'
      },
      {
        id: 8,
        url: 'https://images.unsplash.com/photo-1520637736862-4d197d17c936?w=800',
        thumbnail: 'https://images.unsplash.com/photo-1520637736862-4d197d17c936?w=400&h=300&fit=crop',
        title: 'Riverside Trail',
        description: 'Peaceful riverside walk with flowing water',
        date: '2024-03-25',
        location: 'Sample River',
        photographer: 'Sample Photographer'
      },
      {
        id: 9,
        url: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5e?w=800',
        thumbnail: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5e?w=400&h=300&fit=crop',
        title: 'Wildflower Meadow',
        description: 'Colorful wildflower meadow in full bloom',
        date: '2024-03-22',
        location: 'Sample Meadow',
        photographer: 'Sample Photographer'
      },
      {
        id: 10,
        url: 'https://images.unsplash.com/photo-1558442074-6d85ba92010f?w=800',
        thumbnail: 'https://images.unsplash.com/photo-1558442074-6d85ba92010f?w=400&h=300&fit=crop',
        title: 'Sunset Ridge',
        description: 'Golden hour views from the mountain ridge',
        date: '2024-03-28',
        location: 'Sample Ridge',
        photographer: 'Sample Photographer'
      }
    ])
  }

  const openLightbox = (image, index) => {
    setSelectedImage(image)
    setCurrentIndex(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const goToPrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1
    setCurrentIndex(newIndex)
    setSelectedImage(images[newIndex])
  }

  const goToNext = () => {
    const newIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0
    setCurrentIndex(newIndex)
    setSelectedImage(images[newIndex])
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Escape') closeLightbox()
    if (e.key === 'ArrowLeft') goToPrevious()
    if (e.key === 'ArrowRight') goToNext()
  }

  useEffect(() => {
    if (selectedImage) {
      document.addEventListener('keydown', handleKeyPress)
      document.body.style.overflow = 'hidden'
      return () => {
        document.removeEventListener('keydown', handleKeyPress)
        document.body.style.overflow = 'unset'
      }
    }
  }, [selectedImage, currentIndex])

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-nature-600 dark:border-nature-400"></div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div 
            key={image.id} 
            className="card overflow-hidden cursor-pointer group"
            onClick={() => openLightbox(image, index)}
          >
            <div className="relative overflow-hidden">
              <img
                src={image.thumbnail || image.url || image.src}
                alt={image.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
              {image.photographer && (
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 dark:bg-gray-900 dark:bg-opacity-70 text-white px-2 py-1 rounded text-xs flex items-center">
                  <Camera className="h-3 w-3 mr-1" />
                  {image.photographer}
                </div>
              )}
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{image.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{image.description}</p>
              <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-500">
                <span>{new Date(image.date).toLocaleDateString('en-GB')}</span>
                {image.location && <span>{image.location}</span>}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-opacity"
            >
              <X className="h-6 w-6" />
            </button>
            
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-opacity"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-opacity"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <img
              src={selectedImage.url || selectedImage.src}
              alt={selectedImage.title}
              className="lightbox-image"
            />
            
            <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-50 text-white p-4 rounded-lg">
              <h3 className="font-semibold text-lg">{selectedImage.title}</h3>
              <p className="text-sm opacity-90 mb-2">{selectedImage.description}</p>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-4">
                  <span>{new Date(selectedImage.date).toLocaleDateString('en-GB')}</span>
                  {selectedImage.location && (
                    <div className="flex items-center">
                      <MapPin className="h-3 w-3 mr-1" />
                      {selectedImage.location}
                    </div>
                  )}
                </div>
                {selectedImage.photographer && (
                  <div className="flex items-center">
                    <Camera className="h-3 w-3 mr-1" />
                    {selectedImage.photographer}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Gallery 