import React from 'react';
import styles from './TechnicalData.module.css';

interface TechnicalDataProps {
  className?: string;
}

const TechnicalData: React.FC<TechnicalDataProps> = ({ className }) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <h2 className={styles.title}>
        <span className={styles.titleHighlight}>TECHNICAL</span> DATA
      </h2>
      
      <div className={styles.grid}>
        {/* Movement Column */}
        <div className={styles.column}>
          <h3 className={styles.columnTitle}>MOVEMENT</h3>
          
          <div className={styles.spec}>
            <div className={styles.label}>Caliber</div>
            <div className={styles.value}>Breitling 23</div>
          </div>
          
          <div className={styles.spec}>
            <div className={styles.label}>Movement</div>
            <div className={styles.value}>Self-winding mechanical</div>
          </div>
          
          <div className={styles.spec}>
            <div className={styles.label}>Power Reserve</div>
            <div className={styles.value}>Approx. 48 hrs</div>
          </div>
          
          <div className={styles.spec}>
            <div className={styles.label}>Chronograph</div>
            <div className={styles.value}>1/4th second, 30 minutes, 12 hours</div>
          </div>
          
          <div className={styles.spec}>
            <div className={styles.label}>Vibration</div>
            <div className={styles.value}>28,800 v.p.h</div>
          </div>
        </div>

        {/* Case Column */}
        <div className={styles.column}>
          <h3 className={styles.columnTitle}>CASE</h3>
          
          <div className={styles.spec}>
            <div className={styles.label}>Case Material</div>
            <div className={styles.value}>Stainless steel</div>
          </div>
          
          <div className={styles.spec}>
            <div className={styles.label}>Caseback</div>
            <div className={styles.value}>Screwed in</div>
          </div>
          
          <div className={styles.spec}>
            <div className={styles.label}>Water Resistance</div>
            <div className={styles.value}>
              10 bars <span className={styles.icon}>🔒</span>
            </div>
          </div>
          
          <div className={styles.spec}>
            <div className={styles.label}>Bezel</div>
            <div className={styles.value}>Bidirectional ratcheted</div>
          </div>
          
          <div className={styles.spec}>
            <div className={styles.label}>Crown</div>
            <div className={styles.value}>Screw-locked, two gaskets</div>
          </div>
          
          <div className={styles.spec}>
            <div className={styles.label}>Crystal</div>
            <div className={styles.value}>Cambered sapphire, glareproofed both sides</div>
          </div>
        </div>

        {/* Dimensions Column */}
        <div className={styles.column}>
          <h3 className={styles.columnTitle}>DIMENSIONS</h3>
          
          <div className={styles.spec}>
            <div className={styles.label}>Product Weight (Approx.)</div>
            <div className={styles.value}>108 g</div>
          </div>
          
          <div className={styles.spec}>
            <div className={styles.label}>Watch Head Weight (Approx.)</div>
            <div className={styles.value}>85.5 g</div>
          </div>
          
          <div className={styles.spec}>
            <div className={styles.label}>Diameter</div>
            <div className={styles.value}>42 mm</div>
          </div>
          
          <div className={styles.spec}>
            <div className={styles.label}>Thickness</div>
            <div className={styles.value}>14.7 mm</div>
          </div>
          
          <div className={styles.spec}>
            <div className={styles.label}>Height (upper lug tip to lower lug tip)</div>
            <div className={styles.value}>48 mm</div>
          </div>
          
          <div className={styles.spec}>
            <div className={styles.label}>Lug Width (in-between lugs)</div>
            <div className={styles.value}>22 mm</div>
          </div>
        </div>

        {/* Strap Column */}
        <div className={styles.column}>
          <h3 className={styles.columnTitle}>STRAP</h3>
          
          <div className={styles.spec}>
            <div className={styles.label}>Strap Material</div>
            <div className={styles.value}>Calfskin leather</div>
          </div>
          
          <div className={styles.spec}>
            <div className={styles.label}>Strap Colour</div>
            <div className={styles.value}>Brown</div>
          </div>
          
          <div className={styles.spec}>
            <div className={styles.label}>Strap Type</div>
            <div className={styles.value}>Straight</div>
          </div>
          
          <div className={styles.spec}>
            <div className={styles.label}>Lug</div>
            <div className={styles.value}>22/18 mm</div>
          </div>
          
          <div className={styles.spec}>
            <div className={styles.label}>Buckle Material</div>
            <div className={styles.value}>Stainless steel</div>
          </div>
          
          <div className={styles.spec}>
            <div className={styles.label}>Buckle Type</div>
            <div className={styles.value}>Folding clasp</div>
          </div>
          
          <div className={styles.spec}>
            <div className={styles.label}>Buckle Size</div>
            <div className={styles.value}>18 mm</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalData;