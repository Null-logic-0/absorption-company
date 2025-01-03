"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const ProductsCarousel = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === data.length - 1 ? 0 : prevIndex + 1
      );
    }, 2500);

    return () => clearInterval(interval);
  }, [data.length]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {data.map((item) => (
          <div
            key={item.id}
            className="min-w-full flex justify-center items-center"
          >
            <div className="relative w-full h-[60vh]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                quality={100}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain"
                priority={currentIndex === item.id} // Optimize for visible image
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsCarousel;
