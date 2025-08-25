export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">W</span>
              </div>
              <span className="text-xl font-bold">Water Engineering</span>
            </div>
            <p className="text-gray-400 mb-4">
              Leading water treatment solutions provider in the UAE with over 20 years of experience.
            </p>
            <p className="text-gray-400">📞 +971 4 123 4567</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Water Treatment</li>
              <li>System Installation</li>
              <li>Maintenance</li>
              <li>Consultation</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>About Us</li>
              <li>Products</li>
              <li>Projects</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-blue-600 rounded-full" />
              <div className="w-8 h-8 bg-blue-600 rounded-full" />
              <div className="w-8 h-8 bg-blue-600 rounded-full" />
              <div className="w-8 h-8 bg-blue-600 rounded-full" />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Water Engineering. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
