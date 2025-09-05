import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = {
  image1: "https://waterengineering.ae/wp-content/uploads/2024/09/4.png",
  image2: "https://waterengineering.ae/wp-content/uploads/2024/09/5.png",
  image3: "https://waterengineering.ae/wp-content/uploads/2024/09/6.png",
  image4: "https://waterengineering.ae/wp-content/uploads/2024/09/1.png",
  image5: "https://waterengineering.ae/wp-content/uploads/2024/09/2.png",
  image6: "https://waterengineering.ae/wp-content/uploads/2024/09/3.png",
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
    }, 8000);
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
    <section className="w-[100%] mx-auto flex items-center justify-between">
      {/* Left button */}
      <div className="flex justify-center items-center">
        <button
          onClick={prevSlide}
          className="p-2  z-10"
        >
          <ChevronLeft className="text-white w-6 h-6" />
        </button>
      </div>
      
      {/* Carousel window */}
      <div 
        className="flex-1 mx-8 relative overflow-hidden"
        onMouseEnter={stopAutoPlay}
        onMouseLeave={startAutoPlay}
      >
        <div className="relative h-30">
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
                className="w-1/5 flex-shrink-0 px-10 "
              >
                <div className="bg-white p-2  overflow-hidden border border-gray-200">
                  <img
                    src={src}
                    alt={`Slide ${index % total + 1}`}
                    className="w-full  object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Right button */}
      <div className="flex justify-center items-center">
        <button
          onClick={nextSlide}
          className="p-2 z-10"
        >
          <ChevronRight className="text-white  w-6 h-6" />
        </button>
      </div>
    </section>
  );
}