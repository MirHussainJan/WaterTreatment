export default function Certifications() {
  const certifications = [
    { name: "ISO 9001", logo: "/placeholder.svg?height=80&width=80&text=ISO+9001" },
    { name: "Water Quality", logo: "/placeholder.svg?height=80&width=80&text=Water+Quality" },
    { name: "Water Quality Association", logo: "/placeholder.svg?height=80&width=80&text=WQA" },
    { name: "IAF", logo: "/placeholder.svg?height=80&width=80&text=IAF" },
    { name: "OHSAS", logo: "/placeholder.svg?height=80&width=80&text=OHSAS" },
    { name: "Quality Management", logo: "/placeholder.svg?height=80&width=80&text=QM" },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#01008c] mb-6">Certifications</h2>
          <p className="text-gray-600 max-w-3xl  mx-auto">
            Each certification stands as a testament to our dedication to excellence, encompassing the highest standards
            in both service and safety.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="flex flex-col items-center ">
              <div className="w-40 h-40 bg-white border-2 border-blue-600 rounded-2xl flex items-center justify-center mb-2 shadow-sm">
                <img src={cert.logo || "/placeholder.svg"} alt={cert.name} className="w-full h-full object-contain" />
              </div>
              <p className="text-xs text-gray-600 text-center max-w-20">{cert.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
