import { Breadcrumb } from '@/components/ui/BreadCrumb/BreadCrumb';

interface ProductPageProps {
  params: {
    category: string;
    model: string;
    productId: string;
  };
}

const ProductPage = ({ params }: ProductPageProps) => {
  const { category, model, productId } = params;

  return (
    <main className="productDetailCnt">
      

      <h1 className="productHeading">{model.replace(/-/g, ' ')}</h1>
      <p>Product ID: {productId}</p>

      {/* Later you can fetch and render full product details based on productId */}
    </main>
  );
};

export default ProductPage;
