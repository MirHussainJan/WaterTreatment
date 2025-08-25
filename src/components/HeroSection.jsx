"use client"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    id: 1,
    title: "Setting New Standards",
    description:
      "From expert consultation to ongoing maintenance, we deliver end-to-end water treatment excellence. Our comprehensive services include design, fabrication, installation, and dedicated maintenance support. Trust our state-of-the-art technology and expert team to provide sustainable solutions that ensure pure water while protecting our environment.",
    button: "Call Us",
    image: "/placeholder-0n1ur.png",
  },
  {
    id: 2,
    title: "Water Engineering",
    description:
      "At WATER ENGINEERING, we revolutionize water treatment with cost-effective solutions. Based in Dubai Investment Park 2, UAE, we lead the MENA region in advanced water treatment. As an ISO 9001-2015 certified company and proud member of the World Water Quality Association, we deliver solutions and quality standards.",
    button: "Get In Touch",
    image: "/placeholder-4hidv.png",
  },
]

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0)

  // Auto slide every 6s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <section className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 mt-30 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-blue-900/70" />
          <div className="relative container mx-auto px-4 h-full flex items-center justify-center text-center">
            <div className="max-w-7xl text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{slide.title}</h1>
              <p className="text-lg mb-6 text-blue-100">{slide.description}</p>
              <button className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white px-8 py-3 rounded-md font-semibold">
                {slide.button}
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 w-full flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
