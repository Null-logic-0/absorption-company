import Link from "next/link";

function LinkButton({ children, href }) {
  return (
    <Link
      href={href}
      className="bg-black px-8 py-4 border hover:border-black hover:bg-white
           text-white font-[500] text-[16px] hover:text-gray-800 rounded-md  w-full text-center"
    >
      {children}
    </Link>
  );
}

export default LinkButton;
