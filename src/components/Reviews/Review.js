"use client";
import { Rate } from "antd";
function Review({ data }) {
  const { fullName, content, rating } = data;
  return (
    <div className="px-8  w-full ">
      {rating > 0 && (
        <Rate className="text-[#4557ff]" value={rating} disabled />
      )}
      <h3 className="font-semibold text-xl">{fullName}</h3>
      <p className="text-gray-800 text-sm font-medium">{content}</p>
    </div>
  );
}

export default Review;
