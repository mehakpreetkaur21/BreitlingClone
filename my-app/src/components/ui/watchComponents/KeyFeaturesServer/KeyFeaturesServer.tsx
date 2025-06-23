// components/Features/KeyFeaturesServer.tsx
import { Suspense } from 'react';
import styles from './KeyFeatures.module.css';
import KeyFeaturesClient from './KeyFeaturesClient';

export interface FeatureItem {
  icon: string;
  label: string;
  value: string;
}

export async function getFeatureData(): Promise<FeatureItem[]> {
  // Normally, you'd fetch from a CMS or DB
  return [
    {
      icon: 'https://www.breitling.com/_next/static/images/caseMaterial.svg',
      label: 'Case Material',
      value: 'Stainless steel',
    },
    {
      icon: 'https://www.breitling.com/_next/static/images/waterResistance.svg',
      label: 'Water Resistance',
      value: '10 bars',
    },
    {
      icon: 'https://www.breitling.com/_next/static/images/diameter.svg',
      label: 'Diameter',
      value: '42 mm',
    },
    {
      icon: 'https://www.breitling.com/_next/static/images/thickness.svg',
      label: 'Thickness',
      value: '14.7 mm',
    },
    {
      icon: 'https://www.breitling.com/_next/static/images/weight.svg',
      label: 'Weight (without Strap)',
      value: '108 g',
    },
    {
      icon: 'https://www.breitling.com/_next/static/images/powerReserve.svg',
      label: 'Power Reserve',
      value: 'Approx. 48 hrs',
    },
  ];
}

export default async function KeyFeaturesServer() {
  const features = await getFeatureData();

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