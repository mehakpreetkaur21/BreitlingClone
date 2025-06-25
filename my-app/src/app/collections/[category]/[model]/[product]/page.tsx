// app/collections/[category]/[model]/[product]/page.tsx

import KeyFeaturesServer from "@/components/ui/watchComponents/KeyFeaturesServer/KeyFeaturesServer";
import ProductDetailsServer from "@/components/ui/watchComponents/ProductDetails/ProductDetailsServer";
import StorySection from "@/components/ui/watchComponents/StorySection/StorySection";
import TechnicalData from "@/components/ui/watchComponents/TechnicalData/TechnicalData";
import WarrantySection from "@/components/ui/watchComponents/WarrantySection/WarrantySection";
import "./index.css";

interface ProductPageProps {
  params: Promise<{
    category: string;
    model: string;
    product: string;
  }>;
}

async function getWatchData(id: string) {
  const apiUrl = `https://www.breitling.com/api/products/?languageCode=EN_GB&skus=${id}`;
  const res = await fetch(apiUrl, {
    cache: 'force-cache',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch watch data');
  }

  const response = await res.json();
  if (response.success && response.data?.products?.edges?.length > 0) {
    return response.data.products.edges[0].node;
  }

  return null;
}

export default async function Page({ params }: ProductPageProps) {
  const resolvedParams = await params;
  const productId = resolvedParams.product.split("/").pop();

  if (!productId) {
    throw new Error("Invalid product ID");
  }

  const product = await getWatchData(productId);

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div>
      <ProductDetailsServer product={product} />
      <KeyFeaturesServer product={product}/>
      <TechnicalData product={product}/>
      <StorySection productStory={product.modelStory}/>
      <WarrantySection productWarrantyDuration={product.warrantyDuration.values[0].name} productWarrantyExtensionDuration={product.warrantyExtensionDuration.values[0].name}/>
      {/* <Boutique /> */}
    </div>
  );
}
