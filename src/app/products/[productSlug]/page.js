import { getReviews, getSingleProduct } from "@/_lib/data-service";
import GobackButton from "@/components/GobackButton";
import Product from "@/components/Products/Product";
import CreateReview from "@/components/Reviews/CreateReview";
import ReviewsList from "@/components/Reviews/ReviewsList";

async function ProductPage({ params }) {
  const { productSlug } = await params;
  const product = await getSingleProduct(productSlug);
  const reviews = await getReviews();


  return (
    <>
      <div className="px-8 pt-8 ">
        <GobackButton />
      </div>
      <Product data={product} />
      <hr className="border border-black" />
      <ReviewsList reviews={reviews} />
      <hr className="border border-black" />
      <CreateReview />
    </>
  );
}

export default ProductPage;
