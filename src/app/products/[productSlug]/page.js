import { auth } from "@/_lib/auth";
import { getProducts, getReviews, getSingleProduct } from "@/_lib/data-service";
import GobackButton from "@/components/GobackButton";
import Product from "@/components/Products/Product";
import CreateReview from "@/components/Reviews/CreateReview";
import ReviewsList from "@/components/Reviews/ReviewsList";
import Spinner from "@/components/Spinner";
import { Suspense } from "react";

export async function generateMetadata({ params }) {
  const { productSlug } = await params;
  const { title } = await getSingleProduct(productSlug);

  return { title: `Product ${title}` };
}

export async function generateStaticParams() {
  const products = await getProducts();
  const ids = products.map((product) => ({ productSlug: String(product.id) }));

  return ids;
}

async function ProductPage({ params }) {
  const { productSlug } = await params;
  const product = await getSingleProduct(productSlug);
  const reviews = await getReviews();
  const session = await auth();

  return (
    <>
      <div className="px-8 pt-8 ">
        <GobackButton />
      </div>
      <Product data={product} />
      <hr className="border border-black" />
      <Suspense fallback={<Spinner />}>
        <ReviewsList reviews={reviews} />
      </Suspense>
      <hr className="border border-black" />
      {session && <CreateReview />}
    </>
  );
}

export default ProductPage;
