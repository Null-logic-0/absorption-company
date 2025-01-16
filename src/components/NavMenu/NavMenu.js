import Link from "next/link";
import NavLinks from "./NavLinks";
import { FaUser } from "react-icons/fa";
import AsideCartModal from "../Cart/AsideCartModal";
import BurgerMenu from "./BurgerMenu";
import { auth } from "@/_lib/auth";

async function NavMenu() {
  const session = await auth();
  return (
    <div className="flex bg-black justify-between items-center pl-8 max-md:py-2 max-sm:pl-4">
      <Link
        href="/"
        className="text-2xl text-white font-bold max-md:text-lg max-sm:text-sm"
      >
        <h1>The Absorption company.</h1>
      </Link>

      <ul className="flex items-center justify-center">
        <li className="border-x-2 border-white px-8 py-4 max-md:hidden">
          <NavLinks href="/products">Shop</NavLinks>
        </li>
        <li className="border-r-2 px-8 py-4 border-white max-md:hidden">
          <NavLinks href="/about">About us</NavLinks>
        </li>
        <li className="md:hidden ">
          <BurgerMenu />
        </li>
        <li className="px-4 max-md:px-2 cursor-pointer">
          <AsideCartModal session={session} />
        </li>
        <li className="border-l-2 border-white px-8 py-4 max-md:hidden">
          <NavLinks href="/account">
            <FaUser className="text-xl" />
          </NavLinks>
        </li>
      </ul>
    </div>
  );
}

export default NavMenu;
