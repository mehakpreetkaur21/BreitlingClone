'use server';
import React from 'react'
import Features from '../Features/Features'
import "./Gallery.css"

interface ImageData {
  src: string;
  alt: string | null;
}

interface GalleryProps {
  images: ImageData[];
}

function Gallery({ images }: GalleryProps) {
  return (
    <div className='mainContainer'>
        <Features 
        img={images[11]?.src}
        highlightContent='superocean'
        contentHeading="heritage, refined" 
        contentPara="New design, streamlined sizes. Built for life at sea." 
        btn="discover"
        href="/discover"
        />

        <Features 
        img={images[14]?.src} 
        highlightContent='tropical dial'
        contentHeading="legendary name" 
        contentPara="The Superocean Heritage Kelly Slater, limited to 500 piees." 
        btn="discover"
        href="/discover"
        />

        <Features 
        img={images[3]?.src} 
        highlightContent='your summer'
        contentHeading="duo" 
        contentPara="Perfectly paired for days in the sun." 
        btn="discover"
        href="/discover"
        />
    </div>
  )
}

export default Gallery
