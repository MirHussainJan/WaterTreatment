import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import img1 from "../../assets/CarouselImagas/img1.png";
import img2 from "../../assets/CarouselImagas/img2.png";
import img3 from "../../assets/CarouselImagas/img3.png";
import img4 from "../../assets/CarouselImagas/img4.png";
import img5 from "../../assets/CarouselImagas/img5.png";
import img6 from "../../assets/CarouselImagas/img6.png";

const images = {
  image1: img1,
  image2: img2,
  image3: img3,
  image4: img4,
  image5: img5,
  image6: img6,
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
                className=" md:w-1/5 flex-shrink-0 px-[8px] transition-all duration-300 hover:scale-101"
              >
                <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200 p-4">
                  <img
                    src={src}
                    alt={`Slide ${index % total + 1}`}
                    className="w-full h-40 object-cover"
                  />
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