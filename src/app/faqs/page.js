import Image from "next/image";
import img from "../../../public/faqs.jpg";
import TextSlicer from "@/components/TextSlicer";
import ProductBenefits from "@/components/ProductBenefits";

function page() {
  return (
    <div>
      <div className="flex justify-center gap-8 items-center border-b border-black ">
        <div className="w-1/2">
          <Image
            src={img}
            alt="FAQS-img"
            className="object-cover border-r border-black"
            quality={80}
            placeholder="blur"
          />
        </div>

        <div className="w-1/2">
          <h1 className="font-bold  text-black text-[70px]  max-md:text-[30px] ">
            FAQs
          </h1>
          <p className="font-semibold max-md:text-[14px] max-sm:hidden">
            You have questions and we have answers.
            <br /> Welcome to The Absorption Company FAQ page - where
            <br /> curiosity meets clarity.
          </p>
        </div>
      </div>
      <TextSlicer title="How often can I take this?">
        Each of our blends are designed to be taken when you need them, and
        optimized for daily use.
      </TextSlicer>
      <TextSlicer title="Can I combine this with my current supplement routine?">
        This varies with each of our products. We always suggest you consult
        your doctor and make sure you are not exceeding the recommended daily
        values of nutrients.
      </TextSlicer>
      <TextSlicer title="Is this safe to take while breastfeeding or pregnant?">
        When taking a supplement of any kind during pregnancy or breastfeeding,
        we recommend consulting a physician and showing them our nutritional
        labels to make the best decision for you.
      </TextSlicer>
      <TextSlicer title="Is this safe to take while breastfeeding or pregnant?">
        Our products are manufactured in a facility that is GMP and NSF
        certified.
      </TextSlicer>
      <TextSlicer title="Still have questions?">
        We have answers. Just email us at
        <a href="mailto:absorbmore@gmail.com">absorbmore@gmail.com</a>
      </TextSlicer>
    </div>
  );
}

export default page;
