import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Instagram from './pages/Instagram'
import Join from './pages/Join'
import Hikes from './pages/Hikes'

function App() {
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
          </Routes>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App 