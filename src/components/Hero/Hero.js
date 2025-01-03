import ProductsCarousel from "./ProductsCarousel";
import { getProducts } from "@/_lib/data-service";
import LinkButton from "../LinkButton";
import ProductBenefits from "../ProductBenefits";

async function Hero() {
  const productsData = await getProducts();

  return (
    <div>
      <div className="flex  justify-center gap-14 items-center py-8 px-4  border-b-black border w-full flex-wrap">
        <div className="flex flex-col gap-8 ">
          <h1 className="font-bold  text-black text-[50px] max-w-[500px] w-full leading-tight max-sm:text-[30px]">
            84% of most supplements aren&apos;t absorbed.
          </h1>
          <p className="font-medium text-[20px] text-gray-800 max-w-[520px] w-full max-sm:text-[18px]">
            That means they don&apos;t work as well as they should. By <br />
            combining cutting edge technology with nutrients in their
            <br /> most bioavailable form, we&apos;ve created highly absorbable
            <br />
            supplements that actually work.
          </p>
          <div>
            <LinkButton href="/products">SHOP ALL</LinkButton>
          </div>
        </div>

        <div className="max-w-[500px] w-full flex justify-center border-2 border-black bg-white">
          <ProductsCarousel data={productsData} />
        </div>
      </div>
      <p className="text-center font-medium text-[36px] text-black px-14 py-4 min-md:text-[24px] max-sm:text-[18px]">
        If your supplements aren&apos;t being absorbed, they&apos;re wasted.
      </p>
      <ProductBenefits />
    </div>
  );
}

export default Hero;
