'use server';

import React from 'react';
import './WatchShowcase.css';

interface ImageData {
  src: string;
  alt: string | null;
}

interface WatchShowcaseProps {
  images: ImageData[];
}

const WatchShowcase = ({ images }: WatchShowcaseProps) => {
  // Pick images from array (adjust indexes as needed)
  const mensImageSrc = images[15]?.src ?? '';
  const womensImageSrc = images[5]?.src ?? '';

  return (
    <div className="watch-showcase-container">
      <div className="watch-card-container">
        {/* Men's Watches Card */}
        <div
          className="watch-card mens-card"
          style={{ backgroundImage: `url(${mensImageSrc})` }}
        >
          <div className="image-overlay"></div>
          <div className="watch-content">
            <h2 className="watch-title"><span className="title-highlight">MEN'S </span>WATCHES</h2>
            <div className="discover-link">
              Discover <span className="btn-arrow">›</span>
            </div>
          </div>
        </div>

        {/* Women's Watches Card */}
        <div
          className="watch-card womens-card"
          style={{ backgroundImage: `url(${womensImageSrc})` }}
        >
          <div className="image-overlay"></div>
          <div className="watch-content">
            <h2 className="watch-title"><span className="title-highlight">WOMEN'S</span> WATCHES</h2>
            <div className="discover-link">
              Discover <span className="btn-arrow">›</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchShowcase;
