import React from 'react';
import styles from './WarrantySection.module.css';

// Method 1: Import SVG as React Component (recommended for custom SVGs)
// import { ReactComponent as WarrantyBadge } from './breitling-warranty-badge.svg';

interface WarrantySectionProps {
  className?: string;
  watchmakerImageSrc?: string;
  watchmakerImageAlt?: string;
  warrantyBadgeSrc?: string;
  useInlineSvg?: boolean; // Option to switch between inline SVG and image
  productWarrantyDuration?: string;
  productWarrantyExtensionDuration?: string;
}

// Breitling Warranty Badge SVG Component
const BreitlingWarrantyBadge: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    className={className} 
    xmlns="http://www.w3.org/2000/svg" 
    width="97" 
    height="98" 
    fill="none"
    viewBox="0 0 97 98"
    aria-label="Breitling International Warranty Badge"
  >
    <path 
      fill="#072C54" 
      stroke="#072C54" 
      strokeWidth="0.5" 
      d="M48.5 1.152a47.75 47.75 0 0 1 26.826 8.196 48.13 48.13 0 0 1 17.386 21.114 47.94 47.94 0 0 1-4.428 45.512 48.1 48.1 0 0 1-21.109 17.39 47.91 47.91 0 0 1-45.501-4.43A48.13 48.13 0 0 1 4.288 67.822a47.94 47.94 0 0 1 4.426-45.51 48.1 48.1 0 0 1 21.11-17.39A47.7 47.7 0 0 1 48.5 1.152Zm0 94.663A46.67 46.67 0 0 0 78.03 85.261a46.686 46.686 0 0 0 11.728-57.907A46.68 46.68 0 0 0 66.663 6.137 46.67 46.67 0 0 0 31 5.962 46.68 46.68 0 0 0 5.624 31.026a46.7 46.7 0 0 0-.275 35.67 46.68 46.68 0 0 0 24.988 25.451A46.4 46.4 0 0 0 48.5 95.816Z"
    />
    <path 
      fill="#072C54" 
      stroke="#072C54" 
      strokeWidth="0.5" 
      d="M48.498 18.62a30.531 30.531 0 0 1 26.985 44.77 30.53 30.53 0 0 1-15.104 13.876 30.52 30.52 0 0 1-39.997-16.242 30.537 30.537 0 0 1 16.24-40.005 30.3 30.3 0 0 1 11.876-2.399Zm0 59.727a29.2 29.2 0 0 0 28.607-23.411 29.22 29.22 0 0 0-17.24-32.704 29.2 29.2 0 0 0-38.13 15.602 29.22 29.22 0 0 0 15.4 38.218 29 29 0 0 0 11.363 2.295Z"
    />
    <path 
      fill="#072C54" 
      d="M22.89 75.54a2.13 2.13 0 0 1 1.55-.787 2.32 2.32 0 0 1 1.7.598l1.533 1.305-4.96 5.825-1.55-1.317a2.24 2.24 0 0 1-.834-1.501 2.02 2.02 0 0 1 .508-1.57 1.96 1.96 0 0 1 .73-.545c.284-.12.591-.172.898-.152a1.95 1.95 0 0 1-.026-.966c.075-.33.23-.636.452-.89m-.446 4.968 1.167-1.37-.387-.33a.8.8 0 0 0-.634-.199.93.93 0 0 0-.614.351.86.86 0 0 0-.231.646.88.88 0 0 0 .339.599zm2.012-2.364 1.218-1.431-.385-.328a.9.9 0 0 0-.684-.221.92.92 0 0 0-.64.336.92.92 0 0 0 .106 1.318zM18.376 72.194l1.805-3.242 1.054 1.278-1.695 2.847.207.253 2.408-1.978.966 1.174-5.912 4.853-1.317-1.609a2.32 2.32 0 0 1-.602-1.681 2.15 2.15 0 0 1 .86-1.514 2.3 2.3 0 0 1 1.09-.517c.384-.06.777-.014 1.136.136m-1.103 3.162 1.493-1.23-.293-.356a.81.81 0 0 0-.625-.31 1.02 1.02 0 0 0-.702.25.97.97 0 0 0-.37.625.84.84 0 0 0 .203.663zM16.246 64.891l1.183-.672 1.94 3.415-6.654 3.777-1.938-3.415 1.184-.672 1.188 2.093 1.517-.86-.605-1.066 1.183-.674.605 1.068 1.585-.9zM9.1 64.03l7.107-2.828.557 1.405-7.107 2.83zM8.75 58.126l6.107-1.493.361 1.476-6.108 1.493.364 1.487-1.323.325-1.087-4.45 1.322-.323zM12.618 49.743l1.356-.107.31 3.89-7.625.608-.12-1.514 6.268-.498zM6.5 45.996l7.64.428-.088 1.506-7.639-.43zM7.766 38.228l7.483 1.581-.298 1.405-4.873.693-.007.034 4.53.923-.284 1.344-7.483-1.58.293-1.387 4.856-.72.004-.023-4.508-.92zM15.535 35.367a.73.73 0 0 0 0-.573.71.71 0 0 0-.406-.413l-.643-.27-.274.653-1.172-.49.842-2.014 1.806.757a2 2 0 0 1 1.17 1.18c.2.56.171 1.176-.078 1.716a2.25 2.25 0 0 1-1.17 1.249 2 2 0 0 1-1.655 0l-3.3-1.383a1.99 1.99 0 0 1-1.148-1.196 2.28 2.28 0 0 1 .066-1.728 2.074 2.074 0 0 1 2.898-1.19l.248.106-.569 1.359-.27-.113a.86.86 0 0 0-.64-.043.7.7 0 0 0-.418.417.724.724 0 0 0 .409.976l3.32 1.39a.74.74 0 0 0 .576.009.7.7 0 0 0 .407-.4M14.896 23.78l6.183 4.505-.886 1.218L14.009 25zM20.155 17.939l5.438 5.38-1.013 1.025-4.473-2.056-.024.023 3.311 3.23-.966.975-5.437-5.38.996-1.009 4.474 2.02.016-.017-3.295-3.211zM25.704 15.375l3.614 5.146-1.243.874-3.615-5.147-1.251.878-.782-1.114 3.745-2.634.783 1.114zM34.949 15.929l.589 1.23-3.539 1.7-3.312-6.895 3.538-1.702.59 1.23-2.17 1.043.755 1.572 1.106-.527.588 1.23-1.104.526.79 1.643zM39.29 12.373l2.25 2.952-1.59.45-1.931-2.691-.314.087.85 2.999-1.462.413-2.085-7.36 2.002-.568a2.32 2.32 0 0 1 1.782.121 2.15 2.15 0 0 1 1.043 1.394c.12.391.134.807.038 1.204a2.1 2.1 0 0 1-.583.999m-2.459-2.275.527 1.863.444-.126a.82.82 0 0 0 .534-.45c.11-.233.128-.5.05-.746a.96.96 0 0 0-.423-.586.83.83 0 0 0-.69-.08zM46.824 7.043l.71 7.617-1.434.134-2.108-4.448h-.033l.462 4.601-1.367.128-.708-7.619 1.41-.131 2.127 4.424h.023l-.46-4.579zM52.869 7.289l.94 7.758-1.57-.133-.076-.944-1.4-.12-.237.918-1.503-.13 2.332-7.48zm-1.79 5.357 1.009.088-.207-2.998h-.022zM58.91 9.781l-1.502 6.108-1.474-.362 1.5-6.109-1.485-.364.325-1.323 4.445 1.094-.324 1.322zM64.76 10.343l-2.842 7.103-1.399-.559 2.84-7.104zM69.68 12.715c.53.281.927.76 1.105 1.334a2.05 2.05 0 0 1-.239 1.668l-1.762 3.022a2.06 2.06 0 0 1-1.343 1.021 2.48 2.48 0 0 1-2.814-1.628 2.06 2.06 0 0 1 .24-1.677l1.763-3.023a2.03 2.03 0 0 1 1.34-1.015 2.28 2.28 0 0 1 1.71.298m-3.267 5.594a.7.7 0 0 0 .574.075.84.84 0 0 0 .48-.41l1.689-2.899c.138-.207.203-.454.184-.702a.66.66 0 0 0-.344-.494.67.67 0 0 0-.606-.054c-.227.102-.412.279-.526.5l-1.615 2.77c-.142.211-.209.463-.19.716a.67.67 0 0 0 .354.498M77.752 18.863l-5.016 5.776-1.087-.944 1.756-4.599-.025-.022-3.006 3.513-1.037-.9 5.016-5.776 1.07.93-1.727 4.595.018.015 2.99-3.498zM81.763 23.42l-4.958 6.041-.987-1.23.629-.702-.879-1.097-.826.463-.945-1.175 7.018-3.48zm-5.108 2.407.635.79 2.02-2.22-.014-.017zM80.726 33.493l-1.186.67-1.918-3.4L84.282 27l.746 1.322-5.475 3.093zM90.242 43.085l-7.782.306-.285-1.23 4.228-1.883-.004-.022-4.636.13-.282-1.217 7.141-3.068.345 1.493-4.232 1.669v.01l4.58-.163.24 1.03-4.215 1.81.006.021 4.566-.296zM90.531 48.343l-7.581 1.895-.062-1.574.927-.194-.055-1.405-.94-.12-.057-1.507 7.708 1.387zm-5.537-1.113.038 1.013 2.95-.578v-.022zM85.835 55.445l-3.6.89.22-1.64 3.239-.703.043-.325-3.089-.413.203-1.506 7.58 1.017-.276 2.064a2.32 2.32 0 0 1-.82 1.586 2.15 2.15 0 0 1-1.694.403 2.3 2.3 0 0 1-1.121-.446 2.1 2.1 0 0 1-.685-.927m3.064-1.348-1.917-.259-.063.458a.82.82 0 0 0 .2.67c.17.193.407.316.664.343a.96.96 0 0 0 .707-.155.84.84 0 0 0 .352-.6zM84.125 61.974l-3.705.232.51-1.574 3.31-.112.1-.31-2.964-.96.467-1.444 7.279 2.355-.641 1.98a2.32 2.32 0 0 1-1.092 1.415 2.15 2.15 0 0 1-1.737.094 2.3 2.3 0 0 1-1.023-.638 2.07 2.07 0 0 1-.504-1.038m3.255-.78-1.843-.596-.143.44a.81.81 0 0 0 .078.693c.133.222.344.385.591.458a.96.96 0 0 0 .724-.026.84.84 0 0 0 .448-.527zM85.316 69.45l-7.51-2.156.733-1.393.9.296.656-1.244-.752-.574.702-1.334 5.979 5.062zm-4.24-3.731-.472.896 2.842.977.01-.02zM80.234 76.817l-6.029-4.708.886-1.136 4.683 1.515.02-.026-3.665-2.818.844-1.082 6.03 4.708-.873 1.116-4.678-1.483-.014.017 3.648 2.81zM75.018 80.015l-4.194-4.686 1.133-1.015 4.194 4.687 1.141-1.02.91 1.014-3.412 3.054-.908-1.014zM67.793 81.24l-1.615-2.557 1.285-.812 1.585 2.511 3.905 3.074-1.341.847-2.244-1.976.76 2.912-1.293.817zM37.46 69.9v-3.173l1.768-4.847h-1.604l-.954 3.007-.885-3.007h-1.663l1.746 4.906v3.113zm6.98 0v-1.428h-2.524v-1.91h1.286v-1.427h-1.286v-1.829h2.524V61.88h-4.115v8.02zm3.62-2.265H47l.554-3.113h.023zm2.005 2.264-1.675-8.02h-1.594L45.03 69.9h1.58l.166-.979h1.474l.164.98zm2.702-4.588v-2.029h.483a.92.92 0 0 1 .932.991.966.966 0 0 1-.931 1.038zm3.249 4.588-1.424-3.62a2.22 2.22 0 0 0 1.18-2.065 2.22 2.22 0 0 0-2.418-2.335h-2.181v8.02h1.594v-3.267h.341l1.178 3.267zm3.03-3.043c.439.319.625.543.625.932a.733.733 0 0 1-.684.778.79.79 0 0 1-.79-.85v-.318h-1.494v.424a2.15 2.15 0 0 0 2.264 2.171 2.22 2.22 0 0 0 2.335-2.29 2.37 2.37 0 0 0-1.16-1.931l-1.084-.826c-.519-.401-.743-.567-.743-1.097a.622.622 0 0 1 .66-.65.763.763 0 0 1 .732.838v.33h1.497v-.282a2.085 2.085 0 0 0-2.195-2.3 2.16 2.16 0 0 0-2.282 2.23 2.33 2.33 0 0 0 1.155 2.005zM47.845 87.191c-.369-.226-.007-.566.336-.566.393.04.762.208 1.049.48 0 0-.951.35-1.385.087m-5.112 4.784c-1.271.34-.934-2.451.68-4.682a10.1 10.1 0 0 1 2.936-2.954c-.278 3.319-2.26 7.273-3.616 7.64m7.925-9.017a4.15 4.15 0 0 0-3.002.19 4.2 4.2 0 0 0-.142-1.857l-1.192.334c.107.703.133 1.415.08 2.123a13 13 0 0 0-5.758 6.805c-.627 2.195 1.122 2.94 2.595 1.86 3.633-2.668 4.372-8.738 4.372-8.738a2.59 2.59 0 0 1 2.479.286c1.287 1.11-.383 2.81-.383 2.81a1.95 1.95 0 0 0-1.245-.577c-1.302-.117-1.963 1.447-.236 1.615.457.008.911-.068 1.34-.224.29.535.201 3.013-1.47 3.746-1.502.658-2.06-.263-2.06-.263a4.6 4.6 0 0 0-.762 1.096 2.22 2.22 0 0 0 2.54.678 3.9 3.9 0 0 0 2.391-2.459 3.57 3.57 0 0 0-.064-3.03c2.283-1.598 1.952-3.767.52-4.387"
    />
  </svg>
);

const WarrantySection: React.FC<WarrantySectionProps> = ({ 
  className, 
  watchmakerImageSrc = 'https://www.breitling.com/api/image-proxy/images.ctfassets.net/11yu5j5b14kx/3rrRnE9obmKCRP7swwyof8/1cd310cba4a3204c55e46a3072613725/_CAM1889_V2.jpg',
  watchmakerImageAlt = 'Breitling Watchmaker at work',
  warrantyBadgeSrc,
  useInlineSvg = true,
  productWarrantyDuration,
  productWarrantyExtensionDuration,
}) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <div className={styles.content}>
        {/* Left Column - Warranty Information */}
        <div className={styles.leftColumn}>
          <h2 className={styles.title}>WARRANTY</h2>
          
          <div className={styles.warrantyRow}>
                    
            <p className={styles.warrantyTextRow}>
              Whether it's a chronograph or Breitling watch, we've got you covered 
              on all your needs. Find all the details under our terms and conditions – 
              Breitling International Warranty and Warranty Period.
            </p>
            {/* Conditional rendering based on preference */}
            {useInlineSvg ? (
              <BreitlingWarrantyBadge className={styles.warrantyBadgeImage} />
            ) : warrantyBadgeSrc ? (
              <img 
                src={warrantyBadgeSrc} 
                alt="Breitling International Warranty Badge" 
                className={styles.warrantyBadgeImage}
              />
            ) : (
              /* Fallback to inline SVG if no source provided */
              <BreitlingWarrantyBadge className={styles.warrantyBadgeImage} />
            )}
            
            {/*
              Alternative approaches:
              
              Method 1: Import as React Component (best for reusable custom SVGs)
              Step 1: Save your SVG file as 'breitling-warranty-badge.svg'
              Step 2: Uncomment the import at the top
              Step 3: Use like this:
              <WarrantyBadge className={styles.warrantyBadgeImage} />
              
              Method 2: External SVG file via img tag
              <img 
                src="/path/to/your/warranty-badge.svg" 
                alt="Breitling International Warranty Badge" 
                className={styles.warrantyBadgeImage}
              />
              
              Method 3: Inline SVG (shown above - good for customization)
            */}
    
          </div>

           <div className={styles.warrantyTextRow}>
              <p className={styles.warrantyTextRowTitle}>Warranty Duration (Years): {productWarrantyDuration}</p>
              <p>Visit Breitling's Terms and Conditions for warranty details.</p>
            </div>
          
          <div className={styles.extendedWarranty}>
            <h3 className={styles.extendedTitle}>
              <span className={styles.plusYears}>+{productWarrantyExtensionDuration} YEARS</span>
              <span className={styles.subtitle}>OTHER BREITLING MOVEMENTS</span>
            </h3>
            
            <p className={styles.extendedDescription}>
              You can extend the warranty the current warranty on your 
              Breitling watch by an additional 2 years from the date of 
              purchase, or even 3 years for watches equipped with a 
              mechanical manufacture movement.
            </p>
            
            <button className={styles.extendButton}>
              EXTEND MY WARRANTY
              <span className={styles.arrow}>→</span>
            </button>
          </div>
        </div>
        
        {/* Center Column - Image */}
        <div className={styles.centerColumn}>
          <div className={styles.imageContainer}>
            <img 
              src={watchmakerImageSrc} 
              alt={watchmakerImageAlt}
              className={styles.watchmakerImage}
            />
          </div>
        </div>
        
        {/* Right Column - Care Information */}
        <div className={styles.rightColumn}>
          <h3 className={styles.careTitle}>CARING FOR YOUR BREITLING WATCH</h3>
          
          <p className={styles.careDescription}>
            A Breitling watch lasts a lifetime. It adapts to any lifestyle. It also 
            needs a bit of care from time to time. Ensure your Breitling 
            performs at its peak performance by treating it to our 
            #BreitlingCare services. Explore our comprehensive set of services 
            and assistance designed for you and your Breitling.
          </p>
          
          <button className={styles.careButton}>
            EXPLORE #BREITLINGCARE
            <span className={styles.arrow}>→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WarrantySection;