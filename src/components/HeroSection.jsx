"use client"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import img1 from '../assets/img1.png'
import img3 from '../assets/img3.png'

const slides = [
  {
    id: 1,
    title: "Setting New Standards",
    description:
      "From expert consultation to ongoing maintenance, we deliver end-to-end water treatment excellence. Our comprehensive services include design, fabrication, installation, and dedicated maintenance support. Trust our state-of-the-art technology and expert team to provide sustainable solutions that ensure pure water while protecting our environment.",
    button: "Call Us",
    image: img1,
  },
  {
    id: 2,
    title: "Water Engineering",
    description:
      "At WATER ENGINEERING, we revolutionize water treatment with cost-effective solutions. Based in Dubai Investment Park 2, UAE, we lead the MENA region in advanced water treatment. As an ISO 9001-2015 certified company and proud member of the World Water Quality Association, we deliver solutions and quality standards.",
    button: "Get In Touch",
    image: "https://waterengineering.ae/wp-content/uploads/2024/12/Home-Page-Banners-02-scaled.jpg",
  },{
    id: 3,
    title: "Setting New Standards",
    description:
      "From expert consultation to ongoing maintenance, we deliver end-to-end water treatment excellence. Our comprehensive services include design, fabrication, installation, and dedicated maintenance support. Trust our state-of-the-art technology and expert team to provide sustainable solutions that ensure pure water while protecting our environment.",
    button: "Call Us",
    image: img3,
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
    <section className="relative h-[60vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-3000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-zinc-900/50" />
          <div className="relative container mx-auto px-4 h-full flex items-center justify-center text-center">
            <div className="max-w-7xl text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 titles">{slide.title}</h1>
              <p className="text-lg mb-6 text-white">{slide.description}</p>
          <button className="cursor-pointer hover:brightness-90 text-white px-8 py-3 rounded-md font-semibold bg-black bg-linear-to-b from-[#01008C] to-[#09529fd9]">
                {slide.button}
            </button>
            </div>
          </div>
        </div>
      ))}

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full "
      >
        <ChevronLeft className="w-9 h-9"  />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full "
      >
        <ChevronRight className="w-9 h-9 " />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 w-full flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 rounded-full ${
              index === current ? "bg-blue-900" : "bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  )
}