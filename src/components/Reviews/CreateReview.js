"use client";
import { createReview } from "@/_lib/actions";
import { Rate } from "antd";
import { redirect } from "next/navigation";
import { useState } from "react";
import { MdSend } from "react-icons/md";

function CreateReview() {
  const [rating, setRating] = useState(0);

  const handleChange = (value) => setRating(value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append("rating", rating);
    await createReview(formData);
  };

  return (
    <form
      className="flex flex-col  gap-1 w-full max-w-[600px] px-8"
      onSubmit={handleSubmit}
    >
      <Rate
        className="text-[#4557ff]"
        id="rating"
        onChange={handleChange}
        value={rating}
      />
      <div className="flex gap-1 items-center w-full relative">
        <textarea
          name="review"
          id="review"
          placeholder="Write a review"
          className="resize-none border border-black rounded-md  p-1 mt-1 w-full"
        />
        <button
          type="submit"
          className=" absolute right-2 text-2xl  text-black rounded-md"
        >
          <MdSend />
        </button>
      </div>
    </form>
  );
}

export default CreateReview;
