export default function ProjectJourney() {
  const steps = [
    {
      title: "Design",
      desc: "We create custom designs that fit your needs perfectly, making sure everything works just right.",
      icon: "https://waterengineering.ae/wp-content/uploads/2024/12/Untitled-5-01.svg",
    },
    {
      title: "Fabrication",
      desc: "Our team carefully puts everything together to bring your design to life with care and attention.",
      icon: "https://waterengineering.ae/wp-content/uploads/2024/12/Untitled-5-02.svg",
    },
    {
      title: "Onsite Installation",
      desc: "We install the system at your site, making sure it’s set up and ready to run smoothly.",
      icon: "https://waterengineering.ae/wp-content/uploads/2024/12/Untitled-5-03.svg",
    },
    {
      title: "Servicing",
      desc: "We provide ongoing service and maintenance to keep your system running efficiently for the long term.",
      icon: "https://waterengineering.ae/wp-content/uploads/2024/12/Untitled-5-04.svg",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto max-w-[1140px]">
        {/* Heading */}
        <div className="text-center mb-6">
          <p className="text-gray-600 font-semibold text-base md:text-xl uppercase mb-4">
            From Planning to Pure Water
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#01008c] mb-8 titles">Your Project Journey</h2>
        </div>

        {/* Steps */}
        <div className="relative flex flex-col md:flex-row justify-between items-center w-full">
          {/* Single horizontal line behind all bubbles */}
          <div className="hidden md:block absolute top-12 h-[2px] bg-gray-300 z-0 w-[70%] left-1/2 -translate-x-1/2"></div>
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center max-w-xs px-6 relative z-10">
              {/* Circle with Icon */}
              <div className="w-25 h-25 bg-white rounded-full shadow-[0_0_15px_0_rgba(0,0,0,0.14)] flex items-center justify-center mb-6">
                <img src={step.icon} alt={step.title} className="object-cover" />
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-[#01008c] mb-4 titles">{step.title}</h3>

              {/* Description */}
              <p className="text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}