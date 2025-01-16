"use client";
import Modal from "../Modal";
import { IoBagSharp } from "react-icons/io5";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Cart from "./Cart";
import { formatCurrency } from "@/_helpers/formatCurrency";
import { useProductContext } from "../ProductsContext";

function AsideCartModal({ session }) {
  const router = useRouter();

  function handleCheckout() {
    if (session) {
      router.push("/checkout");
    } else {
      router.push("/account/login");
    }
  }

  const { cartItems, totalAmount } = useProductContext();
  return (
    <Modal>
      <Modal.Open opens="cart">
        <div className="relative">
          {cartItems.length > 0 && (
            <span
              className="absolute -top-3 -right-3 w-5 h-5 rounded-full
           bg-red-500 text-white flex justify-center items-center text-xs font-semibold"
            >
              {cartItems.length}
            </span>
          )}

          <IoBagSharp className="text-white text-xl " />
        </div>
      </Modal.Open>
      <Modal.AsideWindow name="cart">
        <div className="flex flex-col gap-8 h-screen">
          <h1 className="text-gray-800 text-2xl font-semibold">CART</h1>
          <hr className="border border-black" />
          <div className="flex gap-4 flex-col justify-start items-center py-4 max-h-[400px] h-full overflow-scroll ">
            {cartItems.map((item) => (
              <Cart item={item} key={item.id} />
            ))}

            {cartItems.length === 0 && (
              <div className="flex flex-col gap-4">
                <p className="font-semibold text-xl">
                  Your cart is currently empty
                </p>
                <Link
                  href={"/products"}
                  className="bg-black text-white font-semibold text-xl p-4 border rounded-sm text-center
                hover:bg-white hover:border-black hover:text-black "
                >
                  Shop Now
                </Link>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-8 bg-black  left-0 px-4 py-8 fixed bottom-0 w-full">
            <div className="flex justify-between items-center text-white">
              <p className=" text-md font-semibold">
                SUBTOTAL ({cartItems.length} ITEMS)
              </p>
              <p className="text-md font-semibold">
                {formatCurrency(totalAmount)}
              </p>
            </div>
            <button
              className="border-2 transition-all
                px-4 py-2  w-full hover:border-white hover:text-white
                text-black hover:bg-transparent
                bg-white rounded-md text-xl font-bold mb-4"
              onClick={handleCheckout}
            >
              {session ? "CHECKOUT" : "LOGIN"}
            </button>
          </div>
        </div>
      </Modal.AsideWindow>
    </Modal>
  );
}

export default AsideCartModal;
