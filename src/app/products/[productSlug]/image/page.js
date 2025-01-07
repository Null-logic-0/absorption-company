import { getProducts, getSingleProduct } from "@/_lib/data-service";
import ModalImage from "@/components/ModalImage";
import Image from "next/image";

export async function generateMetadata({ params }) {
  const { productSlug } = await params;
  const { title } = await getSingleProduct(productSlug);

  return { title: `Product image ${title}` };
}

export async function generateStaticParams() {
  const products = await getProducts();
  const ids = products.map((product) => ({ productSlug: String(product.id) }));

  return ids;
}

async function ModalImagePage({ params }) {
  const { productSlug } = await params;
  const product = await getSingleProduct(productSlug);
  return (
    <>
      <ModalImage />
      <dialog className="mt-10" open>
        <div className="relative h-[600px] w-[500px]">
          <Image
            src={product.image}
            alt="image"
            className="object-contain w-full"
            fill
          />
        </div>
      </dialog>
    </>
  );
}

export default ModalImagePage;
