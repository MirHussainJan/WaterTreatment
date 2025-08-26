export default function ProjectJourney() {
  const steps = [
    {
      title: "Quality",
      desc: "We focus on delivering components that stand the test of time, built to meet the strictest quality standards in the industry.",
      icon: "https://waterengineering.ae/wp-content/uploads/2024/12/Quality-Icon.svg",
    },
    {
      title: "Usability",
      desc: "Our products are designed with simplicity and practicality in mind, making them easy to use and integrate into your existing systems.",
      icon: "https://waterengineering.ae/wp-content/uploads/2024/12/Usability-Icon.svg",
    },
    {
      title: "Reliability",
      desc: "You can trust our solutions to work consistently and efficiently, no matter how challenging the environment.",
      icon: "https://waterengineering.ae/wp-content/uploads/2024/12/Reliability-Icon.svg",
    },
    {
      title: "Service Support",
      desc: "We’re here to help whenever you need it, with a dedicated team ready to provide support and keep your systems running smoothly.",
      icon: "https://waterengineering.ae/wp-content/uploads/2024/12/Service-Support-Icon.svg",
    },
  ]
 
  return (
    <section className="py-19 relative" style={{backgroundImage: "url('https://waterengineering.ae/wp-content/uploads/2024/09/hp-map-bg-2.jpg')" }}>
      {/* Overlay for reduced opacity */}
      <div className="absolute inset-0 bg-white opacity-60 pointer-events-none z-0"></div>
      <div className="container mx-auto max-w-[1140px] relative z-0">
        {/* Heading */}
        <div className="text-center mb-6">
          
          <h2 className="text-2xl md:text-4xl font-bold text-[#01008c] mb-6">What In it for you</h2>
        </div>
 
        {/* Steps */}
        <div className="relative flex flex-col md:flex-row justify-between w-full">
          {/* Single horizontal line behind all bubbles */}
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center max-w-xs px-6 relative z-10 mx-auto">
              {/* Circle with Icon */}
              <div className="w-30 h-30  flex items-center justify-center mb-6">
                <img src={step.icon} alt={step.title} className="object-cover" />
              </div>
 
              {/* Title */}
              <h3 className="text-xl font-bold text-[#01008c] mb-4">{step.title}</h3>
 
              {/* Description */}
              <p className="text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
 