import { Card, CardContent } from "./ui/Card"

export default function AdvancedTechnologies() {
  const technologies = [
    {
      name: "Custom Purification Systems",
      image: "https://waterengineering.ae/wp-content/uploads/2024/09/Custom-Purification-1024x703.jpg",
    },
    { name: "Water Softening", image: "https://waterengineering.ae/wp-content/uploads/2024/09/Water-Softening-1024x703.jpg" },
    { name: "Desalination", image: "https://waterengineering.ae/wp-content/uploads/2024/09/Desalination-1024x703.jpg" },
    { name: "Reverse Osmosis", image: "https://waterengineering.ae/wp-content/uploads/2024/09/Reverse-Osmosis-1024x703.jpg" },
    { name: "Deionization", image: "https://waterengineering.ae/wp-content/uploads/2024/09/Deionlization-1024x703.jpg" },
    { name: "Water Ionization", image: "https://waterengineering.ae/wp-content/uploads/2024/09/Water-Ionization-1-1024x703.jpg" },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto max-w-[1140px]">
        <div className="text-center mb-8">
          <p className="text-gray-600 font-semibold text-base  md:text-xl uppercase mb-4">SMART WATER SOLUTIONS</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#01008c] mb-6">Advanced Treatment Technologies</h2>
          <p className="text-gray-600 max-w-3xl mx-auto px-3 md:px-0">
            Using the latest <strong>technology</strong> and our deep experience, we ensure pure, clean water every time. From simple filtration to complete treatment systems, we combine modern solutions with proven expertise to solve any water challenge you face.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {technologies.map((tech, index) => (
            <Card key={index} className="shadow-xl w-[90%] md:w-full mx-auto overflow-hidden group">
              <CardContent className="text-center w-full">
                <img
                  src={tech.image || "/placeholder.svg"}
                  alt={tech.name}
                  className="w-full object-cover rounded-lg scale-[1]"
                />
                <h3 className="text-base font-bold text-[#01008c] py-6 transition-colors duration-300 group-hover:bg-[#01008c] group-hover:text-white">{tech.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-[linear-gradient(180deg,#01008c_0%,#063977_100%)] hover:-translate-y-2.5 transition duration-400 cursor-pointer py-6 px-12 font-semibold rounded-sm text-sm text-white">View All Technologies</button>
        </div>
      </div>
    </section>
  )
}