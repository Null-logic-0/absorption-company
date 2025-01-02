import Link from "next/link";

function NavLinks({ children, href }) {
  return (
    <Link className="text-white font-normal text-[14px]" href={href}>
      {children}
    </Link>
  );
}

export default NavLinks;
