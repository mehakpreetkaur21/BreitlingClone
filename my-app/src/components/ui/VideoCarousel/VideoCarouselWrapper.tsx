import React, { Suspense } from 'react';
import VideoCarouselServer from './VideoCarouselServer';
import VideoCarouselClient from './VideoCarouselClient';
import { slides } from '../data/slides';

interface Props {
  useClientSide?: boolean;
  initialSlide?: number;
}

const VideoCarouselWrapper: React.FC<Props> = ({
  useClientSide = true,
  initialSlide = 0
}) => {
  // For server-side rendering, we render the static version
  // For client-side, we progressively enhance with the interactive version
  if (useClientSide) {
    return (
      <Suspense fallback={<div className="animate-pulse bg-gray-200 h-64 rounded-lg" />}>
        <VideoCarouselClient 
          slides={slides} 
          initialSlide={initialSlide} 
        />
      </Suspense>
    );
  }

  return <VideoCarouselServer slides={slides} initialSlide={initialSlide} />;
};

export default VideoCarouselWrapper;