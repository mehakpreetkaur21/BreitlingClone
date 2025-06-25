import { Breadcrumb } from '@/components/ui/BreadCrumb/BreadCrumb'
import React from 'react'
import './index.css';
import WatchCard from '@/components/ui/WatchCard/WatchCard';

// Server-side data fetching
async function getWatches() {
  // Replace with your actual API URL
  const apiUrl = 'https://www.breitling.com/api/products/?languageCode=EN_GB&skus=Y233801A1B1X1%2CSB04451A1B1X1%2CR233801A1B1X1%2CAB09451A1B1X1%2CA233803A1B1X1%2CA233802A1L1X1%2CA233801A1C1A1%2CAB04453A1B1A1%2CAB04451A1C1A1%2CYB04451A1B1X1%2CRB04451A1B1X1%2CAB04452A1L1X1%2CRB0920131B1X1%2CLB0920131C1X1%2CAB0920131B1X1';
  
  const res = await fetch(apiUrl, {
    cache: 'force-cache', // or 'no-store' for always fresh data
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch watches');
  }
  
  const response = await res.json();
  
  // Handle your API response structure
  if (response.success && response.data?.products?.edges) {
    return response.data.products.edges;
  }
  
  return [];
}

function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default async function page({ params }: { params: Promise<{ category: string }> }) {
  const { category: categorySlug } = await params;
  const watches = await getWatches();

  return (
    <div className='mainCnt'>
      <div className='breadCrumbCnt'>
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Collections', href: '/collections' },
            { label: capitalizeFirstLetter(categorySlug), href: `/collections/${categorySlug}` },
          ]}
        />
      </div>
      <div className='headingCnt'>
        <h1 className='headingCntheading'>{categorySlug}</h1>
        <p className='headingCntParagraph'>Power in Action--The Modern Performance Aviation Watch</p>
      </div>
      <div className='lengthCntCntr'>
        <p className='lengthCnt'>{watches.length} watches</p>
      </div>
      <div className='watchCardCntr'>
        <WatchCard watches={watches} />
      </div>
    </div>
  )
}