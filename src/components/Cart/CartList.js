"use client";
import { formatCurrency } from "@/_helpers/formatCurrency";
import { useProductContext } from "../ProductsContext";
import Cart from "./Cart";
import LinkButton from "../LinkButton";
import { useRouter } from "next/navigation";
import { createOrder } from "@/_lib/actions";

function CartList({ session }) {
  const { totalAmount, cartItems } = useProductContext();
  const productIds = cartItems.map((product) => product.id);
  const router = useRouter();

  function handleCheckout() {
    if (!session) {
      router.push("/account/login");
    } else {
      createOrder(productIds);
    }
  }
  return (
    <div className="flex flex-col gap-10 p-8">
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <Cart item={item} />
          </li>
        ))}
      </ul>
      {cartItems.length === 0 && (
        <div className="flex flex-col items-center justify-center gap-8 my-20">
          <h1 className="text-5xl font-bold">CART IS EMPTY</h1>
          <div>
            <LinkButton href={"/products"}>SHOP NOW</LinkButton>
          </div>
        </div>
      )}
      {cartItems.length > 0 && (
        <>
          <hr className="border border-black" />
          <div className="flex justify-between items-end">
            <div className="text-lg font-bold text-black flex  flex-col">
              <p>SUBTOTAL({cartItems.length} ITEMS)</p>
              <p>{formatCurrency(totalAmount)}</p>
            </div>

            <button
              className="bg-black px-8 py-4 border hover:border-black hover:bg-white
           text-white font-[500] text-[16px] hover:text-gray-800 rounded-md   text-center"
              onClick={handleCheckout}
            >
              {session ? "CHECKOUT" : "LOGIN"}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default CartList;
