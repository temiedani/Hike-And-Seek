import { useState, useEffect, useRef } from 'react'
import { ExternalLink, Heart, MessageCircle } from 'lucide-react'

function InstagramEmbed({ useJsonFeed = false, maxPosts = 6 }) {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const instagramScriptLoaded = useRef(false)

  // Load Instagram embed script
  useEffect(() => {
    if (!instagramScriptLoaded.current) {
      const script = document.createElement('script')
      script.src = '//www.instagram.com/embed.js'
      script.async = true
      document.body.appendChild(script)
      instagramScriptLoaded.current = true
      
      // Process embeds after script loads
      script.onload = () => {
        if (window.instgrm) {
          window.instgrm.Embeds.process()
        }
      }
    }
  }, [])

  useEffect(() => {
    const loadInstagramPosts = async () => {
      try {
        const response = await fetch('./instagram/embeds.json')
        if (response.ok) {
          const data = await response.json()
          setPosts(data.posts || [])
        } else {
          // Fallback to sample embed data
          setSampleEmbedData()
        }
      } catch (error) {
        console.log('Loading sample Instagram embed data...')
        setSampleEmbedData()
      } finally {
        setLoading(false)
        
        // Process Instagram embeds after data loads
        setTimeout(() => {
          if (window.instgrm) {
            window.instgrm.Embeds.process()
          }
        }, 100)
      }
    }

    loadInstagramPosts()
  }, [])

  const setSampleEmbedData = () => {
    setPosts([
      {
        "id": 1,
        "url": "https://www.instagram.com/p/DJ31G7LIDRE/",
        "embedCode": "<blockquote class=\"instagram-media\" data-instgrm-captioned data-instgrm-permalink=\"https://www.instagram.com/p/DJ31G7LIDRE/?utm_source=ig_embed&amp;utm_campaign=loading\" data-instgrm-version=\"14\" style=\" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);\"></blockquote>",
        "title": "Folkestone to Dover",
        "location": "Kent Coast, England",
        "description": "10-mile coastal hike along white cliffs, clifftop paths, and dramatic skies. A special one for many first-timers."
      },
      {
        "id": 2,
        "url": "https://www.instagram.com/p/DIOsE8kqGl0/",
        "embedCode": "<blockquote class=\"instagram-media\" data-instgrm-captioned data-instgrm-permalink=\"https://www.instagram.com/p/DIOsE8kqGl0/?utm_source=ig_embed&amp;utm_campaign=loading\" data-instgrm-version=\"14\" style=\" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);\"></blockquote>",
        "title": "Balcombe and the Viaduct",
        "location": "West Sussex, England",
        "description": "10 miles through rolling countryside, peaceful woodland, and views of Ouse Valley Viaduct. 5 hours of trail time."
      },
      {
        "id": 3,
        "url": "https://www.instagram.com/p/DIOQ1a_q-zr/",
        "embedCode": "<blockquote class=\"instagram-media\" data-instgrm-captioned data-instgrm-permalink=\"https://www.instagram.com/p/DIOQ1a_q-zr/?utm_source=ig_embed&amp;utm_campaign=loading\" data-instgrm-version=\"14\" style=\" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);\"></blockquote>",
        "title": "Amersham Trail",
        "location": "Chiltern Hills, England",
        "description": "Just under 9 miles through woods, fields, riverside views — 5 hours of winter walking bliss."
      },
      {
        "id": 4,
        "url": "https://www.instagram.com/p/DIOPOFWKf1R/",
        "embedCode": "<blockquote class=\"instagram-media\" data-instgrm-captioned data-instgrm-permalink=\"https://www.instagram.com/p/DIOPOFWKf1R/?utm_source=ig_embed&amp;utm_campaign=loading\" data-instgrm-version=\"14\" style=\" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);\"></blockquote>",
        "title": "Box Hill Circular",
        "location": "Surrey, England",
        "description": "The very first hike – misty climbs, muddy boots, and classic Surrey views. 7.5 miles in 4.5 hours."
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

  const displayPosts = posts.slice(0, maxPosts)

  return (
    <div>
      {displayPosts.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500 dark:text-gray-400">No Instagram posts available</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayPosts.map((post) => (
            <div key={post.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-dark overflow-hidden transition-colors duration-200">
              {post.embedCode ? (
                // Real Instagram embed
                <div 
                  className="instagram-embed-container"
                  dangerouslySetInnerHTML={{ __html: post.embedCode }}
                />
              ) : (
                // Placeholder for posts without embed codes
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 dark:from-purple-600 dark:to-pink-600 p-8 text-white text-center min-h-[400px] flex flex-col justify-center">
                  <div className="bg-white/20 dark:bg-white/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                  <p className="text-white/80 mb-4">{post.location}</p>
                  <a 
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-white/20 hover:bg-white/30 dark:bg-white/30 dark:hover:bg-white/40 px-4 py-2 rounded-lg transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>View on Instagram</span>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
      
      {/* Instagram CTA */}
      <div className="text-center mt-8 p-6 bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-600 dark:to-pink-600 rounded-xl text-white transition-colors duration-200">
        <h3 className="text-xl font-bold mb-2">Follow Our Adventures</h3>
        <p className="mb-4">Stay updated with our latest hikes and beautiful trail photos</p>
        <a 
          href="https://instagram.com/hikeands33k"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 bg-white text-purple-600 hover:bg-gray-100 dark:bg-gray-200 dark:text-purple-700 dark:hover:bg-gray-300 font-medium py-2 px-6 rounded-lg transition-colors"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
          <span>@hikeands33k</span>
        </a>
      </div>
    </div>
  )
}

export default InstagramEmbed 