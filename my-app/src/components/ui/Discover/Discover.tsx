'use server';

import React from 'react';
import Image from 'next/image';
import './Discover.css';

interface ImageData {
  src: string;
  alt: string | null;
}

interface DiscoverProps {
  images: ImageData[];
}

const Discover = ({ images }: DiscoverProps) => {
  return (
    <section className="discover-section">
      <div className="container2">
        <h2 className="section-title">DISCOVER THE LATEST ADDITIONS</h2>

        <div
          className="collections-grid"
          style={{
            display: 'flex',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            gap: '1rem',
            paddingBottom: '1rem',
          }}
        >
          {images.slice(16, 22).map((image, index) => (
            <div
              key={index}
              className="collection-card"
              data-collection-id={index + 1}
              style={{
                flex: '0 0 auto',
                scrollSnapAlign: 'start',
                width: '250px',
              }}
            >
              <div
                className="card-image-container"
                style={{ position: 'relative', width: '100%', height: '200px' }}
              >
                <Image
                  src={image.src}
                  alt={image.alt || `Collection ${index + 1}`}
                  fill
                  className="card-image"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index < 2}
                />
              </div>
              <div className="card-content">
                <h3 className="card-title">{image.alt || `Collection ${index + 1}`}</h3>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <button className="discoverBtn" type="button">
            DISCOVER
          </button>
        </div>
      </div>
    </section>
  );
};

export default Discover;
