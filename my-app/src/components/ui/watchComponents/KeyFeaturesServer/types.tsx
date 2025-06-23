// types/product.ts

export interface BreadcrumbItem {

  name: string;

  href: string;

}



export interface Product {

  id: string;

  name: string;

  price: number;

  currency: string;

  vatIncluded: Boolean;

  images: string[];

  breadcrumb: BreadcrumbItem[];

  description?: string;

  specifications?: Record<string, string>;

  availability?: 'in-stock' | 'out-of-stock' | 'limited';

}



export interface ColorOption {

  id: string;

  name: string;

  color: string;

  available: Boolean;

}



export interface ProductVariant {

  id: string;

  colorId: string;

  size?: string;

  price: number;

  images: string[];

  availability: 'in-stock' | 'out-of-stock' | 'limited';

}