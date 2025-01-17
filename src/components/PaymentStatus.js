import Link from "next/link";
import { FaRegCircleCheck } from "react-icons/fa6";
import LinkButton from "./LinkButton";

function PaymentStatus() {
  return (
    <div className="flex justify-center items-center">
      <div
        className="my-20 bg-white rounded-xl 
      shadow-lg w-[768px] px-10 py-20"
      >
        <div className="flex flex-col justify-center items-center gap-y-6 ">
          <FaRegCircleCheck className="w-20 h-20 text-green-500" />
          <p className="font-semibold text-2xl ">Order placed successfully!</p>
          <LinkButton href={"/"}>Continue Shopping</LinkButton>
        </div>
      </div>
    </div>
  );
}

export default PaymentStatus;
