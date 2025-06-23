import { Breadcrumb } from '@/components/ui/BreadCrumb/BreadCrumb'
import React from 'react'
import './index.css'
import Image from 'next/image'
import Link from 'next/link';

const data = [
  {
    id: 1,
    name: 'Classic AVI',
    image: 'https://www.breitling.com/api/image-proxy/images.ctfassets.net/11yu5j5b14kx/LgWeopRnOcREuDYh7mVIP/5cdf135ac999111d4ed32a9e74ffd311/Classic_avi.png?imwidth=640&format=auto',
    category: 'classic avi'
  },
  {
    id: 2,
    name: 'Navitimer',
    image: 'https://www.breitling.com/api/image-proxy/images.ctfassets.net/11yu5j5b14kx/2n7vMYbPpLZQqTw4Qml2ib/f393ea70e19060a1660df50d19e0c5a9/navitimer.png?imwidth=640&format=auto',
    category: 'navitimer'
  },
  {
    id: 3,
    name: 'Avenger',
    image: 'https://www.breitling.com/api/image-proxy/images.ctfassets.net/11yu5j5b14kx/3eNimZWVctpXWto3GLd5nG/b22c6813d0e01c1a11ddc4218f1f02f9/AB0146101L1X1.png?imwidth=640&format=auto',
    category: 'avenger'
  },
  {
    id: 4,
    name: 'Premier',
    image: 'https://www.breitling.com/api/image-proxy/images.ctfassets.net/11yu5j5b14kx/4P8voXAFro4uUrbGZchy5k/8758255a666cced60b53668a979fe096/AB2510201K1P1.png?imwidth=640&format=auto',
    category: 'premier'
  },
  {
    id: 5,
    name: 'Top Time',
    image: 'https://www.breitling.com/api/image-proxy/images.ctfassets.net/11yu5j5b14kx/6Y4mJlVG2GGl4ucLVDblX7/cfef9b869e8f014d684529204f98328b/AB3113A71C1A1.png?imwidth=640&format=auto',
    category: 'top time'
  },
  {
    id: 6,
    name: 'Chronomat',
    image: 'https://www.breitling.com/api/image-proxy/images.ctfassets.net/11yu5j5b14kx/6yvTLv5fz1smh3N9Hj6V8x/b3cd654a47241e566207bb93e362f6ef/AB0134101L1A1-.png?imwidth=640&format=auto',
    category: 'chronomat'
  },
  {
    id: 7,
    name: 'Superocean Heritage',
    image: 'https://www.breitling.com/api/image-proxy/images.ctfassets.net/11yu5j5b14kx/3C061r2amJAuEDrDuXdyMK/af319aa5e66e47e5c7d7e158982ff68a/SOH-1.jpg?imwidth=640&format=auto',
    category: 'superocean heritage'
  },
  {
    id: 8,
    name: 'Superocean',
    image: 'https://www.breitling.com/api/image-proxy/images.ctfassets.net/11yu5j5b14kx/60uZpryfXxo2y5O1KHK9qa/a5415002c11591568d8d792893499c14/A17375211B1A1.png?imwidth=640&format=auto',
    category: 'superocean'
  },
  {
    id: 9,
    name: 'Professional',
    image: 'https://www.breitling.com/api/image-proxy/images.ctfassets.net/11yu5j5b14kx/r44tXO4kAy6T6pN8YjYGk/60060e7c6548c4ef88b50af76e19c971/endurance.png?imwidth=640&format=auto',
    category: 'professional'
  }
];


export function WatchCatalog() {
  return (
    <div className='watchCatalogCnt'>
      <div className='watchCatalogHeaderCnt'>
        <h1 className='watchCatalogHeader'><span className='highlightText'>the{" "}</span>collections</h1>
      </div>
      <div className='watchCatalogBody'>
        {
          data.map((item)=>(
            <div className='itemCnt' key={item.id}>
              <Link href={`/collections/${item.category}`}>
               <div className='imageCnt'><Image alt={item.name} width={160} height={220} src={item.image}/></div>
              <div className='titleCnt'>{item.name}</div></Link>
            </div>
          ))
        }
      </div>
    </div>
  )
}

function page() {
  return (
    <div className='mainCnt'>
      <div className="innerCnt">
        <div>
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Collections', href: '/collections' },
            ]}
          />
        </div>
        <div>
          <WatchCatalog />
        </div>
      </div>
    </div>
  )
}

export default page