import GobackButton from "@/components/GobackButton";
import { IoCheckmarkDoneCircle } from "react-icons/io5";

function page() {
  return (
    <div className="flex justify-center items-center flex-col gap-8 border-2 border-black p-8 bg-white rounded-md shadow-xl">
      <h1 className="bg-black p-4 text-2xl font-bold text-white">
        The Absorption Company.
      </h1>
      <div className="text-xl font-semibold flex items-center gap-1">
        <IoCheckmarkDoneCircle className="text-3xl text-green-600" />
        Review Submited
      </div>
      <p className="text-gray-800 text-lg italic">Thank you for your review</p>
      <GobackButton />
    </div>
  );
}

export default page;
