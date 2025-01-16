"use client";
import { useProductContext } from "../ProductsContext";
import { FaCartPlus } from "react-icons/fa";

function AddProductToCartButton({ product }) {
  const { addProductToCart } = useProductContext();

  function handleAddToCart() {
    console.log("Adding product to cart:", product);
    addProductToCart({
      ...product,
      quantity: 1,
    });
  }
  return (
    <button
      onClick={handleAddToCart}
      className="bg-white px-8 py-4 border border-black hover:bg-black
           hover:text-white font-[500] text-[20px] text-gray-800 rounded-md   text-center"
    >
      <FaCartPlus />
    </button>
  );
}

export default AddProductToCartButton;
