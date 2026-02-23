import { useState } from 'react'

export default function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const handleDotClick = (index) => {
    setCurrentIndex(index)
  }

  return (
    <div className="w-full">
      <div className="relative w-full aspect-[4/3] bg-gray-100 rounded-xl overflow-hidden shadow-md">
        {/* Image Stack */}
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img.src}
            alt={img.alt}
            className={`absolute w-full h-full object-cover transition-opacity duration-[400ms] ease-in-out ${
              idx === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-yap-dark/55 hover:bg-yap-red/85 text-white p-2 rounded-full transition-colors duration-200 ease-in-out"
        >
          ❮
        </button>
        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-yap-dark/55 hover:bg-yap-red/85 text-white p-2 rounded-full transition-colors duration-200 ease-in-out"
        >
          ❯
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleDotClick(idx)}
              className={`w-2.5 h-2.5 rounded-full border-2 transition-colors duration-200 ease-in-out cursor-pointer ${
                idx === currentIndex
                  ? 'bg-yap-red border-yap-red'
                  : 'bg-white/40 border-white/70 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
