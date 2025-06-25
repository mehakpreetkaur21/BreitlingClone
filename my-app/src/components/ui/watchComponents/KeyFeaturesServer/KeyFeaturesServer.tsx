// components/Features/KeyFeaturesServer.tsx
import { Suspense } from 'react';
import styles from './KeyFeatures.module.css';
import KeyFeaturesClient from './KeyFeaturesClient';

export interface FeatureItem {
  icon: string;
  label: string;
  value: string;
}

export async function getFeatureData(product: any): Promise<FeatureItem[]> {
  return [
    {
      icon: 'https://www.breitling.com/_next/static/images/caseMaterial.svg',
      label: 'Case Material',
      value: product.caseMaterial?.values?.[0]?.name || 'N/A',
    },
    {
      icon: 'https://www.breitling.com/_next/static/images/waterResistance.svg',
      label: 'Water Resistance',
      value: product.waterResistance?.values?.[0]?.name || 'N/A',
    },
    {
      icon: 'https://www.breitling.com/_next/static/images/diameter.svg',
      label: 'Diameter',
      value: product.diameter?.values?.[0]?.name || 'N/A',
    },
    {
      icon: 'https://www.breitling.com/_next/static/images/thickness.svg',
      label: 'Thickness',
      value: product.thickness?.values?.[0]?.name || 'N/A',
    },
    {
      icon: 'https://www.breitling.com/_next/static/images/weight.svg',
      label: 'Weight (without Strap)',
      value: product.weight?.values?.[0]?.name || 'N/A',
    },
    {
      icon: 'https://www.breitling.com/_next/static/images/powerReserve.svg',
      label: 'Power Reserve',
      value: product.powerReserve?.values?.[0]?.name || 'N/A',
    },
  ];
}

interface KeyFeaturesServerProps {
  product: any;
}

export default async function KeyFeaturesServer({product}: KeyFeaturesServerProps) {
  const features = await getFeatureData(product);

  return (
    <section className={styles.keyFeatures}>
      <div className={styles.header}>
        <h2>
          <span className={styles.highlight}>KEY</span> FEATURES
        </h2>
        <div className={styles.manual}>
          <span className={styles.swissMade}>SWISS MADE</span>
          <a href="#" className={styles.downloadLink}>
            ⬇️ DOWNLOAD THE USER MANUAL
          </a>
        </div>
      </div>

      <div className={styles.featureGrid}>
        {features.map((item, idx) => (
          <div key={idx} className={styles.featureItem}>
            <div className={styles.iconCircle}>
              <img src={item.icon} alt={item.label} />
            </div>
            <div className={styles.label}>{item.label}</div>
            <div className={styles.value}>{item.value}</div>
          </div>
        ))}
      </div>

      {/* Optional Client Hook if needed */}
      <Suspense fallback={null}>
        <KeyFeaturesClient />
      </Suspense>
    </section>
  );
}