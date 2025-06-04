import { Routes, Route, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Instagram from './pages/Instagram'
import Join from './pages/Join'
import Hikes from './pages/Hikes'
import NotFound from './pages/NotFound'

function App() {
  const navigate = useNavigate()

  useEffect(() => {
    // Check if there's an intended path from 404 redirect
    const intendedPath = sessionStorage.getItem('intended-path')
    if (intendedPath && intendedPath !== '/') {
      sessionStorage.removeItem('intended-path')
      // Validate that the path is one of our known routes
      const validPaths = ['/', '/about', '/hikes', '/gallery', '/instagram', '/join']
      if (validPaths.includes(intendedPath)) {
        navigate(intendedPath, { replace: true })
      }
    }
  }, [navigate])

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-200">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/hikes" element={<Hikes />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/instagram" element={<Instagram />} />
            <Route path="/join" element={<Join />} />
            {/* Catch-all route for invalid URLs - shows 404 page then redirects */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App 