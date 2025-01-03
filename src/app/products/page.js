import ProductBenefits from "@/components/ProductBenefits";
import ProductsList from "@/components/Products/ProductsList";
import Spinner from "@/components/Spinner";
import { Suspense } from "react";

function ProductsPage() {
  return (
    <div className="pt-[10px]">
      <h1 className="bg-black text-[52px] text-white p-8 text-left ">
        SHOP ALL
      </h1>
      <ProductBenefits />
      <Suspense fallback={<Spinner />}>
        <ProductsList />
      </Suspense>
    </div>
  );
}

export default ProductsPage;
