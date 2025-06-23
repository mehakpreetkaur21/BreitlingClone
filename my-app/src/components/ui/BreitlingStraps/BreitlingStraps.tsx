'use server';

import React from 'react';
import Image from 'next/image';
import Button from '../Button/Button';
import './BreitlingStraps.css';

interface ImageData {
  src: string;
  alt: string | null;
}

interface BreitlingStrapsProps {
  images: ImageData[];
}

function BreitlingStraps({ images }: BreitlingStrapsProps) {
  const mainImage = images.length > 1 ? images[1] : null;

  return (
    <div className="straps-container">
      <div className="image-container">
        {mainImage ? (
          <div style={{ position: 'relative', width: '100%', maxWidth: '800px', height: '300px' }}>
            <Image
              src={mainImage.src}
              alt={mainImage.alt || 'Breitling strap'}
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, 600px"
              priority
            />
          </div>
        ) : (
          <p>No strap image available.</p>
        )}
      </div>
      <div className="content-container">
        <div className="content-heading">breitling straps</div>
        <p className="content-para">
          Pursue excellence, embrace our strap collection through Breitling style.
        </p>
        <div className="button-container">
          <Button href="/straps" className="yellow-button" title="discover straps" />
        </div>
      </div>
    </div>
  );
}

export default BreitlingStraps;
