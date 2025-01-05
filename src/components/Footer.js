import NavLinks from "./NavMenu/NavLinks";

function Footer() {
  return (
    <footer className="bg-black p-4 flex flex-col gap-8 w-full mt-8  bottom-0">
      <div className="flex flex-wrap justify-evenly items-center">
        <h1 className="text-xl text-white font-bold max-md:text-lg max-sm:text-sm">
          The <br /> Absorption
          <br /> company.
        </h1>
        <ul>
          <li>
            <NavLinks href="/">Home</NavLinks>
          </li>
          <li>
            <NavLinks href="/products">Shop</NavLinks>
          </li>
          <li>
            <NavLinks href="/about">About us</NavLinks>
          </li>
        </ul>
        <ul>
          <li>
            <NavLinks href="/contacts">Contact us</NavLinks>
          </li>
          <li>
            <NavLinks href="/faqs">FAQ</NavLinks>
          </li>
        </ul>
      </div>

      <span className="text-white text-center">© 2025, Absorption Co</span>
    </footer>
  );
}

export default Footer;
