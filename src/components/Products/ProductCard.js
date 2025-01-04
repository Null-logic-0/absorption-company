import { formatCurrency } from "@/_helpers/formatCurrency";
import { textSlicer } from "@/_helpers/textSlicer";
import Image from "next/image";
import LinkButton from "../LinkButton";

function ProductCard({ data }) {
  const { image, title, description, price, discount, id } = data;
  const totalPrice = price - discount;
  return (
    <div className="flex flex-col border-2 border-black h-[500px] max-w-[400px] w-full ">
      {discount !== 0 && (
        <span className="absolute  bg-[#4557ff] border border-gray-800 z-10 p-2 text-white text-[12px] font-medium">
          Discount -{formatCurrency(discount)}
        </span>
      )}
      <div className="flex-1 relative bg-white">
        <Image
          src={image}
          alt={`Product ${title}`}
          fill
          quality={80}
          loading="lazy"
          className="object-contain"
        />
      </div>
      <div className="flex flex-col gap-8 border border-t-black p-4 ">
        <h3 className="text-[24px] font-semibold text-black ">{title}</h3>

        {discount ? (
          <div className="text-black text-[18px] font-semibold flex gap-1 items-center">
            <span className="text-gray-800 opacity-70 italic line-through">
              {formatCurrency(price)}
            </span>
            <span>{formatCurrency(totalPrice)}</span>
          </div>
        ) : (
          <p className="text-black text-[18px] font-semibold">
            {formatCurrency(price)}
          </p>
        )}
        <p className="text-sm text-gray-800 font-normal opacity-70 italic">
          {textSlicer(description)}...
        </p>
        <LinkButton href={`/products/${id}`}>SHOP NOW</LinkButton>
      </div>
    </div>
  );
}

export default ProductCard;
