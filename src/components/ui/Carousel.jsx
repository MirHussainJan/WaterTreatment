import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = {
  image1: "https://waterengineering.ae/wp-content/uploads/2025/01/Turbochargers-01-2-1024x703.jpg",
  image2: "https://waterengineering.ae/wp-content/uploads/2024/12/Water-Makers-1024x683.jpg",
  image3: "https://waterengineering.ae/wp-content/uploads/2024/12/Water-Chiller-1-1024x683.jpg",
  image4: "https://waterengineering.ae/wp-content/uploads/2024/12/Swimming-Pool-Chlorination-System-1024x683.jpg",
  image5: "https://waterengineering.ae/wp-content/uploads/2024/12/Stainless-Steel-RO-Water-Dispenser-1024x683.jpg",
  image6: "https://waterengineering.ae/wp-content/uploads/2024/12/Stainless-Steel-Bag-Filter-1024x683.jpg",
};

export default function Carousel() {
  const imgArray = Object.values(images);
  const total = imgArray.length;

  // Create an extended array for seamless looping
  const extendedSlides = [...imgArray, ...imgArray, ...imgArray];
  
  const [currentIndex, setCurrentIndex] = useState(total); // start in the middle section
  const [isTransitioning, setIsTransitioning] = useState(true);
  const intervalRef = useRef(null);

  // Autoplay every 3s
  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, []);

  const startAutoPlay = () => {
    stopAutoPlay();
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 3000);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const nextSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex(prev => prev + 1);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex(prev => prev - 1);
  };

  // Handle seamless reset when reaching the end of extended array
  useEffect(() => {
    if (currentIndex >= total * 2) {
      // Wait for transition to complete before resetting
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(total);
      }, 500);
    } else if (currentIndex <= 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(total * 2 - 1);
      }, 500);
    }
  }, [currentIndex, total]);

  return (
    <div className="max-w-[1140px] mx-auto py-10 px-4 ">
      <div
        className="relative overflow-hidden"
        onMouseEnter={stopAutoPlay}
        onMouseLeave={startAutoPlay}
      >
        {/* Carousel container */}
        <div className="relative h-56 ">
          {/* Cards with smooth sliding animation */}
          <div
            className={`flex absolute top-0 left-0 ${
              isTransitioning ? "transition-transform duration-700 ease-in-out" : ""
            }`}
            style={{
              transform: `translateX(-${(currentIndex * 100) / 5}%)`,
            }}
          >
            {extendedSlides.map((src, index) => (
              <div
                key={index}
                className="w-1/5 flex-shrink-0 px-[10.5px] transition-all duration-300 hover:scale-105"
              >
                <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
                  <img
                    src={src}
                    alt={`Slide ${index % total + 1}`}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-3 text-center">
                    <p className="text-sm font-medium text-gray-700">Card {(index % total) + 1}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-0 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-lg hover:bg-white transition-colors z-10"
        >
          <ChevronLeft className="text-gray-800" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-0 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-lg hover:bg-white transition-colors z-10"
        >
          <ChevronRight className="text-gray-800" />
        </button>

        {/* Indicators */}
        
      </div>
      <div className="flex justify-center mt-1 space-x-2">
          {imgArray.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full ${
                (currentIndex % total) === index ? 'bg-black' : 'bg-gray-300'
              }`}
              onClick={() => {
                setIsTransitioning(true);
                setCurrentIndex(total + index);
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
    </div>
  );
}