"use client";
import { useRouter } from "next/navigation";

function ModalImage() {
  const router = useRouter();
  return (
    <>
      <div
        className="bg-gray-800 w-full fixed h-full top-0 "
        onClick={router.back}
      />
    </>
  );
}

export default ModalImage;
