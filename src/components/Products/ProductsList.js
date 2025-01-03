import { getProducts } from "@/_lib/data-service";
import ProductCard from "./ProductCard";

async function ProductsList() {
  const products = await getProducts();
  return (
    <ul className="flex justify-center gap-8 items-center flex-wrap p-8">
      {products.map((product) => (
        <li key={product.id}>
          <ProductCard data={product} />
        </li>
      ))}
    </ul>
  );
}

export default ProductsList;
