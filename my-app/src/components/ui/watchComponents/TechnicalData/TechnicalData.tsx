import React from 'react';
import styles from './TechnicalData.module.css';

interface TechnicalDataProps {
  className?: string;
  product: any; // you can replace `any` with a more specific type if desired
}

const TechnicalData: React.FC<TechnicalDataProps> = ({ className, product }) => {

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
            <div className={styles.value}>{product.caliber.values[0].name}</div>
          </div>
          
          <div className={styles.spec}>
            <div className={styles.label}>Movement</div>
            <div className={styles.value}>{product.movement.values[0].name}</div>
          </div>
          
          <div className={styles.spec}>
            <div className={styles.label}>Power Reserve</div>
            <div className={styles.value}>{product.powerReserve.values[0].name}</div>
          </div>
          
          <div className={styles.spec}>
            <div className={styles.label}>Chronograph</div>
            <div className={styles.value}>{product.chronograph.values[0].name}</div>
          </div>
          
          <div className={styles.spec}>
            <div className={styles.label}>Vibration</div>
            <div className={styles.value}>{product.vibration.values[0].name}</div>
          </div>
        </div>

        {/* Case Column */}
        <div className={styles.column}>
          <h3 className={styles.columnTitle}>CASE</h3>
          
          <div className={styles.spec}>
            <div className={styles.label}>Case Material</div>
            <div className={styles.value}>{product.caseMaterial.values[0].name}</div>
          </div>
          
          <div className={styles.spec}>
            <div className={styles.label}>Caseback</div>
            <div className={styles.value}>{product.caseback.values[0].name}</div>
          </div>
          
          <div className={styles.spec}>
            <div className={styles.label}>Water Resistance</div>
            <div className={styles.value}>
              {product.waterResistance.values[0].name} <span className={styles.icon}>🔒</span>
            </div>
          </div>
          
          <div className={styles.spec}>
            <div className={styles.label}>Bezel</div>
            <div className={styles.value}>{product.bezel.values[0].name}</div>
          </div>
          
          <div className={styles.spec}>
            <div className={styles.label}>Crown</div>
            <div className={styles.value}>{product.crown.values[0].name}</div>
          </div>
          
          <div className={styles.spec}>
            <div className={styles.label}>Crystal</div>
            <div className={styles.value}>{product.crystal.values[0].name}</div>
          </div>
        </div>

        {/* Dimensions Column */}
        <div className={styles.column}>
          <h3 className={styles.columnTitle}>DIMENSIONS</h3>
          
          <div className={styles.spec}>
            <div className={styles.label}>Product Weight (Approx.)</div>
            <div className={styles.value}>{product.weight.values[0].name}</div>
          </div>
          
          <div className={styles.spec}>
            <div className={styles.label}>Watch Head Weight (Approx.)</div>
            <div className={styles.value}>{product.headWeight.values[0].name}</div>
          </div>
          
          <div className={styles.spec}>
            <div className={styles.label}>Diameter</div>
            <div className={styles.value}>{product.diameter.values[0].name} mm</div>
          </div>
          
          <div className={styles.spec}>
            <div className={styles.label}>Thickness</div>
            <div className={styles.value}>{product.thickness.values[0].name} mm</div>
          </div>
          
          <div className={styles.spec}>
            <div className={styles.label}>Height (upper lug tip to lower lug tip)</div>
            <div className={styles.value}>{product.height.values[0].name} mm</div>
          </div>
          
          <div className={styles.spec}>
            <div className={styles.label}>Lug Width (in-between lugs)</div>
            <div className={styles.value}>{product.lugWidth.values[0].name}</div>
          </div>
        </div>

        {/* Strap Column */}
        <div className={styles.column}>
          <h3 className={styles.columnTitle}>STRAP</h3>
          
          <div className={styles.spec}>
            <div className={styles.label}>Strap Material</div>
            <div className={styles.value}>{product.strapMaterial.values[0].name}</div>
          </div>
          
          <div className={styles.spec}>
            <div className={styles.label}>Strap Colour</div>
            <div className={styles.value}>{product.strapColor.values[0].name}</div>
          </div>
          
          <div className={styles.spec}>
            <div className={styles.label}>Strap Type</div>
            <div className={styles.value}>{product.strapType.values[0].name}t</div>
          </div>
          
          <div className={styles.spec}>
            <div className={styles.label}>Lug</div>
            <div className={styles.value}>{product.lug.values[0].name}</div>
          </div>
          
          <div className={styles.spec}>
            <div className={styles.label}>Buckle Material</div>
            <div className={styles.value}>{product.buckleMaterial.values[0].name}</div>
          </div>
          
          <div className={styles.spec}>
            <div className={styles.label}>Buckle Type</div>
            <div className={styles.value}>{product.buckleType.values[0].name}</div>
          </div>
          
          <div className={styles.spec}>
            <div className={styles.label}>Buckle Size</div>
            <div className={styles.value}>{product.buckleSize.values[0].name}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalData;