export default function VideoSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm text-blue-700 uppercase tracking-wide">Visual Journey</p>
          <h2 className="text-4xl font-bold text-blue-900 mt-2">See Our Solutions In Action</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-r from-green-400 to-blue-600 rounded-2xl overflow-hidden shadow-lg">
            <div className="aspect-video flex items-center justify-center">
              <button className="flex items-center justify-center w-16 h-16 bg-blue-700 rounded-full hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}