import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = {
  image1: "https://waterengineering.ae/wp-content/uploads/2025/01/Turbochargers-01-2-1024x703.jpg",
  image2: "https://waterengineering.ae/wp-content/uploads/2025/01/Turbochargers-01-2-1024x703.jpg",
  image3: "https://waterengineering.ae/wp-content/uploads/2025/01/Turbochargers-01-2-1024x703.jpg",
  image4: "https://waterengineering.ae/wp-content/uploads/2025/01/Turbochargers-01-2-1024x703.jpg",
  image5: "https://waterengineering.ae/wp-content/uploads/2025/01/Turbochargers-01-2-1024x703.jpg",
  image6: "https://waterengineering.ae/wp-content/uploads/2025/01/Turbochargers-01-2-1024x703.jpg",
};

export default function Carousel() {
  const imgArray = Object.values(images);
  const total = imgArray.length;

  // Clone first & last 5 slides for smooth loop
  const slides = [...imgArray.slice(-5), ...imgArray, ...imgArray.slice(0, 5)];

  const [currentIndex, setCurrentIndex] = useState(5); // start at real first
  const [isAnimating, setIsAnimating] = useState(true);
  const intervalRef = useRef(null);

  // --- autoplay every 3s
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
    setCurrentIndex((prev) => prev + 1);
    setIsAnimating(true);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => prev - 1);
    setIsAnimating(true);
  };

  // Handle seamless reset after reaching cloned slides
  useEffect(() => {
    if (currentIndex === slides.length - 5) {
      setTimeout(() => {
        setIsAnimating(false);
        setCurrentIndex(5); // jump back to real first
      }, 500);
    }
    if (currentIndex === 0) {
      setTimeout(() => {
        setIsAnimating(false);
        setCurrentIndex(total); // jump to real last
      }, 500);
    }
  }, [currentIndex, slides.length, total]);

  return (
    <div
      className="w-full max-w-5xl mx-auto relative overflow-hidden"
      onMouseEnter={stopAutoPlay}
      onMouseLeave={startAutoPlay}
    >
      {/* Images container */}
      <div
        className={`flex ${isAnimating ? "transition-transform duration-500" : ""}`}
        style={{
          transform: `translateX(-${currentIndex * (100 / 5)}%)`,
        }}
        onTransitionEnd={() => setIsAnimating(true)}
      >
        {slides.map((src, index) => (
          <div key={index} className="w-1/5 flex-shrink-0 p-2">
            <img
              src={src}
              alt={`Slide ${index}`}
              className="w-full h-48 object-cover rounded-xl shadow"
            />
          </div>
        ))}
      </div>

      {/* Left button */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow"
      >
        <ChevronLeft />
      </button>

      {/* Right button */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow"
      >
        <ChevronRight />
      </button>
    </div>
  );
}
