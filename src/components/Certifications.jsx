export default function Certifications() {
  const certifications = [
    { name: "Dubai Chamber", logo: "https://waterengineering.ae/wp-content/uploads/2024/09/dubai-chamber-certi-1.jpg" },
    { name: "ISO 9001", logo: "https://waterengineering.ae/wp-content/uploads/2024/09/iso9001-certifi-1.jpg" },
    { name: "Water Quality Association", logo: "https://waterengineering.ae/wp-content/uploads/2024/09/water-qaulity-certifie-1.jpg" },
    { name: "IAF", logo: "https://waterengineering.ae/wp-content/uploads/2024/09/iaf-certificate-1.jpg" },
    { name: "DAC", logo: "https://waterengineering.ae/wp-content/uploads/2024/09/DAC-certificate-1.jpg" },
    { name: "QRS", logo: "https://waterengineering.ae/wp-content/uploads/2024/09/QRS-certificate-1.jpg" },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        {/* Title */}
        <div className="text-center mb-4">
          <h2 className="text-4xl md:text-5xl font-bold text-[#01008c] mb-6 titles ">Certifications</h2>
          <p className="text-gray-500 max-w-2xl mx-auto mb-4 font-normal">
            Each certification stands as a testament to our dedication to excellence,
            guaranteeing the highest standards in both service and safety.
          </p>
        </div>

        {/* Certification cards */}
        <div className="flex flex-wrap justify-center gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="w-[170px] h-[170px] bg-white rounded-lg shadow-[0_0_15px_0_rgba(0,0,0,0.14)]  flex items-center justify-center p-6 object-cover relative"
            >
              <img className="absolute w-7 h-7 -top-2 left-3" src="https://waterengineering.ae/wp-content/uploads/2024/09/shield-trust.png" alt="" />
              <img
                src={cert.logo}
                alt={cert.name}
                className=""
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}