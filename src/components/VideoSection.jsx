export default function VideoSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">See Our Solutions In Action</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-r from-green-400 to-blue-500 rounded-lg overflow-hidden">
            <div className="aspect-video flex items-center justify-center">
              <button size="lg" className="bg-white/20 hover:bg-white/30 text-white border-2 border-white/50">
                <div className="w-6 h-6 bg-white rounded-full mr-2" />
                Play Video
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
