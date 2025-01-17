"use client";
import Image from "next/image";
import test from "../../../public/camu-camu.jpg";
import Counter from "./Counter";
import { MdDeleteForever } from "react-icons/md";
import { formatCurrency } from "@/_helpers/formatCurrency";
import { useProductContext } from "../ProductsContext";

function Cart({ item }) {
  const { removeProductFromCart } = useProductContext();
  function handleRemoveItem() {
    removeProductFromCart(item.id);
  }

  return (
    <div className="flex items-end justify-between w-full p-4">
      <div className="flex items-start gap-4">
        <Image
          src={item.image}
          alt="product"
          width={100}
          height={100}
          quality={80}
          loading="lazy"
          className="shadow-md object-contain"
        />
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
          <Counter item={item} />
          <p className="font-semibold">
            {formatCurrency(Number(item.price * item.quantity))}
          </p>
        </div>
      </div>

      <button
        onClick={handleRemoveItem}
        className="bg-black px-4 py-2 border hover:border-black hover:bg-white
           text-white font-[500] text-[14px] hover:text-gray-800 rounded-md   text-center"
      >
        REMOVE
      </button>
    </div>
  );
}

export default Cart;
