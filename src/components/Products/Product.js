import { formatCurrency } from "@/_helpers/formatCurrency";
import Image from "next/image";
import TextSlicer from "../TextSlicer";
import Link from "next/link";

function Product({ data }) {
  const { image, title, price, discount, description, id } = data;
  const totalPrice = price - discount;
  return (
    <div className="px-8 py-4 flex w-full gap-8 justify-center max-md:flex-wrap">
      <Link
        href={`/products/${id}/image`}
        className="relative w-full h-[500px] bg-white border-black border-2 max-md:bg-transparent max-md:border-none"
      >
        <Image
          src={image}
          alt={`Product ${title}`}
          fill
          className="object-contain"
        />
      </Link>

      <div className="flex flex-col w-full gap-8">
        <h3 className="text-2xl font-bold max-md:text-center">{title}</h3>
        {discount ? (
          <div className="text-black text-[20px] font-semibold flex gap-1 items-center max-md:justify-center ">
            <span className="text-gray-800 opacity-70 italic line-through">
              {formatCurrency(price)}
            </span>
            <span>{formatCurrency(totalPrice)}</span>
          </div>
        ) : (
          <p className="text-black text-[20px] font-semibold max-md:text-center">
            {formatCurrency(price)}
          </p>
        )}
        <div className="max-md:flex max-md:justify-center ">
          <button
            className="border hover:border-black
         hover:bg-white hover:text-black bg-black text-white text-[20px] font-semibold px-4 py-2 rounded-md"
          >
            Add To Cart
          </button>
        </div>
        <TextSlicer title="Description">{description}</TextSlicer>
      </div>
    </div>
  );
}

export default Product;
