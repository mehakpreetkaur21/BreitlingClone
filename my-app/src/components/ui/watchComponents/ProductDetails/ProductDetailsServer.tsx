// components/Product/ProductDetailsServer.tsx

import ProductDetailsClient from './ProductDetailsClient';
import './ProductDetails.css';
import { Breadcrumb } from '../../BreadCrumb/BreadCrumb';

interface ProductDetailsServerProps {
  product: any;
}

export default function ProductDetailsServer({ product }: ProductDetailsServerProps) {
  const collectionName = product.collections?.[0]?.name || '';
  const cleanProductName = product.name.toLowerCase().startsWith('classic avi')
    ? product.name.substring('classic avi'.length).trim()
    : product.name;

  return (
    <div className="product-page">
      <div className="container">
        <div className="product-layout">
          <div className="product-images">
            <ProductDetailsClient images={product.media} />
          </div>

          <div className="product-info">
            <div className='breadCrumbCnt'>
              <Breadcrumb
                items={[
                  { label: 'Home', href: '/' },
                  { label: 'Collections', href: '/collections' },
                ]}
              />
            </div>
            <div className="product-id">{product.slug}</div>
            <h1 className="product-title">
              <span className="title-classic">{collectionName}</span>{' '}
              <span className="title-main">{cleanProductName}</span>
            </h1>

            <div className="color-selector">
              <button className="color-option selected" aria-label="Brown leather strap">
                <div className="color-swatch brown"></div>
              </button>
              <span className="change-text">CHANGE ›</span>
            </div>

            <div className="action-buttons">
              <button className="btn btn-appointment">📅 BOOK AN APPOINTMENT</button>
              <button className="btn btn-availability">📧 AVAILABILITY REQUEST</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
