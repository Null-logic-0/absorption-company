"use client";
import { useFormStatus } from "react-dom";
import SpinnerMini from "./SpinnerMini";

function FormSubmit({ children }) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-[#000000] px-10 py-4  rounded-md w-full text-white font-semibold text-lg hover:bg-[#ffff]
       hover:text-gray-800 hover:border-gray-800 border cursor-pointer shadow-lg transition-all "
    >
      {pending ? (
        <span className="flex justify-center">
          <SpinnerMini />
        </span>
      ) : (
        children
      )}
    </button>
  );
}

export default FormSubmit;
