"use client";
import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { FaRegCircleXmark } from "react-icons/fa6";
import { useOutSideClick } from "../hooks/useOutsideClick";

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);
  const ref = useOutSideClick(close);

  if (name !== openName) return null;

  return createPortal(
    <div className="fixed top-0 left-0 w-full h-screen bg-backdrop-color backdrop-blur-sm z-50 transition-all">
      <div
        ref={ref}
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#f7f6f2] border-2 border-black rounded-lg shadow-lg p-12 transition-all"
      >
        <button
          onClick={close}
          className="absolute top-4 right-6 bg-transparent border-none p-2 rounded-sm transform translate-x-3 transition-all hover:bg-grey-100"
        >
          <FaRegCircleXmark className="w-6 h-6 text-grey-500" />
        </button>
        <div>{cloneElement(children)}</div>
      </div>
    </div>,
    document.body
  );
}

function AsideWindow({ children, name }) {
  const { openName, close } = useContext(ModalContext);
  const ref = useOutSideClick(close);

  if (name !== openName) return null;

  return createPortal(
    <div className="fixed top-0 left-0 w-full h-screen bg-backdrop-color backdrop-blur-sm z-50 transition-all">
      <div
        ref={ref}
        className="fixed top-0 right-0 h-full max-w-[400px] w-full bg-[#f7f6f2] border-l-2 border-black 
        shadow-lg p-6 transition-transform transform duration-500 max-md:border-none"
      >
        <button
          onClick={close}
          className="absolute top-4 right-6 bg-transparent border-none p-2 rounded-sm transform translate-x-3 transition-all hover:bg-grey-100"
        >
          <FaRegCircleXmark className="w-6 h-6 text-grey-500" />
        </button>
        <div>{cloneElement(children)}</div>
      </div>
    </div>,
    document.body
  );
}
function AsideWindowMenu({ children, name }) {
  const { openName, close } = useContext(ModalContext);
  const ref = useOutSideClick(close);

  if (name !== openName) return null;

  return createPortal(
    <div className="fixed top-0 left-0  w-full h-screen z-50   bg-backdrop-color backdrop-blur-sm transition-all">
      <div
        ref={ref}
        className="fixed left-0 h-full w-[200px] bg-black 
        shadow-lg p-6 transition-transform transform duration-500"
      >
        {cloneElement(children)}
      </div>
    </div>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;
Modal.AsideWindow = AsideWindow;
Modal.AsideWindowMenu = AsideWindowMenu;

export default Modal;
