"use client";
import { formatCurrency } from "@/_helpers/formatCurrency";
import Image from "next/image";
import TextSlicer from "../TextSlicer";
import Link from "next/link";
import AddProductToCartButton from "./AddProductToCartButton";

function Product({ product }) {
  const { image, title, price, discount, description, id } = product;
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
          quality={100}
          priority={true}
          sizes="(max-width: 768px) 100vw, 33vw"
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
          <AddProductToCartButton product={product} />
        </div>
        <TextSlicer title="Description">{description}</TextSlicer>
      </div>
    </div>
  );
}

export default Product;
