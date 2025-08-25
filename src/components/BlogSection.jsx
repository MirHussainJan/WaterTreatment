export default function BlogSection() {
  const blogs = ["Advanced Water Treatment", "Sustainable Solutions", "Industry Innovations"]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Water Engineering Blogs</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200"
            >
              <div className="p-0">
                <img
                  src={`/abstract-geometric-shapes.png?height=200&width=300&query=${blog.toLowerCase()} water engineering blog`}
                  alt={blog}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mb-2">
                    Technology
                  </span>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{blog}</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Latest insights and developments in water treatment technology
                  </p>
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors text-sm">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
