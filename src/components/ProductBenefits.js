import { SiRainmeter } from "react-icons/si";
import { PiLeafBold } from "react-icons/pi";
import { SlChemistry } from "react-icons/sl";
import { MdDoNotDisturbAlt } from "react-icons/md";
function ProductBenefits() {
  return (
    <ul className="flex flex-wrap items-center justify-between px-14 border border-t-black border-b-black py-4">
      <li className="flex gap-[2px] items-center">
        <SiRainmeter className="text-xl" />
        <span>Absorption Technology</span>
      </li>
      <li className="flex gap-[2px] items-center">
        <PiLeafBold className="text-xl" />
        <span>Glyphosate Free</span>
      </li>
      <li className="flex gap-[2px] items-center">
        <SlChemistry className="text-xl" />
        <span>3rd Party Tested</span>
      </li>
      <li className="flex gap-[2px] items-center">
        <MdDoNotDisturbAlt className="text-xl" />
        <span>Gluten Free and Non-GMO</span>
      </li>
    </ul>
  );
}

export default ProductBenefits;
