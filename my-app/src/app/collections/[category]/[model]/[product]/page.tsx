import Boutique from "@/components/ui/Boutique/Boutique";
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

export default async function Page({ params }: ProductPageProps) {
  const resolvedParams = await params;
  const productId = resolvedParams.product.split("/").pop();

  if (!productId) {
    throw new Error("Invalid product ID");
  }

  console.log(productId);

  return (
    <div>
      <ProductDetailsServer id={productId} />
      <KeyFeaturesServer />
      <TechnicalData />
      <StorySection />
      <WarrantySection />
      {/* <Boutique /> */}
    </div>
  );
}
