"use client";
import { useProductContext } from "../ProductsContext";

function Counter({ item }) {
  const { decreaseQuantity, increaseQuantity } = useProductContext();
  return (
    <div className="flex gap-2 items-center border border-black px-4 rounded-sm w-20">
      <button
        className="font-semibold text-xl"
        onClick={() => {
          if (item.quantity > 1) {
            decreaseQuantity(item.id);
          }
        }}
        disabled={item.quantity === 1}
      >
        -
      </button>
      <span className="font-semibold text-lg">{item?.quantity}</span>
      <button
        className="font-semibold text-xl"
        onClick={() => increaseQuantity(item.id)}
      >
        +
      </button>
    </div>
  );
}

export default Counter;
