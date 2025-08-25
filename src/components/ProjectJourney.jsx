export default function ProjectJourney() {
  const steps = [
    { step: "01", title: "Consultation", desc: "Initial assessment and requirements analysis" },
    { step: "02", title: "Design", desc: "Custom solution design and engineering" },
    { step: "03", title: "Installation", desc: "Professional installation and commissioning" },
    { step: "04", title: "Maintenance", desc: "Ongoing support and maintenance services" },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Your Project Journey</h2>
          <p className="text-gray-600">From consultation to completion, we guide you every step</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                {item.step}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}