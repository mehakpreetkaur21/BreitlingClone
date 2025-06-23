// app/product/[id]/page.tsx
import Boutique from '@/components/ui/Boutique/Boutique';
import KeyFeaturesServer from '@/components/ui/WatchCollection/KeyFeaturesServer/KeyFeaturesServer';
import ProductDetailsServer, { getProductData } from '@/components/ui/WatchCollection/ProductDetails/ProductDetailsServer';
import StorySection from '@/components/ui/WatchCollection/StorySection/StorySection';
import TechnicalData from '@/components/ui/WatchCollection/TechnicalData/TechnicalData';
import WarrantySection from '@/components/ui/WatchCollection/WarrantySection/WarrantySection';
import { Metadata } from 'next';

interface ProductPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = await getProductData(params.id);

  return {
    title: `${product.name} - Breitling`,
    description: `${product.name} available for ${product.currency} ${product.price.toLocaleString()}`,
  };
}

export default function Page({ params }: ProductPageProps) {
  return (<div>
  <ProductDetailsServer id={params.id} />
  <KeyFeaturesServer/>
  <TechnicalData/>
  <StorySection/>
  <WarrantySection/>
  {/* <Boutique/> */}
  </div>)
  ;

}