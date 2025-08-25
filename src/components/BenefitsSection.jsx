export default function BenefitsSection() {
  const benefits = [
    { title: "Cost Effective", desc: "Affordable solutions without compromising quality" },
    { title: "Reliable Service", desc: "24/7 support and maintenance services" },
    { title: "Expert Team", desc: "Experienced professionals at your service" },
    { title: "Quality Assurance", desc: "Guaranteed performance and reliability" },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">What Is It For You</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}