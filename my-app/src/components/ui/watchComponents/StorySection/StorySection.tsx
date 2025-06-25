import React from 'react';
import styles from './StorySection.module.css';

interface StorySectionProps {
  className?: string;
  watchImageSrc?: string;
  watchImageAlt?: string;
  productStory?: any;
}

const StorySection: React.FC<StorySectionProps> = ({ 
  className, 
  productStory,
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
              {productStory.values[0].translation.plainText}
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