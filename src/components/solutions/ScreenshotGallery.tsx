"use client";
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiMaximize } from 'react-icons/fi';

interface Screenshot {
  id: number;
  src: string;
  alt: string;
}

interface ScreenshotGalleryProps {
  screenshots: Screenshot[];
}

export default function ScreenshotGallery({ screenshots }: ScreenshotGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === screenshots.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? screenshots.length - 1 : prevIndex - 1
    );
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">System Overview</h2>
        
        <div className={`relative ${isFullscreen ? 'fixed inset-0 z-50 bg-black/90 p-4 flex items-center justify-center' : 'max-w-6xl mx-auto'}`}>
          <div className={`overflow-hidden rounded-xl shadow-2xl ${isFullscreen ? 'w-full h-full' : 'w-full'}`}>
            <AnimatePresence mode='wait'>
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className={`${isFullscreen ? 'h-full w-full' : 'aspect-video'} bg-gray-100 dark:bg-gray-700 relative`}
              >
                <Image
                  src={screenshots[currentIndex].src}
                  alt={screenshots[currentIndex].alt}
                  fill
                  className="object-contain"
                  quality={100}
                  priority={currentIndex === 0}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className={`absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-all ${isFullscreen ? 'scale-150' : ''}`}
            aria-label="Previous screenshot"
          >
            <FiChevronLeft size={24} />
          </button>
          <button 
            onClick={nextSlide}
            className={`absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-all ${isFullscreen ? 'scale-150' : ''}`}
            aria-label="Next screenshot"
          >
            <FiChevronRight size={24} />
          </button>

          {/* Fullscreen Toggle */}
          <button 
            onClick={toggleFullscreen}
            className={`absolute top-4 right-4 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-all ${isFullscreen ? 'scale-150' : ''}`}
            aria-label={isFullscreen ? 'Exit fullscreen' : 'View fullscreen'}
          >
            <FiMaximize size={20} />
          </button>

          {/* Close fullscreen button */}
          {isFullscreen && (
            <button 
              onClick={toggleFullscreen}
              className="absolute top-4 left-4 text-white text-lg font-semibold hover:underline"
            >
              Close
            </button>
          )}

          {/* Indicator Dots */}
          {!isFullscreen && (
            <div className="flex justify-center mt-6 space-x-2">
              {screenshots.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${currentIndex === index ? 'bg-blue-600 w-6' : 'bg-gray-300 hover:bg-gray-400'}`}
                  aria-label={`View screenshot ${index + 1}`}
                />
              ))}
            </div>
          )}

          {/* Caption */}
          <div className={`text-center mt-4 ${isFullscreen ? 'text-white' : 'text-gray-600 dark:text-gray-300'}`}>
            {screenshots[currentIndex].alt}
          </div>
        </div>

        {/* Thumbnail Grid */}
        <div className="mt-12 grid grid-cols-3 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
          {screenshots.map((screenshot, index) => (
            <button
              key={screenshot.id}
              onClick={() => setCurrentIndex(index)}
              className={`relative aspect-video overflow-hidden rounded-lg border-2 transition-all ${currentIndex === index ? 'border-blue-500 scale-105' : 'border-transparent hover:border-gray-300'}`}
            >
              <Image
                src={screenshot.src}
                alt={screenshot.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className={`absolute inset-0 ${currentIndex === index ? 'bg-blue-500/20' : 'bg-black/0 hover:bg-black/20'} transition-all`} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}