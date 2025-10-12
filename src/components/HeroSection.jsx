"use client";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import img1 from "../assets/img1.png";
import img3 from "../assets/img3.png";
import { Link } from "react-router-dom";

const slides = [
  {
    id: 1,
    title: "Setting New Standards",
    description:
      "Leading water purifier suppliers in UAE offering RO plants, water softeners, and industrial water treatment solutions. Expert installation, maintenance, and service across Dubai, Abu Dhabi, Sharjah, and Ajman.",
    button: "Call Us",
    image: img1,
    to:"/contact"
  },
  {
    id: 2,
    title: "Innovators Water Treatment",
    description:
      "ISO 9001-2015 certified water purifier company in Dubai. Specializing in RO water purifiers, water filters, reverse osmosis systems, and custom water treatment solutions throughout the MENA region.",
    button: "Get In Touch",
    image: "/Home-Page-Banners-02-scaled.jpg",
    to:"/contact"
  },
  {
    id: 3,
    title: "Complete Water Solutions",
    description:
      "From domestic water filters to industrial RO plants in UAE. We provide water softeners, ultra violet systems, water chillers, and whole house water filters with dedicated AMC and maintenance support.",
    button: "Call Us",
    image: img3,
    to:"/contact"
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef();

  // Helper to clear and restart interval
  const restartInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      handleSlideChange((prev) => (prev + 1) % slides.length);
    }, 5000);
  };

  const handleSlideChange = (nextIndex) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    const index = typeof nextIndex === 'function' ? nextIndex(current) : nextIndex;
    setCurrent(index);
    setTimeout(() => setIsTransitioning(false), 700);
  };

  useEffect(() => {
    restartInterval();
    return () => clearInterval(intervalRef.current);
    // eslint-disable-next-line
  }, [current]);

  // When user interacts, reset interval
  const nextSlide = () => {
    handleSlideChange((prev) => (prev + 1) % slides.length);
    restartInterval();
  };
  const prevSlide = () => {
    handleSlideChange((prev) => (prev - 1 + slides.length) % slides.length);
    restartInterval();
  };
  const goToSlide = (index) => {
    if (index !== current) {
      handleSlideChange(index);
      restartInterval();
    }
  };

  return (
    <section className="relative h-[70vh] overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800">
      {/* Slides Container */}
      <div 
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className="min-w-full h-full relative"
          >
            {/* Background Image with Ken Burns effect */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[5000ms] ease-out"
              style={{ 
                backgroundImage: `url(${slide.image})`,
                transform: index === current ? 'scale(1.05)' : 'scale(1)'
              }}
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60" />
            
            {/* Content */}
            <div className="relative container mx-auto px-6 md:px-12 h-full flex items-center justify-center">
              <div 
                className={`text-white text-center transition-all duration-1000 ${
                  index === current 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: index === current ? '300ms' : '0ms' }}
              >
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-base md:text-lg mb-8 leading-relaxed text-gray-200 max-w-4xl mx-auto">
                  {slide.description}
                </p>
                <Link 
                  to={slide.to} 
                  className="bg-[linear-gradient(180deg,#01008c_0%,#063977_100%)] hover:-translate-y-2.5 transition duration-400 cursor-pointer py-4 px-8 font-semibold rounded-sm text-sm text-white"
                >
                  {slide.button}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        disabled={isTransitioning}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 group-hover:-translate-x-1 transition-transform duration-300" />
      </button>
      <button
        onClick={nextSlide}
        disabled={isTransitioning}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 md:w-8 md:h-8 group-hover:translate-x-1 transition-transform duration-300" />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            disabled={isTransitioning}
            className={`group relative transition-all duration-300 disabled:cursor-not-allowed ${
              index === current ? 'w-12' : 'w-3'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          >
            <div 
              className={`h-3 rounded-full transition-all duration-300 ${
                index === current 
                  ? 'bg-white shadow-lg' 
                  : 'bg-white/40 hover:bg-white/60'
              }`}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
