"use client";
import { useState } from "react";
import Review from "./Review";

function ReviewsList({ reviews }) {
  const [showAll, setShowAll] = useState(false);
  const slicedData = reviews.slice(0, 3);

  const reviewsToShow = showAll ? reviews : slicedData;

  const handleToggle = () => {
    setShowAll(!showAll);
  };

  const totalReviews = reviews.length;

  return (
    <>
      <h3 className="text-2xl font-semibold text-center">
        Reviews:
        <span className="text-lg font-medium italic">
          {totalReviews}/{totalReviews}
        </span>
      </h3>
      <ul className="flex flex-col gap-4">
        {reviewsToShow.map((review) => (
          <li key={review.id}>
            <Review
              data={{
                content: review.content,
                rating: review.rating,
                fullName: review.customer_id?.fullName,
              }}
            />
          </li>
        ))}
      </ul>
      <button onClick={handleToggle} className="text-gray-800 font-semibold">
        {showAll ? "show less" : "show more"}
      </button>
    </>
  );
}

export default ReviewsList;
