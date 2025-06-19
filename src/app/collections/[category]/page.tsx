'use client';
import { Breadcrumb } from '@/components/ui/BreadCrumb/BreadCrumb';
import { useParams } from 'next/navigation';
import './index.css';
import WatchCollection from '@/components/ui/WatchCollection/WatchCollection';
export default function CategoryPage() {
  const params = useParams();
  const category = params?.category as string;

  return (
    <main className='categoryCnt'>
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Collections', href: '/collections' },
          { label: category.replace(/-/g, ' ') }, // convert 'classic-avi' → 'classic avi'
        ]}
      />

      <div className='highlightHeadingCnt'>
        <h1 className='highlightHeading'>{category.replace(/-/g, ' ')}</h1>
        <p>Power in Action - The Modern Performance Aviation Watch</p>
      </div>

        <div className='collectionCardCnt'>
          <WatchCollection />
        </div>
    </main>
  );
}
