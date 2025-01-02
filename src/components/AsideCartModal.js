"use client";
import Modal from "./Modal";
import { IoBagSharp } from "react-icons/io5";

function AsideCartModal() {
  return (
    <Modal>
      <Modal.Open opens="cart">
        <IoBagSharp className="text-white text-xl " />
      </Modal.Open>
      <Modal.AsideWindow name="cart">
        <div>
          <h1 className="text-gray-800 text-2xl font-medium">Cart</h1>
        </div>
      </Modal.AsideWindow>
    </Modal>
  );
}

export default AsideCartModal;
