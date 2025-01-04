import { getSingleProduct } from "@/_lib/data-service";
import GobackButton from "@/components/GobackButton";
import Product from "@/components/Products/Product";

async function ProductPage({ params }) {
  const { productSlug } = await params;
  const product = await getSingleProduct(productSlug);

  return (
    <div>
      <div className="px-8 pt-8 ">
        <GobackButton />
      </div>
      <Product data={product} />
    </div>
  );
}

export default ProductPage;
