import Hero from "@/components/Hero/Hero";
import ProductsList from "@/components/Products/ProductsList";
import Spinner from "@/components/Spinner";
import { Suspense } from "react";

function page() {
  return (
    <>
      <Hero />
      <Suspense fallback={<Spinner />}>
        <ProductsList />
      </Suspense>
    </>
  );
}

export default page;
