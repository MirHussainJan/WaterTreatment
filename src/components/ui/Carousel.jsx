import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import img1 from "../../assets/CarouselImagas/img1.png";
import img2 from "../../assets/CarouselImagas/img2.png";
import img3 from "../../assets/CarouselImagas/img3.png";
import img4 from "../../assets/CarouselImagas/Img4.png";
import img5 from "../../assets/CarouselImagas/img5.png";
import img6 from "../../assets/CarouselImagas/img6.png";

const images = [
  { src: img1, name: "Water Filter System" },
  { src: img2, name: "RO Water Purifier" },
  { src: img3, name: "UV Sterilizer" },
  { src: img4, name: "Water Softener" },
  { src: img5, name: "Water Chiller" },
  { src: img6, name: "Industrial RO Plant" },
];

export default function Carousel() {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef();
  const itemsPerView = 5; // Show 5 items at a time on desktop

  // Helper to clear and restart interval
  const restartInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      handleSlideChange((prev) => (prev + 1) % images.length);
    }, 3000);
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
    handleSlideChange((prev) => (prev + 1) % images.length);
    restartInterval();
  };
  
  const prevSlide = () => {
    handleSlideChange((prev) => (prev - 1 + images.length) % images.length);
    restartInterval();
  };

  const goToSlide = (index) => {
    if (index !== current) {
      handleSlideChange(index);
      restartInterval();
    }
  };

  const handleProductClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate('/parts');
  };

  return (
    <div className="max-w-[1140px] mx-auto py-10 px-4">
      <div
        className="relative overflow-hidden"
        onMouseEnter={() => clearInterval(intervalRef.current)}
        onMouseLeave={restartInterval}
      >
        {/* Carousel container */}
        <div className="relative h-56">
          {/* Cards with smooth sliding animation */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${(current * 100) / itemsPerView}%)`,
            }}
          >
            {/* Create infinite loop by duplicating items */}
            {[...images, ...images, ...images].map((item, index) => (
              <div
                key={index}
                className="w-1/5 flex-shrink-0 px-2 cursor-pointer group"
                onClick={handleProductClick}
              >
                <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300">
                  <div className="overflow-hidden rounded-t-lg p-4 pb-0">
                    <img
                      src={item.src}
                      alt={item.name}
                      className="w-full h-40 object-cover rounded-lg group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <p className="text-center text-sm font-semibold text-gray-700 mt-3 mb-3 px-4 group-hover:text-[#01008c] transition-colors">
                    {item.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          disabled={isTransitioning}
          className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-800 p-3 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform duration-300" />
        </button>
        <button
          onClick={nextSlide}
          disabled={isTransitioning}
          className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-800 p-3 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group z-10"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-6 gap-3">
        {images.map((_, index) => (
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
                  ? 'bg-[#01008c] shadow-lg' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}