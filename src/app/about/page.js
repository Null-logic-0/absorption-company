import Image from "next/image";
import aboutimg1 from "../../../public/about-1.jpg";
import aboutimg2 from "../../../public/about-2.jpg";

export const metadata = {
  title: "About us",
};

function AboutPage() {
  return (
    <div>
      <div className="flex justify-center gap-8 items-center border-b border-black">
        <div className="w-1/2">
          <Image
            src={aboutimg1}
            alt="about-img"
            className="object-cover border-r border-black"
            quality={80}
            placeholder="blur"
          />
        </div>

        <div className="w-1/2">
          <h1 className="font-bold  text-black text-[70px] max-w-[500px] w-full leading-tight max-sm:text-[30px]">
            Welcome to The Absorption Company.
          </h1>
        </div>
      </div>
      <div className="flex justify-center max-md:flex-wrap gap-8 items-center border-b-2 border-black">
        <div className="w-1/2">
          <h2 className="font-bold  text-black text-[70px] max-w-[500px] w-full leading-tight max-sm:text-[30px] p-14 ">
            Mission
          </h2>
        </div>
        <div className="w-1/2 bg-[#fce80d] border-l-2 border-black max-md:w-full max-md:border-t-2">
          <p className="text-[28px] text-black font-bold p-14 max-sm:text-[18px]">
            Our mission is simple: we want to empower you to choose how you feel
            and give you solutions that actually work. We&apos;re here to
            deliver the kind of supplement you expected all along, and we know
            your bodies are ready for it.
          </p>
        </div>
      </div>
      <div className="flex justify-center gap-8 items-center border-b-2 border-black">
        <div className="w-1/2">
          <h2 className="font-bold  text-black text-[70px]  w-full leading-tight max-md:text-[30px] max-sm:text-[20px] p-14 ">
            Meet the Team
          </h2>
        </div>
        <div className="w-1/2 ">
          <Image
            src={aboutimg2}
            alt="about-img"
            className="object-cover border-l-2 border-black max-md:border-none"
            quality={80}
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
