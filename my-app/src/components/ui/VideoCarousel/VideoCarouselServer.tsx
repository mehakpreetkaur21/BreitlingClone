import React from 'react';
import './VideoCarousel.css';
import { CarouselSlide } from '../../../app/types/carousel';

interface Props {
  slides: CarouselSlide[];
  initialSlide?: number;
}

const VideoCarouselServer: React.FC<Props> = ({ slides, initialSlide = 0 }) => {
  return (
    <div className="video-carousel">
      <div className="carousel-container">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`carousel-slide ${index === initialSlide ? 'active' : ''}`}
            data-slide-index={index}
          >
            <video
              className="carousel-video"
              muted
              loop
              playsInline
              // Only autoplay the initial slide
              autoPlay={index === initialSlide}
              poster={slide.posterImage}
              preload={index === initialSlide ? "auto" : "metadata"}
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

      {/* Navigation Controls - These will be enhanced with JS */}
      <div className="carousel-nav">
        <button className="nav-button prev" data-action="prev" aria-label="Previous slide">
          &lt;
        </button>
        <button className="nav-button next" data-action="next" aria-label="Next slide">
          &gt;
        </button>
      </div>

      {/* Dot Indicators - These will be enhanced with JS */}
      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === initialSlide ? 'active' : ''}`}
            data-slide={index}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="carousel-progress">
        <div
          className="progress-bar"
          style={{ width: `${((initialSlide + 1) / slides.length) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default VideoCarouselServer;