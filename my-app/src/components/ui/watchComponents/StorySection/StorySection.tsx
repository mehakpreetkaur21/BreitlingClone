import React from 'react';
import styles from './StorySection.module.css';

interface StorySectionProps {
  className?: string;
  watchImageSrc?: string;
  watchImageAlt?: string;
}

const StorySection: React.FC<StorySectionProps> = ({ 
  className, 
  watchImageSrc = 'https://www.breitling.com/api/image-proxy/www-breitling.eu.saleor.cloud/media/thumbnails/products/y233801a1b1x1-three-quarter_937d4ebb_thumbnail_1024.webp?imwidth=1080&format=auto', 
  watchImageAlt = 'Breitling Classic AVI Watch' 
}) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <div className={styles.content}>
        <div className={styles.textSection}>
          <h2 className={styles.title}>
            <span className={styles.titleHighlight}>THE</span> STORY
          </h2>
          
          <div className={styles.story}>
            <p>
              From brave first takeoffs to the birth of commercial air travel, Breitling's history is inseparable from 
              that of flight. In the 1930s, Breitling's Huit Aviation department made its name inventing precision 
              cockpit clocks. Two decades later, it introduced yet another novel flight instrument, this time in 
              wearable form: the Ref. 765 AVI. That pioneering pilot's watch provided the technical backdrop for 
              today's Classic AVI, a collection inspired by the rugged spirit of famed early aircraft. The Classic AVI 
              Mosquito honors one of those legends. In an era when aluminum and steel shortages were 
              common, the engineers behind the de Havilland Mosquito made use of a still plentiful material: 
              wood. The "Wooden Wonder" caused shockwaves when it outperformed its metal contemporaries 
              to become one of the fastest planes built between 1940 and 1950. Its superior maneuverability 
              allowed it to multitask in roles as far ranging as light bomber, night-fighter, transport and 
              photographic reconnaissance aircraft. As a true pilot's watch designed to withstand the rigors of a 
              vintage cockpit, the Classic AVI Mosquito features large, highly legible Arabic numerals on the dial 
              and bezel. The knurled bezel on the 42mm case provides optimal grip, even in a pilot's gloved 
              hands. Top-stitched calfskin straps give a nod to the seams found on classic flight gear, while the 
              stainless-steel bracelet provides an elegant alternative. Pilots and other travelers will appreciate its 
              legibility, wearability, and understated style. The engine of the Classic AVI is the COSC-certified 
              Breitling Caliber 23 movement, which provides approximately 48-hours of power reserve.
            </p>
          </div>
        </div>
        
        <div className={styles.imageSection}>
          <div className={styles.imageContainer}>
            <img 
              src={watchImageSrc} 
              alt={watchImageAlt}
              className={styles.watchImage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StorySection;