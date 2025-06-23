// components/Product/ProductDetailsServer.tsx
import { Metadata } from 'next';
import ProductDetailsClient from './ProductDetailsClient';
import './ProductDetails.css'; 

export async function getProductData(id: string) {
  return {
    id: 'Y233801A1B1X1',
    name: 'CLASSIC AVI CHRONOGRAPH 42 MOSQUITO',
    price: 553700,
    currency: 'INR',
    vatIncluded: true,
    images: [
      'https://www.breitling.com/api/image-proxy/www-breitling.eu.saleor.cloud/media/thumbnails/products/y233801a1b1x1-soldier_b2be32df_thumbnail_1024.webp?imwidth=780&format=auto',
      'https://www.breitling.com/api/image-proxy/www-breitling.eu.saleor.cloud/media/thumbnails/products/y233801a1b1x1-three-quarter_937d4ebb_thumbnail_1024.webp?imwidth=780&format=auto',
      'https://www.breitling.com/api/image-proxy/www-breitling.eu.saleor.cloud/media/thumbnails/products/y233801a1b1x1-rolled-up_dc425225_thumbnail_1024.webp?imwidth=780&format=auto',
      'https://www.breitling.com/api/image-proxy/www-breitling.eu.saleor.cloud/media/thumbnails/products/y233801a1b1x1-back_e752fc46_thumbnail_1024.webp?imwidth=780&format=auto',
      'https://www.breitling.com/api/image-proxy/www-breitling.eu.saleor.cloud/media/thumbnails/products/y233801a1b1x1-on-wrist_4da8af73_thumbnail_1024.webp?imwidth=780&format=auto',
    ],
    breadcrumb: [
      { name: 'Home', href: '/' },
      { name: 'Watches', href: '/watches' },
      { name: 'Classic AVI', href: '/watches/classic-avi' },
    ]
  };
}

interface ProductPageProps {
  id: string;
}

export default async function ProductDetailsServer({ id }: ProductPageProps) {
  const product = await getProductData(id);

  return (
    <div className="product-page">
      <div className="container">
        <nav className="breadcrumb">
          {product.breadcrumb.map((item, index) => (
            <span key={item.name}>
              <a href={item.href} className="breadcrumb-link">
                {item.name}
              </a>
              {index < product.breadcrumb.length - 1 && (
                <span className="breadcrumb-separator">›</span>
              )}
            </span>
          ))}
        </nav>

        <div className="product-layout">
          <div className="product-images">
            <ProductDetailsClient images={product.images} />
          </div>

          <div className="product-info">
            <div className="product-id">{product.id}</div>
            <h1 className="product-title">
              <span className="title-classic">CLASSIC AVI</span>{' '}
              <span className="title-main">CHRONOGRAPH 42 MOSQUITO</span>
            </h1>

            <div className="price-section">
              <span className="price">
                {product.currency} {product.price.toLocaleString('en-IN')}
              </span>
              {product.vatIncluded && (
                <span className="vat-info">VAT Incl.</span>
              )}
            </div>

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