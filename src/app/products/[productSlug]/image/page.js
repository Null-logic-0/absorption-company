import { getSingleProduct } from "@/_lib/data-service";
import ModalImage from "@/components/ModalImage";
import Image from "next/image";

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
