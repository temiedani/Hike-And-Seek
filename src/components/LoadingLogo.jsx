function LoadingLogo() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-nature-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="text-center">
        <div className="relative">
          <img 
            src="./logo.png" 
            alt="Hike and S33k" 
            className="h-16 w-16 mx-auto animate-pulse"
          />
          <div className="absolute inset-0 rounded-full border-2 border-nature-200 dark:border-gray-600 animate-spin border-t-nature-600 dark:border-t-nature-400"></div>
        </div>
        <p className="mt-4 text-nature-600 dark:text-nature-400 font-medium">Loading your next adventure...</p>
      </div>
    </div>
  )
}

export default LoadingLogo 