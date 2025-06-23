"use client";
import React, { useEffect, useRef, useState } from 'react';
import { CarouselSlide } from '../../../app/types/carousel';

interface Props {
  slides: CarouselSlide[];
  initialSlide?: number;
  autoPlayInterval?: number;
}

const VideoCarouselClient: React.FC<Props> = ({ 
  slides, 
  initialSlide = 0, 
  autoPlayInterval = 8000 
}) => {
  const [currentSlide, setCurrentSlide] = useState(initialSlide);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, autoPlayInterval);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [slides.length, autoPlayInterval, isAutoPlaying]);

  // Handle manual navigation
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    // Pause auto-play for a moment when user interacts
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    const newIndex = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
    goToSlide(newIndex);
  };

  const goToNext = () => {
    const newIndex = (currentSlide + 1) % slides.length;
    goToSlide(newIndex);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        goToPrevious();
      } else if (event.key === 'ArrowRight') {
        goToNext();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  // Progressive enhancement - if JS is disabled, fallback to server-rendered version
  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.classList.add('js-enabled');
    }
  }, []);

  return (
    <div className="video-carousel" ref={carouselRef}>
      <div className="carousel-container">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
            data-slide-index={index}
          >
            <video
              className="carousel-video"
              muted
              loop
              playsInline
              autoPlay={index === currentSlide}
              poster={slide.posterImage}
              preload={index === currentSlide ? "auto" : "metadata"}
            >
              <source src={slide.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <div className="carousel-overlay"></div>

            <div className="carousel-content">
              <h1 className="carousel-title">
                <span className="title-highlight">{slide.title}</span> {slide.subtitle}
              </h1>
              <p className="carousel-description">{slide.description}</p>
              <button className="discover-button">DISCOVER</button>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="carousel-nav">
        <button 
          className="nav-button prev" 
          onClick={goToPrevious}
          aria-label="Previous slide"
        >
          &lt;
        </button>
        <button 
          className="nav-button next" 
          onClick={goToNext}
          aria-label="Next slide"
        >
          &gt;
        </button>
      </div>

      {/* Dot Indicators */}
      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="carousel-progress">
        <div
          className="progress-bar"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default VideoCarouselClient;