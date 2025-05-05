import React, { useState, useEffect, useRef } from 'react';

type CarouselProps = {
  images: string[]; // Array of image URLs  
  autoplay?: boolean; // Optional autoplay prop
  autoplayInterval?: number; // Optional interval for autoplay
}


const Carousel: React.FC<CarouselProps> = ({ images, autoplay = false, autoplayInterval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = images.length
  const intervalRef = useRef<NodeJS.Timeout | null>(null); // Ref to store the interval ID

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % length);
  };


  useEffect(() => {
    if (autoplay) {
      intervalRef.current = setInterval(nextSlide, autoplayInterval);
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [autoplay, autoplayInterval]); // Re-run effect if autoplay or interval changes

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Slide ${index}`} className="w-full h-auto" loading='lazy' />
        ))}
      </div>
      
    </div>
  );
};
export default Carousel; 