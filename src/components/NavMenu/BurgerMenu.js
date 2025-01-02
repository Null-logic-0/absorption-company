"use client";
import Modal from "../Modal";
import NavLinks from "./NavLinks";
import { RxHamburgerMenu } from "react-icons/rx";

function BurgerMenu() {
  return (
    <Modal>
      <Modal.Open opens="burgerMenu">
        <RxHamburgerMenu className="text-white text-xl " />
      </Modal.Open>
      <Modal.AsideWindowMenu name="burgerMenu">
        <ul className="flex flex-col justify-center items-center  gap-8">
          <li>
            <NavLinks href="/">Home</NavLinks>
          </li>
          <li>
            <NavLinks href="/products">Shop</NavLinks>
          </li>
          <li>
            <NavLinks href="/about">About us</NavLinks>
          </li>
          <li>
            <NavLinks href="/account">Account</NavLinks>
          </li>
        </ul>
      </Modal.AsideWindowMenu>
    </Modal>
  );
}

export default BurgerMenu;
